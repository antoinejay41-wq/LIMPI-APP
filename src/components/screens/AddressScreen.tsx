import React, { useState } from 'react';
import { ArrowRight, MapPin, CheckCircle2, AlertCircle, Home, KeyRound } from 'lucide-react';
import { ScreenHeader } from '../ScreenHeader';
import { AddressInfo } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface AddressScreenProps {
  address: AddressInfo;
  onUpdateAddress: (address: AddressInfo) => void;
  onBack: () => void;
  onContinue: () => void;
}

const LEHIGH_ZIPS = ['33936', '33971', '33972', '33973', '33974', '33976'];

export const AddressScreen: React.FC<AddressScreenProps> = ({
  address,
  onUpdateAddress,
  onBack,
  onContinue,
}) => {
  const { t } = useLanguage();
  const [street, setStreet] = useState(address.street || '1244 Lee Blvd');
  const [unit, setUnit] = useState(address.unit || '');
  const [zipCode, setZipCode] = useState(address.zipCode || '33936');
  const [gateCode, setGateCode] = useState(address.gateCode || '#8841');
  const [binLocation, setBinLocation] = useState(address.binLocation || 'Curbside / End of Driveway');

  const isLehigh = LEHIGH_ZIPS.includes(zipCode.trim());

  const handleZipChange = (val: string) => {
    const cleaned = val.replace(/\D/g, '').slice(0, 5);
    setZipCode(cleaned);
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLehigh) {
      alert('Please enter a valid Lehigh Acres, FL zip code (e.g. 33936, 33971) to proceed.');
      return;
    }
    onUpdateAddress({
      street,
      unit,
      city: 'Lehigh Acres',
      state: 'FL',
      zipCode,
      gateCode,
      binLocation,
      isValidLehigh: true,
    });
    onContinue();
  };

  const binLocations = [
    { id: 'Curbside / End of Driveway', label: t.locCurbside, note: t.locCurbsideNote },
    { id: 'Side of House (Left)', label: t.locSideLeft, note: t.locSideLeftNote },
    { id: 'Side of House (Right)', label: t.locSideRight, note: t.locSideRightNote },
    { id: 'Behind Front Gate / Carport', label: t.locGate, note: t.locGateNote },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-28">
      <ScreenHeader
        title={t.serviceAddressTitle}
        showBack={true}
        onBack={onBack}
        currentStep={2}
        totalSteps={4}
      />

      <main className="flex-1 px-5 pt-3 max-w-md mx-auto w-full flex flex-col gap-4">
        {/* Header Intro */}
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-extrabold text-[#04264A] tracking-tight">
            {t.serviceAddressTitle}
          </h2>
          <p className="text-sm text-[#04264A]/70">
            {t.serviceAddressSubtitle}
          </p>
        </div>

        <form onSubmit={handleContinue} className="flex flex-col gap-4">
          {/* Street Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#04264A] px-1" htmlFor="street">
              {t.streetLabel}
            </label>
            <div className="relative flex items-center">
              <MapPin className="w-5 h-5 absolute left-3.5 text-[#04264A]/40 pointer-events-none" />
              <input
                id="street"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="1244 Lee Blvd"
                className="w-full h-13 pl-11 pr-4 bg-white text-[#04264A] text-sm rounded-xl outline-none focus:ring-2 focus:ring-[#0BA89A] transition-all border border-[#04264A]/10 font-medium"
                required
              />
            </div>
          </div>

          {/* Unit / Apt & City / State */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#04264A] px-1" htmlFor="unit">
                {t.unitLabel}
              </label>
              <input
                id="unit"
                type="text"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                placeholder="Unit 4"
                className="w-full h-13 px-4 bg-white text-[#04264A] text-sm rounded-xl outline-none focus:ring-2 focus:ring-[#0BA89A] transition-all border border-[#04264A]/10 font-medium"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#04264A] px-1" htmlFor="city">
                {t.cityStateLabel}
              </label>
              <div className="w-full h-13 px-4 bg-slate-100 text-[#04264A] text-sm rounded-xl flex items-center border border-[#04264A]/10 font-bold select-none">
                Lehigh Acres, FL
              </div>
            </div>
          </div>

          {/* Lehigh Acres Service Area Zip Code Check */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between px-1">
              <label className="text-xs font-bold text-[#04264A]" htmlFor="zipCode">
                {t.zipCodeLabel}
              </label>
              <span className="text-[11px] text-[#04264A]/60">{t.lehighOnly}</span>
            </div>
            <div className="relative flex items-center">
              <input
                id="zipCode"
                type="text"
                inputMode="numeric"
                value={zipCode}
                onChange={(e) => handleZipChange(e.target.value)}
                placeholder="33936"
                className={`w-full h-13 px-4 pr-11 bg-white text-[#04264A] text-sm rounded-xl outline-none transition-all border font-bold ${
                  isLehigh
                    ? 'border-[#0BA89A] focus:ring-2 focus:ring-[#0BA89A]'
                    : 'border-amber-400 focus:ring-2 focus:ring-amber-500'
                }`}
                required
              />
              <div className="absolute right-3.5 flex items-center pointer-events-none">
                {isLehigh ? (
                  <CheckCircle2 className="w-5 h-5 text-[#0BA89A]" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                )}
              </div>
            </div>

            {/* Validation Banner */}
            {isLehigh ? (
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#E6F6F4] text-[#006A61] text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#0BA89A]" />
                <span>{t.zipValidMsg}</span>
              </div>
            ) : (
              <div className="flex flex-col gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p>{t.zipInvalidMsg}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setZipCode('33936')}
                  className="self-start text-[11px] font-bold text-[#0BA89A] underline cursor-pointer"
                >
                  {t.setLehighZipBtn}
                </button>
              </div>
            )}
          </div>

          {/* Gate Code / Access */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#04264A] px-1" htmlFor="gateCode">
              {t.gateCodeLabel}
            </label>
            <div className="relative flex items-center">
              <KeyRound className="w-5 h-5 absolute left-3.5 text-[#04264A]/40 pointer-events-none" />
              <input
                id="gateCode"
                type="text"
                value={gateCode}
                onChange={(e) => setGateCode(e.target.value)}
                placeholder="e.g. Gate #8841"
                className="w-full h-13 pl-11 pr-4 bg-white text-[#04264A] text-sm rounded-xl outline-none focus:ring-2 focus:ring-[#0BA89A] transition-all border border-[#04264A]/10 font-medium"
              />
            </div>
          </div>

          {/* Bin Location Picker */}
          <div className="flex flex-col gap-2 pt-1">
            <div className="flex items-center gap-1.5 px-1">
              <Home className="w-4 h-4 text-[#0BA89A]" />
              <label className="text-xs font-bold text-[#04264A]">
                {t.binLocationQuestion}
              </label>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {binLocations.map((loc) => {
                const isSelected = binLocation === loc.id;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setBinLocation(loc.id)}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#E6F6F4] border-[#0BA89A] shadow-xs'
                        : 'bg-white border-[#04264A]/10 hover:border-[#04264A]/25'
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#04264A]">
                        {loc.label}
                      </span>
                      <span className="text-[11px] text-[#04264A]/60">
                        {loc.note}
                      </span>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-[#0BA89A] text-white' : 'border border-[#04264A]/30'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </form>
      </main>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md px-5 py-3 border-t border-[#04264A]/8 shadow-[0_-4px_20px_rgba(4,38,74,0.06)]">
        <div className="max-w-md mx-auto">
          <button
            type="button"
            onClick={handleContinue}
            disabled={!isLehigh}
            className={`w-full h-14 font-bold text-base rounded-2xl flex items-center justify-center gap-2 shadow-[0_8px_20px_-4px_rgba(11,168,154,0.4)] transition-all ${
              isLehigh
                ? 'bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white cursor-pointer'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed opacity-75'
            }`}
          >
            <span>{t.continue}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
