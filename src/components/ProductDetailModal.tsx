import React, { useState } from 'react';
import { Product } from '../types';
import { X, Check, Plus, MessageCircle, MapPin, Camera, Tag } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);

  if (!product) return null;

  const images = [product.primaryImage, product.hoverImage];

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 1200);
  };

  const handleWhatsAppInquiry = () => {
    const text = `Hi Bohoo Ahmedabad! I would like to inquire about ${product.name} (Code: ${product.code}, Size: ${selectedSize}, Price: ₹${product.price}) from your Sindhu Bhavan Marg store.`;
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md" 
      />

      <div className="relative w-full max-w-4xl bg-[#0f0f11] border-2 border-[#27272a] shadow-2xl p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-[#27272a] pb-4 mb-6 font-mono text-xs">
          <div className="flex items-center gap-2 text-[#ff5500]">
            <Camera className="w-3.5 h-3.5 text-[#ff5500]" />
            <span>{product.storeCaptureTag}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 border border-[#27272a] hover:border-[#ff5500] hover:text-[#ff5500] text-[#a1a1aa] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Image showcase with thumbnail switch */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative aspect-[4/5] bg-black border border-[#27272a] overflow-hidden">
              <img
                src={images[activeImageIndex]}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain bg-[#0a0a0c] p-2"
              />
              <div className="absolute bottom-3 left-3 bg-[#0f0f11]/90 border border-[#27272a] px-2 py-1 font-mono text-[10px] text-[#ededed]">
                {product.fit}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-24 border cursor-pointer overflow-hidden transition-all ${
                    activeImageIndex === idx ? 'border-[#ff5500]' : 'border-[#27272a] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" referrerPolicy="no-referrer" className="w-full h-full object-contain bg-[#111114] p-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Spec Dossier */}
          <div className="md:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                <span className="bg-[#ff5500] text-black font-bold px-2 py-0.5">
                  {product.labelBrand}
                </span>
                <span className="text-[#71717a]">// {product.code}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[#ededed] uppercase">
                {product.name}
              </h2>
              <div className="font-mono text-2xl font-bold text-[#ededed] mt-2">
                ₹{product.price.toLocaleString('en-IN')} INR
              </div>
            </div>

            <p className="font-sans text-sm text-[#a1a1aa] leading-relaxed">
              {product.description}
            </p>

            {/* Technical Breakdown */}
            <div className="space-y-2 border-t border-b border-[#27272a] py-4 font-mono text-xs">
              <div className="flex justify-between py-1 border-b border-[#1f1f23]">
                <span className="text-[#71717a]">FABRIC WEIGHT / SPEC</span>
                <span className="text-[#ededed] font-semibold">{product.fabricSpec}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1f1f23]">
                <span className="text-[#71717a]">COLOR PROFILE</span>
                <span className="text-[#ededed] font-semibold">{product.color}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1f1f23]">
                <span className="text-[#71717a]">FIT SILHOUETTE</span>
                <span className="text-[#ededed] font-semibold">{product.fit}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#71717a]">IN-STORE LOCATION</span>
                <span className="text-[#ff5500] font-semibold">GF – Shop 1, Indus (Bodakdev)</span>
              </div>
            </div>

            {/* Graphics & Art Details from Photos */}
            <div className="space-y-1.5 font-mono text-xs bg-[#141417] p-3 border border-[#27272a]">
              <div className="text-[#ff5500] font-bold text-[10px] uppercase flex items-center gap-1.5">
                <Tag className="w-3 h-3 text-[#ff5500]" />
                <span>IN-STORE ARTWORK SPECIFICATIONS:</span>
              </div>
              {product.graphics.map((g, i) => (
                <div key={i} className="flex items-start gap-2 text-[#ededed] text-[11px]">
                  <span className="text-[#ff5500] font-bold">»</span>
                  <span>{g}</span>
                </div>
              ))}
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex items-center justify-between mb-2 font-mono text-xs text-[#a1a1aa]">
                <span>SELECT SIZE:</span>
                <span className="text-[#ff5500] font-bold">{selectedSize}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 text-center font-mono text-xs border transition-all cursor-pointer ${
                      selectedSize === sz
                        ? 'border-[#ff5500] bg-[#ff5500] text-black font-bold'
                        : 'border-[#27272a] bg-[#141417] text-[#a1a1aa] hover:border-[#52525b] hover:text-[#ededed]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons: Add to Bag + WhatsApp inquiry */}
            <div className="space-y-3">
              <button
                onClick={handleAdd}
                className={`w-full py-4 px-6 font-mono text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  addedAnimation
                    ? 'bg-[#22c55e] text-black border border-[#22c55e]'
                    : 'bg-[#ededed] text-black hover:bg-[#ff5500] hover:text-black border border-[#ededed]'
                }`}
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>RESERVED TO BAG</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>RESERVE PIECE — ₹{product.price.toLocaleString('en-IN')} INR</span>
                  </>
                )}
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="w-full py-3 px-6 border border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e] hover:text-black font-mono text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>INQUIRE VIA WHATSAPP (+91 82006 69651)</span>
              </button>
            </div>

            <div className="p-3 bg-[#18181b] border border-[#27272a] font-mono text-[11px] text-[#71717a] flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#ff5500] flex-shrink-0" />
              <span>Available for fitting at GF – Shop 1, Indus (Near Sambhua Cafe).</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
