export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  sku: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  items: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: 'engine',
    name: 'Engine Parts',
    slug: 'engine-parts',
    image: '/images/products/engine_parts.jpg',
    description: 'Engine blocks, pistons, rings, crankshafts, camshafts, gaskets, seals & turbochargers.',
    items: ['Engine Blocks', 'Pistons & Rings', 'Crankshafts', 'Camshafts', 'Gaskets & Seals', 'Turbochargers'],
  },
  {
    id: 'brake',
    name: 'Brake Systems',
    slug: 'brake-systems',
    image: '/images/products/brake_systems.jpg',
    description: 'Brake pads, discs, drums, calipers, air tanks and brake chambers for heavy-duty trucks.',
    items: ['Brake Pads', 'Brake Discs', 'Brake Drums', 'Calipers', 'Air Tanks', 'Brake Chambers'],
  },
  {
    id: 'filters',
    name: 'Filters & Lubricants',
    slug: 'filters-lubricants',
    image: '/images/products/filters.jpg',
    description: 'Oil, fuel, air and cabin filters plus engine and gear oils for reliable performance.',
    items: ['Oil Filters', 'Fuel Filters', 'Air Filters', 'Cabin Filters', 'Engine Oils', 'Gear Oils'],
  },
  {
    id: 'suspension',
    name: 'Suspension & Steering',
    slug: 'suspension-steering',
    image: '/images/products/suspension_steering.jpg',
    description: 'Shock absorbers, leaf springs, bushes, mounts, ball joints and track rod ends.',
    items: ['Shock Absorbers', 'Leaf Springs', 'Bushes & Mounts', 'Steering Components', 'Ball Joints', 'Track Rod Ends'],
  },
  {
    id: 'electrical',
    name: 'Electrical Parts',
    slug: 'electrical-parts',
    image: '/images/products/electrical_parts.jpg',
    description: 'Batteries, alternators, starters, wiring, connectors, lights, indicators and sensors.',
    items: ['Batteries', 'Alternators', 'Starters', 'Wiring & Connectors', 'Lights & Indicators', 'Sensors'],
  },
  {
    id: 'transmission',
    name: 'Transmission & Driveline',
    slug: 'transmission-driveline',
    image: '/images/products/transmission_driveline.jpg',
    description: 'Gearboxes, clutch kits, drive shafts, differentials, U-joints and transmission filters.',
    items: ['Gearboxes', 'Clutch Kits', 'Drive Shafts', 'Differentials', 'U-Joints', 'Transmission Filters'],
  },
  {
    id: 'body',
    name: 'Truck Body Parts',
    slug: 'truck-body-parts',
    image: '/images/products/truck_body_parts.jpg',
    description: 'Bumpers, mirrors, grilles, cabin parts, doors, handles and exterior accessories.',
    items: ['Bumpers', 'Mirrors', 'Grilles', 'Cabin Parts', 'Doors & Handles', 'Exterior Accessories'],
  },
  {
    id: 'trailer',
    name: 'Trailer Parts',
    slug: 'trailer-parts',
    image: '/images/products/trailer_parts.jpg',
    description: 'Axles, landing gear, brake chambers, suspension parts, lighting and couplings.',
    items: ['Axles', 'Landing Gear', 'Brake Chambers', 'Suspension Parts', 'Lighting', 'Couplings'],
  },
  {
    id: 'tyres',
    name: 'Tyres & Wheels',
    slug: 'tyres-wheels',
    image: '/images/products/tyres_wheels.jpg',
    description: 'Truck tyres, rims, wheel nuts, tyre accessories, valve stems and repair kits.',
    items: ['Truck Tyres', 'Rims', 'Wheel Nuts', 'Tyre Accessories', 'Valve Stems', 'Tyre Repair Kits'],
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'accessories',
    image: '/images/products/accessories.jpg',
    description: 'Mudguards, tool boxes, fuel tanks, steps, ladders, safety equipment and more.',
    items: ['Mudguards', 'Tool Boxes', 'Fuel Tanks', 'Steps & Ladders', 'Safety Equipment', 'Other Truck Accessories'],
  },
];

