import React, { useState } from 'react';
import {
  Building,
  Layers,
  Database,
  BookOpen,
  ArrowRight,
  Check,
  ShieldCheck,
  Cpu,
  Zap,
  Globe,
  FileText,
  Clock,
  Sparkles,
} from 'lucide-react';
import { ERPViewConfig } from '../types';

interface EmbeddedERPViewProps {
  erpConfigs: Record<string, ERPViewConfig>;
  onOpenDisbursement: () => void;
  onOpenPoModal: () => void;
}

export const EmbeddedERPView: React.FC<EmbeddedERPViewProps> = ({
  erpConfigs,
  onOpenDisbursement,
  onOpenPoModal,
}) => {
  const [selectedErp, setSelectedErp] = useState<string>('SAP S/4HANA');
  const currentErp = erpConfigs[selectedErp] || erpConfigs['SAP S/4HANA'];

  return (
    <div className="glass-card border border-slate-200/80 rounded-xl shadow-xs overflow-hidden">
      {/* Header Bar indicating FEATURE 2 */}
      <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <div className="p-1 bg-white/10 rounded backdrop-blur-xs">
            <Cpu className="w-4 h-4 text-amber-400" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-100">
            FEATURE 2: EMBEDDED FINANCE INSIDE ERP
          </span>
          <span className="text-xs text-slate-400 hidden sm:inline">
            • Live Native Integration via Axis Open API
          </span>
        </div>
        <div className="flex items-center space-x-1.5 text-xs">
          <span className="text-slate-400">Embedded Partners:</span>
          <span className="font-bold text-amber-400">SAP • Oracle • Tally • Zoho</span>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {/* ERP Platform Switcher Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-200/60">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Supplier Enterprise Software View
            </h3>
            <p className="text-xs text-slate-500">
              Funding is embedded directly inside the supplier's ERP workflow — no separate bank login required.
            </p>
          </div>

          <div className="flex items-center space-x-1.5 bg-white/60 p-1 rounded-lg text-xs font-medium border border-slate-200/80 backdrop-blur-md">
            <button
              onClick={() => setSelectedErp('SAP S/4HANA')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedErp === 'SAP S/4HANA'
                  ? 'bg-white text-slate-900 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
              <span>SAP S/4HANA</span>
            </button>

            <button
              onClick={() => setSelectedErp('Oracle Fusion')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedErp === 'Oracle Fusion'
                  ? 'bg-white text-slate-900 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
              <span>Oracle Fusion</span>
            </button>

            <button
              onClick={() => setSelectedErp('Tally Prime')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedErp === 'Tally Prime'
                  ? 'bg-white text-slate-900 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
              <span>Tally Prime</span>
            </button>

            <button
              onClick={() => setSelectedErp('Zoho Books')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedErp === 'Zoho Books'
                  ? 'bg-white text-slate-900 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-amber-600"></div>
              <span>Zoho Books</span>
            </button>
          </div>
        </div>

        {/* REALISTIC ERP CONTAINER / INTERFACE MOCKUP */}
        <div className="border-2 border-slate-300 rounded-xl bg-slate-900/95 backdrop-blur-lg text-slate-100 overflow-hidden shadow-lg font-sans">
          {/* ERP Top Window Chrome */}
          <div className="bg-slate-800/80 px-4 py-2 flex items-center justify-between border-b border-slate-700/80 text-xs backdrop-blur-md">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              </div>
              <span className="text-slate-400 font-mono text-[11px] ml-2">
                {currentErp.system} Cloud Workspace • FreshPack Production Instance
              </span>
            </div>

            <div className="flex items-center space-x-3 text-[11px] text-slate-300">
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3 text-teal-400" />
                Axis EasyFlow Connected
              </span>
              <span className="bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 px-2 py-0.5 rounded text-[10px]">
                Live Sync
              </span>
            </div>
          </div>

          {/* ERP Sub-navigation / Sidebar Mock */}
          <div className="p-4 sm:p-6 bg-slate-900/90 space-y-6">
            {/* Purchase Order Details Row inside ERP */}
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 backdrop-blur-md">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold bg-blue-900/60 text-blue-300 border border-blue-700/50 px-2 py-0.5 rounded">
                    Purchase Order Received
                  </span>
                  <span className="text-xs font-mono text-slate-400">{currentErp.orderDate}</span>
                </div>
                <h4 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                  <span>{currentErp.poNumber}</span>
                  <button
                    onClick={onOpenPoModal}
                    className="text-xs text-amber-400 hover:underline font-mono font-medium"
                  >
                    (View Line Items)
                  </button>
                </h4>
                <p className="text-xs text-slate-300 font-medium">
                  Buyer: <strong className="text-white">{currentErp.buyer}</strong> • Total PO Value: <strong className="text-amber-300">₹48,00,000</strong>
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">ERP Verification Status</span>
                  <span className="text-xs font-bold text-emerald-400 flex items-center justify-end gap-1">
                    <Check className="w-3.5 h-3.5" /> GST & PO Matched
                  </span>
                </div>
              </div>
            </div>

            {/* EMBEDDED AXIS EASYFLOW NOTIFICATION BANNER INSIDE ERP */}
            <div className="bg-gradient-to-r from-[#97144D] via-[#7A0F3D] to-slate-900 border-2 border-rose-400/40 rounded-xl p-5 sm:p-6 shadow-xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-teal-500/10 to-transparent pointer-events-none"></div>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                {/* Embedded Offer Message */}
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white text-[#97144D] font-bold text-xs rounded flex items-center justify-center">
                      A
                    </div>
                    <span className="text-xs font-bold text-rose-200 uppercase tracking-wide">
                      Axis EasyFlow Embedded Facility
                    </span>
                    <span className="bg-teal-400/20 text-teal-300 border border-teal-400/30 text-[10px] px-2 py-0.5 rounded font-mono">
                      Auto-Triggered by PO
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white">
                    Working Capital Available: <span className="text-amber-300">₹20,00,000</span>
                  </h3>

                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    Pre-approved liquidity instantly calculated against PO #HUL45871. Disburse directly into your Axis Bank Current Account without switching tabs or applying manually.
                  </p>
                </div>

                {/* Receive Funds CTA */}
                <div className="flex flex-col items-stretch sm:items-end space-y-2 shrink-0">
                  <button
                    onClick={onOpenDisbursement}
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm px-6 py-3 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center space-x-2 border border-amber-200"
                  >
                    <Zap className="w-4 h-4 text-slate-950" />
                    <span>Receive Funds</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-rose-100 font-medium text-center sm:text-right">
                    No application required • No document upload • Funds available instantly
                  </p>
                </div>
              </div>
            </div>

            {/* Small ERP Compatibility Footprint Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 border-t border-slate-800">
              <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                Native ERP Integrations (Zero API Key Setup Required):
              </span>

              <div className="flex items-center space-x-3">
                <span className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded text-[11px] font-bold text-blue-300 flex items-center gap-1">
                  <Building className="w-3 h-3" /> SAP S/4HANA
                </span>
                <span className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded text-[11px] font-bold text-red-300 flex items-center gap-1">
                  <Layers className="w-3 h-3" /> Oracle Fusion
                </span>
                <span className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded text-[11px] font-bold text-emerald-300 flex items-center gap-1">
                  <Database className="w-3 h-3" /> Tally Prime
                </span>
                <span className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded text-[11px] font-bold text-amber-300 flex items-center gap-1">
                  <BookOpen className="w-3 h-3" /> Zoho Books
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
