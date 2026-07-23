import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AIPredictiveCard } from './components/AIPredictiveCard';
import { EmbeddedERPView } from './components/EmbeddedERPView';
import { WorkingCapital360 } from './components/WorkingCapital360';
import { DynamicCreditEngine } from './components/DynamicCreditEngine';
import { RightSidebar } from './components/RightSidebar';
import { DisbursementModal } from './components/DisbursementModal';
import { PODetailsModal } from './components/PODetailsModal';
import { Footer } from './components/Footer';

import {
  initialSupplierInfo,
  initialAIPrediction,
  cashFlowForecastData,
  erpConfigs,
  workingCapitalStages,
  initialCreditProfile,
  initialActivityLogs,
  samplePurchaseOrder,
} from './data/mockData';
import { ActivityLogItem } from './types';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [supplierInfo, setSupplierInfo] = useState(initialSupplierInfo);
  const [prediction, setPrediction] = useState(initialAIPrediction);
  const [creditProfile, setCreditProfile] = useState(initialCreditProfile);
  const [activityLogs, setActivityLogs] = useState<ActivityLogItem[]>(initialActivityLogs);
  const [availableFunding, setAvailableFunding] = useState<number>(2000000); // ₹20 Lakhs

  // Modal controls
  const [isDisbursementOpen, setIsDisbursementOpen] = useState<boolean>(false);
  const [isPoModalOpen, setIsPoModalOpen] = useState<boolean>(false);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleDisbursementSuccess = (disbursedAmount: number, tenureDays: number) => {
    // 1. Add activity log
    const newLog: ActivityLogItem = {
      id: `act-${Date.now()}`,
      title: 'Funds Disbursed',
      description: `Disbursed ₹${(disbursedAmount / 100000).toFixed(1)} Lakhs directly to Axis Bank A/c ****4812`,
      timestamp: 'Just now',
      type: 'funding',
      status: 'success',
      amount: disbursedAmount,
    };
    setActivityLogs((prev) => [newLog, ...prev]);

    // 2. Adjust available funding
    const updatedAvailable = Math.max(0, availableFunding - disbursedAmount);
    setAvailableFunding(updatedAvailable);

    // 3. Trigger Toast Notification
    showToast(`Instant credit of ₹${(disbursedAmount / 100000).toFixed(1)} Lakhs confirmed to Axis A/c ****4812!`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-[#97144D] selection:text-white">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white border-2 border-teal-400 p-4 rounded-xl shadow-2xl flex items-center space-x-3 max-w-md animate-in slide-in-from-bottom-5 duration-300">
          <div className="p-2 bg-emerald-500 text-slate-950 rounded-lg shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="flex-1 text-xs">
            <p className="font-bold text-white text-sm">Axis EasyFlow Transaction Executed</p>
            <p className="text-slate-300 mt-0.5">{toastMessage}</p>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPoModal={() => setIsPoModalOpen(true)}
        onOpenDisbursement={() => setIsDisbursementOpen(true)}
        unreadCount={3}
      />

      {/* Primary Dashboard Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* HERO SECTION - Always visible as the context anchor */}
        <HeroSection
          supplierInfo={supplierInfo}
          onOpenPoModal={() => setIsPoModalOpen(true)}
          onOpenDisbursement={() => setIsDisbursementOpen(true)}
        />

        {/* Main 2-Column Enterprise Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (Main Capabilities) */}
          <div className="lg:col-span-8 space-y-6">
            {/* FEATURE 1: AI Predictive Financing */}
            {(activeTab === 'all' || activeTab === 'predictive') && (
              <AIPredictiveCard
                prediction={prediction}
                cashFlowData={cashFlowForecastData}
                onOpenDisbursement={() => setIsDisbursementOpen(true)}
              />
            )}

            {/* FEATURE 2: Embedded Finance (ERP Screen) */}
            {(activeTab === 'all' || activeTab === 'erp') && (
              <EmbeddedERPView
                erpConfigs={erpConfigs}
                onOpenDisbursement={() => setIsDisbursementOpen(true)}
                onOpenPoModal={() => setIsPoModalOpen(true)}
              />
            )}

            {/* FEATURE 3: Working Capital 360 */}
            {(activeTab === 'all' || activeTab === 'lifecycle') && (
              <WorkingCapital360
                stages={workingCapitalStages}
                onOpenPoModal={() => setIsPoModalOpen(true)}
                onOpenDisbursement={() => setIsDisbursementOpen(true)}
              />
            )}

            {/* FEATURE 4: Dynamic AI Credit Engine */}
            {(activeTab === 'all' || activeTab === 'credit') && (
              <DynamicCreditEngine creditProfile={creditProfile} />
            )}
          </div>

          {/* Right Column (Sidebar metrics, health & activity log) */}
          <div className="lg:col-span-4 space-y-6 sticky top-24">
            <RightSidebar
              activityLogs={activityLogs}
              onOpenDisbursement={() => setIsDisbursementOpen(true)}
              onOpenPoModal={() => setIsPoModalOpen(true)}
            />
          </div>
        </div>
      </main>

      {/* Modals */}
      <DisbursementModal
        isOpen={isDisbursementOpen}
        onClose={() => setIsDisbursementOpen(false)}
        onSuccess={handleDisbursementSuccess}
        maxAmount={availableFunding > 0 ? availableFunding : 2000000}
      />

      <PODetailsModal
        isOpen={isPoModalOpen}
        onClose={() => setIsPoModalOpen(false)}
        po={samplePurchaseOrder}
        onOpenDisbursement={() => setIsDisbursementOpen(true)}
      />

      {/* Official Axis Enterprise Footer */}
      <Footer />
    </div>
  );
}
