import React, { useState } from 'react';
import { MessageSquare, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ScreenHeader } from '../ScreenHeader';
import { useLanguage } from '../../context/LanguageContext';

interface HelpScreenProps {
  onBack: () => void;
}

export const HelpScreen: React.FC<HelpScreenProps> = ({ onBack }) => {
  const { t } = useLanguage();
  const [messageSent, setMessageSent] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [showMessageForm, setShowMessageForm] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setShowMessageForm(false);
      setMessageText('');
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-12">
      <ScreenHeader title={t.helpRow} showBack={true} onBack={onBack} />

      <main className="flex-1 px-5 pt-4 max-w-md mx-auto w-full flex flex-col gap-4">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-extrabold text-[#04264A] tracking-tight">
            {t.howCanWeHelpTitle}
          </h2>
          <p className="text-xs text-[#04264A]/70 leading-relaxed">
            {t.dispatchBasedLehigh}
          </p>
        </div>

        {/* Action Buttons: Message Us & Call Us */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setShowMessageForm(true)}
            className="h-24 bg-white rounded-2xl border border-[#04264A]/10 p-3 flex flex-col items-center justify-center gap-1.5 shadow-xs hover:border-[#0BA89A] active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-[#E6F6F4] text-[#0BA89A] flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#04264A]">{t.messageUsBtn}</span>
          </button>

          <a
            href="tel:2395550192"
            className="h-24 bg-white rounded-2xl border border-[#04264A]/10 p-3 flex flex-col items-center justify-center gap-1.5 shadow-xs hover:border-[#0BA89A] active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-[#E6F6F4] text-[#0BA89A] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#04264A]">{t.callUsBtn}</span>
          </a>
        </div>

        {/* Message Us Form */}
        {showMessageForm && (
          <form
            onSubmit={handleSendMessage}
            className="bg-white rounded-3xl p-5 border border-[#0BA89A]/30 shadow-xs flex flex-col gap-3 animate-in fade-in"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-[#04264A]">
                {t.sendMessageToDispatch}
              </h3>
              <button
                type="button"
                onClick={() => setShowMessageForm(false)}
                className="text-xs text-[#04264A]/50 hover:text-[#04264A] cursor-pointer"
              >
                {t.cancel}
              </button>
            </div>

            <textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="e.g. Please note our gate code changed to #9921, or request a reclean..."
              rows={3}
              className="w-full p-3 rounded-xl bg-slate-50 text-[#04264A] text-xs outline-none focus:ring-2 focus:ring-[#0BA89A] border border-[#04264A]/10 resize-none font-medium"
              required
            />

            {messageSent ? (
              <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{t.messageSentSuccess}</span>
              </div>
            ) : (
              <button
                type="submit"
                className="w-full h-12 bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
              >
                {t.sendMessageBtn}
              </button>
            )}
          </form>
        )}

        {/* Operating Hours & Contact Details */}
        <div className="bg-white rounded-3xl p-5 border border-[#04264A]/8 shadow-xs flex flex-col gap-3 text-xs text-[#04264A]">
          <h3 className="font-extrabold text-sm">{t.dispatchHoursTitle}</h3>
          <div className="space-y-1.5 text-[#04264A]/70">
            <p className="text-xs">{t.monFriHours}</p>
            <p className="text-xs">{t.satHours}</p>
            <p className="text-xs text-[#04264A]/50">{t.sunHours}</p>
          </div>

          <div className="pt-2 border-t border-[#04264A]/8 space-y-1 text-[#04264A]/70">
            <p><strong>Direct Phone:</strong> (239) 555-0192</p>
            <p><strong>Email:</strong> support@limpiclean.com</p>
            <p><strong>Service Area:</strong> Lehigh Acres, FL (ZIPs: 33936, 33971, 33972, 33973, 33974, 33976)</p>
          </div>
        </div>

        {/* Sparkle Guarantee Card */}
        <div className="bg-[#E6F6F4]/60 border border-[#0BA89A]/20 rounded-2xl p-4 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#0BA89A] shrink-0 mt-0.5" />
          <div className="flex flex-col text-xs text-[#04264A]/80 leading-relaxed">
            <span className="font-bold text-[#04264A]">{t.sparkleGuaranteeTitle}</span>
            <span>
              {t.sparkleGuaranteeDesc}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};
