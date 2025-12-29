import { Phone } from 'lucide-react';

export default function MobileCallButton() {
  return (
    <a
      href="tel:+16096387724"
      className="fixed bottom-0 left-0 right-0 md:hidden bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 flex items-center justify-center gap-2 font-semibold text-lg shadow-2xl border-t border-orange-700 z-40 transition-colors"
    >
      <Phone className="w-5 h-5" />
      Call Now: (609) 638-7724
    </a>
  );
}
