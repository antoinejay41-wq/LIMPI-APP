export type ScreenId =
  | 'welcome'
  | 'forgot-password'
  | 'how-it-works'
  | 'about'
  | 'plan'
  | 'address'
  | 'pick-day'
  | 'checkout'
  | 'confirmation'
  | 'home'
  | 'notifications'
  | 'schedule'
  | 'visit-detail'
  | 'account'
  | 'payment-method'
  | 'edit-address'
  | 'help'
  | 'giveaway-rules';

export type PlanType = 'single' | 'annual';

export interface PlanDetails {
  id: PlanType;
  title: string;
  name: string;
  price: number; // 19.99 or 239.99
  billingPeriod: string;
  binsIncluded: number;
  description: string;
}

export interface AddressInfo {
  street: string;
  unit?: string;
  city: string;
  state: string;
  zipCode: string;
  gateCode?: string;
  binLocation: string;
  isValidLehigh: boolean;
}

export interface BookingState {
  planType: PlanType;
  totalBins: number;
  extraBinsCost: number;
  extraServicesCount: number;
  extraServicesCost: number;
  freeVisitsRemaining: number;
  selectedDay: string;
  timeWindow: string;
  address: AddressInfo;
  user: {
    fullName: string;
    email: string;
    phone: string;
    avatarUrl?: string;
  };
  agreeTerms: boolean;
  orderId?: string;
  firstCleaningDate?: string;
  nextCleaningDate?: string;
  currentCycleMonth?: number; // e.g. 2 of 12
  annualEndDate?: string;
  isBonusVisitBooking?: boolean;
}

export interface CleaningVisit {
  id: string;
  date: string;
  dayName: string;
  monthShort: string;
  dayNumber: string;
  timeWindow: string;
  binCount: number;
  status: 'upcoming' | 'completed' | 'paused';
  statusLabel: string;
  serviceFeatures: string[];
  completedTime?: string;
}
