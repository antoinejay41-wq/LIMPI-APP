import React, { useState } from 'react';
import { User, Phone, Mail, Lock, Eye, EyeOff, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { LimpiLogo } from '../LimpiLogo';
import { LanguageSelector } from '../LanguageSelector';
import { useLanguage } from '../../context/LanguageContext';

interface WelcomeScreenProps {
  onCreateAccount: (userData?: { name: string; email: string; phone: string }) => void;
  onSignIn: () => void;
  onForgotPassword: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onCreateAccount,
  onSignIn,
  onForgotPassword,
}) => {
  const { t } = useLanguage();
  const [tab, setTab] = useState<'create' | 'signin'>('create');
  const [fullName, setFullName] = useState('Sarah Jenkins');
  const [phone, setPhone] = useState('(239) 555-0192');
  const [email, setEmail] = useState('sarah@example.com');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tab === 'create') {
      onCreateAccount({
        name: fullName.trim() || 'Sarah Jenkins',
        email: email.trim() || 'sarah@example.com',
        phone: phone.trim() || '(239) 555-0192',
      });
    } else {
      onSignIn();
    }
  };

  return (
    <div className="flex flex-col min-h-screen px-4 py-4 max-w-md mx-auto justify-center relative">
      {/* Top Language Switcher Bar */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSelector />
      </div>

      {/* Brand Header */}
      <div className="flex flex-col items-center text-center pt-8 pb-4">
        <div className="relative mb-3 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#0BA89A]/20 rounded-full blur-xl scale-125" />
          <LimpiLogo size="xl" showWordmark={true} orientation="vertical" />
        </div>

        {/* Eco Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F6F4] text-[#0BA89A] text-xs font-bold tracking-wide mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>{t.ecoSanitizing}</span>
        </div>

        <h1 className="text-3xl font-extrabold text-[#04264A] tracking-tight mb-2 leading-tight">
          {t.tagline}
        </h1>

        <p className="text-sm text-[#04264A]/70 max-w-[290px] leading-relaxed">
          {t.subTagline}
        </p>
      </div>

      {/* Form Card with Soft Mint Surface */}
      <div className="w-full bg-[#E6F6F4]/60 border border-[#0BA89A]/15 rounded-3xl p-5 shadow-[0_8px_30px_rgba(4,38,74,0.04)]">
        {/* Segmented Toggle Tabs */}
        <div className="bg-white p-1 rounded-2xl flex items-center justify-between mb-5 shadow-xs border border-[#04264A]/5">
          <button
            type="button"
            onClick={() => setTab('create')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 text-center cursor-pointer ${
              tab === 'create'
                ? 'bg-[#006A61] text-white shadow-sm'
                : 'text-[#04264A]/60 hover:text-[#04264A]'
            }`}
          >
            {t.createAccountTab}
          </button>
          <button
            type="button"
            onClick={() => setTab('signin')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 text-center cursor-pointer ${
              tab === 'signin'
                ? 'bg-[#006A61] text-white shadow-sm'
                : 'text-[#04264A]/60 hover:text-[#04264A]'
            }`}
          >
            {t.signInTab}
          </button>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          {tab === 'create' && (
            <>
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#04264A] px-1" htmlFor="fullName">
                  {t.fullNameLabel}
                </label>
                <div className="relative flex items-center">
                  <User className="w-5 h-5 absolute left-3.5 text-[#04264A]/40 pointer-events-none" />
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t.fullNamePlaceholder}
                    className="w-full h-13 pl-11 pr-4 bg-white text-[#04264A] text-sm rounded-xl outline-none focus:ring-2 focus:ring-[#0BA89A] transition-all border border-[#04264A]/10 font-medium"
                    required={tab === 'create'}
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#04264A] px-1" htmlFor="phone">
                  {t.phoneLabel}
                </label>
                <div className="relative flex items-center">
                  <Phone className="w-5 h-5 absolute left-3.5 text-[#04264A]/40 pointer-events-none" />
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(239) 555-0192"
                    className="w-full h-13 pl-11 pr-4 bg-white text-[#04264A] text-sm rounded-xl outline-none focus:ring-2 focus:ring-[#0BA89A] transition-all border border-[#04264A]/10 font-medium"
                    required={tab === 'create'}
                  />
                </div>
              </div>
            </>
          )}

          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#04264A] px-1" htmlFor="email">
              {t.emailLabel}
            </label>
            <div className="relative flex items-center">
              <Mail className="w-5 h-5 absolute left-3.5 text-[#04264A]/40 pointer-events-none" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sarah@example.com"
                className="w-full h-13 pl-11 pr-4 bg-white text-[#04264A] text-sm rounded-xl outline-none focus:ring-2 focus:ring-[#0BA89A] transition-all border border-[#04264A]/10 font-medium"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between px-1">
              <label className="text-xs font-bold text-[#04264A]" htmlFor="password">
                {t.passwordLabel}
              </label>
              <button
                type="button"
                onClick={onForgotPassword}
                className="text-xs font-semibold text-[#0BA89A] hover:underline cursor-pointer"
              >
                {t.forgotPasswordLink}
              </button>
            </div>
            <div className="relative flex items-center">
              <Lock className="w-5 h-5 absolute left-3.5 text-[#04264A]/40 pointer-events-none" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full h-13 pl-11 pr-11 bg-white text-[#04264A] text-sm rounded-xl outline-none focus:ring-2 focus:ring-[#0BA89A] transition-all border border-[#04264A]/10 font-medium"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-[#04264A]/50 hover:text-[#04264A] p-1 cursor-pointer"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Primary Action Button (Large Teal Button) */}
          <button
            type="submit"
            className="mt-2 w-full h-14 bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white font-bold text-base rounded-2xl flex items-center justify-center gap-2 shadow-[0_8px_20px_-4px_rgba(11,168,154,0.4)] transition-all cursor-pointer"
          >
            <span>{tab === 'create' ? t.createAccountBtn : t.signInBtn}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Divider */}
          <div className="relative flex items-center justify-center my-1.5">
            <div className="w-full h-px bg-[#04264A]/10" />
            <span className="absolute bg-[#E6F6F4] px-3 py-0.5 rounded-full text-xs font-medium text-[#04264A]/60">
              {t.orContinueWith}
            </span>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => (tab === 'create' ? onCreateAccount() : onSignIn())}
              className="h-12 bg-white hover:bg-slate-50 text-[#04264A] rounded-xl flex items-center justify-center gap-2 text-sm font-bold border border-[#04264A]/10 transition-colors shadow-xs cursor-pointer active:scale-[0.98]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.09.65-2.73 1.4-.56.64-.99 1.71-.93 2.74 1.05.08 2.07-.56 2.65-1.27z" />
              </svg>
              <span>Apple</span>
            </button>
            <button
              type="button"
              onClick={() => (tab === 'create' ? onCreateAccount() : onSignIn())}
              className="h-12 bg-white hover:bg-slate-50 text-[#04264A] rounded-xl flex items-center justify-center gap-2 text-sm font-bold border border-[#04264A]/10 transition-colors shadow-xs cursor-pointer active:scale-[0.98]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  fill="#EA4335"
                />
              </svg>
              <span>Google</span>
            </button>
          </div>

          {/* Toggle mode text */}
          <div className="text-center mt-1">
            <p className="text-xs text-[#04264A]/70">
              {tab === 'create' ? t.alreadyHaveAccount : t.newToLimpi}{' '}
              <button
                type="button"
                onClick={() => setTab(tab === 'create' ? 'signin' : 'create')}
                className="text-[#0BA89A] font-bold hover:underline cursor-pointer"
              >
                {tab === 'create' ? t.signInTab : t.createAccountTab}
              </button>
            </p>
          </div>
        </form>
      </div>

      {/* Serving Lehigh Acres anchor */}
      <div className="flex items-center justify-center gap-1.5 mt-6 text-[#04264A]/70">
        <MapPin className="w-4 h-4 text-[#0BA89A]" />
        <span className="text-xs font-bold tracking-wide">{t.servingLehigh}</span>
      </div>
    </div>
  );
};
