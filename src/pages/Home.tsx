import { Link } from 'react-router-dom';
import { Truck, Shield, Zap, Headphones, ArrowRight, ShoppingCart } from 'lucide-react';
import { CATEGORIES, PRODUCTS, formatPrice, BUSINESS } from '../data/products';
import { useCart } from '../context/CartContext';

function SectionReveal({ children, className = '', delay = '' }: { children: React.ReactNode; className?: string; delay?: string }) {
  return <div className={`animate-fade-up ${delay} ${className}`}>{children}</div>;
}

export default function Home() {
  const { addItem } = useCart();
  const featured = PRODUCTS.slice(0, 8);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/products/trucks.jpg"
            alt="Truck on the road"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-32 md:py-40">
          <SectionReveal>
            <p className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-4">
              Truck Spares & Accessories
            </p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 uppercase"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Keep Your Trucks<br />
              <span className="text-red-500">On The Road</span>
            </h1>
            <p className="text-stone-300 text-lg md:text-xl max-w-xl mb-8">
              Quality parts. Reliable supply. Nationwide. From the engine to the trailer — we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Shop Now <ArrowRight size={20} />
              </Link>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi%20Baleseng%20Automotive%2C%20I%20need%20truck%20parts.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                WhatsApp Order
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-red-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold">
          <div className="flex items-center justify-center gap-2">
            <Shield size={20} /> Genuine & Quality Parts
          </div>
          <div className="flex items-center justify-center gap-2">
            <Truck size={20} /> Fast & Reliable Delivery
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap size={20} /> Competitive Prices
          </div>
          <div className="flex items-center justify-center gap-2">
            <Headphones size={20} /> Expert Support
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Shop by Category
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Your one-stop shop for all truck spares & accessories — from the engine to the trailer.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat, i) => (
              <SectionReveal key={cat.id} delay={`delay-${(i % 5) * 100}`}>
                <Link
                  to={`/shop/${cat.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="font-bold text-sm text-stone-900 group-hover:text-red-600 transition-colors">
                      {cat.name}
                    </h3>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Featured Parts
              </h2>
              <p className="text-stone-600">Popular items ready to keep your fleet moving.</p>
            </div>
            <Link to="/shop" className="hidden md:inline-flex items-center gap-1 text-red-600 font-semibold hover:underline">
              View all <ArrowRight size={16} />
            </Link>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {featured.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <Link to={`/product/${p.id}`}>
                  <div className="h-44 bg-stone-100 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-wider text-stone-400 mb-1">{p.sku}</p>
                  <Link to={`/product/${p.id}`}>
                    <h3 className="font-semibold text-sm text-stone-900 line-clamp-2 mb-2 hover:text-red-600">
                      {p.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-red-600">{formatPrice(p.price)}</span>
                    <button
                      onClick={() => addItem(p)}
                      className="p-2 bg-black text-white rounded-lg hover:bg-red-600 transition-colors"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link to="/shop" className="inline-flex items-center gap-1 text-red-600 font-semibold">
              View all products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Need a Part Fast?
          </h2>
          <p className="text-stone-400 mb-8 text-lg">
            Call or WhatsApp us — we'll help you find the right part and get it to you quickly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Call {BUSINESS.phone}
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
