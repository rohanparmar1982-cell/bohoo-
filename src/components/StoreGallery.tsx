import React, { useState } from 'react';
import { STORE_GALLERY_IMAGES, STORE_INFO } from '../data/storeData';
import { Camera, MapPin, ZoomIn, Info, Sparkles } from 'lucide-react';

export const StoreGallery: React.FC = () => {
  return (
    <section id="store-gallery" className="py-16 sm:py-24 border-b border-[#27272a] bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#27272a]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ff5500] mb-2">
              <Camera className="w-4 h-4" />
              <span>// VISUAL AUDIT: IN-STORE PHOTOGRAPHIC LOG</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#ededed]">
              IN-STORE ARCHIVE & RETAIL DISPLAY
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#a1a1aa] mt-2 max-w-xl">
              Photographic documentation of the Bohoo Ahmedabad retail floor, centerpiece chrome mannequin, hanger racks, and real garments captured at Shop 1, Indus (Sindhu Bhavan Marg).
            </p>
          </div>

          <div className="font-mono text-xs text-[#71717a] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]"></span>
            <span>GF – 1, INDUS, SINDHU BHAVAN MARG</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {STORE_GALLERY_IMAGES.map((item) => (
            <div
              key={item.id}
              className="group relative border-2 border-[#27272a] bg-[#141417] overflow-hidden flex flex-col"
            >
              {/* Header Strip */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#27272a] bg-[#0f0f11] font-mono text-[11px]">
                <div className="flex items-center gap-2 text-[#ff5500] font-bold">
                  <span>{item.sectionNumber}</span>
                  <span className="text-[#a1a1aa]">// {item.tag}</span>
                </div>
                <span className="text-[#71717a] text-[10px]">SBM • BODAKDEV</span>
              </div>

              {/* Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black cursor-pointer">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain p-2 bg-[#0e0e11] group-hover:scale-105 transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none"></div>

                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between pointer-events-none">
                  <div>
                    <div className="font-display font-bold text-base text-[#ededed] uppercase">
                      {item.title}
                    </div>
                    <div className="font-mono text-[10px] text-[#ff5500]">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Body */}
              <div className="p-4 bg-[#141417] flex-1 flex flex-col justify-between border-t border-[#27272a]">
                <p className="font-sans text-xs text-[#a1a1aa] leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-3 pt-2 border-t border-[#27272a]/60 flex items-center justify-between font-mono text-[10px] text-[#71717a]">
                  <span>INDUS COMMERCIAL COMPLEX</span>
                  <span className="text-[#ededed]">VERIFIED STORE RECORD</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
