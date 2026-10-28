import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock, Lightbulb, CheckCircle2, Sparkles, Gift } from 'lucide-react';
import { ScreenHeader } from '../ScreenHeader';
import { PlanType } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface PickDayScreenProps {
  planType: PlanType;
  selectedDay: string;
  onSelectDay: (day: string) => void;
  selectedWindow: string;
  onSelectWindow: (window: string) => void;
  freeVisitsLeft?: number;
  onUseFreeVisit?: () => void;
  onBack: () => void;
  onContinue: () => void;
}

export const PickDayScreen: React.FC<PickDayScreenProps> = ({
  planType,
  selectedDay,
  onSelectDay,
  selectedWindow,
  onSelectWindow,
  freeVisitsLeft = 5,
  onUseFreeVisit,
  onBack,
  onContinue,
}) => {
  const { t, language } = useLanguage();
  const [showBonusModal, setShowBonusModal] = useState(false);
  const [bonusDay, setBonusDay] = useState('Friday');
  const [bonusScheduledSuccess, setBonusScheduledSuccess] = useState(false);

  const daysByLang: Record<string, { id: string; name: string; note: string }[]> = {
    en: [
      { id: 'Monday', name: 'Monday', note: 'North Lehigh / Lee Blvd North' },
      { id: 'Tuesday', name: 'Tuesday', note: 'Central Lehigh / Homestead' },
      { id: 'Wednesday', name: 'Wednesday', note: 'Sunshine Blvd Corridor' },
      { id: 'Thursday', name: 'Thursday', note: 'South Lehigh / Gunnery' },
      { id: 'Friday', name: 'Friday', note: 'East Lehigh / Joel Blvd' },
    ],
    es: [
      { id: 'Monday', name: 'Lunes', note: 'Norte de Lehigh / Lee Blvd Norte' },
      { id: 'Tuesday', name: 'Martes', note: 'Centro de Lehigh / Homestead' },
      { id: 'Wednesday', name: 'Miércoles', note: 'Corredor Sunshine Blvd' },
      { id: 'Thursday', name: 'Jueves', note: 'Sur de Lehigh / Gunnery' },
      { id: 'Friday', name: 'Viernes', note: 'Este de Lehigh / Joel Blvd' },
    ],
    ht: [
      { id: 'Monday', name: 'Lendi', note: 'Nò Lehigh / Lee Blvd Nò' },
      { id: 'Tuesday', name: 'Madi', note: 'Sant Lehigh / Homestead' },
      { id: 'Wednesday', name: 'Mèkredi', note: 'Zòn Sunshine Blvd' },
      { id: 'Thursday', name: 'Jedi', note: 'Sid Lehigh / Gunnery' },
      { id: 'Friday', name: 'Vandredi', note: 'Lès Lehigh / Joel Blvd' },
    ],
  };

  const days = daysByLang[language] || daysByLang.en;

  const windows = [
    {
      id: 'Morning Window (7:30 AM - 11:30 AM)',
      title: t.morningWindow.split('(')[0].trim(),
      time: '7:30 AM – 11:30 AM',
      badge: language === 'es' ? 'Popular' : language === 'ht' ? 'Popilè' : 'Popular',
    },
    {
      id: 'Afternoon Window (12:00 PM - 4:00 PM)',
      title: t.afternoonWindow.split('(')[0].trim(),
      time: '12:00 PM – 4:00 PM',
      badge: null,
    },
  ];

  const handleConfirmBonusVisit = () => {
    if (onUseFreeVisit) {
      onUseFreeVisit();
    }
    setBonusScheduledSuccess(true);
    setTimeout(() => {
      setBonusScheduledSuccess(false);
      setShowBonusModal(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-32">
      <ScreenHeader
        title={t.pickDayTitle}
        showBack={true}
        onBack={onBack}
        currentStep={3}
        totalSteps={4}
      />

      <main className="flex-1 px-5 pt-3 max-w-md mx-auto w-full flex flex-col gap-4">
        {/* Header Intro */}
        <div className="flex flex-col gap-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F6F4] text-[#006A61] w-fit text-xs font-bold shadow-2xs">
            <Calendar className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>
              {planType === 'annual'
                ? 'Annual Plan • 1 Visit / Month + 5 Bonus'
                : 'Single Visit Booking'}
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-[#04264A] tracking-tight">
            {planType === 'annual' ? t.pickMonthlyDayTitle : t.pickSingleDayTitle}
          </h2>
          <p className="text-sm text-[#04264A]/70 leading-relaxed">
            {planType === 'annual' ? t.pickMonthlyDaySubtitle : t.pickSingleDaySubtitle}
          </p>
        </div>

        {/* ANNUAL PLAN BONUS VISITS CARD & BUTTON */}
        {planType === 'annual' && (
          <div className="bg-[#E6F6F4]/80 border border-[#0BA89A]/30 rounded-2xl p-4 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#0BA89A] text-white flex items-center justify-center shadow-xs">
                  <Gift className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-extrabold text-[#04264A]">
                    {t.freeVisitsLeft}: <span className="text-[#0BA89A] font-black text-sm">{freeVisitsLeft}</span>
                  </span>
                  <span className="text-[11px] text-[#04264A]/60">
                    5 free bonus visits included in your annual plan
                  </span>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full bg-white text-[#0BA89A] text-[10px] font-black uppercase shadow-2xs">
                Free Bonus
              </span>
            </div>

            <button
              type="button"
              onClick={() => setShowBonusModal(true)}
              className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-[#0BA89A]/30 text-[#0BA89A] font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer transition-all active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0BA89A]" />
              <span>{t.useFreeVisitBtn}</span>
            </button>
          </div>
        )}

        {/* Days List */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-[#04264A] uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#0BA89A]" />
              {t.serviceDayLabel}
            </span>
            <span className="text-[11px] text-[#04264A]/60">
              {t.matchesTrashDay}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {days.map((day) => {
              const isSelected = selectedDay === day.id;
              return (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => onSelectDay(day.id)}
                  className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#E6F6F4] border-[#0BA89A] shadow-xs'
                      : 'bg-white border-[#04264A]/10 hover:border-[#04264A]/25'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                        isSelected
                          ? 'bg-[#0BA89A] text-white shadow-xs'
                          : 'bg-[#04264A]/5 text-[#04264A]'
                      }`}
                    >
                      {day.name.slice(0, 3)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#04264A]">
                        {day.name}
                      </span>
                      <span className="text-[11px] text-[#04264A]/60">
                        {day.note}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#0BA89A] text-white' : 'border border-[#04264A]/30'
                    }`}
                  >
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Window Selection */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-[#04264A] uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#0BA89A]" />
              {t.timeWindowLabel}
            </span>
            <span className="text-[11px] text-[#0BA89A] font-bold">
              {planType === 'annual' ? 'Monthly recurring' : 'Single booking'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {windows.map((w) => {
              const isSelected = selectedWindow === w.id;
              return (
                <button
                  key={w.id}
                  type="button"
                  onClick={() => onSelectWindow(w.id)}
                  className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all min-h-[96px] cursor-pointer relative ${
                    isSelected
                      ? 'bg-[#E6F6F4] border-[#0BA89A] shadow-xs'
                      : 'bg-white border-[#04264A]/10 hover:border-[#04264A]/25'
                  }`}
                >
                  {w.badge && (
                    <span className="absolute top-2 right-2 text-[10px] font-bold text-[#0BA89A] bg-white px-2 py-0.5 rounded-full shadow-2xs">
                      {w.badge}
                    </span>
                  )}
                  <div>
                    <span className="text-xs font-bold text-[#04264A] block">
                      {w.title}
                    </span>
                    <span className="text-[11px] font-semibold text-[#0BA89A] mt-0.5 block">
                      {w.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[10px] text-[#04264A]/60">
                      Standard
                    </span>
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-[#0BA89A] text-white' : 'border border-[#04264A]/30'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-3 h-3" />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Curbside Placement Reminder */}
        <div className="bg-[#E6F6F4]/50 border border-[#0BA89A]/20 rounded-2xl p-3.5 flex items-start gap-3 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-[#0BA89A] flex items-center justify-center shrink-0 text-white shadow-xs">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-bold text-[#04264A]">{t.curbsideReminderTitle}</span>
            <p className="text-[11px] text-[#04264A]/70 mt-0.5 leading-relaxed">
              {t.curbsideReminderDesc}
            </p>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md px-5 py-3 border-t border-[#04264A]/8 shadow-[0_-4px_20px_rgba(4,38,74,0.06)]">
        <div className="max-w-md mx-auto">
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

      {/* SCHEDULE BONUS VISIT MODAL */}
      {showBonusModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#04264A]/60 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-sm p-5 shadow-2xl flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-[#E6F6F4] text-[#0BA89A] flex items-center justify-center shadow-xs">
                <Gift className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-extrabold text-[#04264A]">
                  {t.useFreeVisitBtn}
                </h3>
                <span className="text-xs text-[#0BA89A] font-bold">
                  {t.freeVisitsLeft}: {freeVisitsLeft}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#04264A]/70 leading-relaxed">
              Schedule an extra curbside cleaning anytime using one of your 5 included bonus visits with zero charge.
            </p>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-[#04264A]">Select bonus day:</span>
              <div className="grid grid-cols-1 gap-1.5">
                {days.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setBonusDay(d.id)}
                    className={`p-2.5 rounded-xl text-left text-xs font-bold flex items-center justify-between cursor-pointer transition-all ${
                      bonusDay === d.id
                        ? 'bg-[#E6F6F4] text-[#006A61] border border-[#0BA89A]'
                        : 'bg-slate-50 text-[#04264A] hover:bg-slate-100'
                    }`}
                  >
                    <span>{d.name} ({d.note.split('/')[0].trim()})</span>
                    {bonusDay === d.id && <CheckCircle2 className="w-4 h-4 text-[#0BA89A]" />}
                  </button>
                ))}
              </div>
            </div>

            {bonusScheduledSuccess ? (
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold text-center">
                ✓ {t.bonusVisitScheduled}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowBonusModal(false)}
                  className="h-11 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#04264A] font-bold text-xs cursor-pointer"
                >
                  {t.cancel}
                </button>
                <button
                  type="button"
                  onClick={handleConfirmBonusVisit}
                  className="h-11 rounded-xl bg-[#0BA89A] hover:bg-[#099185] text-white font-bold text-xs shadow-xs cursor-pointer"
                >
                  Confirm Free Visit
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
