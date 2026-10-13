import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS, CATEGORIES } from '../data/products';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || form.phone.length < 7) e.phone = 'Valid phone is required';
    if (!form.service) e.service = 'Please select a category';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text = encodeURIComponent(
      `Hi Baleseng Automotive,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || 'N/A'}\nCategory: ${form.service}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-28 pb-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Contact Us
          </h1>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Get in touch for quotes, stock checks or orders. We're here to keep your trucks on the road.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-start gap-4 bg-stone-50 rounded-2xl p-6 hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Call / App</h3>
                <p className="text-stone-600 text-sm">{BUSINESS.phone}</p>
              </div>
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-start gap-4 bg-stone-50 rounded-2xl p-6 hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-stone-600 text-sm">{BUSINESS.email}</p>
              </div>
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-stone-50 rounded-2xl p-6 hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                <MessageCircle size={22} />
              </div>
              <div>
                <h3 className="font-bold mb-1">WhatsApp</h3>
                <p className="text-stone-600 text-sm">Chat with us instantly</p>
              </div>
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-stone-50 rounded-2xl p-6 md:p-8">
              {sent ? (
                <div className="text-center py-10">
                  <CheckCircle2 size={48} className="mx-auto text-green-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Message Ready</h3>
                  <p className="text-stone-600 text-sm">
                    WhatsApp should have opened with your enquiry. If not, please message us on {BUSINESS.phone}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-bold mb-2">Send an Enquiry</h2>
                  <div>
                    <label className="block text-sm font-medium mb-1">Name *</label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-red-400"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-red-400"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-red-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Category / Enquiry *</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-red-400"
                    >
                      <option value="">Select...</option>
                      {CATEGORIES.map((c) => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                      <option value="General Quote">General Quote</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message *</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Part numbers, vehicle make/model, quantity..."
                      className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-red-400 resize-none"
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 rounded-xl transition-colors"
                  >
                    <Send size={18} /> Send via WhatsApp
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <h2 className="text-xl font-bold mb-6">Business Info</h2>
              <ul className="space-y-5 text-sm text-stone-600">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-red-500 mt-0.5 shrink-0" />
                  <span>{BUSINESS.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <p>Mon – Fri: 07:30 – 17:00</p>
                    <p>Saturday: 08:00 – 13:00</p>
                    <p>Sunday: Closed</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-red-500 mt-0.5 shrink-0" />
                  <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-red-600">{BUSINESS.phone}</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-red-500 mt-0.5 shrink-0" />
                  <a href={`mailto:${BUSINESS.email}`} className="hover:text-red-600">{BUSINESS.email}</a>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl overflow-hidden border border-stone-200 h-64 bg-stone-100 flex items-center justify-center text-stone-400 text-sm">
                <div className="text-center p-4">
                  <MapPin size={32} className="mx-auto mb-2 text-red-400" />
                  <p>Nationwide supply across South Africa</p>
                  <p className="text-xs mt-1">Contact us for your nearest delivery option</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
