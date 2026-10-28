import React from 'react';
import {
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  CalendarCheck,
  Leaf,
  HeartHandshake,
  MapPin,
  ArrowRight,
  Target,
  Users,
} from 'lucide-react';
import { LimpiLogo } from '../LimpiLogo';
import { LanguageSelector } from '../LanguageSelector';
import { useLanguage } from '../../context/LanguageContext';

interface AboutScreenProps {
  onBack?: () => void;
  showBack?: boolean;
  onBookVisit: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({
  onBack,
  showBack = false,
  onBookVisit,
}) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-28">
      {/* Top Bar with Language Selector and Optional Back Arrow */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xl border-b border-[#04264A]/6 px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {showBack && onBack ? (
            <button
              type="button"
              onClick={onBack}
              aria-label="Back to Welcome"
              className="w-10 h-10 -ml-1 rounded-full flex items-center justify-center text-[#04264A] hover:bg-[#E6F6F4] active:scale-95 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.2]" />
            </button>
          ) : (
            <LimpiLogo size="sm" showWordmark={true} orientation="horizontal" />
          )}

          <h1 className="text-base font-bold text-[#04264A] tracking-tight">
            {t.aboutLimpiTitle}
          </h1>
        </div>

        <LanguageSelector />
      </header>

      {/* Main Scrollable Content */}
      <main className="flex-1 px-5 pt-5 max-w-md mx-auto w-full flex flex-col gap-5">
        {/* 1. Header Hero Card */}
        <div className="flex flex-col items-center text-center py-4 bg-white rounded-3xl border border-[#04264A]/6 shadow-[0_4px_20px_rgba(4,38,74,0.03)] p-6">
          <div className="relative mb-3 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#0BA89A]/15 rounded-full blur-xl scale-125" />
            <LimpiLogo size="lg" showWordmark={false} />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F6F4] text-[#0BA89A] text-xs font-bold tracking-wide mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{t.ecoSanitizing}</span>
          </span>

          <h2 className="text-2xl font-extrabold text-[#04264A] tracking-tight mb-1">
            {t.aboutLimpiTitle}
          </h2>
          <p className="text-xs font-semibold text-[#0BA89A] tracking-wide uppercase">
            {t.servingLehigh}
          </p>
        </div>

        {/* 2. Our Mission */}
        <section className="bg-[#E6F6F4]/70 border border-[#0BA89A]/15 rounded-3xl p-5 shadow-[0_4px_16px_rgba(4,38,74,0.03)]">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#0BA89A] shadow-xs border border-[#0BA89A]/15">
              <Target className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 className="text-lg font-extrabold text-[#04264A]">
              {t.aboutOurMissionTitle}
            </h3>
          </div>
          <p className="text-sm text-[#04264A]/80 leading-relaxed font-normal">
            {t.aboutOurMissionText}
          </p>
        </section>

        {/* 3. What We Do */}
        <section className="bg-[#E6F6F4]/70 border border-[#0BA89A]/15 rounded-3xl p-5 shadow-[0_4px_16px_rgba(4,38,74,0.03)]">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#0BA89A] shadow-xs border border-[#0BA89A]/15">
              <Sparkles className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 className="text-lg font-extrabold text-[#04264A]">
              {t.aboutWhatWeDoTitle}
            </h3>
          </div>
          <p className="text-sm text-[#04264A]/80 leading-relaxed font-normal">
            {t.aboutWhatWeDoText}
          </p>
        </section>

        {/* 4. Our Promise (3 icon cards) */}
        <section className="flex flex-col gap-3">
          <div className="px-1">
            <h3 className="text-lg font-extrabold text-[#04264A]">
              {t.aboutOurPromiseTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {/* Promise Card 1: Easy booking */}
            <div className="bg-white border border-[#04264A]/8 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs transition-all hover:border-[#0BA89A]/30">
              <div className="w-11 h-11 rounded-2xl bg-[#E6F6F4] flex items-center justify-center text-[#0BA89A] shrink-0">
                <CalendarCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-[#04264A]">
                  {t.aboutPromiseEasyBooking}
                </h4>
                <p className="text-xs text-[#04264A]/65 mt-0.5 leading-snug">
                  {t.aboutPromiseEasyBookingDesc}
                </p>
              </div>
            </div>

            {/* Promise Card 2: Reliable service */}
            <div className="bg-white border border-[#04264A]/8 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs transition-all hover:border-[#0BA89A]/30">
              <div className="w-11 h-11 rounded-2xl bg-[#E6F6F4] flex items-center justify-center text-[#0BA89A] shrink-0">
                <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-[#04264A]">
                  {t.aboutPromiseReliable}
                </h4>
                <p className="text-xs text-[#04264A]/65 mt-0.5 leading-snug">
                  {t.aboutPromiseReliableDesc}
                </p>
              </div>
            </div>

            {/* Promise Card 3: Eco-conscious cleaning */}
            <div className="bg-white border border-[#04264A]/8 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs transition-all hover:border-[#0BA89A]/30">
              <div className="w-11 h-11 rounded-2xl bg-[#E6F6F4] flex items-center justify-center text-[#0BA89A] shrink-0">
                <Leaf className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-[#04264A]">
                  {t.aboutPromiseEco}
                </h4>
                <p className="text-xs text-[#04264A]/65 mt-0.5 leading-snug">
                  {t.aboutPromiseEcoDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Space for Team or Community Photo */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E6F6F4] to-[#c7eee9] border border-[#0BA89A]/20 p-5 shadow-[0_6px_24px_rgba(11,168,154,0.08)]">
          <div className="flex flex-col items-center text-center">
            {/* Visual badge/photo illustration representation */}
            <div className="w-full h-36 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-inner flex flex-col items-center justify-center p-4 relative overflow-hidden group">
              {/* Background graphic accents */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#0BA89A]/15 rounded-full blur-xl" />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-[#04264A]/10 rounded-full blur-xl" />

              <div className="w-12 h-12 rounded-full bg-[#E6F6F4] border-2 border-white shadow-xs flex items-center justify-center text-[#0BA89A] mb-2 z-10">
                <Users className="w-6 h-6 stroke-[2.2]" />
              </div>
              <p className="text-xs font-extrabold text-[#04264A] tracking-tight z-10">
                Limpi Community & Local Crew
              </p>
              <p className="text-[11px] text-[#04264A]/70 mt-0.5 z-10">
                Dedicated technicians serving neighborhoods across Lehigh Acres
              </p>
            </div>

            <p className="text-[11px] font-semibold text-[#006A61] mt-3">
              {t.aboutCommunityPhotoCaption}
            </p>
          </div>
        </section>

        {/* 5. Giving Back */}
        <section className="bg-[#E6F6F4]/70 border border-[#0BA89A]/15 rounded-3xl p-5 shadow-[0_4px_16px_rgba(4,38,74,0.03)]">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#0BA89A] shadow-xs border border-[#0BA89A]/15">
              <HeartHandshake className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 className="text-lg font-extrabold text-[#04264A]">
              {t.aboutGivingBackTitle}
            </h3>
          </div>
          <p className="text-sm text-[#04264A]/80 leading-relaxed font-normal">
            {t.aboutGivingBackText}
          </p>
        </section>

        {/* 6. Serving Lehigh Acres */}
        <section className="bg-white border border-[#04264A]/8 rounded-3xl p-5 shadow-[0_4px_16px_rgba(4,38,74,0.03)] flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-[#E6F6F4] flex items-center justify-center text-[#0BA89A] shrink-0 mt-0.5">
            <MapPin className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-extrabold text-[#04264A]">
              {t.aboutServingLehighTitle}
            </h3>
            <p className="text-sm font-medium text-[#04264A]/75 mt-1 leading-snug">
              {t.aboutServingLehighText}
            </p>
          </div>
        </section>

        {/* 7. Button at the bottom: "Book a Visit" */}
        <div className="pt-2 pb-4">
          <button
            type="button"
            onClick={onBookVisit}
            className="w-full h-14 bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white font-extrabold text-base rounded-2xl flex items-center justify-center gap-2 shadow-[0_8px_20px_-4px_rgba(11,168,154,0.4)] transition-all cursor-pointer"
          >
            <span>{t.aboutBookVisitBtn}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </main>
    </div>
  );
};
