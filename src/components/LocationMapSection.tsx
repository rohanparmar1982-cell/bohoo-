import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { MapPin, Navigation, Phone, ExternalLink, Compass, Building, Coffee } from 'lucide-react';

export const LocationMapSection: React.FC = () => {
  return (
    <section id="location-guide" className="py-16 sm:py-24 border-b border-[#27272a] bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#27272a]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ff5500] mb-2">
              <MapPin className="w-4 h-4" />
              <span>// LOCATION & ACCESSIBILITY: SECTION 2 & 9</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#ededed]">
              FIND BOHOO AHMEDABAD
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#a1a1aa] mt-2 max-w-xl">
              Situated on Sindhu Bhavan Marg, western Ahmedabad's prime lifestyle and fashion destination. Located within the Indus premises near Sambhua Cafe.
            </p>
          </div>

          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#ededed] hover:bg-[#ff5500] text-black font-mono text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer self-start sm:self-auto"
          >
            <span>NAVIGATE IN GOOGLE MAPS</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Location Breakdown & Visual Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-stretch">
          
          {/* Detailed Address Telemetry Specs */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="p-6 bg-[#141417] border border-[#27272a] space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#ff5500] font-bold">
                <Building className="w-4 h-4" />
                <span>OFFICIAL VERIFIED ADDRESS (SECTION 2)</span>
              </div>

              <div className="space-y-2 text-[#ededed]">
                <div className="font-display text-xl font-bold uppercase">
                  GF – Shop No. 1, Indus
                </div>
                <div className="font-sans text-sm text-[#a1a1aa] flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-[#ff5500] flex-shrink-0" />
                  <span>Nearby Landmark: <strong className="text-[#ededed]">Near Sambhua Cafe</strong></span>
                </div>
                <div className="font-mono text-xs text-[#a1a1aa] pt-1">
                  Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat 380054, India
                </div>
              </div>

              {/* Data Table from Page 2 */}
              <div className="pt-3 border-t border-[#27272a] divide-y divide-[#27272a] font-mono text-xs">
                <div className="py-2 flex justify-between">
                  <span className="text-[#71717a]">CITY</span>
                  <span className="text-[#ededed] font-semibold">{STORE_INFO.address.city}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-[#71717a]">STATE</span>
                  <span className="text-[#ededed] font-semibold">{STORE_INFO.address.state}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-[#71717a]">POSTAL CODE</span>
                  <span className="text-[#ededed] font-semibold">{STORE_INFO.address.postalCode}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-[#71717a]">LOCALITY</span>
                  <span className="text-[#ededed] font-semibold">{STORE_INFO.address.locality}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-[#71717a]">ROAD</span>
                  <span className="text-[#ededed] font-semibold">{STORE_INFO.address.road}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-[#71717a]">PREMISES / UNIT</span>
                  <span className="text-[#ff5500] font-semibold">Indus / Ground Floor, Shop 1</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="w-full py-3 border border-[#27272a] bg-[#18181b] hover:border-[#ff5500] text-[#ededed] hover:text-[#ff5500] font-mono text-xs font-bold uppercase transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#ff5500]" />
                  <span>CALL FOR DIRECTION HELP: {STORE_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Navigation Tip Note from Section 9 */}
            <div className="p-4 bg-[#18181b] border-l-2 border-[#ff5500] font-mono text-xs text-[#a1a1aa]">
              <strong className="text-[#ededed]">NAVIGATION ADVISORY (SECTION 9):</strong> The supplied research recommends using the Google Maps pin rather than relying solely on the written address, as Indus is a multi-retail complex and Bohoo is specifically located at Ground Floor, Shop No. 1.
            </div>

          </div>

          {/* Interactive Map Visual Representation */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="border-2 border-[#27272a] bg-[#141417] flex-1 flex flex-col overflow-hidden relative group">
              
              {/* Top Map Header Strip */}
              <div className="p-3 bg-[#0f0f11] border-b border-[#27272a] flex items-center justify-between font-mono text-xs text-[#a1a1aa]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping"></span>
                  <span className="text-[#ededed] font-bold">MAP RADAR: SINDHU BHAVAN CORRIDOR</span>
                </div>
                <span className="text-[#ff5500]">23.0338° N, 72.5074° E</span>
              </div>

              {/* Map Representation with interactive pin */}
              <div className="relative flex-1 min-h-[320px] bg-[#18181b] overflow-hidden flex items-center justify-center p-6">
                
                {/* Background Grid Pattern simulating roadmap */}
                <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>

                {/* Simulated Road Lines */}
                <div className="absolute w-full h-8 bg-[#27272a] -rotate-6 top-1/2 -translate-y-1/2 flex items-center justify-center">
                  <span className="font-mono text-[9px] text-[#71717a] tracking-widest uppercase">
                    // SINDHU BHAVAN MARG //
                  </span>
                </div>
                <div className="absolute h-full w-6 bg-[#27272a]/60 left-1/3"></div>

                {/* Pin Card overlay */}
                <div className="relative z-10 p-5 bg-[#0f0f11]/95 border-2 border-[#ff5500] shadow-[0_0_25px_rgba(0,0,0,0.8)] max-w-sm w-full font-mono text-left animate-in fade-in zoom-in-95">
                  <div className="flex items-center justify-between border-b border-[#27272a] pb-2 mb-3 text-[10px]">
                    <span className="bg-[#ff5500] text-black font-bold px-1.5 py-0.5">BOHOO PIN</span>
                    <span className="text-[#ededed]">SHOP 1, INDUS</span>
                  </div>

                  <h3 className="font-display text-lg font-black text-[#ededed] uppercase">
                    BOHOO AHMEDABAD
                  </h3>
                  <p className="font-sans text-xs text-[#a1a1aa] mt-1 mb-4">
                    GF – Shop No. 1, Indus (Right near Sambhua Cafe), Sindhu Bhavan Marg, Bodakdev.
                  </p>

                  <div className="space-y-2">
                    <a
                      href={STORE_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 bg-[#ff5500] hover:bg-[#ff7733] text-black font-bold text-xs uppercase flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>START GPS NAVIGATION</span>
                    </a>
                    <a
                      href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Bohoo,%20can%20you%20share%20your%20exact%20location%20pin%20for%20Sindhu%20Bhavan%20Marg?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 bg-[#18181b] border border-[#27272a] hover:border-[#22c55e] text-[#22c55e] font-bold text-xs uppercase flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>REQUEST WHATSAPP LOCATION PIN</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Bottom Card Footer */}
              <div className="p-3 bg-[#0f0f11] border-t border-[#27272a] flex items-center justify-between font-mono text-[10px] text-[#71717a]">
                <span>NEIGHBORHOOD: BODAKDEV COMMERCIAL</span>
                <span className="text-[#ededed]">LANDMARK: SAMBHUA CAFE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
