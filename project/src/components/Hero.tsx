import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('/gemini_generated_image_s94l1ts94l1ts94lr.webp')] bg-cover bg-center opacity-30"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/50 to-transparent"></div>

      <div className="relative max-w-5xl mx-auto px-6 py-24 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            New Jersey's Trusted General Contractor & Home Improvement Expert
          </h1>

          <h2 className="text-2xl md:text-3xl text-orange-400 font-semibold mb-8 max-w-4xl mx-auto">
            Expert Kitchen Remodeling, Bathroom Renovation & Home Construction
          </h2>

          <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            From premium siding and energy-efficient windows to complete kitchen and bathroom remodeling, Jireh Home Improvement delivers master-level craftsmanship with 25+ years of proven experience across New Jersey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2"
            >
              Get Free Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="tel:+16096387724"
              className="group bg-slate-700/50 backdrop-blur-sm hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-slate-500/30 hover:border-orange-400/50 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (609) 638-7724
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-4xl font-bold text-orange-400 mb-2">25+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-4xl font-bold text-orange-400 mb-2">1000+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
