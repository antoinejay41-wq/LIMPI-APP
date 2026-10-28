import React from 'react';
import { Gift, Sparkles, CheckCircle2, Trophy, Clock, HelpCircle, ArrowLeft, ShieldCheck } from 'lucide-react';
import { GiveawayPrizesDisplay } from '../GiveawayPrizesDisplay';

interface GiveawayRulesScreenProps {
  onBack: () => void;
}

export const GiveawayRulesScreen: React.FC<GiveawayRulesScreenProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-12">
      {/* Top Header */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-[#04264A]/8 px-4 py-3.5 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-[#E6F6F4] text-[#04264A] hover:text-[#0BA89A] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <h1 className="text-base font-extrabold text-[#04264A]">
          Gift Giveaway Rules
        </h1>

        <div className="w-10 h-10 rounded-xl bg-[#E6F6F4] text-[#0BA89A] flex items-center justify-center">
          <Gift className="w-5 h-5 stroke-[2.2]" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-5 pt-4 max-w-md mx-auto w-full flex flex-col gap-4">
        {/* Banner Card */}
        <div className="bg-[#E6F6F4] border border-[#0BA89A]/20 rounded-3xl p-5 shadow-xs flex flex-col gap-2 relative overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#006A61] w-fit text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0BA89A]" />
            <span>Exclusive Annual Member Giveaway</span>
          </div>

          <h2 className="text-xl font-black text-[#04264A] tracking-tight leading-snug">
            New clients who commit to 1 year get a chance to win one of 3 gifts!
          </h2>

          <p className="text-xs text-[#04264A]/75 leading-relaxed">
            Sign up for the Limpi 1-year Annual Plan and automatically enter our special drawing to take home an outdoor grill, deep freezer, or toolbox set.
          </p>
        </div>

        {/* Section 1: Who Can Enter */}
        <div className="bg-white rounded-3xl p-4.5 border border-[#04264A]/8 shadow-xs flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#E6F6F4] text-[#0BA89A] flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
            </div>
            <h3 className="text-sm font-extrabold text-[#04264A]">
              Who Can Enter
            </h3>
          </div>
          <p className="text-xs text-[#04264A]/80 leading-relaxed pl-10">
            Open exclusively to <strong className="text-[#04264A]">new clients who commit to the 1-year Annual Plan</strong> in Lehigh Acres, Florida. Entry is automatic upon activating an Annual Plan. Single Visit bookings are not eligible.
          </p>
        </div>

        {/* Section 2: Prizes */}
        <div className="bg-white rounded-3xl p-4.5 border border-[#04264A]/8 shadow-xs flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#E6F6F4] text-[#0BA89A] flex items-center justify-center">
                <Trophy className="w-4 h-4 text-[#0BA89A]" />
              </div>
              <h3 className="text-sm font-extrabold text-[#04264A]">
                The Prizes (Choose or Win 1 of 3)
              </h3>
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E6F6F4] text-[#006A61]">
              3 Gifts
            </span>
          </div>

          <GiveawayPrizesDisplay />
        </div>

        {/* Section 3: How Winners Are Chosen */}
        <div className="bg-white rounded-3xl p-4.5 border border-[#04264A]/8 shadow-xs flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#E6F6F4] text-[#0BA89A] flex items-center justify-center">
              <HelpCircle className="w-4 h-4 stroke-[2.5]" />
            </div>
            <h3 className="text-sm font-extrabold text-[#04264A]">
              How Winners Are Chosen
            </h3>
          </div>
          <p className="text-xs text-[#04264A]/80 leading-relaxed pl-10">
            Winners are selected through a verified random drawing from all qualified new Annual Plan subscribers who have completed registration during the promotional period. Each new annual subscription receives 1 entry.
          </p>
        </div>

        {/* Section 4: When Winners Are Announced */}
        <div className="bg-white rounded-3xl p-4.5 border border-[#04264A]/8 shadow-xs flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#E6F6F4] text-[#0BA89A] flex items-center justify-center">
              <Clock className="w-4 h-4 stroke-[2.5]" />
            </div>
            <h3 className="text-sm font-extrabold text-[#04264A]">
              When Winners Are Announced
            </h3>
          </div>
          <p className="text-xs text-[#04264A]/80 leading-relaxed pl-10">
            Winners will be contacted directly via email and phone within 14 days following the drawing date. Limpi will arrange complimentary curbside delivery of your selected prize directly to your Lehigh Acres residence.
          </p>
        </div>

        {/* Placeholder Note: Official rules to be added */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#04264A]/70">
            <ShieldCheck className="w-4 h-4 text-[#0BA89A]" />
            <span>Official rules to be added.</span>
          </div>
          <p className="text-[11px] text-[#04264A]/50">
            Promotion terms subject to local laws and regulations. No cash substitute.
          </p>
        </div>

        {/* Bottom Back Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onBack}
            className="w-full h-12 bg-[#04264A] hover:bg-[#063363] active:scale-[0.98] text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Limpi</span>
          </button>
        </div>
      </main>
    </div>
  );
};
