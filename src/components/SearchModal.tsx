import React, { useState } from 'react';
import { Product } from '../types';
import { X, Search, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim()
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.code.toLowerCase().includes(query.toLowerCase()) ||
        p.fabricSpec.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      )
    : products;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md" 
      />

      <div className="relative w-full max-w-2xl bg-[#0f0f11] border-2 border-[#27272a] shadow-2xl p-6 z-10 font-mono">
        <div className="flex items-center gap-3 border-b-2 border-[#27272a] pb-4 mb-4">
          <Search className="w-5 h-5 text-[#ff5500]" />
          <input
            type="text"
            autoFocus
            placeholder="SEARCH BOHOO (E.G. BOXY, HOODIE, CARGO, COTTON)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-[#ededed] outline-none placeholder:text-[#52525b] uppercase"
          />
          <button
            onClick={onClose}
            className="p-1 border border-[#27272a] hover:border-[#ff5500] hover:text-[#ff5500] text-[#a1a1aa] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto space-y-2">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-xs text-[#71717a]">
              NO MATCHING ITEMS FOUND IN STORE CATALOGUE.
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectProduct(item);
                  onClose();
                }}
                className="p-3 bg-[#141417] border border-[#27272a] hover:border-[#ff5500] flex items-center justify-between cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-14 bg-black overflow-hidden border border-[#27272a] flex-shrink-0">
                    <img src={item.primaryImage} alt="" className="w-full h-full object-contain p-0.5 bg-[#111114]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#ff5500] font-bold">{item.code}</div>
                    <div className="font-sans font-bold text-xs text-[#ededed] group-hover:text-[#ff5500] transition-colors">
                      {item.name}
                    </div>
                    <div className="text-[10px] text-[#71717a]">{item.fabricSpec}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="font-bold text-[#ededed]">₹{item.price.toLocaleString('en-IN')}</span>
                  <ArrowRight className="w-4 h-4 text-[#52525b] group-hover:text-[#ff5500] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
