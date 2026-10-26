import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';

interface LanguageSelectorProps {
  compact?: boolean;
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  compact = false,
  className = '',
}) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages: { id: Language; label: string; short: string; flag: string }[] = [
    { id: 'en', label: 'English', short: 'EN', flag: '🇺🇸' },
    { id: 'es', label: 'Español', short: 'ES', flag: '🇪🇸' },
    { id: 'ht', label: 'Kreyòl Ayisyen', short: 'HT', flag: '🇭🇹' },
  ];

  const currentLang = languages.find((l) => l.id === language) || languages[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`relative inline-block text-left ${className}`} ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/90 border border-[#04264A]/10 hover:border-[#0BA89A] hover:bg-[#E6F6F4]/50 active:scale-95 transition-all cursor-pointer shadow-2xs text-xs font-bold text-[#04264A]"
        aria-label="Switch Language"
        aria-expanded={isOpen}
      >
        <span className="text-sm select-none">{currentLang.flag}</span>
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#006A61]">
          {currentLang.short}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-[#04264A]/60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-48 rounded-2xl bg-white shadow-xl border border-[#04264A]/10 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2.5 py-1 text-[10px] font-bold text-[#04264A]/50 uppercase tracking-wider border-b border-[#04264A]/5 mb-1">
            Language / Lang / Langue
          </div>
          {languages.map((l) => {
            const isSelected = language === l.id;
            return (
              <button
                key={l.id}
                type="button"
                onClick={() => {
                  setLanguage(l.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#E6F6F4] text-[#006A61] font-bold'
                    : 'text-[#04264A] hover:bg-slate-50 font-medium'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base select-none">{l.flag}</span>
                  <div className="flex flex-col">
                    <span className="leading-tight">{l.label}</span>
                  </div>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#0BA89A] stroke-[3]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
