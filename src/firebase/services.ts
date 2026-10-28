import {
  doc,
  setDoc,
  getDoc,
  collection,
  onSnapshot,
  Unsubscribe,
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from './config';
import { BookingState } from '../types';

export interface FirebaseUserProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  createdAt: string;
}

export interface FirebaseSubscriptionData {
  id: string;
  userId: string;
  planType: 'single' | 'annual';
  totalBins: number;
  extraBinsCost: number;
  extraServicesCount?: number;
  extraServicesCost?: number;
  freeVisitsRemaining?: number;
  totalPrice: number;
  status: 'active' | 'paused' | 'canceled';
  selectedDay: string;
  timeWindow: string;
  address: {
    street: string;
    unit?: string;
    city: string;
    state: string;
    zipCode: string;
    gateCode?: string;
    binLocation: string;
    isValidLehigh: boolean;
  };
  currentCycleMonth?: number;
  nextCleaningDate: string;
  orderId: string;
  createdAt: string;
}

// Save or update user profile
export async function saveUserProfile(user: FirebaseUserProfile): Promise<void> {
  const path = `users/${user.id}`;
  try {
    await setDoc(doc(db, 'users', user.id), user, { merge: true });
  } catch (err) {
    handleFirestoreError(err, OperationType.WRITE, path);
  }
}

// Fetch user profile
export async function getUserProfile(userId: string): Promise<FirebaseUserProfile | null> {
  const path = `users/${userId}`;
  try {
    const snap = await getDoc(doc(db, 'users', userId));
    return snap.exists() ? (snap.data() as FirebaseUserProfile) : null;
  } catch (err) {
    handleFirestoreError(err, OperationType.GET, path);
  }
}

// Save or update user subscription
export async function saveUserSubscription(
  userId: string,
  subscription: FirebaseSubscriptionData
): Promise<void> {
  const path = `users/${userId}/subscriptions/${subscription.id}`;
  try {
    await setDoc(doc(db, 'users', userId, 'subscriptions', subscription.id), subscription, {
      merge: true,
    });
  } catch (err) {
    handleFirestoreError(err, OperationType.WRITE, path);
  }
}

// Listen to user's subscriptions in real time
export function subscribeToUserSubscriptions(
  userId: string,
  onUpdate: (subscriptions: FirebaseSubscriptionData[]) => void
): Unsubscribe {
  const path = `users/${userId}/subscriptions`;
  return onSnapshot(
    collection(db, 'users', userId, 'subscriptions'),
    (snapshot) => {
      const subs = snapshot.docs.map((d) => d.data() as FirebaseSubscriptionData);
      onUpdate(subs);
    },
    (err) => {
      handleFirestoreError(err, OperationType.GET, path);
    }
  );
}

// Convert local BookingState to Firebase subscription model
export function bookingToSubscription(
  userId: string,
  booking: BookingState
): FirebaseSubscriptionData {
  const basePrice = booking.planType === 'single' ? 19.99 : 239.99;
  const extraCost = booking.extraBinsCost || 0;
  const extraServices = booking.extraServicesCost || 0;
  const totalPrice = Number((basePrice + extraCost + extraServices).toFixed(2));
  return {
    id: booking.orderId || 'SUB-PRIMARY',
    userId,
    planType: booking.planType,
    totalBins: booking.totalBins,
    extraBinsCost: extraCost,
    extraServicesCount: booking.extraServicesCount || 0,
    extraServicesCost: extraServices,
    freeVisitsRemaining: booking.freeVisitsRemaining ?? (booking.planType === 'annual' ? 5 : 0),
    totalPrice,
    status: 'active',
    selectedDay: booking.selectedDay,
    timeWindow: booking.timeWindow,
    address: booking.address,
    currentCycleMonth: booking.currentCycleMonth || (booking.planType === 'annual' ? 2 : 1),
    nextCleaningDate: booking.nextCleaningDate || 'Tuesday, Oct 24',
    orderId: booking.orderId || 'LM-89240',
    createdAt: new Date().toISOString(),
  };
}
