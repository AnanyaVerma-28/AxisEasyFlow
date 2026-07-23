import React from 'react';
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  CheckCircle2,
  FileCheck2,
  AlertCircle,
  Activity,
  Layers,
  Sparkles,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { ActivityLogItem } from '../types';

interface RightSidebarProps {
  activityLogs: ActivityLogItem[];
  onOpenDisbursement: () => void;
  onOpenPoModal: () => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  activityLogs,
  onOpenDisbursement,
  onOpenPoModal,
}) => {
  return (
    <div className="space-y-5">
      {/* 1. KPI CARDS GRID */}
      <div className="glass-card border border-slate-200/80 rounded-xl p-4 space-y-3 shadow-xs">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-[#97144D]" />
            Working Capital KPIs
          </h3>
          <span className="text-[10px] font-mono text-slate-500">Live Sync</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 text-xs">
          {/* Card 1: Available Funding */}
          <div
            onClick={onOpenDisbursement}
            className="p-3 bg-teal-50/80 backdrop-blur-xs border border-teal-200/80 rounded-lg hover:border-teal-300 transition-colors cursor-pointer group"
          >
            <span className="text-[10px] uppercase font-bold text-teal-800 block">
              Available Funding
            </span>
            <span className="text-lg font-black text-slate-900 font-mono block mt-0.5 group-hover:text-teal-700">
              ₹20 Lakhs
            </span>
            <span className="text-[10px] text-teal-700 font-medium flex items-center gap-0.5">
              Drawdown &rarr;
            </span>
          </div>

          {/* Card 2: Average Payment Cycle */}
          <div className="p-3 bg-white/60 backdrop-blur-xs border border-slate-200/80 rounded-lg">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">
              Avg Payment Cycle
            </span>
            <span className="text-lg font-extrabold text-slate-900 font-mono block mt-0.5">
              62 Days
            </span>
            <span className="text-[10px] text-slate-500">HUL Treasury Term</span>
          </div>

          {/* Card 3: Funding Utilisation */}
          <div className="p-3 bg-white/60 backdrop-blur-xs border border-slate-200/80 rounded-lg">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">
              Funding Utilisation
            </span>
            <span className="text-lg font-extrabold text-slate-900 font-mono block mt-0.5">
              58%
            </span>
            <div className="w-full bg-slate-200/80 h-1 rounded-full mt-1 overflow-hidden">
              <div className="bg-[#97144D] h-full w-[58%]"></div>
            </div>
          </div>

          {/* Card 4: Open Purchase Orders */}
          <div
            onClick={onOpenPoModal}
            className="p-3 bg-white/60 backdrop-blur-xs border border-slate-200/80 rounded-lg hover:border-slate-300 cursor-pointer group"
          >
            <span className="text-[10px] uppercase font-bold text-slate-500 block">
              Open POs
            </span>
            <span className="text-lg font-extrabold text-slate-900 font-mono block mt-0.5">
              14 Orders
            </span>
            <span className="text-[10px] text-[#97144D] font-bold group-hover:underline">
              Inspect Active POs
            </span>
          </div>

          {/* Card 5: AI Confidence */}
          <div className="p-3 bg-white/60 backdrop-blur-xs border border-slate-200/80 rounded-lg">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">
              AI Confidence
            </span>
            <span className="text-lg font-extrabold text-teal-700 font-mono block mt-0.5">
              98%
            </span>
            <span className="text-[10px] text-teal-800 font-semibold">High Certainty</span>
          </div>

          {/* Card 6: Supplier Risk */}
          <div className="p-3 bg-white/60 backdrop-blur-xs border border-slate-200/80 rounded-lg">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">
              Supplier Risk
            </span>
            <span className="text-lg font-extrabold text-emerald-700 font-mono block mt-0.5">
              Low
            </span>
            <span className="text-[10px] text-emerald-700 font-semibold">Tier 1 Rating</span>
          </div>
        </div>
      </div>

      {/* 2. SUPPLIER HEALTH CARD */}
      <div className="glass-card border border-slate-200/80 rounded-xl p-4 space-y-3 shadow-xs">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Supplier Health
          </h3>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50/80 border border-emerald-200/80 px-2 py-0.5 rounded-full backdrop-blur-xs">
            All Green
          </span>
        </div>

        <div className="space-y-2.5 text-xs">
          {/* Cash Flow */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-white/60 backdrop-blur-xs border border-slate-200/60">
            <span className="text-slate-700 font-semibold">Cash Flow</span>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-100/80 px-2 py-0.5 rounded text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              Healthy
            </span>
          </div>

          {/* Inventory */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-white/60 backdrop-blur-xs border border-slate-200/60">
            <span className="text-slate-700 font-semibold">Inventory</span>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-100/80 px-2 py-0.5 rounded text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              Normal
            </span>
          </div>

          {/* Payment Behaviour */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-white/60 backdrop-blur-xs border border-slate-200/60">
            <span className="text-slate-700 font-semibold">Payment Behaviour</span>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-100/80 px-2 py-0.5 rounded text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              Excellent
            </span>
          </div>

          {/* Risk Score */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-white/60 backdrop-blur-xs border border-slate-200/60">
            <span className="text-slate-700 font-semibold">Risk Score</span>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-100/80 px-2 py-0.5 rounded text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              Low
            </span>
          </div>
        </div>
      </div>

      {/* 3. RECENT ACTIVITY TIMELINE */}
      <div className="glass-card border border-slate-200/80 rounded-xl p-4 space-y-3 shadow-xs">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-700" />
            Recent Activity
          </h3>
          <span className="text-[10px] text-slate-400">Live Audit Log</span>
        </div>

        <div className="relative pl-3 border-l-2 border-slate-200/80 space-y-3.5 my-2 text-xs">
          {activityLogs.map((act) => (
            <div key={act.id} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[17px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#97144D]"></div>

              <div className="space-y-0.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 leading-tight">
                    {act.title}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {act.timestamp}
                  </span>
                </div>
                <p className="text-slate-600 text-[11px] leading-snug">
                  {act.description}
                </p>
                {act.amount && (
                  <span className="inline-block text-[10px] font-bold text-emerald-700 bg-emerald-50/80 px-1.5 py-0.5 rounded border border-emerald-200/80 font-mono mt-0.5">
                    ₹{(act.amount / 100000).toFixed(1)} Lakhs
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
