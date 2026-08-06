import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Language, translations } from '../translations';
import { Logo } from './Logo';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-[#0c0c0e]/90 backdrop-blur-md border-zinc-800/80 ${
        isScrolled ? 'py-3 bg-[#0c0c0e]/95' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#"
          className="hover:opacity-90 transition-opacity duration-300 py-1"
          aria-label="Punto Cero Patagonia"
        >
          <Logo />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-zinc-400 font-sans text-xs uppercase tracking-widest font-normal">
          <a
            href="#features"
            className="hover:text-white transition-colors duration-200 relative py-1"
          >
            {t.features}
          </a>
          <a
            href="#gallery"
            className="hover:text-white transition-colors duration-200 relative py-1"
          >
            {t.gallery}
          </a>
          <a
            href="#attractions"
            className="hover:text-white transition-colors duration-200 relative py-1"
          >
            {t.attractions}
          </a>
          <a
            href="#map"
            className="hover:text-white transition-colors duration-200 relative py-1"
          >
            {t.map}
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors duration-200 relative py-1"
          >
            {t.contact}
          </a>
        </div>

        {/* Right CTA & Language Selector */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-zinc-400 font-sans text-xs tracking-widest">
            {(['es', 'en', 'por'] as const).map((l) => {
              const active = lang === l;
              return (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 border transition-all duration-200 font-sans text-xs uppercase tracking-widest cursor-pointer ${
                    active
                      ? 'border-zinc-500 text-white font-medium bg-zinc-800/60'
                      : 'border-transparent text-zinc-400 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              );
            })}
          </div>

          <button
            onClick={onOpenBooking}
            className="bg-zinc-100 text-zinc-950 px-5 py-2.5 font-sans text-xs uppercase tracking-widest font-medium hover:bg-white transition-all duration-200 cursor-pointer"
          >
            {t.bookNow}
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center gap-1 text-zinc-400 font-sans text-xs tracking-widest mr-1">
            {(['es', 'en', 'por'] as const).map((l) => {
              const active = lang === l;
              return (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-1.5 py-0.5 border transition-all duration-200 font-sans text-[11px] uppercase tracking-wider cursor-pointer ${
                    active
                      ? 'border-zinc-500 text-white font-medium bg-zinc-800/60'
                      : 'border-transparent text-zinc-400 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-zinc-200 p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121215] border-b border-zinc-800 px-6 py-6 space-y-4 font-sans text-xs uppercase tracking-widest">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-200 hover:text-white"
          >
            {t.features}
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-200 hover:text-white"
          >
            {t.gallery}
          </a>
          <a
            href="#attractions"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-200 hover:text-white"
          >
            {t.attractions}
          </a>
          <a
            href="#map"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-200 hover:text-white"
          >
            {t.map}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-200 hover:text-white"
          >
            {t.contact}
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full mt-4 bg-zinc-100 text-zinc-950 py-3 font-sans text-xs uppercase tracking-widest font-medium text-center"
          >
            {t.bookNow}
          </button>
        </div>
      )}
    </nav>
  );
};
