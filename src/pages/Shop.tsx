import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShoppingCart, Search, Filter } from 'lucide-react';
import { PRODUCTS, CATEGORIES, formatPrice, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const { category: categorySlug } = useParams();
  const { addItem } = useCart();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name');

  const activeCategory = CATEGORIES.find((c) => c.slug === categorySlug);

  const filtered = useMemo(() => {
    let list = activeCategory
      ? getProductsByCategory(activeCategory.id)
      : PRODUCTS;

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    else list = [...list].sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [activeCategory, search, sort]);

  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="text-3xl md:text-4xl font-bold uppercase mb-2"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            {activeCategory ? activeCategory.name : 'All Truck Parts'}
          </h1>
          <p className="text-stone-600">
            {activeCategory
              ? activeCategory.description
              : 'Browse our full range of quality truck spares & accessories.'}
          </p>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            to="/shop"
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              !activeCategory ? 'bg-red-600 text-white' : 'bg-white text-stone-700 hover:bg-stone-100 border'
            }`}
          >
            All
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              to={`/shop/${c.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory?.id === c.id
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border'
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search parts, SKU..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 bg-white text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
            />
          </div>
          <div className="relative">
            <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="pl-9 pr-8 py-3 rounded-xl border border-stone-200 bg-white text-sm outline-none appearance-none"
            >
              <option value="name">Sort: Name</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-stone-500">
            <p className="text-lg mb-2">No products found.</p>
            <p className="text-sm">Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((p) => (
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
        )}

        <p className="text-center text-stone-400 text-sm mt-10">
          Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>
    </div>
  );
}
