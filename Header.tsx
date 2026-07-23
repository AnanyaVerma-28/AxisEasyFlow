import React, { useState } from 'react';
import {
  Building2,
  Bell,
  Search,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  Layers,
  ArrowRightLeft,
  CheckCircle2,
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPoModal: () => void;
  onOpenDisbursement: () => void;
  unreadCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenPoModal,
  onOpenDisbursement,
  unreadCount,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 glass border-b border-white/60 shadow-xs">
      {/* Top Official Axis Enterprise Ribbon */}
      <div className="bg-[#97144D] text-white px-4 py-1.5 text-xs font-medium flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1 bg-white/10 px-2 py-0.5 rounded text-[11px] tracking-wide font-semibold backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>EasyFlow Commercial Engine v4.2</span>
          </span>
          <span className="hidden sm:inline text-slate-200">
            Axis Bank Commercial Banking • Embedded Supply Chain Financing
          </span>
        </div>
        <div className="flex items-center space-x-4 text-[11px] text-slate-200">
          <span className="flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
            <span className="hidden md:inline">RBI Compliant • 256-bit Encrypted</span>
          </span>
          <span className="text-white/40">|</span>
          <span className="font-mono text-slate-100">INR (₹) Corporate Desk</span>
        </div>
      </div>

      {/* Main Corporate Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Platform Title */}
        <div className="flex items-center space-x-3">
          {/* Axis Bank Logo Icon Concept */}
          <div className="w-10 h-10 bg-[#97144D] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-xs border border-rose-900/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-900 to-transparent opacity-30"></div>
            <span className="font-serif text-2xl font-black tracking-tighter">A</span>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-amber-400 transform rotate-45 translate-x-1 translate-y-1"></div>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Axis <span className="text-[#97144D]">EasyFlow</span>
              </span>
              <span className="text-[10px] font-semibold uppercase bg-teal-50 text-teal-700 border border-teal-200 px-1.5 py-0.5 rounded backdrop-blur-xs">
                AI Working Capital
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Funding That Flows With Your Business
            </p>
          </div>
        </div>

        {/* Global ERP/PO Search */}
        <div className="hidden lg:flex items-center flex-1 max-w-xs relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
          <input
            type="text"
            placeholder="Search PO #HUL45871, Invoices, GSTIN..."
            className="w-full bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#97144D]/20 focus:border-[#97144D] transition-all"
            onKeyDown={(e) => {
              if (e.key === 'Enter') onOpenPoModal();
            }}
          />
        </div>

        {/* Quick Actions & Navigation Right */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenDisbursement}
            className="hidden sm:flex items-center space-x-1.5 bg-[#97144D] hover:bg-[#7A0F3D] text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-all cursor-pointer"
          >
            <ArrowRightLeft className="w-3.5 h-3.5" />
            <span>Receive Funds (₹20L)</span>
          </button>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100/80 relative transition-colors cursor-pointer"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-600 ring-2 ring-white"></span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 glass-card rounded-xl shadow-xl z-50 p-3">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200/60">
                  <span className="text-xs font-bold text-slate-800">
                    Axis EasyFlow System Alerts
                  </span>
                  <span className="text-[10px] bg-teal-50 text-teal-700 font-semibold px-2 py-0.5 rounded-full">
                    3 New
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-white/60 rounded-lg border border-slate-200/50">
                    <p className="font-semibold text-slate-900 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-teal-600" /> Pre-approval Ready
                    </p>
                    <p className="text-slate-600 text-[11px] mt-0.5">
                      ₹18,00,000 working capital pre-approved for PO #HUL45871 at 98% confidence.
                    </p>
                    <span className="text-[10px] text-slate-400 mt-1 block">10 mins ago</span>
                  </div>
                  <div className="p-2 bg-white/60 rounded-lg border border-slate-200/50">
                    <p className="font-semibold text-slate-900 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Credit Limit Enhanced
                    </p>
                    <p className="text-slate-600 text-[11px] mt-0.5">
                      Credit limit increased from ₹1.00 Cr to ₹1.25 Cr based on HUL PO volume.
                    </p>
                    <span className="text-[10px] text-slate-400 mt-1 block">1 hour ago</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile / Corporate Entity Badge */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-2 pl-2 pr-1.5 py-1 bg-white/60 border border-slate-200/80 rounded-lg hover:bg-white/90 transition-colors text-left cursor-pointer"
            >
              <div className="w-7 h-7 rounded-md bg-[#97144D]/10 text-[#97144D] font-bold flex items-center justify-center text-xs">
                FP
              </div>
              <div className="hidden md:block text-left">
                <p className="text-xs font-bold text-slate-800 leading-tight">FreshPack Packaging</p>
                <p className="text-[10px] text-slate-500">HUL Tier-1 Supplier</p>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-64 glass-card rounded-xl shadow-xl z-50 p-3 text-xs">
                <div className="pb-2 mb-2 border-b border-slate-200/60">
                  <p className="font-bold text-slate-900">FreshPack Packaging Pvt. Ltd.</p>
                  <p className="text-slate-500 text-[11px]">GSTIN: 27AAACF8831P1ZM</p>
                  <p className="text-slate-500 text-[11px]">Axis A/c: ****4812</p>
                </div>
                <div className="space-y-1.5 text-slate-700">
                  <div className="flex items-center justify-between p-1.5 rounded hover:bg-white/50">
                    <span>Anchor Corporate</span>
                    <span className="font-semibold text-slate-900">Hindustan Unilever</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded hover:bg-white/50">
                    <span>Supplier Reliability</span>
                    <span className="font-semibold text-emerald-600">AAA (98/100)</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded hover:bg-white/50">
                    <span>Current Facility</span>
                    <span className="font-semibold text-slate-900">₹1.25 Crore</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="bg-white/40 border-t border-slate-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-1 overflow-x-auto py-1 scrollbar-none text-xs font-medium">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'all'
                ? 'bg-white/90 text-[#97144D] font-bold shadow-xs border border-slate-200/80 backdrop-blur-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Complete Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('predictive')}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'predictive'
                ? 'bg-white/90 text-[#97144D] font-bold shadow-xs border border-slate-200/80 backdrop-blur-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>AI Predictive Financing</span>
          </button>

          <button
            onClick={() => setActiveTab('erp')}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'erp'
                ? 'bg-white/90 text-[#97144D] font-bold shadow-xs border border-slate-200/80 backdrop-blur-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Building2 className="w-3.5 h-3.5 text-slate-600" />
            <span>Embedded ERP Finance</span>
          </button>

          <button
            onClick={() => setActiveTab('lifecycle')}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'lifecycle'
                ? 'bg-white/90 text-[#97144D] font-bold shadow-xs border border-slate-200/80 backdrop-blur-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <ArrowRightLeft className="w-3.5 h-3.5 text-slate-600" />
            <span>Working Capital 360</span>
          </button>

          <button
            onClick={() => setActiveTab('credit')}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'credit'
                ? 'bg-white/90 text-[#97144D] font-bold shadow-xs border border-slate-200/80 backdrop-blur-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
            <span>Dynamic AI Credit Engine</span>
          </button>
        </div>
      </div>
    </header>
  );
};
