import { Home, Building2, Hammer, Wrench, PaintBucket, HardHat, Droplets, Layers, Zap, Sofa } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Premium Siding Installation',
    category: 'Outdoor',
    description: 'Protect and beautify your home with durability. James Hardie fiber cement siding that resists weathering for 30+ years.',
  },
  {
    icon: Home,
    title: 'Energy-Efficient Windows',
    category: 'Outdoor',
    description: 'Keep your home comfortable and your bills low. Pella windows with advanced insulation reduce heating/cooling costs by up to 30%.',
  },
  {
    icon: PaintBucket,
    title: 'Professional Painting',
    category: 'Outdoor',
    description: 'Transform your space in days, not months. Premium Sherwin-Williams finishes that last 10+ years without fading.',
  },
  {
    icon: Droplets,
    title: 'Pressure Washing & Restoration',
    category: 'Outdoor',
    description: 'Reclaim the beauty hidden beneath years of grime. Safe, professional cleaning for siding, decks, driveways, and patios.',
  },
  {
    icon: Hammer,
    title: 'Custom Deck Design & Build',
    category: 'Outdoor',
    description: 'Create your perfect outdoor living space. Weather-resistant materials and expert craftsmanship built to last.',
  },
  {
    icon: Wrench,
    title: 'Kitchen & Bathroom Remodeling',
    category: 'Indoor',
    description: 'Transform your kitchen and bathroom with expert remodeling that increases home value by 50-80%. From design through completion, we handle permits, plumbing, electrical, and premium finishes. Increase energy efficiency, improve functionality, and create spaces that reflect your lifestyle. Perfect for homeowners seeking kitchen renovations or bathroom upgrades in New Jersey.',
  },
  {
    icon: PaintBucket,
    title: 'Drywall, Texturing & Painting',
    category: 'Indoor',
    description: 'Flawless finishes every time. Expert installation and paint application for gallery-quality results.',
  },
  {
    icon: Building2,
    title: 'Room Additions & Expansions',
    category: 'Indoor',
    description: 'Get the space your family needs without moving. Seamlessly integrated additions that increase property value.',
  },
  {
    icon: Zap,
    title: 'Expert Repairs & Restoration',
    category: 'Indoor',
    description: 'Fix it right the first time. Fast response times and permanent solutions for all interior and exterior issues.',
  },
  {
    icon: Layers,
    title: 'Premium Flooring Solutions',
    category: 'Indoor',
    description: 'Hardwood warmth or tile durability. We install beautiful, long-lasting floors that match your style.',
  },
  {
    icon: HardHat,
    title: 'Finished Basements',
    category: 'Specialty',
    description: 'Maximize your home\'s potential with professionally finished basements that increase property value and living space. We provide complete basement finishing including waterproofing, insulation, electrical, egress windows, and custom layouts. Create recreational rooms, home offices, or guest suites. Energy-efficient and code-compliant finished basements designed for New Jersey homeowners seeking additional square footage without moving.',
  },
  {
    icon: Sofa,
    title: 'Custom Entertainment Spaces',
    category: 'Specialty',
    description: 'Home theaters, game rooms, wet bars. We build the entertainment spaces you\'ve been dreaming about.',
  },
];

export default function Services() {
  const categories = ['Outdoor', 'Indoor', 'Specialty'];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Expert Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proven Reliability • Master Craftsmanship • Transparent Pricing • Quality Assured
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-orange-600">
              {category} Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services
                .filter((service) => service.category === category)
                .map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-400 hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-orange-600 group-hover:bg-orange-700 w-20 h-20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all shadow-md">
                          <Icon className="w-9 h-9 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors pt-1">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
