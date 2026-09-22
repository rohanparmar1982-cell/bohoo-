import React, { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { MapPin, Phone, Clock, Star, ExternalLink, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenStoreProfile: () => void;
  onOpenSizingGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenStoreProfile,
  onOpenSizingGuide,
}) => {
  const [inquiryText, setInquiryText] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (inquiryText.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setInquiryText('');
    }
  };

  return (
    <footer className="border-t-2 border-[#27272a] bg-[#0c0c0e] text-[#a1a1aa] font-mono text-xs">
      {/* Top Banner: Quick Contact Bar */}
      <div className="border-b border-[#27272a] bg-[#141417] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="text-[#ff5500] font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse"></span>
              BOHOO AHMEDABAD
            </span>
            <span className="text-[#71717a] hidden sm:inline">|</span>
            <span className="text-[#ededed]">SINDHU BHAVAN MARG, BODAKDEV</span>
            <span className="text-[#71717a] hidden sm:inline">|</span>
            <span className="text-[#22c55e]">DAILY 11:00 AM – 10:00 PM</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="px-3 py-1.5 border border-[#27272a] hover:border-[#ff5500] hover:text-[#ff5500] text-[#ededed] transition-colors flex items-center gap-1.5 text-[11px]"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>{STORE_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Bohoo%20Ahmedabad,%20inquiry%20regarding%20streetwear%20store%20timings%20and%20collection.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e] hover:text-black transition-colors flex items-center gap-1.5 text-[11px]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WHATSAPP CHAT</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Store Brand & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#ff5500] flex items-center justify-center text-black font-mono text-xs font-black">
                B
              </div>
              <h3 className="font-display font-black text-xl text-[#ededed] uppercase tracking-tight">
                BOHOO AHMEDABAD<span className="text-[#ff5500]">.</span>
              </h3>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#71717a] max-w-md leading-relaxed">
              Western Ahmedabad's retail clothing store dedicated to contemporary street fashion, oversized silhouettes, and boxy-fit apparel. Situated at Indus on Sindhu Bhavan Marg, Bodakdev.
            </p>

            <div className="pt-2 flex items-center gap-3 text-[11px]">
              <div className="flex items-center gap-1 bg-[#18181b] border border-[#27272a] px-2.5 py-1 text-[#ededed]">
                <Star className="w-3 h-3 text-[#ff5500] fill-[#ff5500]" />
                <span className="font-bold">4.5 / 5</span>
                <span className="text-[#71717a]">(6 Google Reviews)</span>
              </div>
              <span className="border border-[#27272a] px-2.5 py-1 text-[#a1a1aa] bg-[#18181b]">
                AHMEDABAD 380054
              </span>
            </div>
          </div>

          {/* Column 2: Exact Address & Location */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-[#ededed] font-bold uppercase tracking-wider text-xs border-b border-[#27272a] pb-2 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>STORE LOCATION</span>
            </div>

            <div className="space-y-1 text-xs text-[#a1a1aa] leading-relaxed">
              <div className="text-[#ededed] font-semibold">GF – Shop No. 1, Indus</div>
              <div className="text-[#ff5500]">Near Sambhua Cafe</div>
              <div>Sindhu Bhavan Marg, Bodakdev</div>
              <div>Ahmedabad, Gujarat – 380054, India</div>
            </div>

            <div className="pt-2">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ededed] hover:text-[#ff5500] underline inline-flex items-center gap-1 text-[11px]"
              >
                <span>OPEN DIRECTIONS ON GOOGLE MAPS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation & Audit Report */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-[#ededed] font-bold uppercase tracking-wider text-xs border-b border-[#27272a] pb-2">
              QUICK ACCESS
            </div>

            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenStoreProfile}
                  className="hover:text-[#ff5500] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>→</span>
                  <span>13. QUICK REFERENCE CARD</span>
                </button>
              </li>
              <li>
                <a
                  href="#visit-checklist"
                  className="hover:text-[#ff5500] transition-colors flex items-center gap-1.5"
                >
                  <span>→</span>
                  <span>08. STORE VISIT CHECKLIST</span>
                </a>
              </li>
              <li>
                <a
                  href="#store-gallery"
                  className="hover:text-[#ff5500] transition-colors flex items-center gap-1.5"
                >
                  <span>→</span>
                  <span>11. STORE PHOTO GALLERY</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenSizingGuide}
                  className="hover:text-[#ff5500] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>→</span>
                  <span>BOXY & OVERSIZED SIZING</span>
                </button>
              </li>
              <li>
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="hover:text-[#ff5500] transition-colors flex items-center gap-1.5"
                >
                  <span>→</span>
                  <span>CALL STORE (+91 82006 69651)</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Verification & Transparency Disclaimer Note from PDF */}
        <div className="mt-12 pt-6 border-t border-[#27272a] text-[10px] text-[#71717a] leading-relaxed flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="max-w-3xl">
            Prepared using the supplied business research document dated <strong>{STORE_INFO.reportDate}</strong> for Bohoo Ahmedabad (Sindhu Bhavan Marg, Bodakdev). Preserves distinction between directly supported public business information and details not sufficiently verified publicly.
          </p>
          <div className="whitespace-nowrap text-[#a1a1aa]">
            © 2026 BOHOO AHMEDABAD. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
};
