import {
  SupplierInfo,
  AIPrediction,
  CashFlowDataPoint,
  ERPViewConfig,
  WorkingCapitalStage,
  CreditProfile,
  ActivityLogItem,
  PurchaseOrder,
} from '../types';

export const initialSupplierInfo: SupplierInfo = {
  name: 'FreshPack Packaging Pvt. Ltd.',
  category: 'Packaging Supplier',
  gstin: '27AAACF8831P1ZM',
  accountNumber: 'Axis Bank A/c ****4812',
  buyerName: 'Hindustan Unilever Ltd.',
  buyerCode: 'HUL-MUM-9942',
  buyerRating: 'AAA (Tier 1 Preferred Partner)',
  currentPoId: 'PO #HUL45871',
  currentPoAmount: 4800000, // ₹48 Lakhs
  currentStatus: 'Packaging Production',
  openPoCount: 14,
};

export const initialAIPrediction: AIPrediction = {
  requiredAmount: 1800000, // ₹18,00,000
  timeframeDays: 10,
  status: 'Pre-approved',
  confidenceScore: 98,
  message:
    'Based on your confirmed purchase orders, procurement cycle and payment history, you are expected to require additional working capital within the next 10 days.',
  currency: '₹',
};

export const cashFlowForecastData: CashFlowDataPoint[] = [
  { day: 'Day 1', dateStr: '23 Jul', projectedCashFlow: 3200000, fundingNeed: 0, postFundingBalance: 3200000 },
  { day: 'Day 5', dateStr: '27 Jul', projectedCashFlow: 2100000, fundingNeed: 0, postFundingBalance: 2100000 },
  { day: 'Day 8', dateStr: '30 Jul', projectedCashFlow: 900000, fundingNeed: 1800000, postFundingBalance: 2700000 },
  { day: 'Day 10', dateStr: '01 Aug', projectedCashFlow: 200000, fundingNeed: 1800000, postFundingBalance: 2000000 },
  { day: 'Day 15', dateStr: '06 Aug', projectedCashFlow: 1400000, fundingNeed: 1800000, postFundingBalance: 3200000 },
  { day: 'Day 20', dateStr: '11 Aug', projectedCashFlow: 2800000, fundingNeed: 0, postFundingBalance: 2800000 },
  { day: 'Day 25', dateStr: '16 Aug', projectedCashFlow: 4500000, fundingNeed: 0, postFundingBalance: 4500000 },
  { day: 'Day 30', dateStr: '21 Aug', projectedCashFlow: 6200000, fundingNeed: 0, postFundingBalance: 6200000 },
];

export const erpConfigs: Record<string, ERPViewConfig> = {
  'SAP S/4HANA': {
    system: 'SAP S/4HANA',
    poNumber: 'PO #HUL45871',
    buyer: 'Hindustan Unilever Ltd.',
    availableAmount: 2000000, // ₹20 Lakhs
    poValue: 4800000,
    itemsCount: 3,
    orderDate: '21 July 2026',
  },
  'Oracle Fusion': {
    system: 'Oracle Fusion',
    poNumber: 'PO #HUL45871',
    buyer: 'Hindustan Unilever Ltd.',
    availableAmount: 2000000,
    poValue: 4800000,
    itemsCount: 3,
    orderDate: '21 July 2026',
  },
  'Tally Prime': {
    system: 'Tally Prime',
    poNumber: 'PO #HUL45871',
    buyer: 'Hindustan Unilever Ltd.',
    availableAmount: 2000000,
    poValue: 4800000,
    itemsCount: 3,
    orderDate: '21 July 2026',
  },
  'Zoho Books': {
    system: 'Zoho Books',
    poNumber: 'PO #HUL45871',
    buyer: 'Hindustan Unilever Ltd.',
    availableAmount: 2000000,
    poValue: 4800000,
    itemsCount: 3,
    orderDate: '21 July 2026',
  },
};

export const workingCapitalStages: WorkingCapitalStage[] = [
  {
    id: 'stage-1',
    title: 'Purchase Order',
    description: 'PO #HUL45871 Issued by HUL',
    status: 'completed',
    amount: '₹48 Lakhs',
    estimatedDate: '21 Jul 2026',
    details: ['Verified via GST Portal', 'Buyer Rating: AAA', 'Delivery Window: 25 Days'],
  },
  {
    id: 'stage-2',
    title: 'Purchase Order Financing',
    description: 'Working Capital Funded via Axis EasyFlow',
    status: 'completed',
    amount: '₹18 Lakhs Disbursed',
    estimatedDate: '22 Jul 2026',
    details: ['Tranche #1 Disbursed @ 8.25% p.a.', 'Direct Supplier Pay Out', 'Zero Documentation'],
  },
  {
    id: 'stage-3',
    title: 'Raw Material Procurement',
    description: 'Polymer Resin & Ink Sourcing',
    status: 'completed',
    amount: '₹14.2 Lakhs',
    estimatedDate: '23 Jul 2026',
    details: ['Procured from Reliance Polymers', 'Invoice #REL-9921 Settled', 'Quality Certification Passed'],
  },
  {
    id: 'stage-4',
    title: 'Packaging Production',
    description: 'High-speed Flexo Printing & Lamination',
    status: 'active',
    amount: 'In Progress (65%)',
    estimatedDate: '23 - 28 Jul 2026',
    details: ['Batch #PK-9921 on Machine Line 3', 'Daily Output: 1,20,000 Units', 'On-Track for HUL Delivery'],
  },
  {
    id: 'stage-5',
    title: 'Invoice Generation',
    description: 'Tax Invoice & E-Way Bill Creation',
    status: 'upcoming',
    amount: '₹48 Lakhs Projected',
    estimatedDate: '29 Jul 2026',
    details: ['Auto-reconciliation via EasyFlow Engine', 'Digital Bill of Lading', 'IRN Generation'],
  },
  {
    id: 'stage-6',
    title: 'Invoice Financing',
    description: 'Post-Delivery Early Cash Flow Option',
    status: 'upcoming',
    amount: 'Up to 90% Available',
    estimatedDate: '30 Jul 2026',
    details: ['Instant Pre-approved Liquidity', 'Discount Rate: 0.65%/mo', 'Non-recourse Facility'],
  },
  {
    id: 'stage-7',
    title: 'Payment Received',
    description: 'HUL Treasury Direct Settlement',
    status: 'upcoming',
    amount: '62-Day Cycle',
    estimatedDate: '21 Sep 2026',
    details: ['Auto-debit Settlement with Axis', 'Credit Limit Auto-Restoration', 'Bonus Score Boost'],
  },
];

