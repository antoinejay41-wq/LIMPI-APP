import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Trash2,
  CheckCircle2,
  Gift,
} from 'lucide-react';
import { ScreenHeader } from '../ScreenHeader';
import { BookingState } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { translateDateString } from '../../i18n/dateUtils';

interface HomeScreenProps {
  booking: BookingState;
  onNavigateToSchedule: () => void;
  onNavigateToAccount: () => void;
  onNavigateToNotifications: () => void;
  onNavigateToPayment?: () => void;
  onNavigateToAddress: () => void;
  onOpenAvatar?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  booking,
  onNavigateToSchedule,
  onNavigateToAccount,
  onNavigateToNotifications,
  onNavigateToAddress,
  onOpenAvatar,
}) => {
  const { t, language } = useLanguage();
  const rawDate = booking.nextCleaningDate || `${booking.selectedDay || 'Tuesday'}, Oct 24`;
  const nextDate = translateDateString(rawDate, language);

  const freeVisits = booking.freeVisitsRemaining ?? 5;
  const isAnnual = booking.planType === 'annual';

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-24">
      <ScreenHeader
        showBack={false}
        showProfile={true}
        onProfileClick={onOpenAvatar || onNavigateToAccount}
        avatarUrl={booking.user.avatarUrl}
        userName={booking.user.fullName}
        showNotification={true}
        onNotificationClick={onNavigateToNotifications}
      />

      <main className="flex-1 px-5 pt-3 max-w-md mx-auto w-full flex flex-col gap-4">
        {/* Address Pill & Freshness Active Shield */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onNavigateToAddress}
            className="flex items-center gap-1.5 bg-white border border-[#04264A]/8 px-3 py-1.5 rounded-full shadow-2xs hover:bg-slate-50 active:scale-95 transition-all cursor-pointer text-left"
          >
            <MapPin className="w-3.5 h-3.5 text-[#0BA89A]" />
            <span className="text-xs text-[#04264A] font-bold tracking-tight">
              {booking.address.street || '1244 Lee Blvd'}
            </span>
          </button>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#E6F6F4] rounded-full border border-[#0BA89A]/20">
            <span className="w-2 h-2 rounded-full bg-[#0BA89A] animate-pulse" />
            <span className="text-[11px] text-[#006A61] uppercase tracking-wider font-extrabold">
              {t.activeShield}
            </span>
          </div>
        </div>

        {/* Next Cleaning Hero Card */}
        <div
          onClick={onNavigateToSchedule}
          className="bg-[#E6F6F4]/75 border border-[#0BA89A]/25 rounded-3xl p-5 shadow-[0_4px_24px_rgba(4,38,74,0.06)] flex flex-col gap-4 relative overflow-hidden cursor-pointer hover:border-[#0BA89A]/40 transition-all active:scale-[0.99]"
        >
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#0BA89A] text-white text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-xs flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {t.yourNextCleaning}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNavigateToSchedule();
              }}
              className="text-xs text-[#0BA89A] bg-white px-3 py-1 rounded-full font-bold shadow-2xs hover:bg-[#E6F6F4] transition-colors flex items-center gap-1"
            >
              <span>{t.manage}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-black text-[#04264A] tracking-tight">
              {nextDate}
            </h2>
            <p className="text-xs text-[#04264A]/70 flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-[#0BA89A]" />
              {booking.timeWindow || t.morningWindow}
            </p>
          </div>

          {/* Included Services Note: Only the two services! */}
          <div className="bg-white/90 rounded-2xl p-3.5 border border-[#04264A]/5 flex items-start gap-2.5">
            <Trash2 className="w-4 h-4 text-[#0BA89A] shrink-0 mt-0.5" />
            <div className="flex flex-col text-[11px] text-[#04264A]/80 leading-relaxed">
              <span className="font-bold text-[#04264A]">{t.twoServicesIncluded}</span>
              <span>{t.service1Desc}</span>
              <span>{t.service2Desc}</span>
            </div>
          </div>

          {/* Plan Status Line */}
          <div className="flex items-center justify-between pt-1 text-xs text-[#04264A]/70 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0BA89A] shrink-0" />
              <span>
                {isAnnual
                  ? 'Annual Plan • 12 visits/yr'
                  : 'Single Visit • No commitment'}
              </span>
            </div>
            <span className="text-[11px] font-bold text-[#0BA89A]">
              {booking.totalBins} {booking.totalBins === 1 ? t.oneBin : t.twoBins}
            </span>
          </div>
        </div>

        {/* ANNUAL MEMBERS: SMALL CARD "Free visits left: 5" */}
        {isAnnual ? (
          <div
            onClick={onNavigateToSchedule}
            className="bg-white rounded-3xl p-4 border border-[#0BA89A]/20 shadow-xs flex items-center justify-between cursor-pointer hover:border-[#0BA89A]/40 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#E6F6F4] text-[#0BA89A] flex items-center justify-center shrink-0">
                <Gift className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-extrabold text-[#04264A]">
                    {t.freeVisitsLeft}: {freeVisits}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#0BA89A]/15 text-[#006A61] text-[10px] font-black uppercase">
                    Annual Perk
                  </span>
                </div>
                <span className="text-[11px] text-[#04264A]/60">
                  Tap to schedule a bonus cleaning visit anytime
                </span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#0BA89A]" />
          </div>
        ) : (
          /* SINGLE VISIT USERS CARD: Book another visit & Switch to Annual */
          <div className="bg-white rounded-3xl p-4.5 border border-[#04264A]/8 shadow-xs flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E6F6F4] text-[#0BA89A] flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#04264A]">
                    Single Visit Service
                  </h4>
                  <p className="text-[11px] text-[#04264A]/60">
                    No commitment • $19.99 per visit
                  </p>
                </div>
              </div>
              <span className="text-xs font-black text-[#0BA89A] bg-[#E6F6F4] px-2.5 py-1 rounded-full">
                $19.99
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={onNavigateToSchedule}
                className="py-2.5 rounded-xl bg-[#0BA89A] text-white font-bold text-xs shadow-xs hover:bg-[#099185] cursor-pointer"
              >
                {t.bookAnotherVisitBtn}
              </button>
              <button
                type="button"
                onClick={onNavigateToAccount}
                className="py-2.5 rounded-xl bg-[#E6F6F4] text-[#006A61] font-bold text-xs border border-[#0BA89A]/20 hover:bg-[#d8f2ee] cursor-pointer flex items-center justify-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-[#0BA89A]" />
                <span>{t.switchToAnnualPlanBtn}</span>
              </button>
            </div>
          </div>
        )}

        {/* 100% Sparkle Guarantee Stamp */}
        <div className="flex items-center justify-center gap-2 text-center text-[#04264A]/60 py-3 mt-auto">
          <CheckCircle2 className="w-4 h-4 text-[#0BA89A]" />
          <span className="text-xs font-semibold">
            {t.sparkleGuaranteeTitle} • Lehigh Acres Standard
          </span>
        </div>
      </main>
    </div>
  );
};
