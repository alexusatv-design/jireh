import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-blue-950 shadow-xl py-2 border-b border-orange-600'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center justify-center px-4 py-2 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-shadow min-w-[200px]"
          >
            <img
              src="/logo.png"
              alt="Jireh Home Improvement Logo"
              className={`w-auto transition-all duration-300 ${
                isScrolled ? 'h-12' : 'h-16'
              }`}
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`font-semibold text-base transition-colors ${
                  isScrolled
                    ? 'text-white hover:text-orange-400'
                    : 'text-white hover:text-orange-300'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+16096387724"
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                isScrolled
                  ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-md hover:shadow-lg'
                  : 'bg-orange-600 text-white shadow-lg hover:shadow-xl hover:bg-orange-700'
              }`}
            >
              <Phone className="w-4 h-4" />
              (609) 638-7724
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-gray-900 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`block py-2 font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-white hover:text-cyan-300'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+16096387724"
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl transition-all justify-center"
            >
              <Phone className="w-4 h-4" />
              (609) 638-7724
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
