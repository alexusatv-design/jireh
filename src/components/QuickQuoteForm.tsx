import { useState, FormEvent } from 'react';
import { Send, Phone } from 'lucide-react';

export default function QuickQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    zipCode: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Quick Quote submitted:', formData);
    setSubmitStatus('success');
    setIsSubmitting(false);

    setFormData({
      name: '',
      phone: '',
      service: '',
      zipCode: '',
    });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get Your Free Estimate
          </h2>
          <p className="text-xl text-slate-600">
            We'll respond within 24 hours with a customized quote for your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                    placeholder="(609) 555-1234"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-900 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="siding">Premium Siding Installation</option>
                    <option value="windows">Energy-Efficient Windows</option>
                    <option value="kitchen">Kitchen Remodeling</option>
                    <option value="bathroom">Bathroom Remodeling</option>
                    <option value="deck">Deck Construction</option>
                    <option value="painting">Interior/Exterior Painting</option>
                    <option value="other">Other Project</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="zipCode" className="block text-sm font-semibold text-slate-900 mb-2">
                    Zip Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                    placeholder="08540"
                  />
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  Success! We'll contact you soon with your free estimate.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Get Free Estimate
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900 text-white p-6 rounded-2xl">
              <h4 className="text-lg font-bold mb-4">Why Get a Quote?</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Free, no-obligation estimate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>24-hour response guarantee</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Expert consultation included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Full warranty protection</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border-2 border-orange-600 p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-6 h-6 text-orange-600" />
                <h4 className="text-lg font-bold text-slate-900">Prefer to Call?</h4>
              </div>
              <a
                href="tel:+16096387724"
                className="inline-block text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors"
              >
                (609) 638-7724
              </a>
              <p className="text-sm text-slate-600 mt-2">Available 7am - 6pm, Mon-Fri</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