export const PRODUCTS: Product[] = [
  // Engine
  { id: 'eng-001', name: 'Heavy Duty Engine Block', category: 'engine', price: 18500, image: '/images/products/engine_parts.jpg', description: 'OEM-quality engine block for major truck brands. Precision machined for reliability.', sku: 'ENG-BLK-001', inStock: true },
  { id: 'eng-002', name: 'Piston & Ring Set', category: 'engine', price: 2450, image: '/images/products/engine_parts_alt.jpg', description: 'Complete piston and ring set for heavy-duty diesel engines.', sku: 'ENG-PST-002', inStock: true },
  { id: 'eng-003', name: 'Turbocharger Assembly', category: 'engine', price: 8750, image: '/images/products/turbochargers.jpg', description: 'High-performance turbocharger for improved power and fuel efficiency.', sku: 'ENG-TRB-003', inStock: true },
  { id: 'eng-004', name: 'Gasket & Seal Kit', category: 'engine', price: 980, image: '/images/products/gaskets.jpg', description: 'Full engine gasket and seal kit for major overhauls.', sku: 'ENG-GSK-004', inStock: true },
  // Brake
  { id: 'brk-001', name: 'Brake Pad Set (Axle)', category: 'brake', price: 1250, image: '/images/products/brake_systems.jpg', description: 'Premium ceramic/semi-metallic brake pads for trucks and trailers.', sku: 'BRK-PAD-001', inStock: true },
  { id: 'brk-002', name: 'Brake Disc Rotor', category: 'brake', price: 1890, image: '/images/products/brake_systems_alt.jpg', description: 'Ventilated brake disc designed for heavy loads and long service life.', sku: 'BRK-DSC-002', inStock: true },
  { id: 'brk-003', name: 'Air Brake Chamber', category: 'brake', price: 1450, image: '/images/products/brake_systems.jpg', description: 'Type 24/30 spring brake chamber for reliable air brake systems.', sku: 'BRK-CHM-003', inStock: true },
  // Filters
  { id: 'flt-001', name: 'Oil Filter', category: 'filters', price: 185, image: '/images/products/filters.jpg', description: 'High-efficiency oil filter for diesel truck engines.', sku: 'FLT-OIL-001', inStock: true },
  { id: 'flt-002', name: 'Fuel Filter', category: 'filters', price: 220, image: '/images/products/filters_alt.jpg', description: 'Primary and secondary fuel filter options available.', sku: 'FLT-FUL-002', inStock: true },
  { id: 'flt-003', name: 'Air Filter Element', category: 'filters', price: 310, image: '/images/products/filters.jpg', description: 'Heavy-duty air filter for dusty operating conditions.', sku: 'FLT-AIR-003', inStock: true },
  { id: 'flt-004', name: 'Engine Oil 15W-40 (20L)', category: 'filters', price: 1450, image: '/images/products/lubricants_oils.jpg', description: 'API CK-4 diesel engine oil, 20 litre drum.', sku: 'LUB-OIL-004', inStock: true },
  // Suspension
  { id: 'sus-001', name: 'Shock Absorber', category: 'suspension', price: 980, image: '/images/products/suspension_steering.jpg', description: 'Gas-charged shock absorber for trucks and trailers.', sku: 'SUS-SHK-001', inStock: true },
  { id: 'sus-002', name: 'Leaf Spring Pack', category: 'suspension', price: 3200, image: '/images/products/suspension_steering_alt.jpg', description: 'Multi-leaf spring pack for heavy-duty applications.', sku: 'SUS-LF-002', inStock: true },
  { id: 'sus-003', name: 'Ball Joint Kit', category: 'suspension', price: 650, image: '/images/products/suspension_steering.jpg', description: 'Upper and lower ball joint set with boots and grease fittings.', sku: 'SUS-BJ-003', inStock: true },
  // Electrical
  { id: 'elc-001', name: 'Truck Battery 12V 180Ah', category: 'electrical', price: 2850, image: '/images/products/batteries.jpg', description: 'Maintenance-free heavy-duty truck battery.', sku: 'ELC-BAT-001', inStock: true },
  { id: 'elc-002', name: 'Alternator 24V', category: 'electrical', price: 4200, image: '/images/products/electrical_parts.jpg', description: 'High-output 24V alternator for commercial vehicles.', sku: 'ELC-ALT-002', inStock: true },
  { id: 'elc-003', name: 'Starter Motor', category: 'electrical', price: 3850, image: '/images/products/electrical_parts_alt.jpg', description: 'Heavy-duty starter motor for diesel engines.', sku: 'ELC-STR-003', inStock: true },
  { id: 'elc-004', name: 'LED Light Bar / Indicators', category: 'electrical', price: 450, image: '/images/products/lighting.jpg', description: 'LED marker lights and indicator assemblies.', sku: 'ELC-LED-004', inStock: true },
  // Transmission
  { id: 'trn-001', name: 'Clutch Kit', category: 'transmission', price: 5500, image: '/images/products/clutch_kits.jpg', description: 'Complete clutch kit including pressure plate, disc and release bearing.', sku: 'TRN-CLT-001', inStock: true },
  { id: 'trn-002', name: 'U-Joint / Universal Joint', category: 'transmission', price: 480, image: '/images/products/u_joints_couplings.jpg', description: 'Heavy-duty U-joint for propshaft applications.', sku: 'TRN-UJ-002', inStock: true },
  { id: 'trn-003', name: 'Drive Shaft Assembly', category: 'transmission', price: 6800, image: '/images/products/driveline_parts.jpg', description: 'Complete propshaft for various truck models.', sku: 'TRN-DS-003', inStock: true },
  // Body
  { id: 'bdy-001', name: 'Front Bumper', category: 'body', price: 4200, image: '/images/products/truck_body_parts.jpg', description: 'Steel or plastic front bumper for major truck brands.', sku: 'BDY-BMP-001', inStock: true },
  { id: 'bdy-002', name: 'Side Mirror Assembly', category: 'body', price: 1250, image: '/images/products/truck_body_parts_alt.jpg', description: 'Complete heated/power mirror assembly.', sku: 'BDY-MIR-002', inStock: true },
  { id: 'bdy-003', name: 'Cabin Door Handle Set', category: 'body', price: 380, image: '/images/products/cabin_parts.jpg', description: 'Interior and exterior door handle kit.', sku: 'BDY-HDL-003', inStock: true },
  // Trailer
  { id: 'trl-001', name: 'Trailer Axle', category: 'trailer', price: 9500, image: '/images/products/trailer_parts.jpg', description: 'Heavy-duty trailer axle complete with hubs.', sku: 'TRL-AXL-001', inStock: true },
  { id: 'trl-002', name: 'Landing Gear Set', category: 'trailer', price: 3800, image: '/images/products/trailer_parts_alt.jpg', description: 'Two-speed landing gear legs with crank.', sku: 'TRL-LG-002', inStock: true },
  { id: 'trl-003', name: 'Fifth Wheel Coupling', category: 'trailer', price: 7200, image: '/images/products/trailer_parts.jpg', description: 'Jost-style fifth wheel coupling.', sku: 'TRL-FW-003', inStock: true },
  // Tyres
  { id: 'tyr-001', name: 'Truck Tyre 315/80R22.5', category: 'tyres', price: 4200, image: '/images/products/tyres_wheels.jpg', description: 'Premium all-position truck tyre.', sku: 'TYR-315-001', inStock: true },
  { id: 'tyr-002', name: 'Steel Rim 22.5"', category: 'tyres', price: 1850, image: '/images/products/tyres_wheels_alt.jpg', description: 'Heavy-duty steel wheel rim.', sku: 'TYR-RIM-002', inStock: true },
  { id: 'tyr-003', name: 'Wheel Nut Set', category: 'tyres', price: 280, image: '/images/products/tyres_wheels.jpg', description: 'Set of 10 wheel nuts with washers.', sku: 'TYR-NUT-003', inStock: true },
  // Accessories
  { id: 'acc-001', name: 'Mudguard Set', category: 'accessories', price: 950, image: '/images/products/accessories.jpg', description: 'Front and rear mudguard set with brackets.', sku: 'ACC-MUD-001', inStock: true },
  { id: 'acc-002', name: 'Tool Box Aluminium', category: 'accessories', price: 1850, image: '/images/products/tools_equipment.jpg', description: 'Lockable aluminium underbody tool box.', sku: 'ACC-TBX-002', inStock: true },
  { id: 'acc-003', name: 'Fuel Tank 200L', category: 'accessories', price: 4500, image: '/images/products/accessories_alt.jpg', description: 'Aluminium auxiliary fuel tank with brackets.', sku: 'ACC-FTK-003', inStock: true },
  { id: 'acc-004', name: 'Steps & Ladder Kit', category: 'accessories', price: 1200, image: '/images/products/accessories.jpg', description: 'Side steps and access ladder set.', sku: 'ACC-STP-004', inStock: true },
  // Extra categories coverage
  { id: 'air-001', name: 'Air Dryer Cartridge', category: 'brake', price: 780, image: '/images/products/air_system.jpg', description: 'Air dryer desiccant cartridge for air brake systems.', sku: 'AIR-DRY-001', inStock: true },
  { id: 'cool-001', name: 'Radiator', category: 'engine', price: 6500, image: '/images/products/cooling_system.jpg', description: 'Aluminium radiator for heavy-duty trucks.', sku: 'COL-RAD-001', inStock: true },
  { id: 'exh-001', name: 'Exhaust Silencer', category: 'engine', price: 2100, image: '/images/products/exhaust_system.jpg', description: 'Stainless steel exhaust muffler.', sku: 'EXH-SIL-001', inStock: true },
  { id: 'hyd-001', name: 'Hydraulic Pump', category: 'transmission', price: 5800, image: '/images/products/hydraulic_parts.jpg', description: 'PTO-driven hydraulic pump for tippers and cranes.', sku: 'HYD-PMP-001', inStock: true },
  { id: 'sen-001', name: 'ABS Sensor', category: 'electrical', price: 420, image: '/images/products/sensors.jpg', description: 'Wheel speed sensor for ABS systems.', sku: 'SEN-ABS-001', inStock: true },
];

export function getProductsByCategory(categoryId: string): Product[] {
  return PRODUCTS.filter((p) => p.category === categoryId);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 0,
  }).format(price);
}

export const BUSINESS = {
  name: 'Baleseng Automotive',
  tagline: 'Truck Spares & Accessories',
  slogan: 'Keep Your Trucks On The Road',
  phone: '+27 64 821 9928',
  phoneRaw: '27648219928',
  email: 'info@balesengautomotive.co.za',
  website: 'www.balesengautomotive.co.za',
  whatsapp: '27648219928',
  address: 'South Africa — Nationwide Delivery',
};
