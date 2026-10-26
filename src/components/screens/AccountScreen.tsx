import React, { useState } from 'react';
import {
  Sparkles,
  MapPin,
  Calendar,
  Lock,
  RotateCcw,
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronRight,
  ShieldCheck,
  AlertTriangle,
  Trash2,
  Camera,
} from 'lucide-react';
import { ScreenHeader } from '../ScreenHeader';
import { BookingState } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { AvatarBadge } from '../AvatarBadge';
import { translateDateString } from '../../i18n/dateUtils';

interface AccountScreenProps {
  booking: BookingState;
  onOpenPlan: () => void;
  onOpenPayment: () => void;
  onOpenAddress: () => void;
  onOpenHelp: () => void;
  onLogOut: () => void;
  onOpenAvatar?: () => void;
}

export const AccountScreen: React.FC<AccountScreenProps> = ({
  booking,
  onOpenPlan,
  onOpenPayment,
  onOpenAddress,
  onOpenHelp,
  onLogOut,
  onOpenAvatar,
}) => {
  const { t, language } = useLanguage();
  const [showCancelTooltip, setShowCancelTooltip] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const planName =
    booking.planType === '1-clean'
      ? t.standardPlanTitle
      : t.frequentPlanTitle;
  const planPrice = booking.planType === '1-clean' ? '79.95' : '99.95';

  const memberSinceLocalized =
    language === 'es'
      ? 'Miembro desde septiembre 2023'
      : language === 'ht'
      ? 'Manm depi Septanm 2023'
      : 'Member since Sept 2023';

  const nextCycleDate = translateDateString('Tue, Oct 24', language);
  const minCycleEndDate = translateDateString('Nov 30, 2024', language);

  const clean1Label =
    language === 'es' ? 'Limpieza 1: Sep ✓' : language === 'ht' ? 'Netwayaj 1: Sep ✓' : 'Clean 1: Sept ✓';
  const clean2Label =
    language === 'es' ? 'Limpieza 2: Oct ✓' : language === 'ht' ? 'Netwayaj 2: Okt ✓' : 'Clean 2: Oct ✓';
  const clean3Label =
    language === 'es' ? 'Limpieza 3: 30 Nov' : language === 'ht' ? 'Netwayaj 3: 30 Nov' : 'Clean 3: Nov 30';

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
                  {booking.user.fullName || 'Sarah Jenkins'}
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

        {/* Current Plan Card ("Standard Monthly Clean, 2 Bins Included") */}
        <div className="bg-[#E6F6F4]/70 border border-[#0BA89A]/25 rounded-3xl p-5 shadow-[0_4px_24px_rgba(4,38,74,0.06)] relative overflow-hidden flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-[#0BA89A] text-[11px] font-bold shadow-2xs mb-1.5">
                <Sparkles className="w-3 h-3" />
                {t.currentPlanBadge}
              </div>
              <h3 className="text-lg font-black text-[#04264A]">{planName}</h3>
              <p className="text-xs text-[#04264A]/70">
                {booking.totalBins} {booking.totalBins === 1 ? t.oneBin : t.twoBins} (${planPrice} {t.forThreeMonths})
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#0BA89A]/20 flex flex-col items-center justify-center text-[#0BA89A] shadow-xs shrink-0">
              <Trash2 className="w-5 h-5" />
              <span className="text-[10px] font-extrabold text-[#04264A] leading-none mt-0.5">
                {booking.totalBins} BINS
              </span>
            </div>
          </div>

          {/* 3-Month Minimum Progress Card */}
          <div className="bg-white/95 rounded-2xl p-4 shadow-xs border border-[#04264A]/5 flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#04264A] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0BA89A]" />
                {t.commitmentCycle}
              </span>
              <span className="text-xs font-extrabold text-[#0BA89A]">
                Month {booking.currentCycleMonth || 2} of 3
              </span>
            </div>

            {/* Segmented Pill Progress */}
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex gap-1 p-0.5">
              <div className="h-full bg-[#0BA89A] rounded-full flex-1" />
              <div className="h-full bg-[#0BA89A] rounded-full flex-1" />
              <div className="h-full bg-slate-200 rounded-full flex-1" />
            </div>

            <div className="flex justify-between items-center text-[10px] text-[#04264A]/70 font-semibold pt-0.5">
              <span>{clean1Label}</span>
              <span className="text-[#0BA89A] font-extrabold">{clean2Label}</span>
              <span className="text-[#04264A]/50">{clean3Label}</span>
            </div>

            <p className="text-[11px] text-[#04264A]/70 mt-1 leading-relaxed">
              {language === 'es'
                ? `Su mínimo de 3 meses finaliza el ${minCycleEndDate}. Luego de eso, su plan pasa a mes a mes.`
                : language === 'ht'
                ? `Minimòm 3 mwa w la fini nan dat ${minCycleEndDate}. Apre sa, plan an ka anile nenpòt lè.`
                : `Your 3-month minimum ends ${minCycleEndDate}. After that, your plan transitions to month-to-month.`}
            </p>
          </div>

          {/* Warning Disclaimer Box */}
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200/70 text-amber-900 text-xs">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="text-[11px] leading-snug">
              {t.pauseWarningHighlight}
            </p>
          </div>

          {/* Action Buttons: Upgrade Plan & Change Bins both open Plan screen */}
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={onOpenPlan}
                className="h-11 bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.upgradePlanBtn}</span>
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

            {/* Disabled Cancel Plan Button with Interactive Tooltip */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowCancelTooltip(true)}
                className="w-full h-11 bg-white/70 border border-[#04264A]/15 text-[#04264A]/60 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-not-allowed hover:bg-white transition-colors"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{t.cancelPlanBtn}</span>
              </button>

              {showCancelTooltip && (
                <div className="absolute -top-12 inset-x-2 bg-[#04264A] text-white px-3 py-2 rounded-xl text-center text-[11px] font-semibold shadow-lg animate-in fade-in z-20 flex items-center justify-between">
                  <span>
                    {language === 'es'
                      ? `Disponible tras el mínimo de 3 limpiezas (${minCycleEndDate})`
                      : language === 'ht'
                      ? `Disponib apre 3 netwayaj yo fini (${minCycleEndDate})`
                      : `Available after 3-clean minimum ends ${minCycleEndDate}`}
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
    </div>
  );
};
