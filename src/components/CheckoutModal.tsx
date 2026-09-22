import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, ShieldCheck, CheckCircle2, ArrowRight, MapPin, MessageCircle, Phone, Calendar } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: (orderId: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: 'Aarav Patel',
    phone: '+91 98765 43210',
    visitDate: 'Today (Within 11 AM – 10 PM)',
    notes: 'Please hold sizes for trial in fitting room.',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrderNumber, setCompletedOrderNumber] = useState<string | null>(null);

  if (!isOpen) return null;

  const total = items.reduce((acc, i) => acc + i.price * i.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      const generatedCode = `BOHOO-SBM-${Math.floor(1000 + Math.random() * 9000)}`;
      setCompletedOrderNumber(generatedCode);
      setIsProcessing(false);
      onOrderSuccess(generatedCode);
    }, 1200);
  };

  const handleSendWhatsAppConfirmation = () => {
    const itemList = items.map((i) => `• ${i.name} (Size: ${i.size}, Qty: ${i.quantity})`).join('\n');
    const msg = `Hi Bohoo Ahmedabad! I have generated In-Store Reservation #${completedOrderNumber} for pickup at Sindhu Bhavan Marg:\n\nCustomer: ${formData.name}\nContact: ${formData.phone}\nEstimated Total: ₹${total.toLocaleString('en-IN')}\n\nItems:\n${itemList}\n\nPlease confirm availability!`;
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md" 
      />

      <div className="relative w-full max-w-xl bg-[#0f0f11] border-2 border-[#27272a] shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto font-mono">
        <div className="flex items-center justify-between border-b border-[#27272a] pb-4 mb-6 text-xs">
          <div className="flex items-center gap-2 text-[#ff5500]">
            <ShieldCheck className="w-4 h-4" />
            <span>BOHOO AHMEDABAD // IN-STORE RESERVATION SLIP</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 border border-[#27272a] hover:border-[#ff5500] hover:text-[#ff5500] text-[#a1a1aa] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {completedOrderNumber ? (
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 bg-[#22c55e]/10 border-2 border-[#22c55e] flex items-center justify-center mx-auto text-[#22c55e]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-display text-2xl font-black text-[#ededed] uppercase">
                RESERVATION CONFIRMED
              </h3>
              <p className="font-mono text-xs text-[#a1a1aa] mt-2">
                Your garments are reserved for fitting and collection at Bohoo Sindhu Bhavan Marg.
              </p>
            </div>

            <div className="p-4 bg-[#141417] border border-[#27272a] text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#71717a]">RESERVATION ID:</span>
                <span className="font-bold text-[#ff5500]">{completedOrderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#71717a]">ESTIMATED AMOUNT:</span>
                <span className="text-[#ededed] font-bold">₹{total.toLocaleString('en-IN')} INR</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#71717a]">PICKUP LOCATION:</span>
                <span className="text-[#ededed] text-right">Shop 1, Indus (Near Sambhua Cafe)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#71717a]">STORE HOURS:</span>
                <span className="text-[#22c55e]">11:00 AM – 10:00 PM Daily</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleSendWhatsAppConfirmation}
                className="w-full py-3.5 bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer text-xs"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>NOTIFY BOHOO ON WHATSAPP (+91 82006 69651)</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-3 bg-[#ededed] hover:bg-[#ff5500] text-black font-bold uppercase transition-all cursor-pointer text-xs"
              >
                RETURN TO STOREFRONT
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <h3 className="font-display text-xl font-bold uppercase text-[#ededed]">
                IN-STORE PICKUP & TRIAL DETAILS
              </h3>
              <p className="font-sans text-xs text-[#71717a] mt-1">
                Enter your details so the store team at Indus can prepare your pieces and sizes.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[10px] text-[#71717a] uppercase mb-1">
                  CUSTOMER NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-[#141417] border border-[#27272a] focus:border-[#ff5500] text-[#ededed] outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] text-[#71717a] uppercase mb-1">
                  CONTACT NUMBER (MOBILE / WHATSAPP)
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-[#141417] border border-[#27272a] focus:border-[#ff5500] text-[#ededed] outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] text-[#71717a] uppercase mb-1">
                  EXPECTED VISIT TIMING
                </label>
                <input
                  type="text"
                  required
                  value={formData.visitDate}
                  onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                  className="w-full px-3 py-2 bg-[#141417] border border-[#27272a] focus:border-[#ff5500] text-[#ededed] outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] text-[#71717a] uppercase mb-1">
                  SPECIAL REQUEST / TRIAL NOTES
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 bg-[#141417] border border-[#27272a] focus:border-[#ff5500] text-[#ededed] outline-none"
                />
              </div>
            </div>

            {/* Total and Submit */}
            <div className="pt-4 border-t border-[#27272a] space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#a1a1aa]">ESTIMATED BILL VALUE:</span>
                <span className="text-base font-bold text-[#ededed]">₹{total.toLocaleString('en-IN')} INR</span>
              </div>

              <div className="p-3 bg-[#18181b] border border-[#27272a] text-[11px] text-[#71717a] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ff5500] flex-shrink-0" />
                <span>Pickup at: GF – Shop 1, Indus (Near Sambhua Cafe), Bodakdev.</span>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 bg-[#ff5500] hover:bg-[#ff7733] text-black font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-xs shadow-[0_0_15px_rgba(255,85,0,0.4)]"
              >
                {isProcessing ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    <span>GENERATING RESERVATION SLIP...</span>
                  </>
                ) : (
                  <>
                    <span>GENERATE IN-STORE RESERVATION SLIP</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
