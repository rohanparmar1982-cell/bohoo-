import React from 'react';
import { ShoppingBag, Search, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenProfile: () => void;
  onOpenVisitInfo: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenProfile,
  onOpenVisitInfo,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#27272a] bg-[#0f0f11]/95 backdrop-blur-md">
      {/* Top Scrolling Industrial Ticker */}
      <div 
        id="ticker-bar"
        className="w-full bg-[#18181b] border-b border-[#27272a] overflow-hidden py-1.5 text-[11px] font-mono tracking-widest text-[#a1a1aa] select-none flex items-center"
      >
        <div className="animate-ticker flex items-center whitespace-nowrap">
          <span className="text-[#ff5500] font-semibold mx-3">● STORE OPEN</span>
          <span className="mx-4">// BOHOO AHMEDABAD // SINDHU BHAVAN MARG, BODAKDEV // DAILY 11:00 AM – 10:00 PM // DIRECT CALL: {STORE_INFO.phone} // OVERSIZED & BOXY-FIT STREETWEAR // GOOGLE RATING: 4.5 ★ (6 REVIEWS) // NEAR SAMBHUA CAFE //</span>
          <span className="text-[#ff5500] font-semibold mx-3">● STORE OPEN</span>
          <span className="mx-4">// BOHOO AHMEDABAD // SINDHU BHAVAN MARG, BODAKDEV // DAILY 11:00 AM – 10:00 PM // DIRECT CALL: {STORE_INFO.phone} // OVERSIZED & BOXY-FIT STREETWEAR // GOOGLE RATING: 4.5 ★ (6 REVIEWS) // NEAR SAMBHUA CAFE //</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          id="brand-logo"
          className="group flex items-center gap-3 font-display text-xl sm:text-2xl font-black tracking-tighter text-[#ededed] hover:text-[#ff5500] transition-colors"
        >
          <div className="w-6 h-6 bg-[#ff5500] flex items-center justify-center text-black font-mono text-xs font-black tracking-normal">
            B
          </div>
          <div className="flex flex-col leading-none">
            <span className="tracking-tight">BOHOO<span className="text-[#ff5500]">.</span></span>
            <span className="font-mono text-[9px] text-[#a1a1aa] tracking-wider uppercase">AHMEDABAD</span>
          </div>
          <span className="hidden lg:inline-block font-mono text-[10px] text-[#71717a] border border-[#27272a] px-2 py-0.5 tracking-wider bg-[#18181b]">
            SINDHU BHAVAN MARG
          </span>
        </a>

        {/* Section Anchors */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 font-mono text-xs tracking-wider text-[#a1a1aa]">
          <a
            href="#collections"
            id="nav-link-collections"
            className="px-3 py-1.5 hover:text-[#ededed] hover:bg-[#18181b] border border-transparent hover:border-[#27272a] transition-all flex items-center gap-1.5"
          >
            <span className="text-[#ff5500] text-[10px]">01</span> STREETWEAR
          </a>
          <a
            href="#store-gallery"
            id="nav-link-gallery"
            className="px-3 py-1.5 hover:text-[#ededed] hover:bg-[#18181b] border border-transparent hover:border-[#27272a] transition-all flex items-center gap-1.5"
          >
            <span className="text-[#ff5500] text-[10px]">02</span> STORE VISUALS
          </a>
          <a
            href="#location-guide"
            id="nav-link-location"
            className="px-3 py-1.5 hover:text-[#ededed] hover:bg-[#18181b] border border-transparent hover:border-[#27272a] transition-all flex items-center gap-1.5"
          >
            <span className="text-[#ff5500] text-[10px]">03</span> LOCATION & MAP
          </a>
          <button
            onClick={onOpenProfile}
            id="nav-link-profile"
            className="px-3 py-1.5 hover:text-[#ededed] hover:bg-[#18181b] border border-transparent hover:border-[#27272a] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span className="text-[#ff5500] text-[10px]">04</span> STORE PROFILE
          </button>
        </nav>

        {/* Utilities: Phone Call, WhatsApp, Search & Cart */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Direct Phone Call Button */}
          <a
            href={`tel:${STORE_INFO.phone}`}
            id="header-phone-btn"
            title={`Call Store: ${STORE_INFO.phone}`}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-[#27272a] bg-[#18181b] hover:border-[#ff5500] hover:text-[#ff5500] text-[#ededed] font-mono text-xs transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#ff5500]" />
            <span className="hidden xl:inline">{STORE_INFO.phone}</span>
            <span className="xl:hidden">CALL</span>
          </a>

          {/* Direct WhatsApp Chat */}
          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Bohoo%20Ahmedabad,%20I%20am%20inquiring%20about%20your%20streetwear%20and%20oversized%20collection%20at%20Sindhu%20Bhavan%20Marg.`}
            target="_blank"
            rel="noopener noreferrer"
            id="header-whatsapp-btn"
            title="Chat on WhatsApp"
            className="p-2 sm:px-3 sm:py-1.5 border border-[#27272a] bg-[#18181b] hover:border-[#22c55e] hover:text-[#22c55e] text-[#ededed] font-mono text-xs flex items-center gap-1.5 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#22c55e]" />
            <span className="hidden sm:inline">WHATSAPP</span>
          </a>

          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            id="search-toggle-btn"
            aria-label="Search Collection"
            className="p-2 sm:px-3 sm:py-1.5 border border-[#27272a] bg-[#18181b] hover:border-[#ff5500] text-[#ededed] hover:text-[#ff5500] font-mono text-xs flex items-center gap-2 transition-all cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Reserve / Bag Drawer Trigger */}
          <button
            onClick={onOpenCart}
            id="cart-drawer-trigger-btn"
            aria-label="View Selected Items"
            className="relative px-3 sm:px-4 py-2 border border-[#27272a] bg-[#18181b] hover:bg-[#27272a] hover:border-[#ff5500] text-[#ededed] font-mono text-xs flex items-center gap-2.5 transition-all cursor-pointer group"
          >
            <ShoppingBag className="w-4 h-4 group-hover:text-[#ff5500] transition-colors" />
            <span className="font-semibold tracking-wider hidden sm:inline">RESERVE</span>
            <span 
              id="header-cart-counter"
              className={`min-w-5 h-5 px-1 flex items-center justify-center text-[10px] font-bold ${
                cartCount > 0 
                  ? 'bg-[#ff5500] text-black shadow-[0_0_10px_rgba(255,85,0,0.4)]' 
                  : 'bg-[#27272a] text-[#71717a]'
              } transition-all`}
            >
              {cartCount}
            </span>
          </button>
        </div>

      </div>
    </header>
  );
};
