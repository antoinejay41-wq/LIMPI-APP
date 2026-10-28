import React from 'react';
import { ArrowRight, Check, ShieldCheck, Plus, Minus, Sparkles, Tag, PlusCircle, Gift } from 'lucide-react';
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
  onOpenGiveawayRules?: () => void;
}

export const PlanScreen: React.FC<PlanScreenProps> = ({
  selectedPlan,
  onSelectPlan,
  totalBins,
  onChangeBins,
  onBack,
  onContinue,
  onOpenGiveawayRules,
}) => {
  const { t } = useLanguage();
  const basePrice = selectedPlan === 'single' ? 19.99 : 239.99;
  const extraBinsCount = Math.max(0, totalBins - 2);
  const extraCost = extraBinsCount * 10;
  const totalPrice = (basePrice + extraCost).toFixed(2);

  const handleSelectAndProceed = (plan: PlanType) => {
    onSelectPlan(plan);
    // Clicking the card button can select and directly proceed or highlight
    onContinue();
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-32">
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F6F4] text-[#006A61] w-fit text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Limpi Curbside Plans</span>
          </div>
          <h2 className="text-2xl font-extrabold text-[#04264A] tracking-tight">
            {t.selectPlanTitle}
          </h2>
          <p className="text-sm text-[#04264A]/70">
            {t.selectPlanSubtitle}
          </p>
        </div>

        {/* 2 Plan Cards */}
        <div className="flex flex-col gap-3.5">
          {/* Card 1: Single Visit */}
          <div
            onClick={() => onSelectPlan('single')}
            className={`cursor-pointer relative rounded-3xl p-5 transition-all duration-200 flex flex-col gap-3 border-2 ${
              selectedPlan === 'single'
                ? 'bg-[#E6F6F4]/70 border-[#0BA89A] shadow-[0_6px_24px_rgba(11,168,154,0.14)]'
                : 'bg-white border-[#04264A]/10 hover:border-[#04264A]/25 shadow-xs'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    selectedPlan === 'single'
                      ? 'bg-[#0BA89A] text-white shadow-xs'
                      : 'border-2 border-[#04264A]/30 text-transparent'
                  }`}
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#04264A]">
                    {t.singleVisitTitle}
                  </h3>
                  <span className="inline-block px-2 py-0.5 rounded-full bg-slate-100 text-[#04264A]/80 text-[11px] font-bold mt-0.5">
                    {t.singleVisitCommitment}
                  </span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-2xl font-black text-[#04264A]">$19.99</span>
                <p className="text-[11px] font-semibold text-[#04264A]/60">per visit</p>
              </div>
            </div>

            <p className="text-xs text-[#04264A]/75 leading-relaxed pl-9">
              {t.singleVisitDesc}
            </p>

            <div className="pt-2 pl-9">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectAndProceed('single');
                }}
                className={`w-full py-3 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  selectedPlan === 'single'
                    ? 'bg-[#0BA89A] text-white shadow-xs hover:bg-[#099185] active:scale-[0.98]'
                    : 'bg-white border border-[#0BA89A] text-[#0BA89A] hover:bg-[#E6F6F4]'
                }`}
              >
                <span>{t.singleVisitBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mint Giveaway Banner above Annual Plan Card */}
          <div className="bg-[#E6F6F4] border border-[#0BA89A]/30 rounded-2xl p-3 shadow-2xs flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white text-[#0BA89A] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
              <Gift className="w-4 h-4 stroke-[2.3]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-[#04264A] leading-snug">
                Join for 1 year and enter to win an outdoor grill, deep freezer, or toolbox set.
              </p>
              <div className="flex items-center justify-between gap-2 mt-1">
                <span className="text-[11px] font-semibold text-[#006A61]">
                  New clients only.
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenGiveawayRules?.();
                  }}
                  className="text-[11px] font-bold text-[#0BA89A] underline hover:text-[#099185] cursor-pointer"
                >
                  See giveaway rules
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Annual Plan (badge: Best Value) */}
          <div
            onClick={() => onSelectPlan('annual')}
            className={`cursor-pointer relative rounded-3xl p-5 transition-all duration-200 flex flex-col gap-3 border-2 ${
              selectedPlan === 'annual'
                ? 'bg-[#E6F6F4]/70 border-[#0BA89A] shadow-[0_6px_24px_rgba(11,168,154,0.14)]'
                : 'bg-white border-[#04264A]/10 hover:border-[#04264A]/25 shadow-xs'
            }`}
          >
            {/* Best Value Badge */}
            <div className="absolute -top-3 right-5">
              <span className="bg-[#04264A] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#0BA89A]" />
                {t.annualPlanBadge}
              </span>
            </div>

            <div className="flex items-start justify-between gap-2 pt-1">
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    selectedPlan === 'annual'
                      ? 'bg-[#0BA89A] text-white shadow-xs'
                      : 'border-2 border-[#04264A]/30 text-transparent'
                  }`}
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#04264A]">
                    {t.annualPlanTitle}
                  </h3>
                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#0BA89A]/15 text-[#006A61] text-[11px] font-bold mt-0.5">
                    {t.annualPlanCommitment}
                  </span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-2xl font-black text-[#0BA89A]">$239.99</span>
                <p className="text-[11px] font-semibold text-[#04264A]/60">for 1 year</p>
              </div>
            </div>

            <div className="pl-9 space-y-1.5 text-xs text-[#04264A]/80">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0BA89A]" />
                <span className="font-semibold">{t.annualPlanVisitRate}</span>
              </div>
              <div className="flex items-start gap-2 bg-white/90 p-2.5 rounded-xl border border-[#0BA89A]/20 text-[#006A61] font-bold">
                <Sparkles className="w-4 h-4 text-[#0BA89A] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {t.annualPlanBonusVisits}
                </span>
              </div>
            </div>

            <div className="pt-2 pl-9">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectAndProceed('annual');
                }}
                className={`w-full py-3 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  selectedPlan === 'annual'
                    ? 'bg-[#0BA89A] text-white shadow-xs hover:bg-[#099185] active:scale-[0.98]'
                    : 'bg-white border border-[#0BA89A] text-[#0BA89A] hover:bg-[#E6F6F4]'
                }`}
              >
                <span>{t.annualPlanBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* EXTRAS SECTION (Small Extras section under cards) */}
        <div className="bg-white rounded-3xl p-4.5 border border-[#04264A]/8 shadow-xs flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#E6F6F4] text-[#0BA89A] flex items-center justify-center">
                <Tag className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-sm font-extrabold text-[#04264A]">
                {t.extrasTitle}
              </h4>
            </div>
            <span className="text-[11px] font-bold text-[#0BA89A] bg-[#E6F6F4] px-2 py-0.5 rounded-full">
              {t.binsIncludedNote}
            </span>
          </div>

          <div className="space-y-2 pt-1 text-xs text-[#04264A]/80 leading-relaxed divide-y divide-[#04264A]/5">
            <div className="flex items-start gap-2 pt-1">
              <PlusCircle className="w-3.5 h-3.5 text-[#0BA89A] shrink-0 mt-0.5" />
              <span>{t.extraVisitsDesc}</span>
            </div>
            <div className="flex items-start gap-2 pt-2">
              <Sparkles className="w-3.5 h-3.5 text-[#0BA89A] shrink-0 mt-0.5" />
              <span className="font-semibold text-[#006A61]">{t.extraVisitsAnnualCover}</span>
            </div>
            <div className="flex items-start gap-2 pt-2">
              <span className="font-bold text-[#0BA89A] text-sm leading-none">•</span>
              <span>{t.extraBinsDesc} ({t.binsIncludedNote})</span>
            </div>
          </div>
        </div>

        {/* Number of Bins Selector */}
        <div className="bg-[#E6F6F4]/50 border border-[#0BA89A]/15 rounded-3xl p-4 shadow-xs flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#04264A]">{t.numberOfBinsTitle}</span>
              <span className="text-xs text-[#04264A]/65">
                {totalBins <= 2 ? t.binsIncludedDesc : `${extraBinsCount} extra bin(s) added (+$${extraCost})`}
              </span>
            </div>
            <span className="text-xs font-bold text-[#0BA89A] bg-white px-2.5 py-1 rounded-full shadow-2xs">
              {totalBins <= 2 ? t.includedBadge : `+$${extraCost}`}
            </span>
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
                +$10 each
              </span>
            </button>
          </div>

          {/* Stepper when 3 or more bins are selected */}
          {totalBins >= 3 && (
            <div className="flex items-center justify-between pt-1 px-1">
              <span className="text-xs font-semibold text-[#04264A]">
                Exact bin count ($10/extra bin):
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
        <div className="bg-white rounded-2xl p-3.5 flex items-center gap-3 border border-[#04264A]/6 shadow-xs">
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

      {/* Sticky Bottom Bar with Continue Button */}
      <div className="fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md px-5 py-3 border-t border-[#04264A]/8 shadow-[0_-4px_20px_rgba(4,38,74,0.06)]">
        <div className="max-w-md mx-auto flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#04264A]/60">
                {t.dueToday}
              </span>
              <span className="text-xl font-extrabold text-[#04264A]">
                ${totalPrice}{' '}
                <span className="text-xs font-normal text-[#04264A]/60">
                  ({selectedPlan === 'single' ? 'Single Visit' : '1 Year Annual Plan'})
                </span>
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
