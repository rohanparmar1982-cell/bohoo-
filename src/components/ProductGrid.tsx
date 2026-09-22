import React, { useState } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { MapPin, Phone, Camera, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product, size: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
  onSelectProduct,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'ALL BRAND RELEASES', count: products.length },
    { id: 'tshirts', label: 'OVERSIZED TEES', count: products.filter(p => p.category === 'tshirts').length },
    { id: 'polos', label: 'RUGBY & POLO JERSEYS', count: products.filter(p => p.category === 'polos').length },
    { id: 'jerseys', label: 'ATHLETIC JERSEYS', count: products.filter(p => p.category === 'jerseys').length },
  ];

  return (
    <section 
      id="collections" 
      className="py-16 sm:py-24 border-b border-[#27272a] bg-[#0f0f11] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#27272a]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ff5500] mb-2">
              <Camera className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>// IN-STORE CAPTURED BRAND RELEASES • FLAT ₹1,000 DROP</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#ededed]">
              BOHOO STORE PRODUCTS
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#a1a1aa] mt-2 max-w-2xl">
              Photographed inside Bohoo Ahmedabad at Shop 1, Indus (Sindhu Bhavan Marg). Featuring genuine in-store garments: Saint World boxy tee, Bohoo Pegasus rhinestone tee, Drip Studios "9" polo, "Do'r Saint" luxury rugby jersey, and "Saints/Desires" collage tee — all priced at flat ₹1,000 INR.
            </p>
          </div>

          {/* In-Store Callout & Pricing Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 font-mono text-xs text-[#a1a1aa]">
            <div className="flex items-center gap-2 bg-[#ff5500] text-black font-extrabold px-3 py-1.5 border border-[#ff5500]">
              <Sparkles className="w-3.5 h-3.5 fill-black" />
              <span>ALL PIECES: FLAT ₹1,000 INR</span>
            </div>
            <div className="flex items-center gap-2 bg-[#18181b] border border-[#27272a] px-3 py-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#ff5500]" />
              <span className="text-[#ededed] font-bold">GF – 1, INDUS, BODAKDEV</span>
            </div>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-b border-[#27272a]/60">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                id={`filter-cat-${cat.id}`}
                className={`px-3 py-1.5 font-mono text-xs transition-all flex items-center gap-2 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#ededed] text-black font-bold border border-[#ededed]'
                    : 'bg-[#18181b] text-[#a1a1aa] border border-[#27272a] hover:border-[#52525b] hover:text-[#ededed]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1 py-0.2 ${
                  activeCategory === cat.id ? 'bg-[#ff5500] text-black font-bold' : 'bg-[#27272a] text-[#71717a]'
                }`}>
                  0{cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="font-mono text-xs text-[#71717a] hidden sm:block">
            SHOWING <span className="text-[#ededed]">{filteredProducts.length}</span> AUTHENTIC PIECES
          </div>
        </div>

        {/* Responsive Product Grid */}
        <div 
          id="products-grid-container"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8"
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        {/* In-Store Inventory Notice from PDF */}
        <div className="mt-12 p-4 border border-[#27272a] bg-[#141417] flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3 text-[#a1a1aa]">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
            <span>IN-STORE TRIAL & FIT: ALL PIECES ARE AVAILABLE TO TRY ON IN-STORE AT GF – SHOP 1, INDUS (NEAR SAMBHUA CAFE).</span>
          </div>
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="text-[#ff5500] uppercase font-bold tracking-wider hover:underline whitespace-nowrap flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>CALL {STORE_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
