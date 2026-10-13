import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MessageCircle, Banknote, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice, BUSINESS } from '../data/products';

type PayMethod = 'cod' | 'whatsapp';

export default function Checkout() {
  const { items, totalPrice, totalItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [method, setMethod] = useState<PayMethod>('cod');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (items.length === 0 && !submitted) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-xl mb-4">Your cart is empty.</p>
        <Link to="/shop" className="text-red-600 font-semibold">Go to Shop</Link>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildOrderText = () => {
    const lines = items.map(
      (i) => `• ${i.product.name} (SKU: ${i.product.sku}) x ${i.quantity} = ${formatPrice(i.product.price * i.quantity)}`
    );
    return [
      `*NEW ORDER — Baleseng Automotive*`,
      ``,
      `*Customer*`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || 'N/A'}`,
      `Address: ${form.address}, ${form.city}`,
      form.notes ? `Notes: ${form.notes}` : '',
      ``,
      `*Items (${totalItems})*`,
      ...lines,
      ``,
      `*Total: ${formatPrice(totalPrice)}*`,
      `Payment: ${method === 'cod' ? 'Cash on Delivery (COD)' : 'Via WhatsApp'}`,
    ]
      .filter(Boolean)
      .join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) return;

    if (method === 'whatsapp' || method === 'cod') {
      const text = encodeURIComponent(buildOrderText());
      window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
    }

    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh]">
        <CheckCircle2 size={56} className="mx-auto text-green-500 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Order Sent!</h1>
        <p className="text-stone-600 max-w-md mx-auto mb-6">
          Your order details have been sent via WhatsApp. We'll confirm stock and delivery with you shortly.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/shop" className="bg-red-600 text-white font-bold px-6 py-3 rounded-lg">
            Continue Shopping
          </Link>
          <Link to="/" className="border border-stone-300 px-6 py-3 rounded-lg font-medium">
            Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <Link to="/cart" className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-red-600 mb-6">
          <ArrowLeft size={16} /> Back to Cart
        </Link>

        <h1 className="text-3xl font-bold uppercase mb-8" style={{ fontFamily: 'Oswald, sans-serif' }}>
          Checkout
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact */}
          <div className="bg-white rounded-2xl border border-stone-100 p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-4">Contact & Delivery</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone *</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">Delivery Address *</label>
                <input
                  name="address"
                  required
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Street address"
                  className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City / Town *</label>
                <input
                  name="city"
                  required
                  value={form.city}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Order Notes</label>
                <input
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Vehicle make/model, part numbers..."
                  className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
                />
              </div>
            </div>
          </div>

          {/* Payment method */}
          <div className="bg-white rounded-2xl border border-stone-100 p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-4">Payment Method</h2>
            <div className="space-y-3">
              <label
                className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition ${
                  method === 'cod' ? 'border-red-500 bg-red-50' : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <input
                  type="radio"
                  name="method"
                  checked={method === 'cod'}
                  onChange={() => setMethod('cod')}
                  className="accent-red-600"
                />
                <Banknote size={24} className="text-red-600" />
                <div>
                  <p className="font-semibold">Cash on Delivery (COD)</p>
                  <p className="text-xs text-stone-500">Pay when your order is delivered. Order confirmed via WhatsApp.</p>
                </div>
              </label>
              <label
                className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition ${
                  method === 'whatsapp' ? 'border-green-500 bg-green-50' : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <input
                  type="radio"
                  name="method"
                  checked={method === 'whatsapp'}
                  onChange={() => setMethod('whatsapp')}
                  className="accent-green-600"
                />
                <MessageCircle size={24} className="text-green-600" />
                <div>
                  <p className="font-semibold">Order via WhatsApp</p>
                  <p className="text-xs text-stone-500">Send order details on WhatsApp and arrange payment & delivery with us.</p>
                </div>
              </label>
            </div>
            <p className="text-xs text-stone-400 mt-4">
              Online card / PayPal / WooCommerce payment plugins can be added later. For now all orders are confirmed via WhatsApp.
            </p>
          </div>

          {/* Summary */}
          <div className="bg-white rounded-2xl border border-stone-100 p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-4">Order Summary</h2>
            <ul className="space-y-2 text-sm mb-4">
              {items.map((i) => (
                <li key={i.product.id} className="flex justify-between">
                  <span className="text-stone-600">
                    {i.product.name} × {i.quantity}
                  </span>
                  <span className="font-medium">{formatPrice(i.product.price * i.quantity)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between text-lg font-bold border-t pt-4">
              <span>Total</span>
              <span className="text-red-600">{formatPrice(totalPrice)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl transition-colors text-lg"
          >
            {method === 'whatsapp' ? 'Send Order on WhatsApp' : 'Place COD Order (via WhatsApp)'}
          </button>
        </form>
      </div>
    </div>
  );
}
