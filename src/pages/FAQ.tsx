import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { BUSINESS } from '../data/products';

const FAQS = [
  {
    q: 'Do you deliver nationwide?',
    a: 'Yes. We offer reliable delivery across South Africa. Delivery times and costs depend on your location and order size — contact us for a quote.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Currently we support Cash on Delivery (COD) and order confirmation via WhatsApp. Online payment options (card, EFT, PayPal) can be added as we expand. All orders are confirmed with you on WhatsApp before dispatch.',
  },
  {
    q: 'Are your parts genuine / OEM quality?',
    a: 'We supply quality parts suitable for heavy-duty trucks. Many are OEM-equivalent or genuine where available. Tell us your vehicle make, model and part number and we will advise the best option.',
  },
  {
    q: 'How do I know a part will fit my truck?',
    a: 'Provide your truck make, model, year and the OEM part number if possible. Our team will confirm compatibility before you order.',
  },
  {
    q: 'Can I order via WhatsApp only?',
    a: 'Absolutely. You can browse the site, add items to cart and checkout, or simply WhatsApp us your requirements. We will confirm stock, price and delivery with you.',
  },
  {
    q: 'What is your return / warranty policy?',
    a: 'Please contact us within a reasonable time if a part is incorrect or defective. Warranty terms depend on the manufacturer. Keep packaging and proof of purchase.',
  },
  {
    q: 'Do you supply for trailers as well?',
    a: 'Yes. We stock trailer parts including axles, landing gear, brake chambers, couplings, lighting and more.',
  },
  {
    q: 'How can I get a bulk / fleet quote?',
    a: `Call or WhatsApp ${BUSINESS.phone} or email ${BUSINESS.email} with your list. We offer competitive pricing for fleet and workshop customers.`,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-28 pb-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-stone-400">Quick answers about ordering, delivery and our parts.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-stone-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold hover:bg-stone-50"
              >
                {faq.q}
                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-stone-600 text-sm leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
