import React from 'react';
import {
  X,
  FileCheck2,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Printer,
  ExternalLink,
} from 'lucide-react';
import { PurchaseOrder } from '../types';

interface PODetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  po: PurchaseOrder;
  onOpenDisbursement: () => void;
}

export const PODetailsModal: React.FC<PODetailsModalProps> = ({
  isOpen,
  onClose,
  po,
  onOpenDisbursement,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="glass-card border border-slate-200/80 rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-white/10 rounded-lg backdrop-blur-xs">
              <FileCheck2 className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>{po.poNumber}</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold px-2 py-0.5 rounded-full backdrop-blur-xs">
                  {po.status}
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Issued by {po.buyerName} • Axis EasyFlow Engine Authenticated
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto text-xs text-slate-700">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white/60 backdrop-blur-xs border border-slate-200/80 rounded-xl p-4">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Buyer Entity</span>
              <p className="font-bold text-slate-900 text-sm">{po.buyerName}</p>
              <p className="text-slate-500 font-mono mt-0.5">GSTIN: {po.buyerGstin}</p>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Dates & Schedule</span>
              <p className="text-slate-800 font-medium">Issue Date: <strong className="text-slate-900">{po.issueDate}</strong></p>
              <p className="text-slate-800 font-medium">Delivery Due: <strong className="text-slate-900">{po.deliveryDueDate}</strong></p>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Delivery Location</span>
              <p className="text-slate-800 font-medium">{po.deliveryLocation}</p>
            </div>
          </div>

          {/* Line Items Table */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">
              Purchase Order Line Items Breakdown
            </h4>
            <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-white/60 backdrop-blur-xs">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-100/80 text-slate-700 font-bold text-[11px] uppercase">
                  <tr>
                    <th className="p-3 border-b border-slate-200/80">#</th>
                    <th className="p-3 border-b border-slate-200/80">Item Description</th>
                    <th className="p-3 border-b border-slate-200/80">HSN Code</th>
                    <th className="p-3 border-b border-slate-200/80">Quantity</th>
                    <th className="p-3 border-b border-slate-200/80">Unit Price</th>
                    <th className="p-3 border-b border-slate-200/80 text-right">Total Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {po.lineItems.map((item) => (
                    <tr key={item.srNo} className="hover:bg-slate-50/80">
                      <td className="p-3 text-slate-500 font-mono">{item.srNo}</td>
                      <td className="p-3 font-semibold text-slate-900">
                        {item.description}
                        <span className="block text-[10px] text-slate-400 font-mono font-normal">
                          SKU: {item.itemCode}
                        </span>
                      </td>
                      <td className="p-3 text-slate-600 font-mono">{item.hsnCode}</td>
                      <td className="p-3 font-bold text-slate-800">{item.quantity}</td>
                      <td className="p-3 text-slate-700 font-mono">₹{item.unitPrice.toFixed(2)}</td>
                      <td className="p-3 text-right font-extrabold text-slate-900 font-mono">
                        ₹{item.totalPrice.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-slate-50/80 border-t border-slate-200/80 font-mono text-xs font-bold text-slate-900">
                  <tr>
                    <td colSpan={5} className="p-3 text-right">Base Order Subtotal:</td>
                    <td className="p-3 text-right">₹{po.totalValue.toLocaleString('en-IN')}</td>
                  </tr>
                  <tr>
                    <td colSpan={5} className="p-3 text-right text-slate-600">GST (18% Integrated Tax):</td>
                    <td className="p-3 text-right text-slate-600">₹{po.taxAmount.toLocaleString('en-IN')}</td>
                  </tr>
                  <tr className="text-sm bg-rose-50/60 text-[#97144D]">
                    <td colSpan={5} className="p-3 text-right">Grand Total Value:</td>
                    <td className="p-3 text-right font-black">₹{po.grandTotal.toLocaleString('en-IN')}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Verification Badge & Drawdown Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-teal-50/80 backdrop-blur-xs border border-teal-200/80 rounded-xl">
            <div className="flex items-center space-x-2.5">
              <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0" />
              <div>
                <p className="font-bold text-slate-900">100% Pre-approved Working Capital Available</p>
                <p className="text-slate-600 text-[11px]">
                  Axis EasyFlow Engine automatically verified GST returns and e-Way bills.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenDisbursement();
              }}
              className="bg-[#97144D] hover:bg-[#7A0F3D] text-white px-5 py-2.5 rounded-lg font-bold text-xs shadow-xs transition-colors cursor-pointer shrink-0"
            >
              Drawdown ₹18,00,000 Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
