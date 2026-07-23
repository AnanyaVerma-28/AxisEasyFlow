import React, { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  Circle,
  ArrowRight,
  Info,
  ShieldCheck,
  FileCheck,
  Truck,
  Factory,
  Receipt,
  CreditCard,
  Building2,
} from 'lucide-react';
import { WorkingCapitalStage } from '../types';

interface WorkingCapital360Props {
  stages: WorkingCapitalStage[];
  onOpenPoModal: () => void;
  onOpenDisbursement: () => void;
}

export const WorkingCapital360: React.FC<WorkingCapital360Props> = ({
  stages,
  onOpenPoModal,
  onOpenDisbursement,
}) => {
  const [selectedStageId, setSelectedStageId] = useState<string>('stage-4'); // Packaging Production is current

  const activeStage = stages.find((s) => s.id === selectedStageId) || stages[3];

  const getStageIcon = (id: string) => {
    switch (id) {
      case 'stage-1':
        return <FileCheck className="w-4 h-4" />;
      case 'stage-2':
        return <CreditCard className="w-4 h-4" />;
      case 'stage-3':
        return <Truck className="w-4 h-4" />;
      case 'stage-4':
        return <Factory className="w-4 h-4" />;
      case 'stage-5':
        return <Receipt className="w-4 h-4" />;
      case 'stage-6':
        return <CreditCard className="w-4 h-4" />;
      case 'stage-7':
        return <Building2 className="w-4 h-4" />;
      default:
        return <Circle className="w-4 h-4" />;
    }
  };

  return (
    <div className="glass-card border border-slate-200/80 rounded-xl shadow-xs overflow-hidden">
      {/* Header bar */}
      <div className="bg-slate-800 text-white px-5 py-3 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <div className="p-1 bg-white/10 rounded backdrop-blur-xs">
            <Clock className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-100">
            FEATURE 3: WORKING CAPITAL 360
          </span>
          <span className="text-xs text-slate-300 hidden sm:inline">
            • Complete Supply Chain Lifecycle Funding
          </span>
        </div>
        <span className="bg-emerald-900/80 text-emerald-300 border border-emerald-700 text-xs font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-xs">
          Current Stage: Packaging Production
        </span>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        <div>
          <h3 className="text-base font-extrabold text-slate-900">
            End-to-End Supply Chain Financing Timeline
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Track financing coverage across every operational milestone from PO issuance to final treasury settlement.
          </p>
        </div>

        {/* HORIZONTAL TIMELINE JOURNEY */}
        <div className="relative pt-2 pb-4 overflow-x-auto scrollbar-none">
          {/* Connector Line behind nodes */}
          <div className="absolute top-8 left-6 right-6 h-1 bg-slate-200/80 -z-0"></div>

          <div className="flex items-start justify-between min-w-[800px] relative z-10 px-2 space-x-2">
            {stages.map((stage, idx) => {
              const isCurrent = stage.status === 'active';
              const isCompleted = stage.status === 'completed';
              const isSelected = stage.id === selectedStageId;

              return (
                <div
                  key={stage.id}
                  onClick={() => setSelectedStageId(stage.id)}
                  className="flex flex-col items-center text-center cursor-pointer group flex-1"
                >
                  {/* Step Node Circle */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 border-2 ${
                      isCurrent
                        ? 'bg-[#97144D] text-white border-rose-300 ring-4 ring-[#97144D]/20 shadow-md scale-110'
                        : isCompleted
                        ? 'bg-emerald-600 text-white border-emerald-700'
                        : 'bg-white/80 backdrop-blur-xs text-slate-400 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    ) : (
                      getStageIcon(stage.id)
                    )}
                  </div>

                  {/* Node Label */}
                  <div className="mt-2 space-y-0.5 max-w-[105px]">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">
                      Step 0{idx + 1}
                    </span>
                    <span
                      className={`text-xs font-bold leading-tight block ${
                        isCurrent
                          ? 'text-[#97144D] font-extrabold'
                          : isSelected
                          ? 'text-slate-900 font-bold'
                          : 'text-slate-700 group-hover:text-slate-900'
                      }`}
                    >
                      {stage.title}
                    </span>
                    {stage.amount && (
                      <span className="text-[10px] font-semibold text-slate-500 block font-mono">
                        {stage.amount}
                      </span>
                    )}
                  </div>

                  {/* Active Indicator Tag */}
                  {isCurrent && (
                    <span className="mt-1 bg-rose-100/90 text-[#97144D] text-[9px] font-bold px-1.5 py-0.5 rounded uppercase border border-rose-200/80 backdrop-blur-xs">
                      Active Stage
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Card */}
        <div className="bg-white/60 backdrop-blur-md border border-slate-200/80 rounded-xl p-4 sm:p-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/60">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[#97144D] text-white rounded-lg">
                {getStageIcon(activeStage.id)}
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Stage Inspection Details
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  {activeStage.title} — {activeStage.description}
                </h4>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-slate-700 bg-white/80 px-2.5 py-1 rounded border border-slate-200/80">
                Timeline: {activeStage.estimatedDate}
              </span>
              {activeStage.id === 'stage-1' && (
                <button
                  onClick={onOpenPoModal}
                  className="text-xs bg-[#97144D] text-white font-semibold px-2.5 py-1 rounded hover:bg-[#7A0F3D] cursor-pointer"
                >
                  Inspect PO Details
                </button>
              )}
              {activeStage.id === 'stage-2' && (
                <button
                  onClick={onOpenDisbursement}
                  className="text-xs bg-[#97144D] text-white font-semibold px-2.5 py-1 rounded hover:bg-[#7A0F3D] cursor-pointer"
                >
                  View Disbursement
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            {activeStage.details?.map((detail, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/80 p-2.5 rounded-lg border border-slate-200/80">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-800 font-medium">{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* MANDATORY FOOTER CAPTION REQUIREMENT */}
        <div className="p-3 bg-rose-50/70 backdrop-blur-xs border border-rose-200/80 rounded-lg text-center text-xs font-semibold text-[#97144D] flex items-center justify-center space-x-2">
          <Info className="w-4 h-4 text-[#97144D] shrink-0" />
          <span>
            Axis EasyFlow supports funding across the complete working capital lifecycle—not just after invoice approval.
          </span>
        </div>
      </div>
    </div>
  );
};
