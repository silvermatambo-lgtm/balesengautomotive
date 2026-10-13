import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

export default function Cart() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh]">
        <ShoppingBag size={48} className="mx-auto text-stone-300 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
        <p className="text-stone-500 mb-6">Browse our truck parts and add what you need.</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-lg"
        >
          Go to Shop <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Your Cart ({totalItems})
          </h1>
          <button onClick={clearCart} className="text-sm text-stone-500 hover:text-red-600">
            Clear cart
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden mb-6">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex gap-4 p-4 border-b border-stone-100 last:border-0"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-20 h-20 object-cover rounded-lg bg-stone-100"
              />
              <div className="flex-1 min-w-0">
                <Link to={`/product/${item.product.id}`} className="font-semibold text-sm hover:text-red-600 line-clamp-1">
                  {item.product.name}
                </Link>
                <p className="text-xs text-stone-400">{item.product.sku}</p>
                <p className="font-bold text-red-600 mt-1">{formatPrice(item.product.price)}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={() => removeItem(item.product.id)}
                  className="text-stone-400 hover:text-red-600"
                  aria-label="Remove"
                >
                  <Trash2 size={16} />
                </button>
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="px-2 py-1 hover:bg-stone-100"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-3 py-1 text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="px-2 py-1 hover:bg-stone-100"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <p className="text-sm font-semibold">
                  {formatPrice(item.product.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6">
          <div className="flex justify-between text-lg font-bold mb-6">
            <span>Total</span>
            <span className="text-red-600">{formatPrice(totalPrice)}</span>
          </div>
          <Link
            to="/checkout"
            className="block w-full text-center bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl transition-colors"
          >
            Proceed to Checkout
          </Link>
          <Link to="/shop" className="block text-center text-sm text-stone-500 mt-4 hover:text-red-600">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
