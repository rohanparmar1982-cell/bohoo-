/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { StoreGallery } from './components/StoreGallery';
import { StoreVisitChecklist } from './components/StoreVisitChecklist';
import { LocationMapSection } from './components/LocationMapSection';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { StoreProfileModal } from './components/StoreProfileModal';
import { SizingModal } from './components/SizingModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { BOHOO_PRODUCTS, STORE_INFO } from './data/storeData';
import { Product, CartItem } from './types';
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react';

export default function App() {
  // Cart state: seeded with one sample item for immediate testing
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'bohoo-saint-world-L',
      productId: 'bohoo-saint-world',
      code: 'BH-STW-01',
      name: '"SAINT WORLD" Heavyweight Oversized Tee',
      price: 1000,
      size: 'L',
      fabricSpec: '260 GSM 100% Combed Heavy Cotton',
      image: '/products/saint-world-white.svg',
      quantity: 1,
    }
  ]);

  // Modal & Drawer visibility states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSizingOpen, setIsSizingOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Quick notification toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Keyboard shortcut listener (/ for search, Esc to close modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isSearchOpen && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === 'Escape') {
        setIsCartOpen(false);
        setIsSearchOpen(false);
        setIsProfileOpen(false);
        setIsSizingOpen(false);
        setIsCheckoutOpen(false);
        setSelectedProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Add to cart handler
  const handleAddToCart = (product: Product, size: string) => {
    const cartItemId = `${product.id}-${size}`;
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === cartItemId);
      if (existing) {
        return prevItems.map((item) =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        const newItem: CartItem = {
          id: cartItemId,
          productId: product.id,
          code: product.code,
          name: product.name,
          price: product.price,
          size: size,
          fabricSpec: product.fabricSpec,
          image: product.primaryImage,
          quantity: 1,
        };
        return [...prevItems, newItem];
      }
    });

    showToast(`RESERVED: ${product.name} [SZ: ${size}]`);
  };

  // Update quantity handler
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  // Remove item handler
  const handleRemoveItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Scroll to Drop section
  const handleExploreDrop = () => {
    const el = document.getElementById('collections');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to Location section
  const handleOpenLocation = () => {
    const el = document.getElementById('location-guide');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Open checkout from cart
  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Handle successful reservation slip generation
  const handleOrderSuccess = (orderId: string) => {
    showToast(`RESERVATION SLIP: ${orderId}`);
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0f0f11] text-[#ededed] flex flex-col font-sans selection:bg-[#ff5500] selection:text-black">
      {/* Header & Live Status Bar */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenVisitInfo={() => {
          const el = document.getElementById('visit-checklist');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Segment */}
        <Hero
          onExploreDrop={handleExploreDrop}
          onOpenLocation={handleOpenLocation}
          onOpenProfile={() => setIsProfileOpen(true)}
        />

        {/* Streetwear Collection Grid */}
        <ProductGrid
          products={BOHOO_PRODUCTS}
          onAddToCart={handleAddToCart}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* Visual Audit: Store Gallery (Section 11 of PDF) */}
        <StoreGallery />

        {/* Store Visit Guide & Weekly Schedule (Sections 5, 6, 8 of PDF) */}
        <StoreVisitChecklist />

        {/* Location & Accessibility (Sections 2, 9 of PDF) */}
        <LocationMapSection />
      </main>

      {/* Store Footer */}
      <Footer
        onOpenStoreProfile={() => setIsProfileOpen(true)}
        onOpenSizingGuide={() => setIsSizingOpen(true)}
      />

      {/* In-Store Reservation Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleProceedToCheckout}
      />

      {/* Detailed Product Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Complete Store Profile Modal (Section 13 & 10 of PDF) */}
      <StoreProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      {/* Sizing Guide Modal */}
      <SizingModal
        isOpen={isSizingOpen}
        onClose={() => setIsSizingOpen(false)}
      />

      {/* In-Store Reservation Confirmation Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={BOHOO_PRODUCTS}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

      {/* Real-time Toast Feedback Notification */}
      {toastMessage && (
        <div 
          id="toast-notification"
          className="fixed bottom-6 left-6 z-50 bg-[#18181b] border-2 border-[#ff5500] text-[#ededed] px-4 py-3 font-mono text-xs shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse"></span>
          <span className="font-bold tracking-wider">{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="text-[10px] text-[#ff5500] underline font-bold uppercase hover:text-[#ededed] ml-2 cursor-pointer flex items-center gap-1"
          >
            VIEW BAG <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Sticky Floating Quick Contact for Mobile & Desktop */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <a
          href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Bohoo%20Ahmedabad,%20I%20have%20an%20inquiry%20regarding%20your%20streetwear%20collection.`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#22c55e] hover:bg-[#16a34a] text-black shadow-lg rounded-full flex items-center justify-center transition-transform hover:scale-105"
          title="Chat on WhatsApp (+91 82006 69651)"
        >
          <MessageCircle className="w-5 h-5 fill-black" />
        </a>
        <a
          href={`tel:${STORE_INFO.phone}`}
          className="p-3 bg-[#ff5500] hover:bg-[#ff7733] text-black shadow-lg rounded-full flex items-center justify-center transition-transform hover:scale-105"
          title={`Call Store (${STORE_INFO.phone})`}
        >
          <Phone className="w-5 h-5 fill-black" />
        </a>
      </div>
    </div>
  );
}
