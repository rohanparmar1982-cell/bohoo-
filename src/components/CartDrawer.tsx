import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, ShoppingBag, MessageCircle, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const total = rawSubtotal - discountAmount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'SBM10' || promoCode.trim().toUpperCase() === 'BOHOO10') {
      setDiscountPercent(10);
      setPromoSuccess('SINDHU BHAVAN STORE INVITATION: 10% DISCOUNT APPLIED');
      setPromoError('');
    } else {
      setPromoError('TRY CODE "BOHOO10" FOR 10% OFF');
      setPromoSuccess('');
    }
  };

  const handleSendWhatsAppOrder = () => {
    const itemListText = items
      .map(
        (i, idx) =>
          `${idx + 1}. ${i.name} [Size: ${i.size}, Code: ${i.code}, Qty: ${i.quantity}] - ₹${(i.price * i.quantity).toLocaleString('en-IN')}`
      )
      .join('%0A');

    const customerInfo = customerName.trim()
      ? `%0ACustomer Name: ${encodeURIComponent(customerName)}%0AContact: ${encodeURIComponent(customerPhone || 'Not provided')}`
      : '';

    const text = `Hi Bohoo Ahmedabad! I would like to reserve the following streetwear pieces for pickup at your Sindhu Bhavan Marg store:%0A%0A${itemListText}%0A%0ATotal Est.: ₹${total.toLocaleString('en-IN')}${customerInfo}%0A%0APlease confirm size availability at Indus Shop 1!`;

    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        id="cart-backdrop"
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div 
          id="cart-drawer-panel"
          className="w-screen max-w-md bg-[#0f0f11] border-l-2 border-[#27272a] shadow-2xl flex flex-col justify-between"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-[#27272a] bg-[#141417] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#ff5500]" />
              <div>
                <h3 className="font-display font-extrabold text-lg text-[#ededed] tracking-tight uppercase">
                  RESERVE BAG // IN-STORE
                </h3>
                <div className="font-mono text-[10px] text-[#a1a1aa]">
                  BOHOO SINDHU BHAVAN • [{items.reduce((acc, i) => acc + i.quantity, 0)} ITEMS]
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              id="cart-close-btn"
              className="p-2 border border-[#27272a] hover:border-[#ff5500] hover:text-[#ff5500] text-[#a1a1aa] transition-colors cursor-pointer"
              aria-label="Close Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 border-2 border-dashed border-[#27272a] flex items-center justify-center mb-4 text-[#52525b]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-base text-[#ededed] uppercase mb-1">
                  NO ITEMS SELECTED
                </h4>
                <p className="font-mono text-xs text-[#71717a] max-w-xs mb-6">
                  Select boxy-fit tees, cargos, or hoodies to reserve for your store visit.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#ededed] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#ff5500] transition-colors cursor-pointer"
                >
                  BROWSE COLLECTION
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  id={`cart-item-${item.id}`}
                  className="p-3 bg-[#141417] border border-[#27272a] flex gap-3 group relative"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-black flex-shrink-0 overflow-hidden border border-[#27272a]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-1 bg-[#111114]"
                    />
                  </div>

                  {/* Info & Controls */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <span className="font-mono text-[9px] text-[#ff5500] uppercase font-bold">
                          {item.code}
                        </span>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#52525b] hover:text-[#ef4444] transition-colors p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4 className="font-sans font-bold text-xs text-[#ededed] leading-tight mb-1">
                        {item.name}
                      </h4>

                      <div className="flex items-center gap-2 font-mono text-[10px] text-[#a1a1aa]">
                        <span className="bg-[#1f1f23] px-1.5 py-0.5 border border-[#27272a] text-[#ff5500] font-bold">
                          SIZE: {item.size}
                        </span>
                        <span className="truncate max-w-[130px]">{item.fabricSpec}</span>
                      </div>
                    </div>

                    {/* Price and Quantity Adjuster */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#27272a]/60">
                      <span className="font-mono text-xs font-bold text-[#ededed]">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>

                      <div className="flex items-center border border-[#27272a] bg-[#0f0f11]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 px-2 text-[#a1a1aa] hover:text-[#ededed] hover:bg-[#27272a] transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-xs px-2 text-[#ededed] font-bold min-w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 px-2 text-[#a1a1aa] hover:text-[#ededed] hover:bg-[#27272a] transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-[#27272a] bg-[#141417] space-y-4">
              
              {/* Optional Name / Contact for In-Store Pickup */}
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="px-2.5 py-1.5 bg-[#0f0f11] border border-[#27272a] focus:border-[#ff5500] text-[#ededed] font-mono text-xs outline-none uppercase"
                />
                <input
                  type="tel"
                  placeholder="PHONE NO."
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="px-2.5 py-1.5 bg-[#0f0f11] border border-[#27272a] focus:border-[#ff5500] text-[#ededed] font-mono text-xs outline-none"
                />
              </div>

              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="space-y-1">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-[#71717a]" />
                    <input
                      type="text"
                      placeholder="STORE OFFER CODE"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-[#0f0f11] border border-[#27272a] focus:border-[#ff5500] text-[#ededed] font-mono text-xs outline-none uppercase placeholder:text-[#52525b]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-2 bg-[#27272a] hover:bg-[#3f3f46] text-[#ededed] font-mono text-xs font-semibold cursor-pointer"
                  >
                    APPLY
                  </button>
                </div>
                {promoSuccess && (
                  <div className="font-mono text-[10px] text-[#22c55e]">{promoSuccess}</div>
                )}
                {promoError && (
                  <div className="font-mono text-[10px] text-[#ef4444]">{promoError}</div>
                )}
              </form>

              {/* Breakdown in INR */}
              <div className="font-mono text-xs space-y-1.5 pt-2 border-t border-[#27272a]/60">
                <div className="flex justify-between text-[#a1a1aa]">
                  <span>ESTIMATED SUBTOTAL</span>
                  <span className="text-[#ededed]">₹{rawSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#22c55e]">
                    <span>STORE DISCOUNT ({discountPercent}%)</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-[#ededed] pt-2 border-t border-[#27272a]">
                  <span className="text-[#ff5500]">ESTIMATED TOTAL</span>
                  <span className="font-mono">₹{total.toLocaleString('en-IN')} INR</span>
                </div>
              </div>

              {/* WhatsApp Reserve Button */}
              <button
                type="button"
                id="cart-whatsapp-reserve-btn"
                onClick={handleSendWhatsAppOrder}
                className="w-full py-3.5 px-4 bg-[#22c55e] hover:bg-[#16a34a] text-black font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(34,197,94,0.3)]"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>SEND SIZES & RESERVE VIA WHATSAPP</span>
              </button>

              {/* Instant Pickup Confirmation / Mock Checkout */}
              <button
                type="button"
                onClick={onCheckout}
                className="w-full py-2.5 px-4 border border-[#27272a] bg-[#18181b] hover:bg-[#27272a] text-[#ededed] font-mono text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>GENERATE STORE PICKUP SLIP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center justify-center gap-1.5 font-mono text-[10px] text-[#71717a]">
                <MapPin className="w-3 h-3 text-[#ff5500]" />
                <span>PICKUP AT GF – 1, INDUS, SINDHU BHAVAN MARG</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
