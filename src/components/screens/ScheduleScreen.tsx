import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Trash2,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  History,
  Gift,
  PlusCircle,
} from 'lucide-react';
import { ScreenHeader } from '../ScreenHeader';
import { BookingState } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { translateDateString, translateMonth, translateCompletedTime } from '../../i18n/dateUtils';

interface ScheduleScreenProps {
  booking: BookingState;
  onNavigateToAccount: () => void;
  onManageVisit: () => void;
  onBookAnotherVisit?: () => void;
  onUseFreeVisit?: () => void;
  onOpenAvatar?: () => void;
}

export const ScheduleScreen: React.FC<ScheduleScreenProps> = ({
  booking,
  onNavigateToAccount,
  onManageVisit,
  onBookAnotherVisit,
  onUseFreeVisit,
  onOpenAvatar,
}) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [showBonusModal, setShowBonusModal] = useState(false);
  const [bonusScheduledSuccess, setBonusScheduledSuccess] = useState(false);
  const [bonusDay, setBonusDay] = useState('Friday');

  const rawFirstDate = booking.firstCleaningDate || `${booking.selectedDay || 'Tuesday'}, Oct 24`;
  const isAnnual = booking.planType === 'annual';
  const freeVisits = booking.freeVisitsRemaining ?? 5;

  const upcomingVisits = [
    {
      id: 'v1',
      rawMonth: 'OCT',
      day: '24',
      rawDate: rawFirstDate,
      isNext: true,
      timeWindow: booking.timeWindow || t.morningWindow,
      bins: `${booking.totalBins} ${booking.totalBins === 1 ? t.oneBin : t.twoBins}`,
      features: t.service1Desc,
      status: t.confirmedRouteStatus,
    },
    {
      id: 'v2',
      rawMonth: 'NOV',
      day: '07',
      rawDate: `${booking.selectedDay || 'Tuesday'}, Nov 7`,
      isNext: false,
      timeWindow: booking.timeWindow || t.morningWindow,
      bins: `${booking.totalBins} ${booking.totalBins === 1 ? t.oneBin : t.twoBins}`,
      features: t.service2Desc,
      status: t.scheduledStatus,
    },
    {
      id: 'v3',
      rawMonth: 'NOV',
      day: '21',
      rawDate: `${booking.selectedDay || 'Tuesday'}, Nov 21`,
      isNext: false,
      timeWindow: booking.timeWindow || t.morningWindow,
      bins: `${booking.totalBins} ${booking.totalBins === 1 ? t.oneBin : t.twoBins}`,
      features: t.service1Desc,
      status: t.scheduledStatus,
    },
  ];

  const pastVisits = [
    {
      id: 'p1',
      rawDate: `${booking.selectedDay || 'Tuesday'}, Oct 10`,
      rawTime: 'Completed at 8:42 AM',
      bins: `2 ${t.twoBins} • UV-Sanitized`,
      badge: t.cleanedStatus,
    },
    {
      id: 'p2',
      rawDate: `${booking.selectedDay || 'Tuesday'}, Sep 26`,
      rawTime: 'Completed at 9:15 AM',
      bins: `2 ${t.twoBins} • UV-Sanitized`,
      badge: t.cleanedStatus,
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
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-24">
      <ScreenHeader
        title={t.navSchedule}
        showBack={false}
        showProfile={true}
        onProfileClick={onOpenAvatar || onNavigateToAccount}
        avatarUrl={booking.user.avatarUrl}
        userName={booking.user.fullName}
      />

      <main className="flex-1 px-5 pt-3 max-w-md mx-auto w-full flex flex-col gap-4">
        {/* Title & Quick Status */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-[#04264A] tracking-tight">
              {t.cleaningRouteTitle}
            </h2>
            <p className="text-xs text-[#04264A]/70">
              {isAnnual ? 'Annual Membership • 12 Visits + 5 Bonus' : 'Single Visit Service'}
            </p>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#E6F6F4] text-[#006A61] rounded-full text-xs font-bold border border-[#0BA89A]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.activeBadge}</span>
          </div>
        </div>

        {/* Action Button: Book another visit (Single Visit) OR Use a free visit (Annual) */}
        {isAnnual ? (
          <div className="bg-[#E6F6F4]/80 border border-[#0BA89A]/25 rounded-2xl p-3.5 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#0BA89A] text-white flex items-center justify-center shadow-xs">
                <Gift className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#04264A] block">
                  {t.freeVisitsLeft}: <strong className="text-[#0BA89A]">{freeVisits}</strong>
                </span>
                <span className="text-[11px] text-[#04264A]/60">
                  Included in your annual plan
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowBonusModal(true)}
              className="px-3.5 py-2 rounded-xl bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.useFreeVisitBtn}</span>
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-3.5 border border-[#0BA89A]/20 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#04264A] block">
                Single Visit • $19.99
              </span>
              <span className="text-[11px] text-[#04264A]/60">
                Book whenever you need curb service
              </span>
            </div>
            <button
              type="button"
              onClick={onBookAnotherVisit || onManageVisit}
              className="px-4 py-2 rounded-xl bg-[#0BA89A] hover:bg-[#099185] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95 transition-all"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>{t.bookAnotherVisitBtn}</span>
            </button>
          </div>
        )}

        {/* Segmented View Toggle Switch */}
        <div className="bg-[#E6F6F4]/60 p-1 rounded-2xl flex items-center border border-[#0BA89A]/15 shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'upcoming'
                ? 'bg-white text-[#0BA89A] shadow-xs'
                : 'text-[#04264A]/65 hover:text-[#04264A]'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.upcomingVisitsTab}</span>
            <span className="w-5 h-5 rounded-full bg-[#0BA89A] text-white text-[10px] font-bold flex items-center justify-center">
              3
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('past')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'past'
                ? 'bg-white text-[#0BA89A] shadow-xs'
                : 'text-[#04264A]/65 hover:text-[#04264A]'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>{t.pastHistoryTab}</span>
          </button>
        </div>

        {/* UPCOMING VISITS CONTAINER */}
        {activeTab === 'upcoming' && (
          <div className="flex flex-col gap-3">
            {upcomingVisits.map((visit) => {
              const localizedMonth = translateMonth(visit.rawMonth, language, true).toUpperCase();
              const localizedDateTitle = translateDateString(visit.rawDate, language);

              return (
                <div
                  key={visit.id}
                  className="bg-white rounded-3xl p-4.5 shadow-sm border border-[#04264A]/8 relative overflow-hidden flex flex-col gap-3"
                >
                  {/* Top strip highlight if next */}
                  {visit.isNext && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-[#0BA89A]" />
                  )}

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex gap-3">
                      <div
                        className={`w-12 h-12 rounded-2xl flex flex-col items-center justify-center shrink-0 ${
                          visit.isNext
                            ? 'bg-[#E6F6F4] text-[#0BA89A]'
                            : 'bg-slate-100 text-[#04264A]/70'
                        }`}
                      >
                        <span className="text-[10px] font-extrabold uppercase tracking-wider">
                          {localizedMonth}
                        </span>
                        <span className="text-lg font-black leading-tight">
                          {visit.day}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-extrabold text-[#04264A]">
                            {localizedDateTitle}
                          </span>
                          {visit.isNext && (
                            <span className="px-2 py-0.5 rounded-full bg-[#E6F6F4] text-[#006A61] text-[10px] font-extrabold uppercase">
                              Next
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#04264A]/70 flex items-center gap-1 mt-0.5 font-medium">
                          <Clock className="w-3.5 h-3.5 text-[#0BA89A]" />
                          {visit.timeWindow}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        visit.isNext
                          ? 'bg-[#E6F6F4] text-[#006A61] border border-[#0BA89A]/30'
                          : 'bg-slate-100 text-[#04264A]/60'
                      }`}
                    >
                      {visit.status}
                    </span>
                  </div>

                  {/* Service Specs */}
                  <div className="pt-2 border-t border-[#04264A]/6 flex flex-col gap-1.5 text-xs text-[#04264A]/80">
                    <div className="flex items-center gap-2">
                      <Trash2 className="w-3.5 h-3.5 text-[#0BA89A]" />
                      <span>{visit.bins}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-[#04264A]/65">
                      <Sparkles className="w-3.5 h-3.5 text-[#0BA89A]" />
                      <span>{visit.features}</span>
                    </div>
                  </div>

                  {/* Manage visit button */}
                  <div className="pt-1 flex items-center justify-end">
                    <button
                      type="button"
                      onClick={onManageVisit}
                      className="text-xs text-[#0BA89A] font-bold flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span>{t.manage}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* PAST VISITS CONTAINER */}
        {activeTab === 'past' && (
          <div className="flex flex-col gap-3">
            {pastVisits.map((past) => {
              const localizedPastDate = translateDateString(past.rawDate, language);
              const localizedPastTime = translateCompletedTime(past.rawTime, language);

              return (
                <div
                  key={past.id}
                  className="bg-white rounded-3xl p-4.5 shadow-sm border border-[#04264A]/8 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#04264A]">
                        {localizedPastDate}
                      </h4>
                      <p className="text-[11px] text-[#04264A]/60 mt-0.5">
                        {localizedPastTime} • {past.bins}
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                    {past.badge}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* SCHEDULE BONUS VISIT MODAL FOR ANNUAL USERS */}
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
                  {t.freeVisitsLeft}: {freeVisits}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#04264A]/70 leading-relaxed">
              Schedule a bonus curbside cleaning on any available weekday at no additional cost.
            </p>

            <div className="grid grid-cols-1 gap-1.5">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((dayName) => (
                <button
                  key={dayName}
                  type="button"
                  onClick={() => setBonusDay(dayName)}
                  className={`p-2.5 rounded-xl text-left text-xs font-bold flex items-center justify-between cursor-pointer transition-all ${
                    bonusDay === dayName
                      ? 'bg-[#E6F6F4] text-[#006A61] border border-[#0BA89A]'
                      : 'bg-slate-50 text-[#04264A] hover:bg-slate-100'
                  }`}
                >
                  <span>{dayName}</span>
                  {bonusDay === dayName && <CheckCircle2 className="w-4 h-4 text-[#0BA89A]" />}
                </button>
              ))}
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
