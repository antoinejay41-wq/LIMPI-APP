import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Check, PlusCircle } from 'lucide-react';
import { ScreenHeader } from '../ScreenHeader';
import { useLanguage } from '../../context/LanguageContext';

interface HowLimpiWorksScreenProps {
  onBack: () => void;
  onContinue: () => void;
}

export const HowLimpiWorksScreen: React.FC<HowLimpiWorksScreenProps> = ({
  onBack,
  onContinue,
}) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-28">
      <ScreenHeader
        title={t.howItWorksHeader}
        showBack={true}
        onBack={onBack}
      />

      <main className="flex-1 px-5 pt-4 max-w-md mx-auto w-full flex flex-col gap-5">
        {/* Header Section */}
        <div className="flex flex-col gap-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F6F4] text-[#0BA89A] w-fit text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{t.simpleAutomated}</span>
          </div>
          <h2 className="text-2xl font-extrabold text-[#04264A] tracking-tight">
            {t.howItWorksHeader}
          </h2>
          <p className="text-sm text-[#04264A]/70 leading-relaxed">
            {t.howItWorksSubtitle}
          </p>
        </div>

        {/* 3 Steps Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs uppercase tracking-wider font-bold text-[#04264A]/60 px-1">
            {t.howItWorksTitle}
          </h3>

          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(4,38,74,0.04)] flex items-start gap-3.5 border border-[#04264A]/6">
            <div className="w-10 h-10 rounded-full bg-[#0BA89A] flex items-center justify-center shrink-0 text-white font-extrabold text-base shadow-sm">
              1
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-base font-bold text-[#04264A]">{t.step1Title}</span>
              <p className="text-sm text-[#04264A]/70 mt-0.5 leading-snug">
                {t.step1Desc}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(4,38,74,0.04)] flex items-start gap-3.5 border border-[#04264A]/6">
            <div className="w-10 h-10 rounded-full bg-[#0BA89A] flex items-center justify-center shrink-0 text-white font-extrabold text-base shadow-sm">
              2
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-base font-bold text-[#04264A]">{t.step2Title}</span>
              <p className="text-sm text-[#04264A]/70 mt-0.5 leading-snug">
                {t.step2Desc}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(4,38,74,0.04)] flex items-start gap-3.5 border border-[#04264A]/6">
            <div className="w-10 h-10 rounded-full bg-[#0BA89A] flex items-center justify-center shrink-0 text-white font-extrabold text-base shadow-sm">
              3
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-base font-bold text-[#04264A]">{t.step3Title}</span>
              <p className="text-sm text-[#04264A]/70 mt-0.5 leading-snug">
                {t.step3Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="bg-[#E6F6F4]/70 border border-[#0BA89A]/20 rounded-2xl p-5 shadow-[0_4px_20px_rgba(11,168,154,0.08)] flex flex-col gap-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#0BA89A] text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              Eco & UV Clean
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0BA89A] text-white text-xs font-bold shadow-xs">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              {t.threeMonthPlan}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-[#04264A] tracking-tight">
                $79.95
              </span>
              <span className="text-sm font-semibold text-[#04264A]/70">{t.forThreeMonths}</span>
            </div>
            <p className="text-sm font-bold text-[#04264A] mt-1">
              {t.pricingCardTitle}
            </p>
            <p className="text-xs text-[#04264A]/65 leading-snug">
              {t.pricingCardDesc}
            </p>
          </div>

          {/* Extra Bins Note Card */}
          <div className="bg-white rounded-xl p-3.5 shadow-xs flex items-center justify-between gap-3 border border-[#04264A]/5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#E6F6F4] flex items-center justify-center text-[#0BA89A] shrink-0">
                <PlusCircle className="w-4 h-4 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#04264A]">
                  {t.extraBinsNote}
                </span>
                <span className="text-[11px] text-[#04264A]/65">
                  {t.extraBinsSubnote}
                </span>
              </div>
            </div>
            <span className="text-sm font-bold text-[#0BA89A] shrink-0">$15 each</span>
          </div>
        </div>

        {/* Trust Guarantee Banner */}
        <div className="bg-white rounded-xl p-3.5 flex items-center gap-3 border border-[#04264A]/6 shadow-xs">
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

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md px-5 py-3 border-t border-[#04264A]/8 shadow-[0_-4px_20px_rgba(4,38,74,0.06)]">
        <div className="max-w-md mx-auto">
          <button
            type="button"
            onClick={onContinue}
            className="w-full h-14 bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white font-bold text-base rounded-2xl flex items-center justify-center gap-2 shadow-[0_8px_20px_-4px_rgba(11,168,154,0.4)] transition-all cursor-pointer"
          >
            <span>{t.seePlansBtn}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
