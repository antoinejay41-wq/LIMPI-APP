export type ScreenId =
  | 'welcome'
  | 'forgot-password'
  | 'how-it-works'
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
  | 'help';

export type PlanType = '1-clean' | '2-clean';

export interface PlanDetails {
  id: PlanType;
  title: string;
  name: string;
  cleansPerMonth: number;
  priceQuarterly: number; // e.g. 79.95 or 99.95
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
  currentCycleMonth: number;
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
