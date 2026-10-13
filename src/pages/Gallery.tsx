import { CATEGORIES } from '../data/products';

const extraImages = [
  '/images/products/air_system.jpg',
  '/images/products/cooling_system.jpg',
  '/images/products/exhaust_system.jpg',
  '/images/products/fuel_system.jpg',
  '/images/products/hydraulic_parts.jpg',
  '/images/products/lighting.jpg',
  '/images/products/sensors.jpg',
  '/images/products/tools_equipment.jpg',
  '/images/products/workshop_equipment.jpg',
  '/images/products/belts_hoses.jpg',
  '/images/products/bearings_seals.jpg',
  '/images/products/fasteners.jpg',
];

export default function Gallery() {
  const images = [
    ...CATEGORIES.map((c) => ({ src: c.image, alt: c.name })),
    ...extraImages.map((src, i) => ({ src, alt: `Parts ${i + 1}` })),
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-28 pb-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Parts Gallery
          </h1>
          <p className="text-stone-400 max-w-2xl mx-auto">
            A look at the range of truck spares and accessories we supply.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-md aspect-square">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
