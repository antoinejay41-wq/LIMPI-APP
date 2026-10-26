import React, { useState } from 'react';
import { MapPin, CheckCircle2, AlertCircle, KeyRound, ArrowRight, Check } from 'lucide-react';
import { ScreenHeader } from '../ScreenHeader';
import { AddressInfo } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface EditAddressScreenProps {
  address: AddressInfo;
  onUpdateAddress: (addr: AddressInfo) => void;
  onBack: () => void;
}

const LEHIGH_ZIPS = ['33936', '33971', '33972', '33973', '33974', '33976'];

export const EditAddressScreen: React.FC<EditAddressScreenProps> = ({
  address,
  onUpdateAddress,
  onBack,
}) => {
  const { t } = useLanguage();
  const [street, setStreet] = useState(address.street || '1244 Lee Blvd');
  const [unit, setUnit] = useState(address.unit || '');
  const [zipCode, setZipCode] = useState(address.zipCode || '33936');
  const [gateCode, setGateCode] = useState(address.gateCode || '#8841');
  const [binLocation, setBinLocation] = useState(address.binLocation || 'Curbside / End of Driveway');
  const [saved, setSaved] = useState(false);

  const isLehigh = LEHIGH_ZIPS.includes(zipCode.trim());

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLehigh) {
      alert(t.zipInvalidMsg);
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
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onBack();
    }, 1200);
  };

  const binLocations = [
    { id: 'Curbside / End of Driveway', label: t.locCurbside },
    { id: 'Side of House (Left)', label: t.locSideLeft },
    { id: 'Side of House (Right)', label: t.locSideRight },
    { id: 'Behind Front Gate / Carport', label: t.locGate },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FCFB] pb-12">
      <ScreenHeader title={t.serviceAddressTitle} showBack={true} onBack={onBack} />

      <main className="flex-1 px-5 pt-4 max-w-md mx-auto w-full flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-extrabold text-[#04264A] tracking-tight">
            {t.editServiceAddressTitle}
          </h2>
          <p className="text-xs text-[#04264A]/70">
            {t.editServiceAddressDesc}
          </p>
        </div>

        <form onSubmit={handleSave} className="bg-white rounded-3xl p-5 border border-[#04264A]/8 shadow-xs flex flex-col gap-3.5">
          {/* Street Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#04264A]" htmlFor="edit-street">
              {t.streetLabel}
            </label>
            <div className="relative flex items-center">
              <MapPin className="w-5 h-5 absolute left-3.5 text-[#04264A]/40 pointer-events-none" />
              <input
                id="edit-street"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full h-12 pl-11 pr-4 bg-slate-50 text-[#04264A] text-sm rounded-xl outline-none focus:ring-2 focus:ring-[#0BA89A] border border-[#04264A]/10 font-medium"
                required
              />
            </div>
          </div>

          {/* Unit & City */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#04264A]" htmlFor="edit-unit">
                {t.unitLabel}
              </label>
              <input
                id="edit-unit"
                type="text"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                placeholder="Unit 4"
                className="w-full h-12 px-3 bg-slate-50 text-[#04264A] text-sm rounded-xl outline-none focus:ring-2 focus:ring-[#0BA89A] border border-[#04264A]/10 font-medium"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#04264A]" htmlFor="edit-city">
                {t.cityStateLabel}
              </label>
              <div className="w-full h-12 px-3 bg-slate-100 text-[#04264A] text-xs font-bold rounded-xl flex items-center border border-[#04264A]/10 select-none">
                Lehigh Acres, FL
              </div>
            </div>
          </div>

          {/* ZIP Code */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#04264A]" htmlFor="edit-zip">
              {t.zipCodeLabel}
            </label>
            <div className="relative flex items-center">
              <input
                id="edit-zip"
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                className={`w-full h-12 px-3.5 pr-10 rounded-xl bg-slate-50 text-[#04264A] text-sm font-bold border outline-none ${
                  isLehigh ? 'border-[#0BA89A]' : 'border-amber-400'
                }`}
                required
              />
              <div className="absolute right-3.5">
                {isLehigh ? (
                  <CheckCircle2 className="w-4 h-4 text-[#0BA89A]" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                )}
              </div>
            </div>
          </div>

          {/* Gate Code */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#04264A]" htmlFor="edit-gate">
              {t.gateCodeLabel}
            </label>
            <div className="relative flex items-center">
              <KeyRound className="w-4 h-4 absolute left-3.5 text-[#04264A]/40 pointer-events-none" />
              <input
                id="edit-gate"
                type="text"
                value={gateCode}
                onChange={(e) => setGateCode(e.target.value)}
                placeholder="#8841"
                className="w-full h-12 pl-10 pr-4 bg-slate-50 text-[#04264A] text-sm rounded-xl outline-none focus:ring-2 focus:ring-[#0BA89A] border border-[#04264A]/10 font-medium"
              />
            </div>
          </div>

          {/* Bin Location */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#04264A]">
              {t.binLocationQuestion}
            </label>
            <div className="grid grid-cols-1 gap-1.5">
              {binLocations.map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setBinLocation(loc.id)}
                  className={`p-2.5 rounded-xl text-left text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                    binLocation === loc.id
                      ? 'bg-[#E6F6F4] text-[#006A61] border border-[#0BA89A]'
                      : 'bg-slate-50 text-[#04264A] hover:bg-slate-100 border border-transparent'
                  }`}
                >
                  <span>{loc.label}</span>
                  {binLocation === loc.id && (
                    <CheckCircle2 className="w-4 h-4 text-[#0BA89A]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {saved ? (
            <div className="h-14 bg-emerald-50 text-emerald-800 rounded-2xl flex items-center justify-center font-bold text-sm gap-2 mt-2">
              <Check className="w-5 h-5" />
              <span>{t.addressUpdatedMsg}</span>
            </div>
          ) : (
            <button
              type="submit"
              disabled={!isLehigh}
              className={`mt-2 w-full h-14 font-bold text-base rounded-2xl flex items-center justify-center gap-2 shadow-[0_8px_20px_-4px_rgba(11,168,154,0.4)] transition-all ${
                isLehigh
                  ? 'bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white cursor-pointer'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>{t.saveAddressBtn}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </form>
      </main>
    </div>
  );
};
