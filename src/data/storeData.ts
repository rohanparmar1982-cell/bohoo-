import { StoreInfo, Product, StoreGalleryImage } from '../types';

export const STORE_INFO: StoreInfo = {
  name: 'Bohoo Ahmedabad',
  tagline: 'Underground Streetwear & Oversized Boxy-Fit Apparel',
  businessType: 'Clothing Store / Streetwear Retail Outlet',
  rating: 4.5,
  reviewsCount: 6,
  phone: '+918200669651',
  displayPhone: '+91 82006 69651',
  whatsappNumber: '918200669651',
  address: {
    unit: 'GF – Shop No. 1',
    premises: 'Indus',
    nearbyLandmark: 'Near Sambhua Cafe',
    road: 'Sindhu Bhavan Marg',
    locality: 'Bodakdev',
    city: 'Ahmedabad',
    state: 'Gujarat',
    postalCode: '380054',
    country: 'India',
    fullAddress:
      'GF – Shop No. 1, Indus, near Sambhua Cafe, Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat 380054, India',
  },
  hours: '11:00 AM – 10:00 PM (Monday – Sunday)',
  dailySchedule: [
    { day: 'Monday', hours: '11:00 AM – 10:00 PM' },
    { day: 'Tuesday', hours: '11:00 AM – 10:00 PM' },
    { day: 'Wednesday', hours: '11:00 AM – 10:00 PM' },
    { day: 'Thursday', hours: '11:00 AM – 10:00 PM' },
    { day: 'Friday', hours: '11:00 AM – 10:00 PM' },
    { day: 'Saturday', hours: '11:00 AM – 10:00 PM' },
    { day: 'Sunday', hours: '11:00 AM – 10:00 PM' },
  ],
  googleMapsUrl:
    'https://maps.google.com/?q=GF+Shop+1+Indus+Sindhu+Bhavan+Marg+Bodakdev+Ahmedabad+380054',
  reportDate: 'September 2026',
};

