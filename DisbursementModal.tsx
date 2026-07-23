import React, { useState } from 'react';
import {
  X,
  Zap,
  CheckCircle2,
  Building2,
  ShieldCheck,
  ArrowRight,
  Calculator,
  Lock,
} from 'lucide-react';

interface DisbursementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (amount: number, term: number) => void;
  maxAmount: number;
}

export const DisbursementModal: React.FC<DisbursementModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  maxAmount,
}) => {
  const [amount, setAmount] = useState<number>(1800000); // ₹18,00,000 default
  const [tenureDays, setTenureDays] = useState<number>(60); // 60 days matching HUL cycle
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  // Interest calculation @ 8.25% p.a.
  const interestRatePa = 8.25;
  const interestCost = Math.round((amount * (interestRatePa / 100) * tenureDays) / 365);
  const netDisbursement = amount;

  const handleDisburse = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        onSuccess(amount, tenureDays);
        setIsSuccess(false);
        onClose();
      }, 1500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="glass-card border border-slate-200/80 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#97144D] text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-white/10 rounded-lg backdrop-blur-xs">
              <Zap className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Axis EasyFlow Instant Fund Release
              </h3>
              <p className="text-xs text-rose-200">
                Direct Credit to FreshPack Packaging Pvt. Ltd.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/80 hover:text-white rounded-lg hover:bg-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-50 shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Funds Disbursed Successfully!
            </h3>
            <p className="text-sm text-slate-600">
              ₹{amount.toLocaleString('en-IN')} has been credited to your Axis Bank Account <strong className="text-slate-900">****4812</strong>.
            </p>
            <div className="bg-white/80 border border-slate-200/80 rounded-lg p-3 text-xs font-mono text-slate-700">
              Ref ID: <strong className="text-emerald-700">AXIS-EF-2026-994102</strong> • Status: Executed
            </div>
          </div>
        ) : (
          <div className="p-6 space-y-5 text-xs text-slate-700">
            {/* Amount Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-bold text-slate-900 uppercase tracking-wider">
                  Select Drawdown Amount
                </label>
                <span className="text-lg font-black text-[#97144D] font-mono">
                  ₹{amount.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min={200000}
                max={maxAmount}
                step={100000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-[#97144D] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>Min: ₹2 Lakhs</span>
                <span>Max Available: ₹{(maxAmount / 100000).toFixed(0)} Lakhs</span>
              </div>
            </div>

            {/* Repayment Term selection */}
            <div className="space-y-2">
              <label className="font-bold text-slate-900 uppercase tracking-wider block">
                Repayment Tenure (Aligned with HUL 62-Day Cycle)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[30, 60, 90].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setTenureDays(term)}
                    className={`p-2.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                      tenureDays === term
                        ? 'bg-[#97144D] text-white border-[#97144D] shadow-xs'
                        : 'bg-white/70 backdrop-blur-xs text-slate-700 border-slate-200/80 hover:bg-white/90'
                    }`}
                  >
                    {term} Days
                  </button>
                ))}
              </div>
            </div>

            {/* Interest Calculation Breakdown */}
            <div className="bg-white/60 backdrop-blur-xs border border-slate-200/80 rounded-xl p-3.5 space-y-2 font-sans">
              <div className="flex justify-between text-slate-600">
                <span>Interest Rate (Base Rate + Preferred Rate Discount):</span>
                <span className="font-bold text-slate-900">8.25% p.a.</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Estimated Interest Cost ({tenureDays} Days):</span>
                <span className="font-bold text-slate-900 font-mono">₹{interestCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Processing Fee:</span>
                <span className="font-bold text-emerald-700">₹0 (Waived for HUL Tier 1)</span>
              </div>
              <div className="pt-2 border-t border-slate-200/80 flex justify-between font-bold text-sm text-slate-900">
                <span>Net Credit to Account:</span>
                <span className="text-[#97144D] font-mono">₹{netDisbursement.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Destination Account */}
            <div className="p-3 bg-teal-50/80 backdrop-blur-xs border border-teal-200/80 rounded-xl flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <Building2 className="w-5 h-5 text-teal-700 shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 text-xs">Axis Bank Current Account</p>
                  <p className="text-[11px] text-slate-600 font-mono">A/c No: **** **** 4812 (Primary)</p>
                </div>
              </div>
              <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded">
                Verified
              </span>
            </div>

            {/* Submit CTA */}
            <button
              onClick={handleDisburse}
              disabled={isProcessing}
              className="w-full bg-[#97144D] hover:bg-[#7A0F3D] text-white py-3 rounded-xl text-xs font-bold shadow-md transition-colors cursor-pointer flex items-center justify-center space-x-2"
            >
              {isProcessing ? (
                <span>Authorizing Instant Disbursal...</span>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-rose-200" />
                  <span>Confirm & Disburse ₹{amount.toLocaleString('en-IN')}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
