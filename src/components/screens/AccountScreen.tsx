import React, { useState } from 'react';
import {
  Sparkles,
  MapPin,
  Calendar,
  RotateCcw,
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronRight,
  ShieldCheck,
  Trash2,
  Camera,
  Gift,
  ArrowRight,
} from 'lucide-react';
import { ScreenHeader } from '../ScreenHeader';
import { BookingState } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { AvatarBadge } from '../AvatarBadge';
import { translateDateString } from '../../i18n/dateUtils';
import { TermsOfCommitmentModal } from '../TermsOfCommitmentModal';

interface AccountScreenProps {
  booking: BookingState;
  onOpenPlan: () => void;
  onOpenPayment: () => void;
  onOpenAddress: () => void;
  onOpenHelp: () => void;
  onLogOut: () => void;
  onOpenAvatar?: () => void;
  onOpenGiveawayRules?: () => void;
}

export const AccountScreen: React.FC<AccountScreenProps> = ({
  booking,
  onOpenPlan,
  onOpenPayment,
  onOpenAddress,
  onOpenHelp,
  onLogOut,
  onOpenAvatar,
  onOpenGiveawayRules,
}) => {
  const { t, language } = useLanguage();
  const [showCancelTooltip, setShowCancelTooltip] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showCommitmentTermsModal, setShowCommitmentTermsModal] = useState(false);

  const isAnnual = booking.planType === 'annual';
  const freeVisits = booking.freeVisitsRemaining ?? 5;
  const currentMonthNum = booking.currentCycleMonth || 2;
  const annualEndDateFormatted = translateDateString('Oct 24, 2025', language);

  const memberSinceLocalized =
    language === 'es'
      ? 'Miembro desde septiembre 2023'
      : language === 'ht'
      ? 'Manm depi Septanm 2023'
      : 'Member since Sept 2023';

  const nextCycleDate = translateDateString(booking.nextCleaningDate || 'Tue, Oct 24', language);

  const avatarTapHint =
    language === 'es'
      ? 'Toca para cambiar foto o avatar'
      : language === 'ht'
      ? 'Klike pou chanje foto oswa avata'
      : 'Tap to change photo or avatar';

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-24">
      <ScreenHeader
        title={t.accountTitle}
        showBack={false}
        showProfile={true}
        onProfileClick={onOpenAvatar}
        avatarUrl={booking.user.avatarUrl}
        userName={booking.user.fullName}
      />

      <main className="flex-1 px-5 pt-3 max-w-md mx-auto w-full flex flex-col gap-4">
        {/* Profile Card with Clickable Avatar for Photo Upload */}
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-[#04264A]/8 flex flex-col gap-3">
          <div className="flex items-center gap-3.5">
            {/* Interactive Avatar button */}
            <button
              type="button"
              onClick={onOpenAvatar}
              className="relative cursor-pointer group focus:outline-none"
              title={avatarTapHint}
            >
              <AvatarBadge
                name={booking.user.fullName}
                avatarUrl={booking.user.avatarUrl}
                size="lg"
                showEditOverlay={true}
              />
            </button>

            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-extrabold text-[#04264A] truncate">
                  {booking.user.fullName || 'Limpi Member'}
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-[#E6F6F4] text-[#006A61] text-[10px] font-extrabold uppercase">
                  {t.activeStatus}
                </span>
              </div>
              <p className="text-xs text-[#04264A]/70 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#0BA89A]" />
                Lehigh Acres, FL
              </p>
              <div className="flex items-center justify-between mt-0.5">
                <p className="text-[11px] text-[#04264A]/50 font-medium">
                  {memberSinceLocalized}
                </p>
                <button
                  type="button"
                  onClick={onOpenAvatar}
                  className="text-[10px] font-bold text-[#0BA89A] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Camera className="w-3 h-3" />
                  <span>{language === 'es' ? 'Cambiar foto' : language === 'ht' ? 'Chanje foto' : 'Edit photo'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Vital Sanitation Stats */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#04264A]/8">
            <div className="p-2.5 rounded-xl bg-[#F8FCFB] border border-[#04264A]/5 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#E6F6F4] text-[#0BA89A] flex items-center justify-center">
                <Trash2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#04264A]/60 block uppercase">
                  {t.totalCleansStat}
                </span>
                <span className="text-xs font-black text-[#04264A]">4 {t.cleanedStatus}</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[#F8FCFB] border border-[#04264A]/5 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#04264A] flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#04264A]/60 block uppercase">
                  {t.nextCycleStat}
                </span>
                <span className="text-xs font-black text-[#0BA89A]">{nextCycleDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Current Plan Card ("Single Visit, no commitment" or "Annual Plan") */}
        <div className="bg-[#E6F6F4]/75 border border-[#0BA89A]/25 rounded-3xl p-5 shadow-[0_4px_24px_rgba(4,38,74,0.06)] relative overflow-hidden flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-[#0BA89A] text-[11px] font-bold shadow-2xs mb-1.5">
                <Sparkles className="w-3 h-3" />
                {t.currentPlanBadge}
              </div>
              <h3 className="text-lg font-black text-[#04264A]">
                {isAnnual ? 'Annual Plan' : 'Single Visit, no commitment'}
              </h3>
              <p className="text-xs text-[#04264A]/70">
                {isAnnual
                  ? `$239.99 / year • ${booking.totalBins} ${booking.totalBins === 1 ? 'bin' : 'bins'} included`
                  : `$19.99 per visit • ${booking.totalBins} ${booking.totalBins === 1 ? 'bin' : 'bins'} included`}
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#0BA89A]/20 flex flex-col items-center justify-center text-[#0BA89A] shadow-xs shrink-0">
              <Trash2 className="w-5 h-5" />
              <span className="text-[10px] font-extrabold text-[#04264A] leading-none mt-0.5">
                {booking.totalBins} BINS
              </span>
            </div>
          </div>

          {/* ANNUAL PLAN STATUS & PROGRESS (Month 2 of 12, End Date, Free Visits Counter) */}
          {isAnnual ? (
            <div className="bg-white/95 rounded-2xl p-4 shadow-xs border border-[#04264A]/5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#04264A] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0BA89A]" />
                  <span>Annual Commitment</span>
                </span>
                <span className="text-xs font-extrabold text-[#0BA89A]">
                  Month {currentMonthNum} of 12
                </span>
              </div>

              {/* Progress Bar (Month 2 of 12) */}
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex">
                <div
                  className="h-full bg-[#0BA89A] rounded-full transition-all duration-500"
                  style={{ width: `${(currentMonthNum / 12) * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#04264A]/70 pt-0.5">
                <span>Month {currentMonthNum} of 12</span>
                <span className="font-semibold text-[#04264A]">
                  {language === 'es' ? 'Finaliza:' : language === 'ht' ? 'Fini:' : 'End date:'}{' '}
                  {annualEndDateFormatted}
                </span>
              </div>

              {/* Free Visits Left Counter */}
              <div className="p-3 bg-[#E6F6F4]/70 rounded-xl flex items-center justify-between border border-[#0BA89A]/15">
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-[#0BA89A]" />
                  <span className="text-xs font-bold text-[#04264A]">
                    {t.freeVisitsLeft}:
                  </span>
                </div>
                <span className="text-sm font-black text-[#0BA89A] bg-white px-2.5 py-0.5 rounded-lg shadow-2xs">
                  {freeVisits} left
                </span>
              </div>

              {/* 1-Year Commitment Reminder & View Terms Link */}
              <div className="pt-2 border-t border-[#04264A]/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-[11px]">
                <span className="font-semibold text-[#04264A]/70">
                  1-year commitment. Cancellation terms apply.
                </span>
                <button
                  type="button"
                  onClick={() => setShowCommitmentTermsModal(true)}
                  className="font-bold text-[#0BA89A] underline hover:text-[#099185] cursor-pointer self-start sm:self-auto"
                >
                  View Terms of Commitment
                </button>
              </div>
            </div>
          ) : (
            /* SINGLE VISIT DETAILS */
            <div className="bg-white/95 rounded-2xl p-4 shadow-xs border border-[#04264A]/5 flex flex-col gap-2.5">
              <span className="text-xs font-bold text-[#04264A]">
                No recurring commitment
              </span>
              <p className="text-xs text-[#04264A]/75 leading-relaxed">
                {t.singleVisitDesc}
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs font-bold text-[#0BA89A]">
                <Sparkles className="w-4 h-4" />
                <span>Switch to Annual Plan for 5 FREE bonus visits!</span>
              </div>
            </div>
          )}

          {/* Action Buttons: Keep Upgrade Plan and Change Bins buttons; Single Visit users see Switch to Annual Plan */}
          <div className="flex flex-col gap-2 pt-1">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={onOpenPlan}
                className="h-11 bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {isAnnual ? t.upgradePlanBtn : t.switchToAnnualPlanBtn}
                </span>
              </button>
              <button
                type="button"
                onClick={onOpenPlan}
                className="h-11 bg-white hover:bg-slate-50 border border-[#04264A]/10 text-[#04264A] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#0BA89A]" />
                <span>{t.changeBinsBtn}</span>
              </button>
            </div>

            {/* Cancel Plan Button with tooltip */}
            {isAnnual && (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowCancelTooltip(true)}
                  className="w-full h-11 bg-white/70 border border-[#04264A]/15 text-[#04264A]/60 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer hover:bg-white transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0BA89A]" />
                  <span>{t.cancelPlanBtn}</span>
                </button>

                {showCancelTooltip && (
                  <div className="absolute -top-12 inset-x-2 bg-[#04264A] text-white px-3 py-2 rounded-xl text-center text-[11px] font-semibold shadow-lg animate-in fade-in z-20 flex items-center justify-between">
                    <span>
                      {t.cancelTooltipText} ({annualEndDateFormatted})
                    </span>
                    <button
                      onClick={() => setShowCancelTooltip(false)}
                      className="ml-2 text-white/70 hover:text-white cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Small Card: My Giveaway Entry */}
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-[#04264A]/8 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#E6F6F4] text-[#0BA89A] flex items-center justify-center shrink-0 shadow-2xs">
                <Gift className="w-4 h-4 stroke-[2.3]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#04264A]">My Giveaway Entry</span>
                <span className="text-[11px] text-[#04264A]/60">1-Year Annual Client Drawing</span>
              </div>
            </div>
            {isAnnual ? (
              <span className="px-2.5 py-1 rounded-full bg-[#E6F6F4] text-[#006A61] text-[11px] font-extrabold flex items-center gap-1 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0BA89A]" />
                Entered
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[#04264A]/60 text-[10px] font-bold">
                Not eligible: Single Visit plan
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-[#04264A]/6 text-xs">
            <span className="text-[11px] text-[#04264A]/70">
              {isAnnual
                ? 'Chance to win: Outdoor Grill, Deep Freezer, or Toolbox Set'
                : 'Commit to 1 year to enter the giveaway'}
            </span>
            {onOpenGiveawayRules && (
              <button
                type="button"
                onClick={onOpenGiveawayRules}
                className="text-[11px] font-bold text-[#0BA89A] underline hover:text-[#099185] cursor-pointer shrink-0 ml-2"
              >
                See giveaway rules
              </button>
            )}
          </div>
        </div>

        {/* Account Menu List */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#04264A]/8 flex flex-col divide-y divide-[#04264A]/6">
          <div className="px-4 py-2.5 bg-slate-50">
            <span className="text-[11px] font-bold text-[#04264A]/60 uppercase tracking-wider">
              {t.accountSettingsHeader}
            </span>
          </div>

          {/* Payment Method */}
          <button
            type="button"
            onClick={onOpenPayment}
            className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors text-left cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#0BA89A]">
                <CreditCard className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-[#04264A]">
                    {t.paymentMethodRow}
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-[#E6F6F4] text-[#006A61] text-[10px] font-bold">
                    {t.autoPayActiveBadge}
                  </span>
                </div>
                <span className="text-[11px] text-[#04264A]/60">
                  Visa ending in •••• 4022
                </span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#04264A]/40" />
          </button>

          {/* Service Address & Access */}
          <button
            type="button"
            onClick={onOpenAddress}
            className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors text-left cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6F6F4] flex items-center justify-center text-[#0BA89A]">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#04264A]">
                  {t.addressRow}
                </span>
                <span className="text-[11px] text-[#04264A]/60 truncate max-w-[210px]">
                  {booking.address.street} • Gate {booking.address.gateCode || '#8841'}
                </span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#04264A]/40" />
          </button>

          {/* Help */}
          <button
            type="button"
            onClick={onOpenHelp}
            className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors text-left cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#0BA89A]">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#04264A]">{t.helpRow}</span>
                <span className="text-[11px] text-[#04264A]/60">
                  {t.helpRowDesc}
                </span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#04264A]/40" />
          </button>

          {/* Log Out */}
          <button
            type="button"
            onClick={() => setShowLogoutModal(true)}
            className="flex items-center justify-between p-4 hover:bg-rose-50 transition-colors text-left cursor-pointer w-full text-rose-600"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
                <LogOut className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold">{t.logOutRow}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-rose-400" />
          </button>
        </div>

        {/* Neighborhood Cleanliness Guarantee Footer Stamp */}
        <div className="flex items-center justify-center gap-1.5 text-center text-[#04264A]/50 py-3 text-xs">
          <ShieldCheck className="w-4 h-4 text-[#0BA89A]" />
          <span className="font-semibold text-[11px] uppercase tracking-wider">
            {t.sparkleGuaranteeTitle}
          </span>
        </div>
      </main>

      {/* LOGOUT CONFIRMATION POPUP */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#04264A]/60 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-sm p-5 shadow-2xl flex flex-col gap-4 text-center">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <LogOut className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-base font-extrabold text-[#04264A]">
                {t.logOutModalTitle}
              </h3>
              <p className="text-xs text-[#04264A]/70 mt-1 leading-relaxed">
                {t.logOutModalDesc}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowLogoutModal(false)}
                className="h-11 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#04264A] font-bold text-xs cursor-pointer active:scale-[0.98] transition-transform"
              >
                {t.cancelBtn}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowLogoutModal(false);
                  onLogOut();
                }}
                className="h-11 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs cursor-pointer active:scale-[0.98] transition-transform"
              >
                {t.logOutConfirmBtn}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Commitment Read-Only Modal */}
      <TermsOfCommitmentModal
        isOpen={showCommitmentTermsModal}
        onClose={() => setShowCommitmentTermsModal(false)}
        isReadOnly={true}
      />
    </div>
  );
};
