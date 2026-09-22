import React from 'react';
import { STORE_INFO, STORE_VISIT_CHECKLIST, CUSTOMER_REVIEWS } from '../data/storeData';
import { Clock, CheckSquare, Phone, MessageCircle, Star, HelpCircle, AlertCircle } from 'lucide-react';

export const StoreVisitChecklist: React.FC = () => {
  return (
    <section id="visit-checklist" className="py-16 sm:py-24 border-b border-[#27272a] bg-[#0f0f11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#27272a]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ff5500] mb-2">
              <CheckSquare className="w-4 h-4" />
              <span>// OPERATIONAL PROTOCOL: SECTION 8 (STORE VISIT INFORMATION)</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#ededed]">
              STORE VISIT GUIDE & HOURS
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#a1a1aa] mt-2 max-w-xl">
              Practical checklist recommended by the store profile before travelling to Indus on Sindhu Bhavan Marg.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="px-4 py-2 bg-[#ff5500] hover:bg-[#ff7733] text-black font-bold uppercase transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL {STORE_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* 2-Column Layout: Checklist on Left, Operating Hours & Rating on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          
          {/* Left Column: Pre-visit confirmation points */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-3 bg-[#18181b] border-l-2 border-[#ff5500] font-mono text-xs text-[#ededed] font-bold">
              // PRE-VISIT CHECKLIST FOR CUSTOMERS
            </div>

            <div className="space-y-3">
              {STORE_VISIT_CHECKLIST.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#141417] border border-[#27272a] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#52525b] transition-colors"
                >
                  <div className="space-y-1">
                    <div className="font-sans font-bold text-sm text-[#ededed] flex items-center gap-2">
                      <span className="font-mono text-xs text-[#ff5500]">0{idx + 1}.</span>
                      <span>{item.title}</span>
                    </div>
                    <p className="font-sans text-xs text-[#a1a1aa] max-w-md leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="font-mono text-[11px] text-[#ff5500] bg-[#18181b] border border-[#27272a] px-3 py-1 self-start sm:self-center whitespace-nowrap">
                    {item.action}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Contact Prompt Banner */}
            <div className="p-4 bg-[#18181b] border border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
              <span className="text-[#a1a1aa]">Have a specific piece in mind? Inquire in advance:</span>
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Bohoo%20Ahmedabad,%20I%20want%20to%20check%20if%20a%20specific%20streetwear%20collection%20is%20currently%20in%20stock.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e] hover:text-black font-bold uppercase transition-all flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WHATSAPP STOCK CHECK</span>
              </a>
            </div>
          </div>

          {/* Right Column: Weekly Schedule & Google Customer Reviews */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Opening Hours Schedule (Section 5 from PDF) */}
            <div className="border border-[#27272a] bg-[#141417]">
              <div className="p-4 bg-[#18181b] border-b border-[#27272a] flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#ededed]">
                  <Clock className="w-4 h-4 text-[#ff5500]" />
                  <span>WEEKLY OPENING SCHEDULE</span>
                </div>
                <span className="font-mono text-[10px] text-[#22c55e] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-ping"></span>
                  OPEN EVERY DAY
                </span>
              </div>

              <div className="p-4 divide-y divide-[#27272a] font-mono text-xs">
                {STORE_INFO.dailySchedule.map((sched) => (
                  <div key={sched.day} className="py-2 flex items-center justify-between text-[#ededed]">
                    <span className="text-[#a1a1aa]">{sched.day}</span>
                    <span className="font-bold">{sched.hours}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-[#0f0f11] border-t border-[#27272a] font-mono text-[10px] text-[#71717a]">
                Weekly schedule: 11:00 AM – 10:00 PM every day. Retail hours may change on public festivals.
              </div>
            </div>

            {/* Google Rating Card (Section 6 from PDF) */}
            <div className="border border-[#27272a] bg-[#141417] p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-[#27272a] pb-3">
                <div>
                  <div className="font-mono text-[10px] text-[#71717a] uppercase">SECTION 6 // CUSTOMER RATING</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-display text-3xl font-black text-[#ededed]">4.5</span>
                    <div className="flex text-[#ff5500]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-[#ff5500]' : 'fill-[#ff5500]/40'}`} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right font-mono text-xs text-[#a1a1aa]">
                  <div className="text-[#ededed] font-bold">6 GOOGLE REVIEWS</div>
                  <div className="text-[10px] text-[#22c55e]">VERIFIED LISTING</div>
                </div>
              </div>

              <p className="font-sans text-xs text-[#a1a1aa] leading-relaxed">
                "The listing reports a 4.5/5 rating based on 6 reviews. A recent Ahmedabad Reddit discussion references Bohoo in the context of streetwear clothing and oversized/boxy-fit T-shirts."
              </p>

              <div className="pt-2 flex items-center justify-between font-mono text-[10px] text-[#71717a]">
                <span>SOURCE: GOOGLE MAPS BUSINESS LISTING</span>
                <span className="text-[#ff5500]">COMMUNITY VERIFIED</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
