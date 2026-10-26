/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenId, PlanType, BookingState } from './types';
import { WelcomeScreen } from './components/screens/WelcomeScreen';
import { ForgotPasswordScreen } from './components/screens/ForgotPasswordScreen';
import { HowLimpiWorksScreen } from './components/screens/HowLimpiWorksScreen';
import { PlanScreen } from './components/screens/PlanScreen';
import { AddressScreen } from './components/screens/AddressScreen';
import { PickDayScreen } from './components/screens/PickDayScreen';
import { CheckoutScreen } from './components/screens/CheckoutScreen';
import { ConfirmationScreen } from './components/screens/ConfirmationScreen';
import { HomeScreen } from './components/screens/HomeScreen';
import { NotificationsScreen } from './components/screens/NotificationsScreen';
import { ScheduleScreen } from './components/screens/ScheduleScreen';
import { VisitDetailScreen } from './components/screens/VisitDetailScreen';
import { AccountScreen } from './components/screens/AccountScreen';
import { PaymentMethodScreen } from './components/screens/PaymentMethodScreen';
import { EditAddressScreen } from './components/screens/EditAddressScreen';
import { HelpScreen } from './components/screens/HelpScreen';
import { BottomNav } from './components/BottomNav';
import { AvatarUploadModal } from './components/AvatarUploadModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('welcome');
  const [planOrigin, setPlanOrigin] = useState<'signup' | 'account'>('signup');
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  // Central application state
  const [booking, setBooking] = useState<BookingState>(() => {
    const savedAvatar =
      typeof window !== 'undefined'
        ? localStorage.getItem('limpi_user_avatar') || undefined
        : undefined;

    return {
      planType: '1-clean',
      totalBins: 2,
      extraBinsCost: 0,
      selectedDay: 'Tuesday',
      timeWindow: 'Morning Window (7:30 AM - 11:30 AM)',
      address: {
        street: '1244 Lee Blvd',
        city: 'Lehigh Acres',
        state: 'FL',
        zipCode: '33936',
        gateCode: '#8841',
        binLocation: 'Curbside / End of Driveway',
        isValidLehigh: true,
      },
      user: {
        fullName: 'Sarah Jenkins',
        email: 'sarah@example.com',
        phone: '(239) 555-0192',
        avatarUrl: savedAvatar,
      },
      agreeTerms: true,
      orderId: 'LM-89240',
      firstCleaningDate: 'Tuesday, Oct 24',
      nextCleaningDate: 'Tuesday, Oct 24',
      currentCycleMonth: 2,
    };
  });

  const handleUpdateAvatar = (avatarUrl: string | undefined) => {
    setBooking((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        avatarUrl,
      },
    }));
    if (avatarUrl) {
      localStorage.setItem('limpi_user_avatar', avatarUrl);
    } else {
      localStorage.removeItem('limpi_user_avatar');
    }
  };

  // State update handlers
  const handleUpdatePlan = (plan: PlanType) => {
    setBooking((prev) => ({
      ...prev,
      planType: plan,
    }));
  };

  const handleUpdateBins = (bins: number) => {
    const extra = Math.max(0, bins - 2);
    setBooking((prev) => ({
      ...prev,
      totalBins: bins,
      extraBinsCost: extra * 15,
    }));
  };

  const handleUpdateAddress = (addr: typeof booking.address) => {
    setBooking((prev) => ({
      ...prev,
      address: addr,
    }));
  };

  const handleUpdateDay = (day: string) => {
    setBooking((prev) => ({
      ...prev,
      selectedDay: day,
      firstCleaningDate: `${day}, Oct 24`,
      nextCleaningDate: `${day}, Oct 24`,
    }));
  };

  const handleUpdateWindow = (win: string) => {
    setBooking((prev) => ({
      ...prev,
      timeWindow: win,
    }));
  };

  const handleAgreeTerms = (agreed: boolean) => {
    setBooking((prev) => ({
      ...prev,
      agreeTerms: agreed,
    }));
  };

  const handleCreateAccount = (userData?: { name: string; email: string; phone: string }) => {
    if (userData) {
      setBooking((prev) => ({
        ...prev,
        user: {
          fullName: userData.name || prev.user.fullName,
          email: userData.email || prev.user.email,
          phone: userData.phone || prev.user.phone,
        },
      }));
    }
    setPlanOrigin('signup');
    setCurrentScreen('how-it-works');
  };

  const handleSignIn = () => {
    setCurrentScreen('home');
  };

  const handleOpenPlanFromAccount = () => {
    setPlanOrigin('account');
    setCurrentScreen('plan');
  };

  // Bottom navigation visibility: appears ONLY on Home, Schedule, and Account
  const showBottomNav =
    currentScreen === 'home' ||
    currentScreen === 'schedule' ||
    currentScreen === 'account';

  return (
    <div className="min-h-screen bg-[#F0F5F4] flex flex-col items-center justify-start md:py-6 selection:bg-[#E6F6F4] selection:text-[#006A61]">
      {/* Mobile Smartphone Container */}
      <div className="w-full max-w-md bg-white min-h-screen md:min-h-[844px] md:rounded-[40px] shadow-[0_12px_44px_rgba(4,38,74,0.12)] md:border-[8px] md:border-[#04264A]/10 relative overflow-x-hidden flex flex-col">
        {/* iOS Dynamic Island notch on desktop preview */}
        <div className="hidden md:flex justify-center pt-2 pb-1 bg-white select-none">
          <div className="w-24 h-4 bg-[#04264A]/15 rounded-full" />
        </div>

        {/* Screen Routing */}
        <div className="flex-1 flex flex-col w-full">
          {/* 1. WELCOME */}
          {currentScreen === 'welcome' && (
            <WelcomeScreen
              onCreateAccount={handleCreateAccount}
              onSignIn={handleSignIn}
              onForgotPassword={() => setCurrentScreen('forgot-password')}
            />
          )}

          {/* 1b. FORGOT PASSWORD */}
          {currentScreen === 'forgot-password' && (
            <ForgotPasswordScreen onBack={() => setCurrentScreen('welcome')} />
          )}

          {/* 2. HOW LIMPI WORKS AND PRICING */}
          {currentScreen === 'how-it-works' && (
            <HowLimpiWorksScreen
              onBack={() => setCurrentScreen('welcome')}
              onContinue={() => {
                setPlanOrigin('signup');
                setCurrentScreen('plan');
              }}
            />
          )}

          {/* 3. PLAN */}
          {currentScreen === 'plan' && (
            <PlanScreen
              selectedPlan={booking.planType}
              onSelectPlan={handleUpdatePlan}
              totalBins={booking.totalBins}
              onChangeBins={handleUpdateBins}
              onBack={() => {
                if (planOrigin === 'account') {
                  setCurrentScreen('account');
                } else {
                  setCurrentScreen('how-it-works');
                }
              }}
              onContinue={() => {
                if (planOrigin === 'account') {
                  setCurrentScreen('account');
                } else {
                  setCurrentScreen('address');
                }
              }}
            />
          )}

          {/* 4. ADDRESS */}
          {currentScreen === 'address' && (
            <AddressScreen
              address={booking.address}
              onUpdateAddress={handleUpdateAddress}
              onBack={() => setCurrentScreen('plan')}
              onContinue={() => setCurrentScreen('pick-day')}
            />
          )}

          {/* 5. PICK YOUR DAY */}
          {currentScreen === 'pick-day' && (
            <PickDayScreen
              planType={booking.planType}
              selectedDay={booking.selectedDay}
              onSelectDay={handleUpdateDay}
              selectedWindow={booking.timeWindow}
              onSelectWindow={handleUpdateWindow}
              onBack={() => setCurrentScreen('address')}
              onContinue={() => setCurrentScreen('checkout')}
            />
          )}

          {/* 6. CHECKOUT */}
          {currentScreen === 'checkout' && (
            <CheckoutScreen
              booking={booking}
              onAgreeTermsChange={handleAgreeTerms}
              onBack={() => setCurrentScreen('pick-day')}
              onCompleteCheckout={() => setCurrentScreen('confirmation')}
            />
          )}

          {/* 7. CONFIRMATION */}
          {currentScreen === 'confirmation' && (
            <ConfirmationScreen
              booking={booking}
              onGoHome={() => setCurrentScreen('home')}
              onViewSchedule={() => setCurrentScreen('schedule')}
            />
          )}

          {/* 8. HOME */}
          {currentScreen === 'home' && (
            <HomeScreen
              booking={booking}
              onNavigateToSchedule={() => setCurrentScreen('schedule')}
              onNavigateToAccount={() => setCurrentScreen('account')}
              onNavigateToNotifications={() => setCurrentScreen('notifications')}
              onNavigateToPayment={() => setCurrentScreen('payment-method')}
              onNavigateToAddress={() => setCurrentScreen('edit-address')}
              onOpenAvatar={() => setIsAvatarModalOpen(true)}
            />
          )}

          {/* 8b. NOTIFICATIONS */}
          {currentScreen === 'notifications' && (
            <NotificationsScreen onBack={() => setCurrentScreen('home')} />
          )}

          {/* 9. SCHEDULE */}
          {currentScreen === 'schedule' && (
            <ScheduleScreen
              booking={booking}
              onNavigateToAccount={() => setCurrentScreen('account')}
              onManageVisit={() => setCurrentScreen('visit-detail')}
              onOpenAvatar={() => setIsAvatarModalOpen(true)}
            />
          )}

          {/* 9b. VISIT DETAIL */}
          {currentScreen === 'visit-detail' && (
            <VisitDetailScreen
              booking={booking}
              onBack={() => setCurrentScreen('schedule')}
              onRescheduled={(newDay) => {
                handleUpdateDay(newDay);
              }}
            />
          )}

          {/* 10. ACCOUNT */}
          {currentScreen === 'account' && (
            <AccountScreen
              booking={booking}
              onOpenPlan={handleOpenPlanFromAccount}
              onOpenPayment={() => setCurrentScreen('payment-method')}
              onOpenAddress={() => setCurrentScreen('edit-address')}
              onOpenHelp={() => setCurrentScreen('help')}
              onLogOut={() => setCurrentScreen('welcome')}
              onOpenAvatar={() => setIsAvatarModalOpen(true)}
            />
          )}

          {/* 10b. PAYMENT METHOD */}
          {currentScreen === 'payment-method' && (
            <PaymentMethodScreen onBack={() => setCurrentScreen('account')} />
          )}

          {/* 10c. EDIT ADDRESS */}
          {currentScreen === 'edit-address' && (
            <EditAddressScreen
              address={booking.address}
              onUpdateAddress={handleUpdateAddress}
              onBack={() => setCurrentScreen('account')}
            />
          )}

          {/* 10d. HELP */}
          {currentScreen === 'help' && (
            <HelpScreen onBack={() => setCurrentScreen('account')} />
          )}
        </div>

        {/* Bottom Navigation: appears ONLY on Home, Schedule, and Account */}
        {showBottomNav && (
          <BottomNav
            currentScreen={currentScreen}
            onNavigate={(screen) => setCurrentScreen(screen)}
          />
        )}

        {/* Global Profile Picture & Avatar Upload Modal */}
        <AvatarUploadModal
          isOpen={isAvatarModalOpen}
          onClose={() => setIsAvatarModalOpen(false)}
          currentAvatar={booking.user.avatarUrl}
          userName={booking.user.fullName}
          onSaveAvatar={handleUpdateAvatar}
        />
      </div>
    </div>
  );
}
