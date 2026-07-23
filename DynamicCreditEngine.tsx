import React, { useState } from 'react';
import {
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Cpu,
  Sparkles,
  ArrowUpRight,
  Info,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { CreditProfile } from '../types';

interface DynamicCreditEngineProps {
  creditProfile: CreditProfile;
}

export const DynamicCreditEngine: React.FC<DynamicCreditEngineProps> = ({
  creditProfile,
}) => {
  const [showFactorBreakdown, setShowFactorBreakdown] = useState(false);

  return (
    <div className="glass-card border border-slate-200/80 rounded-xl shadow-xs overflow-hidden">
      {/* Header Bar */}
      <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <div className="p-1 bg-white/10 rounded backdrop-blur-xs">
            <Cpu className="w-4 h-4 text-teal-400" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-100">
            FEATURE 4: DYNAMIC AI CREDIT ENGINE
          </span>
          <span className="text-xs text-slate-400 hidden sm:inline">
            • Real-time Automated Underwriting
          </span>
        </div>
        <span className="bg-teal-900/80 text-teal-300 border border-teal-700 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 backdrop-blur-xs">
          <TrendingUp className="w-3.5 h-3.5 text-teal-300" />
          +₹25 Lakhs Limit Boost
        </span>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        <div>
          <h3 className="text-base font-extrabold text-slate-900">
            Dynamic Credit Profile
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Credit assessment updates continuously without manual financial audits or quarterly paper submissions.
          </p>
        </div>

        {/* Credit Limit Cards Side-by-Side with Upward Trend Arrow */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Current Credit Limit */}
          <div className="md:col-span-5 bg-white/60 backdrop-blur-md border border-slate-200/80 rounded-xl p-4 sm:p-5 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Current Credit Limit
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-700 font-mono">
              ₹{(creditProfile.currentLimit / 10000000).toFixed(2)} Crore
            </div>
            <p className="text-[11px] text-slate-500">Static Base Limit</p>
          </div>

          {/* Upward Trend Connector */}
          <div className="md:col-span-2 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100/90 text-emerald-700 border border-emerald-300/80 flex items-center justify-center shadow-xs backdrop-blur-xs">
              <ArrowUpRight className="w-7 h-7 stroke-[2.5]" />
            </div>
          </div>

          {/* AI Updated Credit Limit */}
          <div className="md:col-span-5 bg-gradient-to-br from-teal-50/90 to-emerald-50/70 border-2 border-teal-300/80 rounded-xl p-4 sm:p-5 space-y-1 relative shadow-xs backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-900 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                AI Updated Credit Limit
              </span>
              <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded">
                Active Limit
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight">
              ₹{(creditProfile.updatedLimit / 10000000).toFixed(2)} Crore
            </div>
            <p className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +25% Instant Capacity Growth
            </p>
          </div>
        </div>

        {/* Reasons Section */}
        <div className="bg-white/60 backdrop-blur-md border border-slate-200/80 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Underwriting Justification & Performance Drivers
            </h4>
            <button
              onClick={() => setShowFactorBreakdown(!showFactorBreakdown)}
              className="text-xs text-[#97144D] font-bold hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <span>{showFactorBreakdown ? 'Hide Model Weights' : 'View Scoring Weights'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {creditProfile.reasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2.5 bg-white/80 p-3 rounded-lg border border-slate-200/80 text-slate-800 font-bold shadow-2xs"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <span>{reason}</span>
              </div>
            ))}
          </div>

          {showFactorBreakdown && (
            <div className="mt-3 pt-3 border-t border-slate-200/80 space-y-2 text-xs">
              <span className="font-bold text-slate-700">Axis AI Credit Score Factors:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {creditProfile.scoreFactors.map((f, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/80 p-2 rounded border border-slate-200/80">
                    <span className="text-slate-600">{f.factor} ({f.weight}%)</span>
                    <span className="font-bold text-emerald-700 font-mono">{f.score}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Small text below requirement */}
        <div className="text-center text-xs text-slate-500 font-medium flex items-center justify-center space-x-1">
          <Info className="w-3.5 h-3.5 text-slate-400" />
          <span>Credit limits automatically update based on live business activity.</span>
        </div>
      </div>
    </div>
  );
};
