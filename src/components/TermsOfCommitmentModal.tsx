import React, { useState } from 'react';
import { ShieldCheck, Check, X } from 'lucide-react';

interface TermsOfCommitmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAgreeAndContinue?: () => void;
  onCancelToPlan?: () => void;
  isReadOnly?: boolean;
}

export const TermsOfCommitmentModal: React.FC<TermsOfCommitmentModalProps> = ({
  isOpen,
  onClose,
  onAgreeAndContinue,
  onCancelToPlan,
  isReadOnly = false,
}) => {
  const [agreed, setAgreed] = useState(false);

  if (!isOpen) return null;

  const handleAgreeAndProceed = () => {
    if (!agreed) return;
    onAgreeAndContinue?.();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#04264A]/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#04264A]/10 flex flex-col max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 pt-6 pb-4 border-b border-[#04264A]/8 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#E6F6F4] text-[#0BA89A] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
            </div>
            <h2 className="text-lg font-black text-[#04264A] tracking-tight leading-snug">
              Annual Plan: Terms of Commitment
            </h2>
          </div>
          {isReadOnly && (
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-[#04264A] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Scrollable Text Box */}
        <div className="px-6 py-4 overflow-y-auto flex-1 space-y-4 text-sm text-[#04264A] leading-relaxed">
          <div className="bg-[#F8FCFB] rounded-2xl p-4 border border-[#04264A]/6 space-y-3.5">
            <p className="font-semibold text-[#04264A]">
              By choosing the Limpi Annual Plan, you agree to the following:
            </p>

            <div className="space-y-3 text-xs leading-relaxed">
              <div>
                <span className="font-bold text-[#04264A]">1. Commitment: </span>
                <span className="text-[#04264A]/85">
                  You commit to a 1-year subscription for $239.99. It includes 1 cleaning visit per month and 5 free bonus visits that you may schedule whenever you want.
                </span>
              </div>

              <div>
                <span className="font-bold text-[#04264A]">2. Extras: </span>
                <span className="text-[#04264A]/85">
                  Additional services in the same month are $10 each (your 5 free bonus visits can be used for these). Cleaning 3 or more bins costs an extra $10 per bin.
                </span>
              </div>

              <div>
                <span className="font-bold text-[#04264A]">3. Cancel within 30 days: </span>
                <span className="text-[#04264A]/85">
                  If you cancel within the first 30 days after paying the $239.99, you are eligible for a refund after we collect payment for your first service completed during those 30 days.
                </span>
              </div>

              <div>
                <span className="font-bold text-[#04264A]">4. Cancel after 30 days: </span>
                <span className="text-[#04264A]/85">
                  If you cancel after the first 30 days, you must pay an Exit Fee equal to 50% of the commitment charge, including any extra services you have paid for.
                </span>
              </div>

              <div>
                <span className="font-bold text-[#04264A]">5. Agreement: </span>
                <span className="text-[#04264A]/85">
                  Tapping 'I Agree and Continue' confirms you have read and accepted these terms.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-[#04264A]/8 flex flex-col gap-3">
          {!isReadOnly ? (
            <>
              {/* Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                      agreed
                        ? 'bg-[#0BA89A] text-white shadow-2xs'
                        : 'bg-white border-2 border-[#04264A]/30 text-transparent'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#04264A] leading-snug">
                  I have read and agree to the Terms of Commitment.
                </span>
              </label>

              {/* Two buttons */}
              <div className="flex flex-col gap-2 pt-1">
                <button
                  type="button"
                  disabled={!agreed}
                  onClick={handleAgreeAndProceed}
                  className={`w-full h-12 rounded-xl font-bold text-sm flex items-center justify-center transition-all shadow-xs ${
                    agreed
                      ? 'bg-[#0BA89A] hover:bg-[#099185] active:scale-[0.98] text-white cursor-pointer shadow-[0_4px_16px_rgba(11,168,154,0.3)]'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  I Agree and Continue
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onCancelToPlan?.();
                  }}
                  className="w-full py-2 text-xs font-bold text-[#04264A]/70 hover:text-[#04264A] transition-colors cursor-pointer text-center"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="w-full h-11 rounded-xl bg-[#0BA89A] hover:bg-[#099185] text-white font-bold text-xs cursor-pointer active:scale-[0.98] transition-transform shadow-xs"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
