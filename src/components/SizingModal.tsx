import React from 'react';
import { X, Ruler, Info } from 'lucide-react';

interface SizingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizingModal: React.FC<SizingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md" 
      />

      <div className="relative w-full max-w-3xl bg-[#0f0f11] border-2 border-[#27272a] shadow-2xl p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto font-mono">
        <div className="flex items-center justify-between border-b border-[#27272a] pb-4 mb-6 text-xs">
          <div className="flex items-center gap-2 text-[#ff5500]">
            <Ruler className="w-4 h-4" />
            <span>BOHOO AHMEDABAD // BOXY & OVERSIZED FIT GUIDE</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 border border-[#27272a] hover:border-[#ff5500] hover:text-[#ff5500] text-[#a1a1aa] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-display text-xl font-bold uppercase text-[#ededed] mb-1">
              THE BOXY-FIT SILHOUETTE
            </h3>
            <p className="font-sans text-xs text-[#a1a1aa] leading-relaxed">
              Bohoo designs garments with a relaxed drop-shoulder structure and wider chest width. If you prefer a standard fitted look, consider sizing down one size. For the intended relaxed street aesthetic, choose your regular size.
            </p>
          </div>

          {/* Table 1: Boxy-Fit Heavyweight T-Shirts */}
          <div>
            <div className="text-xs font-bold text-[#ff5500] mb-2 uppercase">
              // OVERSIZED & BOXY TEES (INCHES)
            </div>
            <div className="border border-[#27272a] bg-[#141417] overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#18181b] border-b border-[#27272a] text-[#71717a]">
                  <tr>
                    <th className="p-2.5">SIZE</th>
                    <th className="p-2.5">CHEST WIDTH</th>
                    <th className="p-2.5">BODY LENGTH</th>
                    <th className="p-2.5">SHOULDER DROP</th>
                    <th className="p-2.5">RECOMMENDED HEIGHT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#27272a] text-[#ededed]">
                  <tr>
                    <td className="p-2.5 font-bold text-[#ff5500]">S</td>
                    <td className="p-2.5">44 in</td>
                    <td className="p-2.5">28.5 in</td>
                    <td className="p-2.5">22 in</td>
                    <td className="p-2.5">5'4" – 5'7"</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-[#ff5500]">M</td>
                    <td className="p-2.5">46 in</td>
                    <td className="p-2.5">29.5 in</td>
                    <td className="p-2.5">23 in</td>
                    <td className="p-2.5">5'7" – 5'10"</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-[#ff5500]">L</td>
                    <td className="p-2.5">48 in</td>
                    <td className="p-2.5">30.5 in</td>
                    <td className="p-2.5">24 in</td>
                    <td className="p-2.5">5'10" – 6'1"</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-[#ff5500]">XL</td>
                    <td className="p-2.5">50 in</td>
                    <td className="p-2.5">31.5 in</td>
                    <td className="p-2.5">25 in</td>
                    <td className="p-2.5">6'1"+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 2: Cargo Track Pants */}
          <div>
            <div className="text-xs font-bold text-[#ff5500] mb-2 uppercase">
              // CARGO TRACK PANTS & TROUSERS (INCHES)
            </div>
            <div className="border border-[#27272a] bg-[#141417] overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#18181b] border-b border-[#27272a] text-[#71717a]">
                  <tr>
                    <th className="p-2.5">SIZE</th>
                    <th className="p-2.5">WAIST (ELASTIC)</th>
                    <th className="p-2.5">INSEAM</th>
                    <th className="p-2.5">OUTSEAM</th>
                    <th className="p-2.5">LEG OPENING</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#27272a] text-[#ededed]">
                  <tr>
                    <td className="p-2.5 font-bold text-[#ff5500]">S</td>
                    <td className="p-2.5">28 – 30 in</td>
                    <td className="p-2.5">29 in</td>
                    <td className="p-2.5">39 in</td>
                    <td className="p-2.5">Cinchable</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-[#ff5500]">M</td>
                    <td className="p-2.5">30 – 32 in</td>
                    <td className="p-2.5">30 in</td>
                    <td className="p-2.5">40 in</td>
                    <td className="p-2.5">Cinchable</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-[#ff5500]">L</td>
                    <td className="p-2.5">32 – 34 in</td>
                    <td className="p-2.5">31 in</td>
                    <td className="p-2.5">41 in</td>
                    <td className="p-2.5">Cinchable</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-[#ff5500]">XL</td>
                    <td className="p-2.5">34 – 36 in</td>
                    <td className="p-2.5">32 in</td>
                    <td className="p-2.5">42 in</td>
                    <td className="p-2.5">Cinchable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-3 bg-[#18181b] border-l-2 border-[#ff5500] text-xs text-[#a1a1aa] flex items-center gap-2">
            <Info className="w-4 h-4 text-[#ff5500] flex-shrink-0" />
            <span>Fitting rooms are available on-site at Shop 1, Indus (Sindhu Bhavan Marg). Feel free to try on sizes in-store!</span>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#ededed] text-black font-bold uppercase hover:bg-[#ff5500] transition-colors cursor-pointer text-xs"
            >
              CLOSE GUIDE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