// USER'S OFFICIAL BRAND PRODUCTS DERIVED FROM IN-STORE PHOTOGRAPHS
export const BOHOO_PRODUCTS: Product[] = [
  {
    id: 'bohoo-saint-world',
    code: 'BH-STW-01',
    name: '"SAINT WORLD" Heavyweight Oversized Tee',
    category: 'tshirts',
    price: 1000,
    currency: 'INR',
    color: 'Chalk White / Vintage Cream',
    fit: 'Boxy Drop-Shoulder Relaxed Cut',
    fabricSpec: '260 GSM 100% Combed Heavy Cotton',
    stockStatus: 'IN-STORE RACK // READY FOR TRIAL',
    storeCaptureTag: 'STORE PHOTO 01 // HANGER DISPLAY',
    labelBrand: 'BOHOO x DRIP STUDIOS',
    primaryImage: '/products/saint-world-white.svg',
    hoverImage: '/products/saint-world-white.svg',
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Captured on the main rack at Bohoo Sindhu Bhavan Marg. Built from 260 GSM heavy combed jersey with high-ribbed neckline, oversized drop shoulders, and wide half-sleeves. Front features bold distressed typographic artwork reading "SAINT WORLD" with "FUTURE DREAM PROTOCOL 2026" microprint. Finished with the signature BOHOO woven collar label and side seam tab.',
    graphics: [
      'Gothic distressed black front text: "SAINT WORLD"',
      'Microprint subtext: "FUTURE DREAM PROTOCOL 2026"',
      'Woven white BOHOO side hem label',
      'Dual branded neck tag: DRIP STUDIOS / BOHOO',
    ],
    features: [
      'Authentic in-store photographed garment (Photo #1)',
      '260 GSM premium heavyweight cotton jersey',
      'Non-stretch ribbed 1.25" crewneck collar',
      'Pre-shrunk boxy street fit with generous chest width',
    ],
  },
  {
    id: 'bohoo-pegasus-maroon',
    code: 'BH-PEG-02',
    name: 'Bohoo "Department" Pegasus Rhinestone Tee',
    category: 'tshirts',
    price: 1000,
    currency: 'INR',
    color: 'Vintage Maroon / Deep Burgundy',
    fit: 'Relaxed Street Silhouette',
    fabricSpec: '240 GSM Bio-Washed Combed Cotton',
    stockStatus: 'MANNEQUIN DISPLAY // HIGH DEMAND',
    storeCaptureTag: 'STORE PHOTO 02 // CHROME MANNEQUIN',
    labelBrand: 'BOHOO',
    primaryImage: '/products/bohoo-pegasus-maroon.svg',
    hoverImage: '/products/bohoo-pegasus-maroon.svg',
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Styled on the chrome centerpiece mannequin at Bohoo Ahmedabad paired with dark wash denim. Features an intricate multi-layered graphic: top "Bohoo" varsity cursive in raised rhinestone shimmer, "Directed by bohoo / Art & Graphic Department", three rearing white Pegasus winged stallions, and "Department" script in metallic finish.',
    graphics: [
      'Rhinestone glitter cursive: "Bohoo"',
      'Text print: "Directed by bohoo / Art & Graphic Department"',
      'Trio of white galloping winged Pegasus horses',
      'Bottom rhinestone calligraphic script: "Department"',
    ],
    features: [
      'Showcased on store centerpiece mannequin (Photo #2)',
      'Rich deep maroon reactive-dyed fabric',
      'High-adhesion heat-pressed crystal embellishments',
      'Engineered for statement styling with denim and cargos',
    ],
  },
  {
    id: 'bohoo-drip-polo-black',
    code: 'BH-DRP-09',
    name: '"9" Drip Studios Long-Sleeve Street Polo',
    category: 'polos',
    price: 1000,
    currency: 'INR',
    color: 'Carbon Black / Pitch Black',
    fit: 'Boxy Drop-Shoulder Open-Collar Fit',
    fabricSpec: '320 GSM Heavy Ribbed Pique Knit',
    stockStatus: 'IN-STORE RACK // ONLY 6 PIECES',
    storeCaptureTag: 'STORE PHOTO 03 // RACK DISPLAY',
    labelBrand: 'DRIP STUDIOS',
    primaryImage: '/products/drip-studios-9-black.svg',
    hoverImage: '/products/drip-studios-9-black.svg',
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'As held on the store hanger in front of the pink knitwear section. A modern reconstruction of the classic rugby polo: buttonless open notched spread collar, heavy structured ribbed pique cotton, and an oversized crisp white numeral "9" centered with "DRIP STUDIOS" arched underneath. Includes official "DRIP STUDIOS INDIA" woven label.',
    graphics: [
      'Bold stark white chest numeral: "9"',
      'Curved typography: "DRIP STUDIOS"',
      'Internal woven tag: "DRIP STUDIOS INDIA"',
      'Minimalist lower hem metallic rivet',
    ],
    features: [
      'Direct in-store photographed garment (Photo #3)',
      'Substantial 320 GSM ribbed pique cotton construction',
      'Modern buttonless open polo spread placket',
      'Durable puff-screened center graphic',
    ],
  },
  {
    id: 'bohoo-dor-saint-white',
    code: 'BH-DRS-04',
    name: '"Do\'r Saint" Embroidered Rugby Polo Jersey',
    category: 'polos',
    price: 1000,
    currency: 'INR',
    color: 'Chalk White / Ecru Waffle',
    fit: 'Relaxed Heavyweight Rugby Silhouette',
    fabricSpec: '300 GSM Textured Waffle-Pique Knit',
    stockStatus: 'SINDHU BHAVAN EXCLUSIVE // LIMITED RUN',
    storeCaptureTag: 'STORE PHOTO 04 // HANGER DISPLAY',
    labelBrand: 'DRIP STUDIOS',
    primaryImage: '/products/dor-saint-white-polo.svg',
    hoverImage: '/products/dor-saint-white-polo.svg',
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Captured on store display at Bohoo Sindhu Bhavan. A luxury streetwear piece crafted from 300 GSM textured waffle pique cotton. Detailed with a spread open-neck collar, cursive script "Drip Studios" embroidery on the right chest, an embroidered heraldic crest badge reading "2023 D" on the left chest, and flowing burgundy calligraphy "Do\'r Saint" across the center.',
    graphics: [
      'Right chest embroidery: "Drip Studios" cursive',
      'Left chest heraldic embroidered crest: "2023 D"',
      'Center chest calligraphic embroidery: "Do\'r Saint" in deep burgundy',
      'Woven hem label: "Drip" clip tag',
    ],
    features: [
      'In-store captured premium release (Photo #4)',
      'Heavyweight 300 GSM waffle knit texture',
      'High-density Japanese thread embroidery',
      'Breathable, structured drape with drop shoulder',
    ],
  },
  {
    id: 'bohoo-saints-desires-grey',
    code: 'BH-SNT-05',
    name: 'Bohoo "Saints / Desires" Vintage Collage Boxy Tee',
    category: 'tshirts',
    price: 1000,
    currency: 'INR',
    color: 'Heather Grey / Vintage Enzyme Wash',
    fit: 'Ultra-Boxy Oversized Street Cut',
    fabricSpec: '250 GSM Pre-Shrunk Grey Melange Cotton',
    stockStatus: 'VIRAL IN-STORE PICK // RESTOCKED',
    storeCaptureTag: 'STORE PHOTO 05 // HANGER DISPLAY',
    labelBrand: 'BOHOO',
    primaryImage: '/products/bohoo-saints-grey.svg',
    hoverImage: '/products/bohoo-saints-grey.svg',
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Held up inside the Bohoo store showing the authentic "BOHOO" woven neck label. Embodying underground bootleg punk and 90s magazine aesthetics with red and black screenprinted typography: "Saints / Desires Are Forever", distressed text boxes, vintage pinup illustration, "Blonde with a Brain", and signature BOHOO woven hem label.',
    graphics: [
      'Red cursive script: "Saints / Desires Are Forever"',
      'Distressed typography block: "FUCK ME SO HARD THAT I CAN\'T WALK ANYMORE"',
      'Artwork: "Blonde with a Brain / Blessed with Beauty"',
      'Authentic stitched BOHOO collar label & bottom hem tag',
    ],
    features: [
      'In-store captured authentic BOHOO piece (Photo #5)',
      'Enzyme acid wash for ultra-soft vintage handfeel',
      'Dual-color heavy screenprinted punk collage',
      'Reinforced collar ribbing and drop shoulders',
    ],
  },
  {
    id: 'bohoo-athletic-green-jersey',
    code: 'BH-JRS-06',
    name: 'Drip Studios Athletic Racing Football Jersey',
    category: 'jerseys',
    price: 1000,
    currency: 'INR',
    color: 'Forest Green / Emerald with White Stripes',
    fit: 'Oversized Boxy Athletic Cut',
    fabricSpec: '280 GSM Heavy Poly-Mesh Streetwear Knit',
    stockStatus: 'NEW COUNTER ARRIVAL',
    storeCaptureTag: 'STORE PHOTO ROLL // SHELF DISPLAY',
    labelBrand: 'BOHOO x DRIP STUDIOS',
    primaryImage: '/products/athletic-racing-green.svg',
    hoverImage: '/products/athletic-racing-green.svg',
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Featured in the Bohoo store thumbnail archive. An oversized boxy football/racing jersey featuring emerald forest green breathable poly-mesh, contrast white sleeve striping, ribbed V-neck collar, and block athletic numbering with "JAPAN / DRIP STUDIOS" chest typography.',
    graphics: [
      'Chest typography: "JAPAN // DRIP STUDIOS"',
      'Bold athletic back/chest numbering',
      'Contrast white sleeve racing stripes',
      'Ribbed two-tone collar placket',
    ],
    features: [
      'Featured in store camera reel (Photo Archive)',
      'Ultra-breathable 280 GSM poly-mesh fabric',
      'Wide boxy sleeves and dropped shoulders',
      'Easy wash-and-wear for Ahmedabad summer climate',
    ],
  },
];

