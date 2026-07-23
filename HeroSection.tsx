import React from 'react';
import {
  Building2,
  FileCheck2,
  PackageCheck,
  TrendingUp,
  ShieldAlert,
  ArrowRight,
  ExternalLink,
  Layers,
} from 'lucide-react';
import { SupplierInfo } from '../types';

interface HeroSectionProps {
  supplierInfo: SupplierInfo;
  onOpenPoModal: () => void;
  onOpenDisbursement: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  supplierInfo,
  onOpenPoModal,
  onOpenDisbursement,
}) => {
  return (
    <div className="glass-card rounded-xl p-5 sm:p-6 shadow-xs relative overflow-hidden">
      {/* Decorative subtle brand background accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#97144D]"></div>

      {/* Top Banner Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-200/60">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Axis EasyFlow
            </h1>
            <span className="inline-flex items-center gap-1 bg-teal-50/80 backdrop-blur-xs text-teal-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-teal-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
              AI Working Capital Engine
            </span>
          </div>
          <p className="text-sm font-medium text-slate-600 mt-1">
            Funding That Flows With Your Business
          </p>
        </div>

        {/* Quick Summary Pill / CTA */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={onOpenPoModal}
            className="flex items-center space-x-1.5 bg-white/80 hover:bg-white text-slate-800 px-3.5 py-2 rounded-lg text-xs font-semibold border border-slate-200/80 transition-colors cursor-pointer shadow-2xs"
          >
            <FileCheck2 className="w-4 h-4 text-slate-600" />
            <span>Inspect PO #HUL45871</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </button>
          <button
            onClick={onOpenDisbursement}
            className="flex items-center space-x-1.5 bg-[#97144D] hover:bg-[#7A0F3D] text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <span>Drawdown Pre-Approved Liquidity</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Supplier & Buyer Metadata Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {/* Card 1: Supplier */}
        <div className="bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-lg p-3.5 flex items-start space-x-3">
          <div className="w-9 h-9 rounded-lg bg-[#97144D]/10 text-[#97144D] flex items-center justify-center shrink-0 mt-0.5">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Supplier (Borrower)
            </span>
            <p className="text-sm font-bold text-slate-900 leading-snug">
              {supplierInfo.name}
            </p>
            <p className="text-xs text-slate-600 mt-0.5 font-medium">
              {supplierInfo.category}
            </p>
            <span className="inline-block mt-1 text-[10px] text-slate-500 font-mono">
              GSTIN: {supplierInfo.gstin}
            </span>
          </div>
        </div>

        {/* Card 2: Anchor Corporate / Buyer */}
        <div className="bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-lg p-3.5 flex items-start space-x-3">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Anchor Corporate / Buyer
            </span>
            <p className="text-sm font-bold text-slate-900 leading-snug">
              {supplierInfo.buyerName}
            </p>
            <p className="text-xs text-emerald-700 font-semibold mt-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {supplierInfo.buyerRating}
            </p>
            <span className="inline-block mt-1 text-[10px] text-slate-500 font-mono">
              Code: {supplierInfo.buyerCode}
            </span>
          </div>
        </div>

        {/* Card 3: Current Purchase Order */}
        <div className="bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-lg p-3.5 flex items-start space-x-3">
          <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
            <FileCheck2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Current Purchase Order
            </span>
            <div className="flex items-baseline space-x-1.5">
              <p className="text-lg font-extrabold text-slate-900">
                ₹{(supplierInfo.currentPoAmount / 100000).toFixed(0)} Lakhs
              </p>
            </div>
            <p className="text-xs text-slate-600 font-mono font-medium mt-0.5">
              {supplierInfo.currentPoId}
            </p>
            <button
              onClick={onOpenPoModal}
              className="mt-1 text-[11px] font-bold text-[#97144D] hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              View 3 Line Items &rarr;
            </button>
          </div>
        </div>

        {/* Card 4: Current Status */}
        <div className="bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-lg p-3.5 flex items-start space-x-3">
          <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
            <PackageCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Current Status
            </span>
            <div className="mt-0.5">
              <span className="inline-flex items-center gap-1.5 bg-emerald-100/80 text-emerald-900 border border-emerald-300/80 text-xs font-bold px-2.5 py-1 rounded-md backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
                {supplierInfo.currentStatus}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1.5 font-medium">
              Stage 4 of 7 • Raw Materials Procured
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
