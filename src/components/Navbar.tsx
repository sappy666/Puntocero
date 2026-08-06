import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Language, translations } from '../translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b bg-[#151310]/95 backdrop-blur-md border-[#4c463d]/40 shadow-xl ${
        isScrolled ? 'py-3.5 shadow-2xl bg-[#151310]/98' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#"
          className="font-serif text-2xl sm:text-3xl tracking-tight text-[#e8e1dd] hover:text-[#d1bfa5] transition-colors duration-300"
        >
          {t.brand}
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-[#cfc5ba] font-mono text-xs uppercase tracking-widest">
          <a
            href="#features"
            className="hover:text-[#d1bfa5] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d1bfa5] hover:after:w-full after:transition-all after:duration-300"
          >
            {t.features}
          </a>
          <a
            href="#gallery"
            className="hover:text-[#d1bfa5] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d1bfa5] hover:after:w-full after:transition-all after:duration-300"
          >
            {t.gallery}
          </a>
          <a
            href="#attractions"
            className="hover:text-[#d1bfa5] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d1bfa5] hover:after:w-full after:transition-all after:duration-300"
          >
            {t.attractions}
          </a>
          <a
            href="#map"
            className="hover:text-[#d1bfa5] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d1bfa5] hover:after:w-full after:transition-all after:duration-300"
          >
            {t.map}
          </a>
          <a
            href="#contact"
            className="hover:text-[#d1bfa5] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d1bfa5] hover:after:w-full after:transition-all after:duration-300"
          >
            {t.contact}
          </a>
        </div>

        {/* Right CTA & Language Selector */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-[#cfc5ba] font-mono text-xs tracking-widest">
            <button
              onClick={() => setLang('es')}
              className={`transition-colors duration-300 ${
                lang === 'es' ? 'text-[#d1bfa5] font-semibold' : 'hover:text-[#e8e1dd]'
              }`}
            >
              ES
            </button>
            <span className="text-[#4c463d]">|</span>
            <button
              onClick={() => setLang('en')}
              className={`transition-colors duration-300 ${
                lang === 'en' ? 'text-[#d1bfa5] font-semibold' : 'hover:text-[#e8e1dd]'
              }`}
            >
              EN
            </button>
            <span className="text-[#4c463d]">|</span>
            <button
              onClick={() => setLang('por')}
              className={`transition-colors duration-300 ${
                lang === 'por' ? 'text-[#d1bfa5] font-semibold' : 'hover:text-[#e8e1dd]'
              }`}
            >
              POR
            </button>
          </div>

          <button
            onClick={onOpenBooking}
            className="bg-[#d1bfa5] text-[#5a4d39] px-6 py-3 font-mono text-xs uppercase tracking-widest font-medium hover:bg-[#383431] hover:text-[#e8e1dd] transition-all duration-500 transform hover:scale-[0.98] shadow-md cursor-pointer"
          >
            {t.bookNow}
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center gap-1 text-[#cfc5ba] font-mono text-xs tracking-widest mr-1">
            <button
              onClick={() => setLang('es')}
              className={lang === 'es' ? 'text-[#d1bfa5] font-semibold' : 'text-gray-400'}
            >
              ES
            </button>
            <span>|</span>
            <button
              onClick={() => setLang('en')}
              className={lang === 'en' ? 'text-[#d1bfa5] font-semibold' : 'text-gray-400'}
            >
              EN
            </button>
            <span>|</span>
            <button
              onClick={() => setLang('por')}
              className={lang === 'por' ? 'text-[#d1bfa5] font-semibold' : 'text-gray-400'}
            >
              POR
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#e8e1dd] p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1e1b19] border-b border-[#4c463d]/40 px-6 py-6 space-y-4 font-mono text-xs uppercase tracking-widest animate-fadeIn">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#e8e1dd] hover:text-[#d1bfa5]"
          >
            {t.features}
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#e8e1dd] hover:text-[#d1bfa5]"
          >
            {t.gallery}
          </a>
          <a
            href="#attractions"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#e8e1dd] hover:text-[#d1bfa5]"
          >
            {t.attractions}
          </a>
          <a
            href="#map"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#e8e1dd] hover:text-[#d1bfa5]"
          >
            {t.map}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#e8e1dd] hover:text-[#d1bfa5]"
          >
            {t.contact}
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full mt-4 bg-[#d1bfa5] text-[#5a4d39] py-3 font-mono text-xs uppercase tracking-widest font-semibold text-center"
          >
            {t.bookNow}
          </button>
        </div>
      )}
    </nav>
  );
};
