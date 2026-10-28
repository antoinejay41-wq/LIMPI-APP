import React, { useState } from 'react';
import { ArrowRight, CreditCard, ShieldCheck, Check, RotateCcw, Calendar, Trash2, Plus, Minus, Sparkles, Gift } from 'lucide-react';
import { ScreenHeader } from '../ScreenHeader';
import { BookingState } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { translateDay } from '../../i18n/dateUtils';

interface CheckoutScreenProps {
  booking: BookingState;
  onAgreeTermsChange: (agreed: boolean) => void;
  onBack: () => void;
  onCompleteCheckout: () => void;
  onUpdateExtraServices?: (count: number) => void;
  onOpenGiveawayRules?: () => void;
}

export const CheckoutScreen: React.FC<CheckoutScreenProps> = ({
  booking,
  onAgreeTermsChange,
  onBack,
  onCompleteCheckout,
  onUpdateExtraServices,
  onOpenGiveawayRules,
}) => {
  const { t, language } = useLanguage();
  const [agreed, setAgreed] = useState(booking.agreeTerms ?? true);
  const [cardNumber, setCardNumber] = useState('4242 8821 9043 7261');
  const [expiry, setExpiry] = useState('08/27');
  const [cvc, setCvc] = useState('847');
  const [zip, setZip] = useState(booking.address.zipCode || '33936');
  const [isProcessing, setIsProcessing] = useState(false);
  const [extraServices, setExtraServices] = useState(booking.extraServicesCount || 0);

  const basePrice = booking.planType === 'single' ? 19.99 : 239.99;
  const extraBins = Math.max(0, booking.totalBins - 2);
  const extraBinsCost = extraBins * 10;
  const extraServicesCost = extraServices * 10;
  const totalDue = (basePrice + extraBinsCost + extraServicesCost).toFixed(2);

  const handleCheckboxChange = (checked: boolean) => {
    setAgreed(checked);
    onAgreeTermsChange(checked);
  };

  const handleExtraServicesChange = (count: number) => {
    const val = Math.max(0, count);
    setExtraServices(val);
    if (onUpdateExtraServices) {
      onUpdateExtraServices(val);
    }
  };

  const handleStartPlan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert(
        language === 'es'
          ? 'Por favor acepte los términos del servicio para continuar.'
          : language === 'ht'
          ? 'Tanpri aksepte règleman sèvis yo pou kontinye.'
          : 'Please agree to the service plan terms to activate your order.'
      );
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onCompleteCheckout();
    }, 700);
  };

  const selectedDayLocalized = translateDay(booking.selectedDay || 'Tuesday', language);
  const scheduleLine =
    booking.planType === 'annual'
      ? language === 'es'
        ? `Mensual los ${selectedDayLocalized} • ${booking.timeWindow}`
        : language === 'ht'
        ? `Chak mwa yon ${selectedDayLocalized} • ${booking.timeWindow}`
        : `Monthly on ${booking.selectedDay}s • ${booking.timeWindow}`
      : language === 'es'
      ? `Fecha elegida: ${selectedDayLocalized} • ${booking.timeWindow}`
      : language === 'ht'
      ? `Dat chwazi: ${selectedDayLocalized} • ${booking.timeWindow}`
      : `Booked for ${booking.selectedDay} • ${booking.timeWindow}`;

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-36">
      <ScreenHeader
        title={t.checkoutTitle}
        showBack={true}
        onBack={onBack}
        currentStep={4}
        totalSteps={4}
        avatarUrl={booking.user.avatarUrl}
        userName={booking.user.fullName}
      />

      <main className="flex-1 px-5 pt-3 max-w-md mx-auto w-full flex flex-col gap-4">
        {/* Header Intro */}
        <div className="flex flex-col gap-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F6F4] text-[#006A61] w-fit text-xs font-bold shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{t.sanitizedCurbsideCare}</span>
          </div>
          <h2 className="text-2xl font-extrabold text-[#04264A] tracking-tight">
            {t.checkoutTitle}
          </h2>
          <p className="text-sm text-[#04264A]/70">
            {t.checkoutSubtitle}
          </p>
        </div>

        {/* Order Summary Card (Soft Mint Foundation) */}
        <div className="w-full rounded-3xl bg-[#E6F6F4]/75 border border-[#0BA89A]/25 p-5 shadow-[0_4px_20px_rgba(4,38,74,0.06)] relative overflow-hidden flex flex-col gap-3.5">
          <div className="flex items-start justify-between pb-3 border-b border-[#04264A]/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-extrabold text-[#04264A]">
                  {booking.planType === 'single' ? t.singleVisitTitle : t.annualPlanTitle}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white text-[#0BA89A] text-[10px] font-bold shadow-xs">
                  {booking.planType === 'annual' ? 'Best Value' : 'No Commitment'}
                </span>
              </div>
              <p className="text-xs text-[#04264A]/70 mt-0.5">
                {booking.planType === 'annual'
                  ? '1 cleaning visit every month + 5 bonus visits'
                  : 'Choose the day you want your service, every time'}
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-[#0BA89A]">${totalDue}</span>
              <span className="block text-[11px] font-medium text-[#04264A]/60">
                {t.dueToday}
              </span>
            </div>
          </div>

          {/* Itemized Order Breakdown */}
          <div className="space-y-2 text-xs text-[#04264A] pb-1">
            {/* Plan Line */}
            <div className="flex items-center justify-between font-semibold">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#0BA89A]" />
                <span>
                  {booking.planType === 'single' ? 'Single Visit Service' : 'Annual Plan (12 Mo + 5 Free Visits)'}
                </span>
              </div>
              <span className="font-bold text-[#04264A]">${basePrice.toFixed(2)}</span>
            </div>

            {/* Extra Bins Line ($10 each) */}
            <div className="flex items-center justify-between text-[#04264A]/80">
              <div className="flex items-center gap-2">
                <Trash2 className="w-3.5 h-3.5 text-[#0BA89A]" />
                <span>
                  Bins ({booking.totalBins} {booking.totalBins === 1 ? 'bin' : 'bins'})
                  {extraBins > 0 ? ` • ${extraBins} extra @ $10/ea` : ' • 2 included'}
                </span>
              </div>
              <span className="font-bold text-[#04264A]">
                {extraBins > 0 ? `+$${extraBinsCost.toFixed(2)}` : '$0.00'}
              </span>
            </div>

            {/* Extra Services in same month Line ($10 each) */}
            <div className="flex items-center justify-between text-[#04264A]/80">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#0BA89A]" />
                <span>
                  Extra services in same month ($10 each)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 bg-white px-2 py-0.5 rounded-lg border border-[#04264A]/10">
                  <button
                    type="button"
                    onClick={() => handleExtraServicesChange(extraServices - 1)}
                    className="text-[#04264A]/60 hover:text-[#04264A] cursor-pointer"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="font-bold text-xs tabular-nums px-1">{extraServices}</span>
                  <button
                    type="button"
                    onClick={() => handleExtraServicesChange(extraServices + 1)}
                    className="text-[#0BA89A] hover:text-[#099185] cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <span className="font-bold text-[#04264A] w-12 text-right">
                  {extraServicesCost > 0 ? `+$${extraServicesCost.toFixed(2)}` : '$0.00'}
                </span>
              </div>
            </div>

            {/* Schedule details */}
            <div className="pt-2 border-t border-[#04264A]/8 text-[11px] text-[#04264A]/70 flex items-center justify-between">
              <span>Schedule:</span>
              <span className="font-semibold text-[#04264A]">{scheduleLine}</span>
            </div>
          </div>

          {/* Renewal disclaimer */}
          <div className="pt-2 border-t border-[#04264A]/10 flex items-center gap-2 text-xs font-semibold text-[#04264A]">
            <RotateCcw className="w-4 h-4 text-[#0BA89A] shrink-0" />
            <span>
              {booking.planType === 'annual'
                ? 'Annual Plan automatically renews yearly. Cancel anytime before renewal.'
                : 'Single visit booking. No recurring charges.'}
            </span>
          </div>
        </div>

        {/* Giveaway Line (Annual Plan only - Checkbox-free) */}
        {booking.planType === 'annual' && (
          <div className="bg-[#E6F6F4] border border-[#0BA89A]/25 rounded-2xl px-4 py-2.5 flex items-center justify-between text-xs font-bold text-[#006A61] shadow-2xs">
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-[#0BA89A] shrink-0" />
              <span>You'll be entered in the new client gift giveaway.</span>
            </div>
            {onOpenGiveawayRules && (
              <button
                type="button"
                onClick={onOpenGiveawayRules}
                className="text-[11px] font-bold text-[#0BA89A] underline hover:text-[#099185] cursor-pointer ml-2 shrink-0"
              >
                Rules
              </button>
            )}
          </div>
        )}

        {/* Express Checkout */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#04264A]">
            {t.expressCheckoutLabel}
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleStartPlan}
              className="h-12 rounded-xl bg-[#04264A] text-white hover:bg-[#063363] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer font-bold text-xs"
            >
              <span> Apple Pay</span>
            </button>
            <button
              type="button"
              onClick={handleStartPlan}
              className="h-12 rounded-xl bg-white border border-[#04264A]/15 text-[#04264A] hover:bg-slate-50 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer font-bold text-xs"
            >
              <span className="font-black">G</span>
              <span>Pay</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center my-1">
            <div className="w-full h-px bg-[#04264A]/10" />
            <span className="absolute bg-[#F8FCFB] px-3 py-0.5 rounded-full text-[11px] font-semibold text-[#04264A]/50 uppercase">
              {t.orContinueWith}
            </span>
          </div>
        </div>

        {/* Payment Card Form */}
        <div className="bg-white rounded-3xl p-4.5 shadow-sm border border-[#04264A]/8 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#04264A] flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-[#0BA89A]" />
              {t.cardDetailsLabel}
            </span>
            <div className="flex items-center gap-1">
              <span className="px-1.5 py-0.5 rounded bg-slate-100 text-[#04264A]/70 text-[10px] font-bold">VISA</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-100 text-[#04264A]/70 text-[10px] font-bold">MC</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-100 text-[#04264A]/70 text-[10px] font-bold">AMEX</span>
            </div>
          </div>

          {/* Card Number */}
          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-semibold text-[#04264A]/60" htmlFor="cardNum">
              {t.cardNumberLabel}
            </label>
            <div className="relative flex items-center">
              <input
                id="cardNum"
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="4242 •••• •••• 4242"
                className="w-full h-12 pl-3.5 pr-10 rounded-xl bg-slate-50 text-[#04264A] text-sm font-medium border border-[#04264A]/10 outline-none focus:ring-2 focus:ring-[#0BA89A]"
              />
              <span className="absolute right-3 text-[#0BA89A]">
                <Check className="w-4 h-4 stroke-[3]" />
              </span>
            </div>
          </div>

          {/* Grid 3 inputs: Exp, CVC, Zip */}
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[#04264A]/60" htmlFor="exp">
                {t.expiryLabel}
              </label>
              <input
                id="exp"
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="12/28"
                className="w-full h-12 text-center rounded-xl bg-slate-50 text-[#04264A] text-sm font-medium border border-[#04264A]/10 outline-none focus:ring-2 focus:ring-[#0BA89A]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[#04264A]/60" htmlFor="cvc">
                {t.cvcLabel}
              </label>
              <input
                id="cvc"
                type="password"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                placeholder="382"
                maxLength={4}
                className="w-full h-12 text-center rounded-xl bg-slate-50 text-[#04264A] text-sm font-medium border border-[#04264A]/10 outline-none focus:ring-2 focus:ring-[#0BA89A]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[#04264A]/60" htmlFor="zip">
                {t.zipLabel}
              </label>
              <input
                id="zip"
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="33936"
                className="w-full h-12 text-center rounded-xl bg-slate-50 text-[#04264A] text-sm font-medium border border-[#04264A]/10 outline-none focus:ring-2 focus:ring-[#0BA89A]"
              />
            </div>
          </div>
        </div>

        {/* Mandatory Agreement Checkbox */}
        <label
          className={`select-none cursor-pointer p-4 rounded-2xl border transition-all flex items-start gap-3 ${
            agreed
              ? 'bg-[#E6F6F4]/60 border-[#0BA89A] shadow-xs'
              : 'bg-white border-amber-300'
          }`}
        >
          <div className="relative flex items-center justify-center shrink-0 mt-0.5">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => handleCheckboxChange(e.target.checked)}
              className="sr-only"
            />
            <div
              className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                agreed ? 'bg-[#0BA89A] text-white shadow-xs' : 'bg-slate-100 border border-slate-300 text-transparent'
              }`}
            >
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-xs text-[#04264A] leading-relaxed">
              {booking.planType === 'annual'
                ? t.agreeAnnualTermsCheckbox
                : t.agreeSingleTermsCheckbox}{' '}
              <span className="font-bold text-[#0BA89A] underline">{t.termsWord}</span>.
            </p>
          </div>
        </label>

        {/* Clean Guarantee Tag */}
        <div className="flex items-center justify-center gap-1.5 py-1 text-center text-[#04264A]/70 text-xs">
          <ShieldCheck className="w-4 h-4 text-[#0BA89A]" />
          <span>{t.cleanGuaranteeTag}</span>
        </div>
      </main>

      {/* Sticky Bottom Footer */}
      <div className="fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md px-5 py-3 border-t border-[#04264A]/8 shadow-[0_-4px_20px_rgba(4,38,74,0.06)]">
        <div className="max-w-md mx-auto flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-semibold text-[#04264A]/70">{t.dueToday}:</span>
            <span className="text-xl font-black text-[#04264A]">${totalDue}</span>
          </div>
          <button
            type="button"
            onClick={handleStartPlan}
            disabled={!agreed || isProcessing}
            className={`w-full h-14 font-bold text-base rounded-2xl flex items-center justify-center gap-2 shadow-[0_8px_20px_-4px_rgba(11,168,154,0.4)] transition-all ${
              agreed && !isProcessing
                ? 'bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white cursor-pointer'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed opacity-70'
            }`}
          >
            {isProcessing ? (
              <span>{t.activatingPlan}</span>
            ) : (
              <>
                <span>
                  {booking.planType === 'annual' ? t.annualPlanBtn : t.startMyPlanBtn}
                </span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
