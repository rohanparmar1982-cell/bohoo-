export interface StoreInfo {
  name: string;
  tagline: string;
  businessType: string;
  rating: number;
  reviewsCount: number;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  address: {
    unit: string;
    premises: string;
    nearbyLandmark: string;
    road: string;
    locality: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    fullAddress: string;
  };
  hours: string;
  dailySchedule: { day: string; hours: string }[];
  googleMapsUrl: string;
  reportDate: string;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  category: 'tshirts' | 'polos' | 'jerseys' | 'all';
  price: number;
  currency: string;
  color: string;
  fit: string;
  fabricSpec: string;
  stockStatus: string;
  storeCaptureTag: string;
  primaryImage: string;
  hoverImage: string;
  sizes: string[];
  description: string;
  features: string[];
  graphics: string[];
  labelBrand: 'BOHOO' | 'DRIP STUDIOS' | 'BOHOO x DRIP STUDIOS';
}

export interface StoreGalleryImage {
  id: string;
  sectionNumber: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export interface CartItem {
  id: string;
  productId: string;
  code: string;
  name: string;
  price: number;
  size: string;
  fabricSpec: string;
  image: string;
  quantity: number;
  color?: string;
}
