import React, { useState } from 'react';
import { Product } from '../types';
import { Plus, Check, Info, MessageCircle, Camera, Tag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onSelectProduct,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1400);
  };

  const handleWhatsAppInquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = encodeURIComponent(
      `Hi Bohoo Ahmedabad! I'm interested in the ${product.name} (${product.code}, Size: ${selectedSize}, Price: ₹${product.price}) shown in your store photos at Sindhu Bhavan Marg.`
    );
    window.open(`https://wa.me/918200669651?text=${msg}`, '_blank');
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative flex flex-col bg-[#141417] border border-[#27272a] hover:border-[#ededed] transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Card Header Strip: Code & Brand Tag */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#27272a] bg-[#0f0f11] font-mono text-[10px]">
        <div className="flex items-center gap-1.5 text-[#a1a1aa]">
          <span className="w-1.5 h-1.5 bg-[#ff5500] inline-block"></span>
          <span className="font-bold text-[#ededed]">{product.labelBrand}</span>
          <span className="text-[#52525b]">/</span>
          <span>{product.code}</span>
        </div>
        <span 
          id={`stock-status-${product.id}`}
          className="bg-[#18181b] border border-[#27272a] text-[#ff5500] font-bold px-1.5 py-0.5 tracking-wider uppercase text-[9px] flex items-center gap-1"
        >
          <Camera className="w-2.5 h-2.5 text-[#ff5500]" />
          <span>{product.storeCaptureTag.split('//')[0].trim()}</span>
        </span>
      </div>

      {/* Image Showcase with Hover Swap */}
      <div 
        className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0c] cursor-pointer"
        onClick={() => onSelectProduct(product)}
      >
        {/* Primary Image */}
        <img
          src={product.primaryImage}
          alt={product.name}
          referrerPolicy="no-referrer"
          className={`absolute inset-0 w-full h-full object-contain p-2 bg-[#0c0c0f] transition-all duration-300 ease-in-out ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
          loading="lazy"
        />

        {/* Color & Fit Badges (Floating overlay) */}
        <div className="absolute bottom-3 left-3 z-10 flex flex-col gap-1">
          <span className="inline-block bg-[#0f0f11]/90 backdrop-blur-md border border-[#27272a] text-[#ededed] font-mono text-[10px] px-2 py-0.5 tracking-wider uppercase">
            {product.fit}
          </span>
          <span className="inline-block bg-[#0f0f11]/80 backdrop-blur-md border border-[#27272a] text-[#a1a1aa] font-mono text-[9px] px-2 py-0.5">
            {product.color}
          </span>
        </div>

        {/* Quick view icon prompt */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectProduct(product);
          }}
          className="absolute top-3 right-3 w-7 h-7 bg-[#0f0f11]/90 border border-[#27272a] hover:border-[#ff5500] hover:text-[#ff5500] flex items-center justify-center text-[#a1a1aa] opacity-0 group-hover:opacity-100 transition-opacity z-10 cursor-pointer"
          title="Inspect In-Store Details"
          aria-label="Inspect In-Store Details"
        >
          <Info className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Product Details Section */}
      <div className="p-4 flex flex-col flex-grow justify-between bg-[#141417]">
        <div>
          {/* Title & Price in INR */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 
              onClick={() => onSelectProduct(product)}
              className="font-sans font-bold text-sm sm:text-base text-[#ededed] hover:text-[#ff5500] transition-colors cursor-pointer leading-tight"
            >
              {product.name}
            </h3>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span className="font-mono text-sm font-bold text-[#ededed] whitespace-nowrap">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/40 font-mono text-[9px] px-1.5 py-0.5 font-bold tracking-wider">
                FLAT
              </span>
            </div>
          </div>

          <div className="font-mono text-[11px] text-[#ff5500] mb-2 font-medium flex items-center justify-between">
            <span>{product.fabricSpec}</span>
          </div>

          {/* Key Graphic bullet */}
          <div className="mb-3 p-2 bg-[#0f0f11] border border-[#27272a] text-[10px] font-mono text-[#a1a1aa] space-y-1">
            <div className="text-[#ff5500] font-bold text-[9px] uppercase tracking-wider flex items-center gap-1">
              <Tag className="w-2.5 h-2.5" />
              <span>PHOTO SPEC:</span>
            </div>
            <div className="truncate text-[#ededed]">{product.graphics[0]}</div>
          </div>

          <p className="font-sans text-xs text-[#71717a] line-clamp-2 mb-3 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Size Picker Buttons */}
        <div className="pt-2 border-t border-[#27272a]">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] uppercase text-[#71717a] tracking-wider">
              SIZE:
            </span>
            <span className="font-mono text-[10px] text-[#ff5500] font-semibold">
              {selectedSize}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 mb-3">
            {product.sizes.map((sz) => (
              <button
                key={sz}
                type="button"
                onClick={() => setSelectedSize(sz)}
                className={`py-1.5 text-center font-mono text-xs border transition-all cursor-pointer ${
                  selectedSize === sz
                    ? 'border-[#ff5500] bg-[#ff5500] text-black font-bold shadow-[0_0_8px_rgba(255,85,0,0.3)]'
                    : 'border-[#27272a] bg-[#18181b] text-[#a1a1aa] hover:border-[#52525b] hover:text-[#ededed]'
                }`}
              >
                {sz}
              </button>
            ))}
          </div>

          {/* Action Buttons: Reserve / Add to Bag + WhatsApp Inquiry */}
          <div className="grid grid-cols-5 gap-2">
            <button
              type="button"
              id={`add-to-cart-btn-${product.id}`}
              onClick={handleAdd}
              className={`col-span-4 py-2.5 px-3 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                addedAnimation
                  ? 'bg-[#22c55e] text-black border border-[#22c55e]'
                  : 'bg-[#1f1f23] text-[#ededed] border border-[#27272a] hover:bg-[#ededed] hover:text-black hover:border-[#ededed]'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>RESERVED</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>RESERVE FIT</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleWhatsAppInquiry}
              title="Inquire via WhatsApp"
              className="col-span-1 border border-[#27272a] bg-[#18181b] hover:border-[#22c55e] hover:text-[#22c55e] text-[#a1a1aa] flex items-center justify-center cursor-pointer transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
