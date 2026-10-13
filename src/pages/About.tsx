import { Link } from 'react-router-dom';
import { Shield, Truck, Users, Award } from 'lucide-react';
import { BUSINESS } from '../data/products';

export default function About() {
  return (
    <div className="bg-white">
      <section className="pt-28 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            About Baleseng Automotive
          </h1>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Your trusted partner for quality truck spares & accessories across South Africa.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <img
                src="/images/products/trucks.jpg"
                alt="Trucks on the road"
                className="rounded-3xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold uppercase mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Keeping Your Fleet Moving
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Baleseng Automotive is a dedicated supplier of truck spares and accessories. We understand that downtime costs money — that's why we focus on genuine quality parts, competitive pricing, and reliable nationwide supply.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                From engine components and brake systems to trailer parts, tyres, and accessories, we stock a wide range so you can keep your trucks on the road with confidence.
              </p>
              <Link
                to="/shop"
                className="inline-flex bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Browse Our Parts
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield size={28} />, title: 'Genuine Quality', desc: 'We source reliable parts that meet heavy-duty standards.' },
              { icon: <Truck size={28} />, title: 'Nationwide Delivery', desc: 'Fast and dependable delivery across South Africa.' },
              { icon: <Users size={28} />, title: 'Expert Support', desc: 'Our team helps you find the right part for your vehicle.' },
              { icon: <Award size={28} />, title: 'Competitive Prices', desc: 'Fair pricing so you can maintain your fleet cost-effectively.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-100 text-red-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-stone-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold uppercase mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Ready to Order?
          </h2>
          <p className="text-stone-400 mb-6">
            Call or WhatsApp us on {BUSINESS.phone} or shop online and checkout via COD / WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="bg-red-600 hover:bg-red-500 font-bold px-6 py-3 rounded-lg">
              Call Us
            </a>
            <Link to="/contact" className="border border-white/30 hover:border-white font-semibold px-6 py-3 rounded-lg">
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
