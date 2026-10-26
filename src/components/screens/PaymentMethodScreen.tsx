import React, { useState } from 'react';
import { CreditCard, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { ScreenHeader } from '../ScreenHeader';
import { useLanguage } from '../../context/LanguageContext';

interface PaymentMethodScreenProps {
  onBack: () => void;
}

export const PaymentMethodScreen: React.FC<PaymentMethodScreenProps> = ({ onBack }) => {
  const { t } = useLanguage();
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4022');
  const [expiry, setExpiry] = useState('08/27');
  const [cvc, setCvc] = useState('•••');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onBack();
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-12">
      <ScreenHeader title={t.paymentMethodRow} showBack={true} onBack={onBack} />

      <main className="flex-1 px-5 pt-4 max-w-md mx-auto w-full flex flex-col gap-4">
        {/* Active Card Pill */}
        <div className="bg-[#E6F6F4]/75 border border-[#0BA89A]/25 rounded-3xl p-5 shadow-xs flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-extrabold text-[#0BA89A] tracking-wider">
              {t.primaryCardOnFile}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white text-[#006A61] text-[10px] font-extrabold shadow-2xs">
              {t.autoPayActiveBadge}
            </span>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#0BA89A]/20 flex items-center justify-center text-[#0BA89A] shadow-xs shrink-0">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <p className="text-base font-extrabold text-[#04264A]">Visa ending in 4022</p>
              <p className="text-xs text-[#04264A]/60">Expires 08/2027</p>
            </div>
          </div>

          <p className="text-[11px] text-[#04264A]/70 pt-1 border-t border-[#04264A]/8 leading-relaxed">
            {t.renewsNotice}
          </p>
        </div>

        {/* Update Card Form */}
        <form onSubmit={handleSave} className="bg-white rounded-3xl p-5 border border-[#04264A]/8 shadow-xs flex flex-col gap-3.5">
          <h3 className="text-sm font-extrabold text-[#04264A]">
            {t.updatePaymentTitle}
          </h3>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#04264A]" htmlFor="new-card">
              {t.cardNumberLabel}
            </label>
            <input
              id="new-card"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="4242 •••• •••• 4022"
              className="w-full h-12 px-4 rounded-xl bg-slate-50 text-[#04264A] text-sm font-medium border border-[#04264A]/10 outline-none focus:ring-2 focus:ring-[#0BA89A]"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#04264A]" htmlFor="new-exp">
                {t.expiryLabel}
              </label>
              <input
                id="new-exp"
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM/YY"
                className="w-full h-12 text-center rounded-xl bg-slate-50 text-[#04264A] text-sm font-medium border border-[#04264A]/10 outline-none focus:ring-2 focus:ring-[#0BA89A]"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#04264A]" htmlFor="new-cvc">
                {t.cvcLabel}
              </label>
              <input
                id="new-cvc"
                type="password"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                placeholder="CVC"
                className="w-full h-12 text-center rounded-xl bg-slate-50 text-[#04264A] text-sm font-medium border border-[#04264A]/10 outline-none focus:ring-2 focus:ring-[#0BA89A]"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1 text-[11px] text-[#04264A]/70">
            <ShieldCheck className="w-4 h-4 text-[#0BA89A] shrink-0" />
            <span>256-bit encrypted bank-grade payment processing</span>
          </div>

          {saved ? (
            <div className="h-14 bg-emerald-50 text-emerald-800 rounded-2xl flex items-center justify-center font-bold text-sm gap-2">
              <Check className="w-5 h-5" />
              <span>{t.cardSavedMsg}</span>
            </div>
          ) : (
            <button
              type="submit"
              className="mt-2 w-full h-14 bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white font-bold text-base rounded-2xl flex items-center justify-center gap-2 shadow-[0_8px_20px_-4px_rgba(11,168,154,0.4)] transition-all cursor-pointer"
            >
              <span>{t.savePaymentBtn}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </form>
      </main>
    </div>
  );
};
