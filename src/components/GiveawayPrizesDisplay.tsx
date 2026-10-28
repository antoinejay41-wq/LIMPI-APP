import React from 'react';
import { Flame, Snowflake, Wrench } from 'lucide-react';

interface GiveawayPrizesDisplayProps {
  compact?: boolean;
}

export const GiveawayPrizesDisplay: React.FC<GiveawayPrizesDisplayProps> = ({ compact = false }) => {
  const prizes = [
    {
      id: 'grill',
      title: 'Outdoor Grill',
      desc: 'Patio BBQ grill',
      icon: (
        <div className="w-10 h-10 rounded-2xl bg-[#FFEFE5] text-[#FF6B35] flex items-center justify-center shrink-0 shadow-2xs">
          <Flame className="w-5 h-5 stroke-[2.5]" />
        </div>
      ),
      pill: 'Prize 1',
    },
    {
      id: 'freezer',
      title: 'Deep Freezer',
      desc: 'Chest freezer',
      icon: (
        <div className="w-10 h-10 rounded-2xl bg-[#E8F4FD] text-[#0284C7] flex items-center justify-center shrink-0 shadow-2xs">
          <Snowflake className="w-5 h-5 stroke-[2.5]" />
        </div>
      ),
      pill: 'Prize 2',
    },
    {
      id: 'toolbox',
      title: 'Toolbox Set',
      desc: 'Full home set',
      icon: (
        <div className="w-10 h-10 rounded-2xl bg-[#E6F6F4] text-[#0BA89A] flex items-center justify-center shrink-0 shadow-2xs">
          <Wrench className="w-5 h-5 stroke-[2.5]" />
        </div>
      ),
      pill: 'Prize 3',
    },
  ];

  if (compact) {
    return (
      <div className="grid grid-cols-3 gap-2 w-full">
        {prizes.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl p-2.5 border border-[#04264A]/8 shadow-2xs flex flex-col items-center text-center gap-1.5 transition-all hover:border-[#0BA89A]/30"
          >
            {p.icon}
            <span className="text-[11px] font-black text-[#04264A] leading-tight">
              {p.title}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2.5 w-full">
      {prizes.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-2xl p-3 border border-[#04264A]/10 shadow-xs flex flex-col items-center text-center gap-2 transition-all hover:shadow-md hover:border-[#0BA89A]/40"
        >
          <div className="relative">
            {p.icon}
            <span className="absolute -top-1.5 -right-2 px-1.5 py-0.2 rounded-full bg-[#04264A] text-white text-[9px] font-black uppercase tracking-wider">
              {p.pill}
            </span>
          </div>
          <div>
            <h4 className="text-xs font-black text-[#04264A] leading-snug">
              {p.title}
            </h4>
            <p className="text-[10px] text-[#04264A]/60 font-medium mt-0.5">
              {p.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
