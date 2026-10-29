import React from 'react';
import { ArrowLeft, Bell } from 'lucide-react';
import { LimpiLogo } from './LimpiLogo';
import { LanguageSelector } from './LanguageSelector';
import { AvatarBadge } from './AvatarBadge';

interface ScreenHeaderProps {
  title?: string;
  onBack?: () => void;
  showBack?: boolean;
  showProfile?: boolean;
  onProfileClick?: () => void;
  avatarUrl?: string;
  userName?: string;
  showNotification?: boolean;
  onNotificationClick?: () => void;
  showLanguageSelector?: boolean;
  currentStep?: number;
  totalSteps?: number;
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  onBack,
  showBack = false,
  showProfile = false,
  onProfileClick,
  avatarUrl,
  userName = 'Limpi Member',
  showNotification = false,
  onNotificationClick,
  showLanguageSelector = true,
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="w-full">
      {/* Sticky Top Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xl border-b border-[#04264A]/6 px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {showBack && onBack ? (
            <button
              type="button"
              onClick={onBack}
              aria-label="Go Back"
              className="w-10 h-10 -ml-1 rounded-full flex items-center justify-center text-[#04264A] hover:bg-[#E6F6F4] active:scale-95 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.2]" />
            </button>
          ) : (
            <LimpiLogo size="sm" showWordmark={false} orientation="horizontal" />
          )}

          {title && (
            <h1 className="text-base font-bold text-[#04264A] tracking-tight truncate max-w-[170px]">
              {title}
            </h1>
          )}
        </div>

        <div className="flex items-center gap-2">
          {showLanguageSelector && <LanguageSelector />}

          {showNotification && (
            <button
              type="button"
              onClick={onNotificationClick}
              aria-label="Notifications"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#E6F6F4] flex items-center justify-center text-[#04264A] active:scale-95 transition-transform cursor-pointer relative"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#0BA89A]" />
            </button>
          )}

          {showProfile && (
            <button
              type="button"
              onClick={onProfileClick}
              aria-label="Account Profile and Avatar"
              className="cursor-pointer active:scale-95 transition-transform rounded-full focus:outline-none"
              title="Profile & Avatar"
            >
              <AvatarBadge
                name={userName}
                avatarUrl={avatarUrl}
                size="sm"
                showVerifiedShield={false}
              />
            </button>
          )}
        </div>
      </header>

      {/* Small Progress Bar for Sign-up screens without page numbers or counters */}
      {currentStep && totalSteps && (
        <div className="px-5 pt-3 pb-2 bg-white/60">
          <div className="grid grid-cols-4 gap-1.5 h-1.5 w-full">
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <div
                key={idx}
                className={`h-full rounded-full transition-all duration-300 ${
                  idx < currentStep
                    ? 'bg-[#0BA89A]'
                    : idx === currentStep - 1
                    ? 'bg-[#0BA89A]'
                    : 'bg-[#04264A]/10'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