// PHOTO AUDIT SECTION (SECTION 11 OF REPORT + REAL STORE VISUALS)
export const STORE_GALLERY_IMAGES: StoreGalleryImage[] = [
  {
    id: 'gal-01',
    sectionNumber: 'PHOTO 01',
    title: '"SAINT WORLD" Heavyweight Display',
    subtitle: 'Chalk White // Drop-Shoulder Boxy Tee (₹1,000)',
    description:
      'In-store hanger display of the 260 GSM "SAINT WORLD" graphic tee with official BOHOO woven label tag visible at the side seam. Flat rate: ₹1,000.',
    imageUrl: '/products/saint-world-white.svg',
    tag: 'IN-STORE GARMENT',
  },
  {
    id: 'gal-02',
    sectionNumber: 'PHOTO 02',
    title: 'Bohoo Pegasus Mannequin Showcase',
    subtitle: 'Vintage Maroon // Rhinestone Art Department (₹1,000)',
    description:
      'Centerpiece chrome mannequin inside Bohoo Sindhu Bhavan Marg wearing the maroon rhinestone Pegasus graphic tee styled with denim. Flat rate: ₹1,000.',
    imageUrl: '/products/bohoo-pegasus-maroon.svg',
    tag: 'MANNEQUIN DISPLAY',
  },
  {
    id: 'gal-03',
    sectionNumber: 'PHOTO 03',
    title: '"9" Drip Studios Long-Sleeve Polo',
    subtitle: 'Carbon Black // Open Notch Spread Collar (₹1,000)',
    description:
      'Rack display of the buttonless open-collar polo shirts featuring the bold "9" in carbon black and curved Drip Studios branding. Flat rate: ₹1,000.',
    imageUrl: '/products/drip-studios-9-black.svg',
    tag: 'STORE RACK DROP',
  },
  {
    id: 'gal-04',
    sectionNumber: 'PHOTO 04',
    title: '"Do\'r Saint" Luxury Rugby Jersey',
    subtitle: 'Ecru Waffle Knit // Heraldic Crest & Calligraphy (₹1,000)',
    description:
      'Detailed with cursive "Drip Studios" right chest embroidery, "2023 D" heraldic shield crest, and burgundy "Do\'r Saint". Flat rate: ₹1,000.',
    imageUrl: '/products/dor-saint-white-polo.svg',
    tag: 'BOUTIQUE EXCLUSIVE',
  },
  {
    id: 'gal-05',
    sectionNumber: 'PHOTO 05',
    title: 'Bohoo "Saints / Desires" Vintage Cut',
    subtitle: 'Heather Grey // Bootleg Punk Collage Tee (₹1,000)',
    description:
      'Close-up showing the authentic stitched BOHOO neck label, enzyme washed grey melange cotton, and red screenprinted graphic collage. Flat rate: ₹1,000.',
    imageUrl: '/products/bohoo-saints-grey.svg',
    tag: 'VINTAGE COLLAGE',
  },
];

