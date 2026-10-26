import React from 'react';
import { Home, Calendar, User } from 'lucide-react';
import { ScreenId } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface BottomNavProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const { t } = useLanguage();

  const tabs = [
    {
      id: 'home' as ScreenId,
      label: t.navHome,
      icon: Home,
    },
    {
      id: 'schedule' as ScreenId,
      label: t.navSchedule,
      icon: Calendar,
    },
    {
      id: 'account' as ScreenId,
      label: t.navAccount,
      icon: User,
    },
  ];

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#04264A]/8 shadow-[0_-4px_24px_rgba(4,38,74,0.06)]"
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 8px)' }}
      aria-label="Main Navigation"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 h-16 items-center px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentScreen === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex flex-col items-center justify-center h-full w-full py-1 min-h-[48px] transition-all duration-150 relative group cursor-pointer ${
                isActive ? 'text-[#0BA89A]' : 'text-[#04264A]/60 hover:text-[#04264A]'
              }`}
            >
              {/* Active pill background aura */}
              {isActive && (
                <span className="absolute inset-x-3 inset-y-1.5 bg-[#E6F6F4] rounded-xl -z-10 transition-transform scale-95" />
              )}
              <Icon
                className={`w-5 h-5 transition-transform duration-150 ${
                  isActive ? 'scale-110 stroke-[2.4]' : 'group-hover:scale-105'
                }`}
              />
              <span
                className={`text-[11px] font-semibold tracking-tight mt-1 ${
                  isActive ? 'font-bold text-[#0BA89A]' : 'text-[#04264A]/70'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
