import React, { useState } from 'react';
import { Calendar, Clock, Trash2, MapPin, Sparkles, CheckCircle2, RefreshCw, AlertCircle } from 'lucide-react';
import { ScreenHeader } from '../ScreenHeader';
import { BookingState } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { translateDateString, DAYS_BY_LANG, translateDay } from '../../i18n/dateUtils';

interface VisitDetailScreenProps {
  booking: BookingState;
  onBack: () => void;
  onRescheduled: (newDay: string) => void;
}

export const VisitDetailScreen: React.FC<VisitDetailScreenProps> = ({
  booking,
  onBack,
  onRescheduled,
}) => {
  const { t, language } = useLanguage();
  const [isRescheduling, setIsRescheduling] = useState(false);
  const [selectedNewDay, setSelectedNewDay] = useState(booking.selectedDay || 'Tuesday');
  const [rescheduleSuccess, setRescheduleSuccess] = useState(false);

  const days = DAYS_BY_LANG[language] || DAYS_BY_LANG.en;
  const rawDate = booking.firstCleaningDate || `${booking.selectedDay || 'Tuesday'}, Oct 24`;
  const cleanDate = translateDateString(rawDate, language);

  const handleConfirmReschedule = () => {
    onRescheduled(selectedNewDay);
    setRescheduleSuccess(true);
    setTimeout(() => {
      setIsRescheduling(false);
      setRescheduleSuccess(false);
    }, 1500);
  };

  const selectedDayLocalized = translateDay(selectedNewDay, language);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-12">
      <ScreenHeader
        title={t.visitDetailTitle}
        showBack={true}
        onBack={onBack}
        avatarUrl={booking.user.avatarUrl}
        userName={booking.user.fullName}
      />

      <main className="flex-1 px-5 pt-4 max-w-md mx-auto w-full flex flex-col gap-4">
        {/* Status Badge */}
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase font-bold text-[#0BA89A] tracking-wider">
            {t.confirmedRouteService}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#E6F6F4] text-[#006A61] text-xs font-bold border border-[#0BA89A]/20 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {t.activeBadge}
          </span>
        </div>

        {/* Hero Card */}
        <div className="bg-[#E6F6F4]/75 border border-[#0BA89A]/25 rounded-3xl p-5 shadow-sm flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-[#04264A] tracking-tight">
                {cleanDate}
              </h2>
              <p className="text-xs text-[#04264A]/70 flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-[#0BA89A]" />
                {booking.timeWindow || t.morningWindow}
              </p>
            </div>
            <span className="px-2.5 py-1 bg-white text-[#04264A] text-[11px] font-bold rounded-full shadow-2xs">
              Route #4B
            </span>
          </div>

          <div className="pt-2 border-t border-[#04264A]/8 space-y-2 text-xs text-[#04264A]">
            <div className="flex items-center gap-2">
              <Trash2 className="w-4 h-4 text-[#0BA89A]" />
              <span className="font-bold">
                {booking.totalBins} {booking.totalBins === 1 ? t.oneBin : t.twoBins} ({booking.totalBins <= 2 ? t.includedBadge : `${booking.totalBins - 2} ${t.threePlusBins}`})
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0BA89A]" />
              <span className="truncate">
                {booking.address.street}, Lehigh Acres, FL
              </span>
            </div>
          </div>
        </div>

        {/* Service Scope Card */}
        <div className="bg-white rounded-2xl p-4 border border-[#04264A]/8 shadow-xs flex flex-col gap-2.5">
          <span className="text-xs font-extrabold text-[#04264A] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#0BA89A]" />
            {t.twoServicesIncluded}
          </span>
          <div className="space-y-2 text-xs text-[#04264A]/75 pl-1">
            <div className="flex items-start gap-2">
              <span className="text-[#0BA89A] font-bold">•</span>
              <span>{t.service1Desc}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0BA89A] font-bold">•</span>
              <span>{t.service2Desc}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0BA89A] font-bold">•</span>
              <span>{t.cleanGuaranteeTag}</span>
            </div>
          </div>
        </div>

        {/* Reschedule Section */}
        {isRescheduling ? (
          <div className="bg-white rounded-2xl p-4 border border-[#0BA89A]/30 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#04264A]">
                {t.selectNewServiceDay}
              </span>
              <button
                type="button"
                onClick={() => setIsRescheduling(false)}
                className="text-xs text-[#04264A]/60 hover:underline cursor-pointer"
              >
                {t.cancel}
              </button>
            </div>

            <div className="grid grid-cols-1 gap-1.5">
              {days.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setSelectedNewDay(d.id)}
                  className={`p-2.5 rounded-xl text-left text-xs font-bold transition-colors flex items-center justify-between cursor-pointer ${
                    selectedNewDay === d.id
                      ? 'bg-[#E6F6F4] text-[#006A61] border border-[#0BA89A]'
                      : 'bg-slate-50 text-[#04264A] hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{d.name}</span>
                    <span className="text-[10px] text-[#04264A]/50">({d.note.split('/')[0].trim()})</span>
                  </div>
                  {selectedNewDay === d.id && (
                    <CheckCircle2 className="w-4 h-4 text-[#0BA89A]" />
                  )}
                </button>
              ))}
            </div>

            {rescheduleSuccess ? (
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold text-center">
                ✓ {language === 'es' ? `Reprogramado para el ${selectedDayLocalized}` : language === 'ht' ? `Chanje pou ${selectedDayLocalized}` : `Rescheduled to ${selectedDayLocalized}`}!
              </div>
            ) : (
              <button
                type="button"
                onClick={handleConfirmReschedule}
                className="w-full h-12 bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
              >
                {t.confirmRescheduledBtn}
              </button>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-4 border border-[#04264A]/8 shadow-xs flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#04264A] block">
                  {t.rescheduleVisitBtn}
                </span>
                <span className="text-[11px] text-[#04264A]/60">
                  {t.matchesTrashDay}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsRescheduling(true)}
              className="w-full h-12 bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white font-bold text-xs rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>{t.rescheduleVisitBtn}</span>
            </button>
          </div>
        )}

        {/* Commitment notice */}
        <div className="p-3.5 rounded-2xl bg-slate-100/70 text-[11px] text-[#04264A]/70 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-[#04264A]/50 shrink-0 mt-0.5" />
          <span>
            {t.importantCommitmentRuleDesc}
          </span>
        </div>
      </main>
    </div>
  );
};