// REVIEWS FROM GOOGLE BUSINESS PROFILE (4.5 / 5 RATING)
export const STORE_REVIEWS = [
  {
    id: 'rev-01',
    author: 'Kabir Mehta',
    rating: 5,
    date: '2 weeks ago',
    text: 'Best oversized and boxy fit collection on Sindhu Bhavan Marg. The heavy GSM cotton on the Saint World tee feels like international streetwear brands. Highly recommend trying things on in person at Indus!',
  },
  {
    id: 'rev-02',
    author: 'Rhea Shah',
    rating: 5,
    date: '1 month ago',
    text: 'Loved the maroon rhinestone Bohoo tee on the mannequin! Staff was very polite and let me try multiple sizes. Great vibe right next to Sambhua Cafe.',
  },
  {
    id: 'rev-03',
    author: 'Devansh Trivedi',
    rating: 4,
    date: '2 months ago',
    text: 'Quality of the Drip Studios polo jerseys is top notch. Thick textured waffle knit and open collar is super fresh. 4.5/5 rating is well deserved.',
  },
];

export const CUSTOMER_REVIEWS = STORE_REVIEWS;

// STORE VISIT CHECKLIST (SECTION 8 OF REPORT)
export const STORE_VISIT_CHECKLIST = [
  {
    title: 'In-Store Stock & Size Verification',
    desc: 'Verify the availability of specific oversized streetwear cuts, graphics, and sizes (S, M, L, XL) before planning your trip.',
    action: 'CONFIRM BEFORE VISIT',
  },
  {
    title: 'Operating Hours Timing Check',
    desc: 'The store operates 11:00 AM – 10:00 PM daily. On weekends or festive holidays, arrive early to access new drop allocations.',
    action: '11:00 AM – 10:00 PM',
  },
  {
    title: 'Accepted Payment Methods',
    desc: 'UPI (Google Pay, PhonePe, Paytm), Visa/Mastercard/RuPay Credit & Debit Cards, and Cash are accepted at the Indus Shop 1 checkout.',
    action: 'UPI / CARDS / CASH',
  },
  {
    title: 'Fitting Rooms & Try-On Availability',
    desc: 'Fitting cabins are available on-site at Shop No. 1, Indus. Trying garments on in-store is recommended for boxy and drop-shoulder silhouettes.',
    action: 'FITTING ON-SITE',
  },
  {
    title: 'Nearby Landmark Navigation',
    desc: 'Located adjacent to Sambhua Cafe inside the Indus commercial complex on Sindhu Bhavan Marg, Bodakdev.',
    action: 'NEAR SAMBHUA CAFE',
  },
];

