import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { ScreenHeader } from '../ScreenHeader';
import { useLanguage } from '../../context/LanguageContext';

interface ForgotPasswordScreenProps {
  onBack: () => void;
}

export const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ onBack }) => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB]">
      <ScreenHeader title={t.forgotPasswordTitle} showBack={true} onBack={onBack} />

      <main className="flex-1 px-5 pt-6 max-w-md mx-auto w-full flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-2xl font-extrabold text-[#04264A] tracking-tight">
            {t.forgotPasswordTitle}
          </h2>
          <p className="text-sm text-[#04264A]/70 leading-relaxed">
            {t.forgotPasswordDesc}
          </p>
        </div>

        {sent ? (
          <div className="bg-[#E6F6F4] border border-[#0BA89A]/30 rounded-3xl p-6 text-center flex flex-col items-center gap-3 shadow-xs">
            <div className="w-14 h-14 rounded-full bg-[#0BA89A] text-white flex items-center justify-center shadow-sm">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#04264A]">{t.resetLinkSentTitle}</h3>
            <p className="text-xs text-[#04264A]/75 leading-relaxed">
              {t.resetLinkSentDesc} (<strong>{email}</strong>)
            </p>
            <button
              type="button"
              onClick={onBack}
              className="mt-2 w-full h-12 bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white font-bold text-sm rounded-xl transition-all cursor-pointer"
            >
              {t.backToSignIn}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSend} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#04264A] px-1" htmlFor="reset-email">
                {t.emailLabel}
              </label>
              <div className="relative flex items-center">
                <Mail className="w-5 h-5 absolute left-3.5 text-[#04264A]/40 pointer-events-none" />
                <input
                  id="reset-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full h-13 pl-11 pr-4 bg-white text-[#04264A] text-sm rounded-xl outline-none focus:ring-2 focus:ring-[#0BA89A] transition-all border border-[#04264A]/10 font-medium shadow-2xs"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-14 bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white font-bold text-base rounded-2xl flex items-center justify-center gap-2 shadow-[0_8px_20px_-4px_rgba(11,168,154,0.4)] transition-all cursor-pointer"
            >
              <span>{t.sendLinkBtn}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        )}
      </main>
    </div>
  );
};
