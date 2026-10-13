import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Thabo M.',
    role: 'Fleet Manager',
    text: 'Baleseng has become our go-to for truck brakes and filters. Fast delivery and the parts last. Highly recommended for any fleet.',
  },
  {
    name: 'Johan V.',
    role: 'Owner-Operator',
    text: 'Needed a clutch kit urgently. WhatsApped them in the morning and had it sorted the same week. Good prices and honest advice.',
  },
  {
    name: 'Lerato K.',
    role: 'Workshop Owner',
    text: 'We order electrical parts and suspension components regularly. Stock is reliable and they know their products.',
  },
  {
    name: 'Pieter S.',
    role: 'Transport Company',
    text: 'Trailer axles and landing gear arrived on time. Quality is solid. Will keep buying from Baleseng.',
  },
  {
    name: 'Nomsa D.',
    role: 'Logistics',
    text: 'Great communication and competitive pricing on tyres and rims. COD option made it easy for us.',
  },
  {
    name: 'Andre B.',
    role: 'Mechanic',
    text: 'From engine gaskets to sensors — they usually have what I need or can source it quickly. Professional service.',
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-28 pb-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            What Customers Say
          </h1>
          <p className="text-stone-400">Trusted by fleet managers, workshops and owner-operators.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                <div className="flex gap-1 mb-3 text-amber-400">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <p className="font-bold text-sm">{r.name}</p>
                <p className="text-xs text-stone-400">{r.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
