export interface SupplierInfo {
  name: string;
  category: string;
  gstin: string;
  accountNumber: string;
  buyerName: string;
  buyerCode: string;
  buyerRating: string;
  currentPoId: string;
  currentPoAmount: number;
  currentStatus: string;
  openPoCount: number;
}

export interface AIPrediction {
  requiredAmount: number;
  timeframeDays: number;
  status: 'Pre-approved' | 'Approved' | 'In Review';
  confidenceScore: number;
  message: string;
  currency: string;
}

export interface CashFlowDataPoint {
  day: string;
  dateStr: string;
  projectedCashFlow: number;
  fundingNeed: number;
  postFundingBalance: number;
}

export interface ERPViewConfig {
  system: 'SAP S/4HANA' | 'Oracle Fusion' | 'Tally Prime' | 'Zoho Books';
  poNumber: string;
  buyer: string;
  availableAmount: number;
  poValue: number;
  itemsCount: number;
  orderDate: string;
}

export interface WorkingCapitalStage {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
  amount?: string;
  estimatedDate?: string;
  details?: string[];
}

export interface CreditProfile {
  currentLimit: number;
  updatedLimit: number;
  reasons: string[];
  lastUpdated: string;
  scoreFactors: {
    factor: string;
    weight: number;
    score: string;
    status: 'positive' | 'neutral';
  }[];
}

export interface ActivityLogItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: 'po' | 'funding' | 'procurement' | 'production' | 'invoice';
  status: 'success' | 'info' | 'warning';
  amount?: number;
}

export interface POLineItem {
  srNo: number;
  itemCode: string;
  description: string;
  quantity: string;
  unitPrice: number;
  totalPrice: number;
  hsnCode: string;
}

export interface PurchaseOrder {
  poNumber: string;
  buyerName: string;
  buyerGstin: string;
  issueDate: string;
  deliveryDueDate: string;
  deliveryLocation: string;
  totalValue: number;
  taxAmount: number;
  grandTotal: number;
  status: string;
  lineItems: POLineItem[];
}
