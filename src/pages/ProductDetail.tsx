import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, MessageCircle, Check } from 'lucide-react';
import { getProductById, CATEGORIES, formatPrice, BUSINESS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id || '');
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-xl text-stone-600 mb-4">Product not found.</p>
        <Link to="/shop" className="text-red-600 font-semibold hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const category = CATEGORIES.find((c) => c.id === product.category);

  const handleAdd = () => {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const waText = encodeURIComponent(
    `Hi Baleseng Automotive, I want to order:\n${product.name} (SKU: ${product.sku}) x ${qty}\nPrice: ${formatPrice(product.price * qty)}`
  );

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <Link to={category ? `/shop/${category.slug}` : '/shop'} className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-red-600 mb-6">
          <ArrowLeft size={16} /> Back to {category?.name || 'Shop'}
        </Link>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-stone-100 rounded-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 md:h-[480px] object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-stone-400 mb-2">{product.sku}</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
              {product.name}
            </h1>
            {category && (
              <Link to={`/shop/${category.slug}`} className="text-sm text-red-600 hover:underline mb-4 inline-block">
                {category.name}
              </Link>
            )}
            <p className="text-3xl font-bold text-red-600 mb-4">{formatPrice(product.price)}</p>
            <p className="text-stone-600 mb-6 leading-relaxed">{product.description}</p>

            <div className="flex items-center gap-2 mb-6">
              <span className={`inline-flex items-center gap-1 text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                <Check size={16} /> {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <label className="text-sm font-medium text-stone-700">Qty</label>
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-2 hover:bg-stone-100"
                >
                  −
                </button>
                <span className="px-4 py-2 font-medium min-w-[40px] text-center">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-2 hover:bg-stone-100"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAdd}
                disabled={!product.inStock}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-black hover:bg-red-600 text-white font-bold py-3.5 px-6 rounded-xl transition-colors disabled:opacity-50"
              >
                <ShoppingCart size={18} />
                {added ? 'Added!' : 'Add to Cart'}
              </button>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 px-6 rounded-xl transition-colors"
              >
                <MessageCircle size={18} /> Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