export const initialCreditProfile: CreditProfile = {
  currentLimit: 10000000, // ₹1 Crore
  updatedLimit: 12500000, // ₹1.25 Crore
  lastUpdated: 'Today, 08:30 AM via Axis AI Engine',
  reasons: [
    'Higher Purchase Order Volume',
    'Excellent Payment Behaviour',
    'Strong Buyer Rating',
    'Consistent Cash Flow',
  ],
  scoreFactors: [
    { factor: 'HUL Purchase Order Velocity', weight: 35, score: '99/100', status: 'positive' },
    { factor: 'Buyer Credit Rating (HUL AAA)', weight: 30, score: '100/100', status: 'positive' },
    { factor: 'Historical On-Time Delivery', weight: 20, score: '96/100', status: 'positive' },
    { factor: 'Bank Cash Flow Volatility', weight: 15, score: 'Low Volatility', status: 'positive' },
  ],
};

export const initialActivityLogs: ActivityLogItem[] = [
  {
    id: 'act-1',
    title: 'Purchase Order Received',
    description: 'Hindustan Unilever Ltd. issued PO #HUL45871 for ₹48 Lakhs',
    timestamp: 'Today, 09:15 AM',
    type: 'po',
    status: 'info',
    amount: 4800000,
  },
  {
    id: 'act-2',
    title: 'Funding Pre-approved',
    description: 'AI Engine calculated ₹20 Lakhs instant limit at 98% confidence',
    timestamp: 'Today, 09:30 AM',
    type: 'funding',
    status: 'success',
    amount: 2000000,
  },
  {
    id: 'act-3',
    title: 'Raw Material Purchased',
    description: 'Disbursed ₹8.5 Lakhs directly to Supreme Polymer Suppliers',
    timestamp: 'Yesterday, 04:45 PM',
    type: 'procurement',
    status: 'success',
    amount: 850000,
  },
  {
    id: 'act-4',
    title: 'Production Started',
    description: 'Batch #PK-9921 initiated on High-Speed Flexo Line 3',
    timestamp: '2 days ago, 11:20 AM',
    type: 'production',
    status: 'info',
  },
  {
    id: 'act-5',
    title: 'Invoice Submitted',
    description: 'Inv #INV-8832 for PO #HUL43201 verified by HUL Portal',
    timestamp: '3 days ago, 02:10 PM',
    type: 'invoice',
    status: 'success',
    amount: 3200000,
  },
];

export const samplePurchaseOrder: PurchaseOrder = {
  poNumber: 'PO #HUL45871',
  buyerName: 'Hindustan Unilever Limited',
  buyerGstin: '27AAACH1123A1Z0',
  issueDate: '21 July 2026',
  deliveryDueDate: '15 August 2026',
  deliveryLocation: 'HUL Foods & Homecare Works, Chakan Unit 2, Pune, MH',
  totalValue: 4067796,
  taxAmount: 732204, // 18% GST
  grandTotal: 4800000,
  status: 'Confirmed & Verified',
  lineItems: [
    {
      srNo: 1,
      itemCode: 'PKG-HUL-001',
      description: 'High-Barrier Biodegradable Laminate Pouches (250g Tea Packs)',
      quantity: '850,000 Units',
      unitPrice: 3.2,
      totalPrice: 2720000,
      hsnCode: '392321',
    },
    {
      srNo: 2,
      itemCode: 'PKG-HUL-002',
      description: 'Flexographic 5-Color Printed Outer Packaging Foil Rolls',
      quantity: '1,200 Rolls',
      unitPrice: 850.0,
      totalPrice: 1020000,
      hsnCode: '392010',
    },
    {
      srNo: 3,
      itemCode: 'PKG-HUL-003',
      description: 'Heavy-Duty Corrugated Master Shipping Boxes (HUL Spec B-4)',
      quantity: '8,000 Boxes',
      unitPrice: 40.99,
      totalPrice: 327796,
      hsnCode: '481910',
    },
  ],
};
