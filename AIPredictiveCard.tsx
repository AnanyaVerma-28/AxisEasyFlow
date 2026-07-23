import React, { useState } from 'react';
import {
  Sparkles,
  TrendingDown,
  ShieldCheck,
  Zap,
  Info,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { AIPrediction, CashFlowDataPoint } from '../types';

interface AIPredictiveCardProps {
  prediction: AIPrediction;
  cashFlowData: CashFlowDataPoint[];
  onOpenDisbursement: () => void;
}

export const AIPredictiveCard: React.FC<AIPredictiveCardProps> = ({
  prediction,
  cashFlowData,
  onOpenDisbursement,
}) => {
  const [activeTab, setActiveTab] = useState<'graph' | 'factors'>('graph');

  // Format currency Lakhs for tooltips
  const formatLakhs = (val: number) => {
    if (val === 0) return '₹0';
    return `₹${(val / 100000).toFixed(1)}L`;
  };

  return (
    <div className="glass-card border border-teal-200/80 rounded-xl shadow-xs overflow-hidden relative">
      {/* AI Teal Accent Bar Header */}
      <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-700 text-white px-5 py-3 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <div className="p-1 bg-white/10 rounded-md backdrop-blur-xs">
            <Sparkles className="w-4 h-4 text-teal-200" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-teal-50">
            FEATURE 1: AI PREDICTIVE FINANCING
          </span>
          <span className="text-xs text-teal-200 hidden sm:inline">• Axis AI Predictive Engine</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-emerald-500/20 text-emerald-100 border border-emerald-300/30 text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 backdrop-blur-xs">
            <CheckCircle2 className="w-3 h-3 text-emerald-300" />
            {prediction.confidenceScore}% Confidence
          </span>
          <span className="bg-white/20 text-white text-[11px] font-medium px-2 py-0.5 rounded backdrop-blur-xs">
            Pre-approved
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Recommendation Statement & Highlighted Amount */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: AI Statement */}
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-50/80 text-teal-800 border border-teal-200/80 text-xs font-semibold backdrop-blur-xs">
              <Zap className="w-3.5 h-3.5 text-teal-600" />
              <span>AI Liquidity Alert & Early Warning System</span>
            </div>
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
              {prediction.message}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-teal-600" />
                Forecast Window: <strong className="text-slate-900">Next 10 Days (by 01 Aug)</strong>
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Risk Assessment: <strong className="text-emerald-700">Zero Default Risk</strong>
              </span>
            </div>
          </div>

          {/* Right: Large Highlighted Amount & CTA Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-teal-50/90 to-emerald-50/60 border border-teal-200/80 rounded-xl p-4 sm:p-5 text-center lg:text-right space-y-3 shadow-2xs backdrop-blur-md">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block">
              Pre-approved Capital Allocation
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {prediction.currency}
              {prediction.requiredAmount.toLocaleString('en-IN')}
            </div>
            <div className="flex items-center justify-center lg:justify-end gap-2 text-xs">
              <span className="bg-emerald-100/90 text-emerald-800 font-semibold px-2.5 py-0.5 rounded border border-emerald-200/80">
                Pre-approved
              </span>
              <span className="text-slate-600 font-medium">0% Collateral Required</span>
            </div>
            <button
              onClick={onOpenDisbursement}
              className="w-full bg-[#97144D] hover:bg-[#7A0F3D] text-white py-2.5 px-4 rounded-lg text-xs font-bold shadow-xs transition-colors cursor-pointer flex items-center justify-center space-x-2"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Disburse ₹18,00,000 Now</span>
            </button>
          </div>
        </div>

        {/* Prediction Chart Header & Controls */}
        <div className="border-t border-slate-200/60 pt-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>Projected Cash Flow vs Funding Need</span>
                <span className="text-[10px] bg-slate-100/80 text-slate-600 font-mono px-2 py-0.5 rounded border border-slate-200/80">
                  30-Day Predictive Model
                </span>
              </h3>
              <p className="text-xs text-slate-500">
                Visualizing anticipated liquidity dips and how Axis EasyFlow maintains working capital stability.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-xs">
              <button
                onClick={() => setActiveTab('graph')}
                className={`px-3 py-1 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
                  activeTab === 'graph'
                    ? 'bg-teal-700 text-white shadow-2xs'
                    : 'bg-white/70 text-slate-600 hover:bg-white'
                }`}
              >
                Forecast Chart
              </button>
              <button
                onClick={() => setActiveTab('factors')}
                className={`px-3 py-1 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
                  activeTab === 'factors'
                    ? 'bg-teal-700 text-white shadow-2xs'
                    : 'bg-white/70 text-slate-600 hover:bg-white'
                }`}
              >
                AI Model Logic
              </button>
            </div>
          </div>

          {activeTab === 'graph' ? (
            <div className="h-64 w-full bg-white/50 backdrop-blur-md rounded-xl p-3 border border-slate-200/80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={cashFlowData}
                  margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorCashFlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#97144D" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#97144D" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="colorNeed" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0D9488" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#0D9488" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="colorPost" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                  <XAxis
                    dataKey="day"
                    tick={{ fontSize: 11, fill: '#64748B' }}
                    axisLine={{ stroke: '#CBD5E1' }}
                  />
                  <YAxis
                    tickFormatter={formatLakhs}
                    tick={{ fontSize: 11, fill: '#64748B' }}
                    axisLine={{ stroke: '#CBD5E1' }}
                  />
                  <Tooltip
                    formatter={(value: any) => [`₹${(Number(value) / 100000).toFixed(2)} Lakhs`, '']}
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      borderColor: '#CBD5E1',
                      borderRadius: '8px',
                      fontSize: '12px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      backdropFilter: 'blur(8px)',
                    }}
                  />
                  <Legend
                    wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
                    iconType="circle"
                  />
                  <Area
                    type="monotone"
                    dataKey="projectedCashFlow"
                    name="Projected Cash Flow (Without Funding)"
                    stroke="#97144D"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorCashFlow)"
                  />
                  <Area
                    type="monotone"
                    dataKey="fundingNeed"
                    name="AI Predicted Liquidity Gap"
                    stroke="#0D9488"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                    fillOpacity={1}
                    fill="url(#colorNeed)"
                  />
                  <Area
                    type="monotone"
                    dataKey="postFundingBalance"
                    name="Post-Funding Liquid Balance"
                    stroke="#10B981"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#colorPost)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="bg-white/60 backdrop-blur-md border border-slate-200/80 rounded-xl p-4 text-xs space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 bg-white/80 border border-slate-200/80 rounded-lg">
                  <span className="font-bold text-slate-900 block mb-1">1. PO Velocity Signals</span>
                  <p className="text-slate-600">
                    HUL issued PO #HUL45871 worth ₹48 Lakhs with a 25-day delivery mandate. Polymer film procurement requires ₹18L upfront.
                  </p>
                </div>
                <div className="p-3 bg-white/80 border border-slate-200/80 rounded-lg">
                  <span className="font-bold text-slate-900 block mb-1">2. Payment Cycle Lag</span>
                  <p className="text-slate-600">
                    HUL payment term is 62 days. Without pre-arranged financing, a ₹16L working capital gap emerges on Day 10.
                  </p>
                </div>
                <div className="p-3 bg-white/80 border border-slate-200/80 rounded-lg">
                  <span className="font-bold text-slate-900 block mb-1">3. Automated Sanction</span>
                  <p className="text-slate-600">
                    Axis EasyFlow verified GST return filings, machine utilization logs, and past delivery timelines to grant 98% confidence score.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
