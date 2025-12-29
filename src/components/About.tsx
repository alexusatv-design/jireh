import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your peace of mind',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled professionals with years of experience',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Committed to completing projects on schedule',
  },
];

const values = [
  'Quality craftsmanship on every project',
  'Transparent pricing with no hidden fees',
  'Clear communication throughout the process',
  'Attention to detail and client satisfaction',
  'Use of premium materials and modern techniques',
  'Warranty on all work performed',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Locally Owned Contractor with 25+ Years of Excellence in New Jersey
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Jireh Home Improvement is your locally owned and operated general contractor serving all of New Jersey. With 25+ years of verified experience and 1000+ completed home improvement projects, we're the trusted choice for homeowners seeking proven reliability and master-level craftsmanship. Whether you need kitchen remodeling, bathroom renovations, siding installation, or finished basements, we deliver exceptional results rooted in family values.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              As a locally owned business in New Jersey, our commitment goes beyond construction. We practice transparent pricing, stress-free communication, and results that exceed expectations. We handle all permits, manage timelines, and stand behind our work with comprehensive warranty coverage. Your vision becomes our mission, and your satisfaction is our success.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              From initial consultation through final walkthrough, New Jersey homeowners trust Jireh Home Improvement because 95% of our new clients come from referrals and repeat customers. Our family-driven approach, combined with decades of experience, makes us the general contractor New Jersey families rely on for all their home improvement needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border border-orange-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl text-white border border-orange-600">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Our Quality Commitment</h3>
              <p className="text-slate-100 leading-relaxed">
                We stand behind every project with our commitment to excellence.
                Your satisfaction is our success, and we won't rest until you're
                completely happy with the results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
