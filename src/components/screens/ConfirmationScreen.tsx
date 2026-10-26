import React from 'react';
import { CheckCircle, Calendar, MapPin, Sparkles, ArrowRight, Trash2 } from 'lucide-react';
import { ScreenHeader } from '../ScreenHeader';
import { BookingState } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

import { translateDateString } from '../../i18n/dateUtils';

interface ConfirmationScreenProps {
  booking: BookingState;
  onGoHome: () => void;
  onViewSchedule: () => void;
}

export const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({
  booking,
  onGoHome,
  onViewSchedule,
}) => {
  const { t, language } = useLanguage();
  const rawCleanDate = booking.firstCleaningDate || `${booking.selectedDay || 'Tuesday'}, Oct 24`;
  const firstCleanDate = translateDateString(rawCleanDate, language);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-24">
      <ScreenHeader
        title={t.orderConfirmedTitle}
        avatarUrl={booking.user.avatarUrl}
        userName={booking.user.fullName}
      />

      <main className="flex-1 px-5 pt-4 max-w-md mx-auto w-full flex flex-col items-center text-center gap-5">
        {/* Animated Celebration Icon */}
        <div className="relative mt-2">
          <div className="w-20 h-20 rounded-full bg-[#E6F6F4] flex items-center justify-center text-[#0BA89A] shadow-[0_8px_24px_rgba(11,168,154,0.25)] mx-auto">
            <CheckCircle className="w-10 h-10 stroke-[2.4]" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#0BA89A] text-white flex items-center justify-center shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Headline & Subtitle */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs uppercase font-extrabold tracking-wider text-[#0BA89A]">
            {t.confirmationTag}
          </span>
          <h2 className="text-3xl font-extrabold text-[#04264A] tracking-tight">
            {t.youAreAllSet}
          </h2>
          <p className="text-sm text-[#04264A]/70 max-w-xs leading-relaxed">
            {t.confirmationSubtitle}
          </p>
        </div>

        {/* Order Receipt Box */}
        <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-[#04264A]/8 flex items-center justify-between text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6F6F4] flex items-center justify-center text-[#0BA89A] shrink-0 font-bold text-xs">
              LM
            </div>
            <div>
              <p className="text-xs font-bold text-[#04264A]">{t.orderNumberLabel}</p>
              <p className="text-[11px] text-[#04264A]/60">
                {t.receiptSentTo}: {booking.user.email || 'sarah@example.com'}
              </p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#E6F6F4] text-[#0BA89A] text-[11px] font-bold">
            {t.paidBadge}
          </span>
        </div>

        {/* First Cleaning Milestone Card */}
        <div className="w-full bg-[#E6F6F4]/70 border border-[#0BA89A]/20 rounded-2xl p-4.5 shadow-sm text-left flex flex-col gap-3">
          <div className="flex items-center justify-between pb-2.5 border-b border-[#04264A]/8">
            <span className="text-xs uppercase tracking-wider font-bold text-[#0BA89A]">
              {t.firstScheduledCleaning}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white text-[#04264A] text-[10px] font-bold shadow-2xs">
              Route #4B
            </span>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0BA89A] text-white flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold text-[#04264A]">
                {firstCleanDate}
              </span>
              <span className="text-xs text-[#04264A]/70">
                {booking.timeWindow}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-1 border-t border-[#04264A]/8">
            <div className="w-9 h-9 rounded-xl bg-white text-[#0BA89A] flex items-center justify-center shrink-0 shadow-2xs">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#04264A]">
                {booking.address.street}, {booking.address.city}, {booking.address.state} {booking.address.zipCode}
              </span>
              <span className="text-[11px] text-[#04264A]/65">
                {t.binLocationQuestion}: {booking.address.binLocation}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1 text-[11px] text-[#04264A]/70 font-medium">
            <Trash2 className="w-4 h-4 text-[#0BA89A]" />
            <span>
              {booking.totalBins} {booking.totalBins === 1 ? t.oneBin : t.twoBins} • {t.service1Desc}
            </span>
          </div>
        </div>

        {/* Buttons Group */}
        <div className="w-full flex flex-col gap-2.5 pt-2">
          <button
            type="button"
            onClick={onGoHome}
            className="w-full h-14 bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white font-bold text-base rounded-2xl flex items-center justify-center gap-2 shadow-[0_8px_20px_-4px_rgba(11,168,154,0.4)] transition-all cursor-pointer"
          >
            <span>{t.goToMyHomeBtn}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={onViewSchedule}
            className="w-full h-12 bg-white hover:bg-slate-50 text-[#04264A] font-bold text-sm rounded-xl border border-[#04264A]/10 transition-colors cursor-pointer"
          >
            {t.viewFullScheduleBtn}
          </button>
        </div>
      </main>
    </div>
  );
};
