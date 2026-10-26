import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Receipt,
  CreditCard,
  Trash2,
  CheckCircle2,
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
  onNavigateToPayment: () => void;
  onNavigateToAddress: () => void;
  onOpenAvatar?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  booking,
  onNavigateToSchedule,
  onNavigateToAccount,
  onNavigateToNotifications,
  onNavigateToPayment,
  onNavigateToAddress,
  onOpenAvatar,
}) => {
  const { t, language } = useLanguage();
  const rawDate = booking.nextCleaningDate || `${booking.selectedDay || 'Tuesday'}, Oct 24`;
  const nextDate = translateDateString(rawDate, language);

  const renewalDate = translateDateString('Jan 24, 2024', language);

  // Localized cycle step names
  const stepUpcoming =
    language === 'es'
      ? '24 Oct (Próxima)'
      : language === 'ht'
      ? '24 Okt (K ap vini)'
      : 'Oct 24 (Upcoming)';

  const stepNov =
    language === 'es'
      ? 'Limpieza Nov'
      : language === 'ht'
      ? 'Netwayaj Nov'
      : 'Nov Clean';

  const stepDec =
    language === 'es'
      ? 'Limpieza Dic'
      : language === 'ht'
      ? 'Netwayaj Des'
      : 'Dec Clean';

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-24">
      <ScreenHeader
        title="Limpi"
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

          {/* 3-Month Commitment Cycle Tracker */}
          <div className="bg-white/90 rounded-2xl p-4 space-y-3 shadow-xs border border-[#04264A]/5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#04264A]">
                {t.cleaningOneOfThree}
              </span>
              <span className="text-xs text-[#0BA89A] font-extrabold">
                {t.commitmentCycle}
              </span>
            </div>

            {/* Segmented Step Bar */}
            <div className="grid grid-cols-3 gap-2">
              <div className="h-2 rounded-full bg-[#0BA89A] relative overflow-hidden">
                <div className="absolute inset-0 bg-white/30 animate-pulse" />
              </div>
              <div className="h-2 rounded-full bg-[#04264A]/10" />
              <div className="h-2 rounded-full bg-[#04264A]/10" />
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#04264A]/60 font-semibold pt-0.5">
              <span className="text-[#0BA89A] font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {stepUpcoming}
              </span>
              <span>{stepNov}</span>
              <span>{stepDec}</span>
            </div>
          </div>

          {/* Included Services Note: Only the two services! */}
          <div className="bg-white/70 rounded-xl p-3 border border-[#04264A]/5 flex items-start gap-2.5">
            <Trash2 className="w-4 h-4 text-[#0BA89A] shrink-0 mt-0.5" />
            <div className="flex flex-col text-[11px] text-[#04264A]/80 leading-relaxed">
              <span className="font-bold text-[#04264A]">{t.twoServicesIncluded}</span>
              <span>{t.service1Desc}</span>
              <span>{t.service2Desc}</span>
            </div>
          </div>

          {/* Renewal disclaimer with fully translated date */}
          <div className="flex items-center gap-2 text-xs text-[#04264A]/70 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#0BA89A] shrink-0" />
            <span>
              {t.renewsOnPrefix} <strong className="text-[#04264A]">{renewalDate}</strong>.
            </span>
          </div>
        </div>

        {/* Account Overview Shortcuts */}
        <div className="flex flex-col gap-2 pt-1">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-extrabold text-[#04264A]">{t.accountOverviewTitle}</h3>
            <button
              type="button"
              onClick={onNavigateToAccount}
              className="text-xs text-[#0BA89A] font-bold flex items-center gap-0.5 cursor-pointer hover:underline"
            >
              <span>{t.viewAll}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white rounded-2xl p-1 shadow-sm border border-[#04264A]/8 flex flex-col divide-y divide-[#04264A]/6">
            {/* Plan Item */}
            <button
              type="button"
              onClick={onNavigateToAccount}
              className="w-full flex items-center justify-between p-3.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E6F6F4] flex items-center justify-center text-[#0BA89A] shrink-0">
                  <Receipt className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#04264A] leading-tight">
                    {booking.planType === '1-clean'
                      ? t.standardPlanTitle
                      : t.frequentPlanTitle}
                  </p>
                  <p className="text-[11px] text-[#04264A]/60 mt-0.5">
                    ${booking.planType === '1-clean' ? '79.95' : '99.95'} {t.forThreeMonths}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#04264A]/40" />
            </button>

            {/* Payment Method Item */}
            <button
              type="button"
              onClick={onNavigateToPayment}
              className="w-full flex items-center justify-between p-3.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#04264A] shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#04264A] leading-tight">
                    {t.paymentMethodShort}
                  </p>
                  <p className="text-[11px] text-[#04264A]/60 mt-0.5">
                    Visa •••• 4022 • {t.autoPayActiveBadge}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#04264A]/40" />
            </button>

            {/* Address Item */}
            <button
              type="button"
              onClick={onNavigateToAddress}
              className="w-full flex items-center justify-between p-3.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E6F6F4] flex items-center justify-center text-[#0BA89A] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#04264A] leading-tight">
                    {t.serviceAddressShort}
                  </p>
                  <p className="text-[11px] text-[#04264A]/60 mt-0.5 truncate max-w-[210px]">
                    {booking.address.street}, Lehigh Acres, FL
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#04264A]/40" />
            </button>
          </div>
        </div>

        {/* 100% Sparkle Guarantee Stamp */}
        <div className="flex items-center justify-center gap-2 text-center text-[#04264A]/60 py-2">
          <CheckCircle2 className="w-4 h-4 text-[#0BA89A]" />
          <span className="text-xs font-semibold">
            {t.sparkleGuaranteeTitle} • Lehigh Acres Standard
          </span>
        </div>
      </main>
    </div>
  );
};
