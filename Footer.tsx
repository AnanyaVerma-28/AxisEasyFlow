import React from 'react';
import { ShieldCheck, Lock, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#97144D] text-white mt-12 border-t border-rose-900 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-rose-800/80">
          {/* Brand & Axis Commercial Engine */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-white text-[#97144D] font-black text-sm rounded flex items-center justify-center">
                A
              </div>
              <span className="text-xl font-extrabold tracking-tight">Axis EasyFlow</span>
              <span className="bg-rose-950/60 text-rose-200 border border-rose-800 text-[10px] font-mono font-semibold px-2 py-0.5 rounded">
                Enterprise Commercial Banking
              </span>
            </div>
            <p className="text-xs text-rose-200 font-semibold tracking-wide">
              Powered by <span className="text-white font-extrabold">Axis AI Commercial Engine</span>
            </p>
          </div>

          {/* Central Tagline Requirement */}
          <div className="text-center md:text-right">
            <span className="text-sm sm:text-base font-extrabold tracking-widest text-amber-300 uppercase block">
              Predict • Approve • Fund • Grow
            </span>
            <span className="text-[11px] text-rose-200">
              AI-Powered Embedded Working Capital Platform for FMCG Ecosystems
            </span>
          </div>
        </div>

        {/* Bottom Compliance & Rights */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-rose-200/90 gap-4">
          <div className="flex items-center space-x-3">
            <span className="flex items-center gap-1 text-white font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
              RBI Compliant Supply Chain Financing Framework
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-white font-medium">
              <Lock className="w-3.5 h-3.5 text-teal-300" />
              256-bit ISO 27001 Security
            </span>
          </div>

          <div className="text-center sm:text-right text-rose-200 text-[11px]">
            &copy; {new Date().getFullYear()} Axis Bank Ltd. All Rights Reserved. Built on Axis EasyFlow Engine.
          </div>
        </div>
      </div>
    </footer>
  );
};
