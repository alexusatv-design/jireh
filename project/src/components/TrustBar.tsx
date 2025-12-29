import { Star, Award, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  const brands = [
    { name: 'James Hardie', category: 'Premium Siding' },
    { name: 'Pella', category: 'Windows & Doors' },
    { name: 'Sherwin-Williams', category: 'Paint & Coatings' },
    { name: 'Kohler', category: 'Plumbing Fixtures' },
  ];

  return (
    <section className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="flex items-center gap-4">
            <Star className="w-8 h-8 text-orange-600 flex-shrink-0" />
            <div>
              <p className="text-sm text-slate-400">Google Reviews</p>
              <p className="text-2xl font-bold">4.9/5</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Award className="w-8 h-8 text-orange-600 flex-shrink-0" />
            <div>
              <p className="text-sm text-slate-400">Projects Completed</p>
              <p className="text-2xl font-bold">1000+</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-orange-600 flex-shrink-0" />
            <div>
              <p className="text-sm text-slate-400">Licensed & Insured</p>
              <p className="text-2xl font-bold">25+ Years</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Award className="w-8 h-8 text-orange-600 flex-shrink-0" />
            <div>
              <p className="text-sm text-slate-400">Warranty</p>
              <p className="text-2xl font-bold">Full Coverage</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-slate-400 text-sm mb-6 text-center">
            We partner with industry-leading brands trusted by homeowners
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <div key={brand.name} className="flex flex-col items-center">
                <div className="w-24 h-24 bg-slate-800 rounded-lg flex items-center justify-center mb-3 border border-slate-700 hover:border-orange-600 transition-colors">
                  <p className="text-slate-400 font-semibold text-center px-2 text-sm">{brand.name}</p>
                </div>
                <p className="text-xs text-slate-500 text-center">{brand.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
