import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-28 pb-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Product Categories
          </h1>
          <p className="text-stone-400 max-w-2xl mx-auto">
            From the engine to the trailer — quality parts for every part of your truck.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop/${cat.slug}`}
                className="group flex gap-5 bg-stone-50 hover:bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-36 md:w-48 shrink-0 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="py-5 pr-5 flex flex-col justify-center">
                  <h2 className="font-bold text-lg mb-1 group-hover:text-red-600 transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-sm text-stone-500 mb-3 line-clamp-2">{cat.description}</p>
                  <ul className="text-xs text-stone-400 space-y-0.5 mb-3 hidden sm:block">
                    {cat.items.slice(0, 4).map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-red-600">
                    Shop now <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
