import React from 'react';
import { X, FileText, CheckCircle2, AlertTriangle, ShieldCheck, MapPin, Phone, Star, Clock } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface StoreProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoreProfileModal: React.FC<StoreProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md" 
      />

      <div className="relative w-full max-w-3xl bg-[#0f0f11] border-2 border-[#27272a] shadow-2xl p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto font-mono">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#27272a] pb-4 mb-6 text-xs">
          <div className="flex items-center gap-2 text-[#ff5500]">
            <FileText className="w-4 h-4" />
            <span>BOHOO AHMEDABAD // COMPLETE STORE PROFILE REPORT</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 border border-[#27272a] hover:border-[#ff5500] hover:text-[#ff5500] text-[#a1a1aa] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          
          {/* Section 13: Quick Reference Card */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display text-xl font-bold uppercase text-[#ededed]">
                13. QUICK REFERENCE CARD
              </h3>
              <span className="text-[10px] text-[#ff5500] bg-[#18181b] border border-[#27272a] px-2 py-0.5">
                VERIFIED AS OF 22 SEPT 2026
              </span>
            </div>

            <div className="border border-[#27272a] bg-[#141417] divide-y divide-[#27272a] text-xs">
              <div className="p-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-[#71717a]">STORE NAME</span>
                <span className="sm:col-span-2 text-[#ededed] font-bold">Bohoo Ahmedabad</span>
              </div>
              <div className="p-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-[#71717a]">CATEGORY</span>
                <span className="sm:col-span-2 text-[#ededed]">Clothing Store (Streetwear & Boxy-Fit Apparel)</span>
              </div>
              <div className="p-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-[#71717a]">FULL ADDRESS</span>
                <span className="sm:col-span-2 text-[#ededed] leading-relaxed">
                  GF – Shop No. 1, Indus, near Sambhua Cafe, Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat 380054
                </span>
              </div>
              <div className="p-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-[#71717a]">TELEPHONE</span>
                <span className="sm:col-span-2 text-[#ff5500] font-bold">
                  <a href={`tel:${STORE_INFO.phone}`} className="hover:underline">{STORE_INFO.phone}</a>
                </span>
              </div>
              <div className="p-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-[#71717a]">GOOGLE RATING</span>
                <span className="sm:col-span-2 text-[#ededed] font-bold">
                  4.5 / 5.0 (based on 6 reviews)
                </span>
              </div>
              <div className="p-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-[#71717a]">OPERATING HOURS</span>
                <span className="sm:col-span-2 text-[#22c55e] font-bold">
                  11:00 AM – 10:00 PM, every day (Monday through Sunday)
                </span>
              </div>
              <div className="p-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-[#71717a]">COMMERCIAL AREA</span>
                <span className="sm:col-span-2 text-[#ededed]">
                  Bodakdev / Sindhu Bhavan Marg, Ahmedabad
                </span>
              </div>
            </div>
          </div>

          {/* Section 10: Verified vs Unverified Data (Preserving Report Transparency) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Verified Information */}
            <div className="p-4 bg-[#141417] border border-[#22c55e]/50 text-xs space-y-2">
              <div className="flex items-center gap-1.5 text-[#22c55e] font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>10. DIRECTLY VERIFIED DATA</span>
              </div>
              <ul className="text-[#a1a1aa] space-y-1 text-[11px] list-disc list-inside">
                <li>Business Name: Bohoo Ahmedabad</li>
                <li>Category: Clothing Store</li>
                <li>Full address at Indus, Bodakdev</li>
                <li>Phone number (+91 82006 69651)</li>
                <li>Google Maps 4.5/5 rating (6 reviews)</li>
                <li>Daily 11:00 AM – 10:00 PM schedule</li>
                <li>Nearby landmark: Sambhua Cafe</li>
              </ul>
            </div>

            {/* Information Not Sufficiently Verified */}
            <div className="p-4 bg-[#141417] border border-[#71717a] text-xs space-y-2">
              <div className="flex items-center gap-1.5 text-[#a1a1aa] font-bold">
                <AlertTriangle className="w-4 h-4 text-[#ff5500]" />
                <span>INFORMATION CONFIRMED IN-STORE ONLY</span>
              </div>
              <ul className="text-[#71717a] space-y-1 text-[11px] list-disc list-inside">
                <li>Specific real-time daily stock availability</li>
                <li>Full proprietary SKU wholesale catalogue</li>
                <li>Official corporate founding / legal entity details</li>
                <li>Official return / exchange window details</li>
                <li>Festive holiday schedule adjustments</li>
              </ul>
            </div>

          </div>

          {/* Section 7 & 15: Fashion Context & Community Sources */}
          <div className="p-4 bg-[#18181b] border-l-2 border-[#ff5500] font-mono text-xs space-y-2">
            <div className="text-[#ff5500] font-bold">
              // SECTION 7 & 15: FASHION CONTEXT & COMMUNITY NOTES
            </div>
            <p className="font-sans text-xs text-[#a1a1aa] leading-relaxed">
              Recent Ahmedabad Reddit discussions highlight Bohoo on Sindhu Bhavan Marg in the context of contemporary streetwear clothing, oversized silhouettes, and boxy-fit T-shirts. The report recommends contacting or visiting the store directly to browse the latest drops.
            </p>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-[#71717a] text-[11px]">
              REPORT COMPILED: 22 SEPTEMBER 2026
            </span>
            <div className="flex gap-2">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="px-4 py-2 bg-[#ff5500] text-black font-bold uppercase hover:bg-[#ff7733] transition-colors"
              >
                CALL STORE ({STORE_INFO.phone})
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#ededed] text-black font-bold uppercase hover:bg-[#ff5500] transition-colors cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
