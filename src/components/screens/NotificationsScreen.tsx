import React, { useState } from 'react';
import { Calendar, ShieldCheck, Bell, Clock, Trash2, CheckCircle2 } from 'lucide-react';
import { ScreenHeader } from '../ScreenHeader';
import { useLanguage } from '../../context/LanguageContext';

interface NotificationsScreenProps {
  onBack: () => void;
}

export const NotificationsScreen: React.FC<NotificationsScreenProps> = ({ onBack }) => {
  const { t, language } = useLanguage();
  const [marked, setMarked] = useState(false);

  const getNotifications = () => {
    if (language === 'es') {
      return [
        {
          id: '1',
          title: 'Próxima Limpieza en Acera',
          message: 'Sus botes están programados para lavado y desinfección UV este martes en la mañana.',
          time: 'Hace 2 horas',
          unread: !marked,
          icon: Calendar,
        },
        {
          id: '2',
          title: 'Camión Móvil Ruta #4B Asignado',
          message: 'El conductor Marcos está asignado a su ruta de Lehigh Acres. Por favor deje los botes antes de las 7:00 AM.',
          time: 'Ayer',
          unread: false,
          icon: Trash2,
        },
        {
          id: '3',
          title: 'Última Limpieza Verificada y Desinfectada',
          message: 'Visita del 10 de octubre completada: 2 botes desinfectados con vapor caliente a 190°F y desodorizante.',
          time: '10 de oct',
          unread: false,
          icon: ShieldCheck,
        },
      ];
    } else if (language === 'ht') {
      return [
        {
          id: '1',
          title: 'Netwayaj Bò Twotwa K ap Vini',
          message: 'Poubèl ou yo pwograme pou lave ak dezenfeksyon UV madi maten sa a.',
          time: '2 èdtan de sa',
          unread: !marked,
          icon: Calendar,
        },
        {
          id: '2',
          title: 'Kamyon Wout #4B Asiyen',
          message: 'Chofè Marcos asiyen nan wout Lehigh Acres ou an. Tanpri mete poubèl yo deyò anvan 7:00 AM.',
          time: 'Yè',
          unread: false,
          icon: Trash2,
        },
        {
          id: '3',
          title: 'Dènye Netwayaj Verifye & Esterilize',
          message: 'Vizit 10 oktòb fini: 2 poubèl dezenfekte ak dlo cho 190°F ak odè fre.',
          time: '10 Okt',
          unread: false,
          icon: ShieldCheck,
        },
      ];
    }
    return [
      {
        id: '1',
        title: 'Upcoming Curbside Cleaning',
        message: 'Your bins are scheduled for wash and UV-sanitization this Tuesday morning.',
        time: '2 hours ago',
        unread: !marked,
        icon: Calendar,
      },
      {
        id: '2',
        title: 'Route #4B Mobile Truck Assigned',
        message: 'Driver Marcos is assigned to your Lehigh Acres route. Please leave cans out by 7:00 AM.',
        time: 'Yesterday',
        unread: false,
        icon: Trash2,
      },
      {
        id: '3',
        title: 'Last Clean Verified & Sanitized',
        message: 'October 10 visit complete: 2 bins sanitized with 190°F hot steam + deodorizer.',
        time: 'Oct 10',
        unread: false,
        icon: ShieldCheck,
      },
    ];
  };

  const notifications = getNotifications();

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-12">
      <ScreenHeader title={t.notificationsTitle} showBack={true} onBack={onBack} />

      <main className="flex-1 px-5 pt-4 max-w-md mx-auto w-full flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#04264A] uppercase tracking-wider">
            {t.recentUpdates}
          </span>
          <button
            type="button"
            onClick={() => setMarked(true)}
            className="text-xs text-[#0BA89A] font-bold hover:underline cursor-pointer"
          >
            {t.markAllRead}
          </button>
        </div>

        <div className="flex flex-col gap-2.5">
          {notifications.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 shadow-2xs ${
                  item.unread
                    ? 'bg-white border-[#0BA89A]/30 ring-1 ring-[#0BA89A]/20'
                    : 'bg-white border-[#04264A]/8 opacity-90'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    item.unread ? 'bg-[#E6F6F4] text-[#0BA89A]' : 'bg-slate-100 text-[#04264A]/60'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xs font-bold text-[#04264A] truncate">
                      {item.title}
                    </h3>
                    <span className="text-[10px] text-[#04264A]/50 shrink-0">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-xs text-[#04264A]/70 mt-1 leading-relaxed">
                    {item.message}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 p-4 rounded-2xl bg-[#E6F6F4]/50 border border-[#0BA89A]/20 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#0BA89A] shrink-0" />
          <p className="text-xs text-[#04264A]/75 leading-snug">
            {t.smsArrivalAlert}
          </p>
        </div>
      </main>
    </div>
  );
};
