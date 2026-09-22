import React from 'react';
import { ArrowDownRight, MapPin, Phone, Star, Clock, Compass, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface HeroProps {
  onExploreDrop: () => void;
  onOpenLocation: () => void;
  onOpenProfile: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreDrop,
  onOpenLocation,
  onOpenProfile,
}) => {
  return (
    <section 
      id="hero-section" 
      className="relative min-h-[calc(100vh-4.5rem)] flex items-center border-b border-[#27272a] bg-[#0f0f11] bg-grid-pattern overflow-hidden"
    >
      {/* Structural Telemetry Grid Coordinates */}
      <div className="absolute top-4 left-4 sm:left-8 font-mono text-[10px] text-[#52525b] tracking-widest hidden md:block">
        [COORDINATES: 23.0338° N, 72.5074° E] // SINDHU BHAVAN MARG, BODAKDEV
      </div>
      <div className="absolute top-4 right-4 sm:right-8 font-mono text-[10px] text-[#52525b] tracking-widest hidden md:block">
        BUSINESS PROFILE // REPORT DATE: {STORE_INFO.reportDate}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Store Branding, Location & Streetwear Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            
            {/* Top Micro-Data Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6 font-mono text-[11px]">
              <span className="bg-[#ff5500] text-black font-bold px-2 py-0.5 tracking-wider uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping"></span>
                OPEN DAILY 11 AM – 10 PM
              </span>
              <span className="border border-[#27272a] bg-[#18181b] text-[#ededed] px-2.5 py-0.5 tracking-wider flex items-center gap-1">
                <Star className="w-3 h-3 text-[#ff5500] fill-[#ff5500]" />
                <span className="font-bold">{STORE_INFO.rating} / 5</span>
                <span className="text-[#71717a]">({STORE_INFO.reviewsCount} Google Reviews)</span>
              </span>
              <span className="bg-[#ededed] text-black font-extrabold px-2.5 py-0.5 tracking-wider font-mono">
                FLAT ₹1,000 T-SHIRT DROP
              </span>
              <span className="text-[#71717a] hidden sm:inline border border-[#27272a] px-2 py-0.5 bg-[#18181b]">
                SINDHU BHAVAN MARG
              </span>
            </div>

            {/* Oversized Bold Headline */}
            <div className="relative mb-6">
              <div className="font-mono text-xs text-[#ff5500] tracking-widest mb-1 font-bold">
                // RETAIL STORE PROFILE & APPAREL SHOWCASE
              </div>
              <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold uppercase tracking-tight text-[#ededed] leading-[0.95]">
                BOHOO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ededed] via-[#a1a1aa] to-[#71717a]">
                  AHMEDABAD
                </span>{' '}
                <span className="text-[#ff5500]">/</span> <br />
                STREETWEAR
              </h1>
            </div>

            {/* Subtext description with verified store information */}
            <p className="font-sans text-base sm:text-lg text-[#a1a1aa] max-w-xl mb-6 leading-relaxed">
              Western Ahmedabad's prominent retail destination for oversized and boxy-fit streetwear. Located on Sindhu Bhavan Marg at Indus (near Sambhua Cafe), Bodakdev.
            </p>

            {/* Landmark & Address Quick Pill */}
            <div className="mb-8 p-3 bg-[#18181b] border-l-2 border-[#ff5500] border border-[#27272a] font-mono text-xs text-[#a1a1aa] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ff5500] flex-shrink-0" />
                <span className="text-[#ededed] font-medium">
                  GF – Shop No. 1, Indus (Near Sambhua Cafe), Bodakdev, 380054
                </span>
              </div>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff5500] hover:underline text-[11px] whitespace-nowrap font-bold"
              >
                OPEN MAP →
              </a>
            </div>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onExploreDrop}
                id="hero-explore-btn"
                className="group px-7 py-4 bg-[#ededed] text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#ff5500] hover:text-black transition-all flex items-center gap-3 cursor-pointer shadow-[4px_4px_0px_#27272a] hover:shadow-[4px_4px_0px_#ededed] active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>EXPLORE COLLECTION</span>
                <ArrowDownRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Bohoo%20Ahmedabad,%20I%20am%20inquiring%20about%20your%20streetwear%20and%20oversized%20collection.`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="px-6 py-4 border border-[#22c55e] bg-[#22c55e]/10 hover:bg-[#22c55e] hover:text-black text-[#22c55e] font-mono text-xs font-bold tracking-widest uppercase transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP INQUIRY</span>
              </a>

              <a
                href={`tel:${STORE_INFO.phone}`}
                id="hero-call-btn"
                className="px-5 py-4 border border-[#27272a] bg-[#18181b] hover:bg-[#27272a] hover:border-[#ededed] text-[#ededed] font-mono text-xs tracking-widest uppercase transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#ff5500]" />
                <span>{STORE_INFO.phone}</span>
              </a>
            </div>

            {/* Store Information Grid Markers */}
            <div className="mt-12 pt-8 border-t border-[#27272a] grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-[11px]">
              <div className="border-l-2 border-[#ff5500] pl-3 py-1">
                <div className="text-[#71717a] uppercase">TIMINGS</div>
                <div className="text-[#ededed] font-bold">11:00 AM – 10:00 PM DAILY</div>
              </div>
              <div className="border-l-2 border-[#52525b] pl-3 py-1">
                <div className="text-[#71717a] uppercase">CATEGORY</div>
                <div className="text-[#ededed] font-bold">CLOTHING / STREETWEAR</div>
              </div>
              <div className="border-l-2 border-[#52525b] pl-3 py-1 col-span-2 sm:col-span-1">
                <div className="text-[#71717a] uppercase">REVIEWS</div>
                <div className="text-[#ededed] font-bold">4.5 ★ GOOGLE RATING</div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Streetwear Photography */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative border-2 border-[#27272a] bg-[#18181b] p-3 shadow-[8px_8px_0px_#18181b]">
              
              {/* Corner crosshairs */}
              <div className="absolute -top-2.5 -left-2.5 font-mono text-[#ff5500] text-sm font-bold z-20">+</div>
              <div className="absolute -top-2.5 -right-2.5 font-mono text-[#ff5500] text-sm font-bold z-20">+</div>
              <div className="absolute -bottom-2.5 -left-2.5 font-mono text-[#ff5500] text-sm font-bold z-20">+</div>
              <div className="absolute -bottom-2.5 -right-2.5 font-mono text-[#ff5500] text-sm font-bold z-20">+</div>

              {/* Technical Banner Tape Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#27272a] font-mono text-[10px] text-[#a1a1aa]">
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#ff5500] animate-pulse"></span>
                  <span>BOHOO AHMEDABAD // SINDHU BHAVAN STORE</span>
                </div>
                <span className="text-[#71717a]">AHM_380054</span>
              </div>

              {/* Main Photo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-black group cursor-crosshair">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80"
                  alt="Bohoo Ahmedabad Streetwear Boxy Fit Silhouette"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none"></div>

                {/* In-Photo HUD Overlay Markers */}
                <div className="absolute top-4 left-4 bg-[#0f0f11]/90 border border-[#27272a] backdrop-blur-sm p-2.5 font-mono text-[10px] text-[#ededed]">
                  <div className="text-[#ff5500] font-bold">STORE PROFILE:</div>
                  <div className="text-[#a1a1aa]">GF – SHOP 1, INDUS PREMISES</div>
                  <div className="text-[#71717a]">NEAR SAMBHUA CAFE</div>
                </div>

                <div className="absolute bottom-4 right-4 bg-[#0f0f11]/90 border border-[#27272a] backdrop-blur-sm p-2.5 font-mono text-[10px] text-right">
                  <div className="text-[#ededed] font-bold">OVERSIZED & BOXY-FIT</div>
                  <div className="text-[#ff5500]">STREETWEAR CULTURE</div>
                </div>
              </div>

              {/* Bottom Card Footer Bar */}
              <div className="mt-3 pt-2 border-t border-[#27272a] flex items-center justify-between font-mono text-[10px] text-[#71717a]">
                <span>BODAKDEV COMMERCIAL BELT</span>
                <span className="text-[#ededed]">VERIFIED BUSINESS PROFILE</span>
              </div>
            </div>

            {/* Industrial hazard stripe bar beneath card */}
            <div className="h-1.5 w-full mt-3 bg-[repeating-linear-gradient(45deg,#27272a,#27272a_10px,#ff5500_10px,#ff5500_20px)] opacity-70"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
