import React from 'react';
import { ArrowRight, Check, Info, Trash2, ShieldCheck, Plus, Minus } from 'lucide-react';
import { ScreenHeader } from '../ScreenHeader';
import { PlanType } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface PlanScreenProps {
  selectedPlan: PlanType;
  onSelectPlan: (plan: PlanType) => void;
  totalBins: number;
  onChangeBins: (bins: number) => void;
  onBack: () => void;
  onContinue: () => void;
}

export const PlanScreen: React.FC<PlanScreenProps> = ({
  selectedPlan,
  onSelectPlan,
  totalBins,
  onChangeBins,
  onBack,
  onContinue,
}) => {
  const { t } = useLanguage();
  const basePrice = selectedPlan === '1-clean' ? 79.95 : 99.95;
  const extraBinsCount = Math.max(0, totalBins - 2);
  const extraCost = extraBinsCount * 15;
  const totalPrice = (basePrice + extraCost).toFixed(2);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-28">
      <ScreenHeader
        title={t.selectPlanTitle}
        showBack={true}
        onBack={onBack}
        currentStep={1}
        totalSteps={4}
      />

      <main className="flex-1 px-5 pt-3 max-w-md mx-auto w-full flex flex-col gap-4">
        {/* Header Intro */}
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-extrabold text-[#04264A] tracking-tight">
            {t.selectPlanTitle}
          </h2>
          <p className="text-sm text-[#04264A]/70">
            {t.selectPlanSubtitle}
          </p>
        </div>

        {/* 2 Plan Cards */}
        <div className="flex flex-col gap-3">
          {/* Card 1: 1 cleaning per month ($79.95) */}
          <div
            onClick={() => onSelectPlan('1-clean')}
            className={`cursor-pointer relative rounded-2xl p-4.5 transition-all duration-200 flex flex-col gap-2.5 border-2 ${
              selectedPlan === '1-clean'
                ? 'bg-[#E6F6F4]/60 border-[#0BA89A] shadow-[0_4px_20px_rgba(11,168,154,0.12)]'
                : 'bg-white border-[#04264A]/10 hover:border-[#04264A]/25 shadow-xs'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    selectedPlan === '1-clean'
                      ? 'bg-[#0BA89A] text-white shadow-xs'
                      : 'border-2 border-[#04264A]/30 text-transparent'
                  }`}
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#0BA89A]">
                    Standard Plan
                  </span>
                  <h3 className="text-base font-bold text-[#04264A]">
                    {t.standardPlanTitle}
                  </h3>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-lg font-black text-[#04264A]">$79.95</span>
                <p className="text-[11px] font-semibold text-[#04264A]/60">{t.forThreeMonths}</p>
              </div>
            </div>
            <p className="text-xs text-[#04264A]/70 leading-relaxed pl-9">
              {t.standardPlanDesc}
            </p>
          </div>

          {/* Card 2: 2 cleanings per month ($99.95) */}
          <div
            onClick={() => onSelectPlan('2-clean')}
            className={`cursor-pointer relative rounded-2xl p-4.5 transition-all duration-200 flex flex-col gap-2.5 border-2 ${
              selectedPlan === '2-clean'
                ? 'bg-[#E6F6F4]/60 border-[#0BA89A] shadow-[0_4px_20px_rgba(11,168,154,0.12)]'
                : 'bg-white border-[#04264A]/10 hover:border-[#04264A]/25 shadow-xs'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    selectedPlan === '2-clean'
                      ? 'bg-[#0BA89A] text-white shadow-xs'
                      : 'border-2 border-[#04264A]/30 text-transparent'
                  }`}
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#0BA89A]">
                    Frequent Clean
                  </span>
                  <h3 className="text-base font-bold text-[#04264A]">
                    {t.frequentPlanTitle}
                  </h3>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-lg font-black text-[#04264A]">$99.95</span>
                <p className="text-[11px] font-semibold text-[#04264A]/60">{t.forThreeMonths}</p>
              </div>
            </div>
            <p className="text-xs text-[#04264A]/70 leading-relaxed pl-9">
              {t.frequentPlanDesc}
            </p>
          </div>
        </div>

        {/* Notes & Auto-Renewal Notice */}
        <div className="flex flex-col gap-1 px-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#0BA89A]">
            <Info className="w-4 h-4 shrink-0" />
            <span>{t.extraBinsNotice}</span>
          </div>
          <p className="text-xs text-[#04264A]/65 leading-snug">
            {t.renewsNotice}
          </p>
        </div>

        {/* Number of Bins Selector */}
        <div className="bg-[#E6F6F4]/50 border border-[#0BA89A]/15 rounded-2xl p-4 shadow-xs flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#04264A]">{t.numberOfBinsTitle}</span>
              <span className="text-xs text-[#04264A]/65">
                {totalBins <= 2 ? t.binsIncludedDesc : `${extraBinsCount} extra bin(s) added (+${extraBinsCount * 15})`}
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0BA89A] shadow-xs">
              <Trash2 className="w-4 h-4" />
            </div>
          </div>

          {/* Quick Segmented Bins Selector */}
          <div className="grid grid-cols-3 gap-2 p-1 bg-white rounded-xl border border-[#04264A]/6">
            <button
              type="button"
              onClick={() => onChangeBins(1)}
              className={`h-11 rounded-lg flex flex-col items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                totalBins === 1
                  ? 'bg-[#006A61] text-white shadow-xs'
                  : 'text-[#04264A]/70 hover:bg-slate-50'
              }`}
            >
              <span>{t.oneBin}</span>
            </button>
            <button
              type="button"
              onClick={() => onChangeBins(2)}
              className={`h-11 rounded-lg flex flex-col items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                totalBins === 2
                  ? 'bg-[#006A61] text-white shadow-xs'
                  : 'text-[#04264A]/70 hover:bg-slate-50'
              }`}
            >
              <span className="leading-none">{t.twoBins}</span>
              <span className="text-[10px] font-normal opacity-90 leading-none mt-0.5">
                {t.includedBadge}
              </span>
            </button>
            <button
              type="button"
              onClick={() => onChangeBins(Math.max(3, totalBins))}
              className={`h-11 rounded-lg flex flex-col items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                totalBins >= 3
                  ? 'bg-[#006A61] text-white shadow-xs'
                  : 'text-[#04264A]/70 hover:bg-slate-50'
              }`}
            >
              <span className="leading-none">{t.threePlusBins}</span>
              <span className="text-[10px] font-normal leading-none mt-0.5 text-[#0BA89A]">
                {t.perExtraBin}
              </span>
            </button>
          </div>

          {/* Stepper when 3 or more bins are selected */}
          {totalBins >= 3 && (
            <div className="flex items-center justify-between pt-1 px-1">
              <span className="text-xs font-semibold text-[#04264A]">
                Exact bin count:
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onChangeBins(Math.max(2, totalBins - 1))}
                  className="w-8 h-8 rounded-lg bg-white border border-[#04264A]/15 flex items-center justify-center text-[#04264A] hover:bg-slate-100 active:scale-95 transition-all cursor-pointer"
                  aria-label="Decrease bins"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-base font-extrabold text-[#04264A] w-6 text-center tabular-nums">
                  {totalBins}
                </span>
                <button
                  type="button"
                  onClick={() => onChangeBins(Math.min(6, totalBins + 1))}
                  className="w-8 h-8 rounded-lg bg-[#0BA89A] flex items-center justify-center text-white hover:bg-[#099185] active:scale-95 transition-all shadow-xs cursor-pointer"
                  aria-label="Increase bins"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Guarantee Banner */}
        <div className="bg-white rounded-xl p-3 flex items-center gap-3 border border-[#04264A]/6 shadow-xs">
          <div className="w-9 h-9 rounded-full bg-[#E6F6F4] flex items-center justify-center shrink-0 text-[#0BA89A]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-bold text-[#04264A]">{t.sparkleGuaranteeTitle}</span>
            <span className="text-[11px] text-[#04264A]/70 truncate">
              {t.sparkleGuaranteeDesc}
            </span>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md px-5 py-3 border-t border-[#04264A]/8 shadow-[0_-4px_20px_rgba(4,38,74,0.06)]">
        <div className="max-w-md mx-auto flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#04264A]/60">
                {t.dueToday}
              </span>
              <span className="text-xl font-extrabold text-[#04264A]">
                ${totalPrice}{' '}
                <span className="text-xs font-normal text-[#04264A]/60">({t.forThreeMonths})</span>
              </span>
            </div>
            <span className="text-xs font-bold text-[#0BA89A] bg-[#E6F6F4] px-2.5 py-1 rounded-full">
              {totalBins} {totalBins === 1 ? t.oneBin : t.twoBins} ({extraBinsCount > 0 ? `+${extraBinsCount} extra` : t.includedBadge})
            </span>
          </div>

          <button
            type="button"
            onClick={onContinue}
            className="w-full h-14 bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white font-bold text-base rounded-2xl flex items-center justify-center gap-2 shadow-[0_8px_20px_-4px_rgba(11,168,154,0.4)] transition-all cursor-pointer"
          >
            <span>{t.continue}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
