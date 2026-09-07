import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, translations } from '../translations';
import { Logo } from './Logo';

const MotionLink = motion.create(Link);

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

  const navLinks: { href: string; label: string; route?: boolean }[] = [
    { href: '/#features', label: t.features },
    { href: '/galeria', label: t.gallery, route: true },
    { href: '/#attractions', label: t.attractions },
    { href: '/#map', label: t.map },
    { href: '/#contact', label: t.contact },
  ];

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b bg-[#0c0c0e]/90 backdrop-blur-md border-zinc-800/80 ${
        isScrolled ? 'py-3 bg-[#0c0c0e]/95 shadow-xl border-zinc-800' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          to="/"
          className="hover:opacity-90 transition-opacity duration-300 py-1"
          aria-label="Punto Cero Patagonia"
        >
          <Logo />
        </Link>

        <div className="flex items-center gap-5">
          {/* Language Selector — visible on tablet & desktop, outside the menu */}
          <div className="hidden md:flex items-center gap-1.5 text-zinc-400 font-sans text-xs tracking-widest">
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

          {/* Hamburger Toggle — shown at every breakpoint */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-zinc-200 p-2 focus:outline-none cursor-pointer"
            aria-label="Abrir menú"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Right-Side Slide-In Drawer — shown at every breakpoint */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 z-50 h-dvh w-[85%] max-w-sm bg-[#0c0c0e] border-l border-zinc-800 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">
                {/* Language Selector — mobile only; tablet & desktop show it in the top bar instead */}
                <div className="flex md:hidden items-center gap-1.5 text-zinc-400 font-sans text-xs tracking-widest">
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
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-200 p-2 -mr-2 focus:outline-none cursor-pointer md:ml-auto"
                  aria-label="Cerrar menú"
                >
                  <X size={26} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const content = (
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.15, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="block font-serif text-3xl sm:text-4xl font-light text-zinc-100 hover:text-white transition-colors py-2.5"
                    >
                      {link.label}
                    </motion.span>
                  );
                  return link.route ? (
                    <Link key={link.href} to={link.href} onClick={() => setMobileMenuOpen(false)}>
                      {content}
                    </Link>
                  ) : (
                    <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                      {content}
                    </a>
                  );
                })}
              </div>

              <div className="px-6 py-6 border-t border-zinc-800">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-zinc-100 text-zinc-950 py-4 font-sans text-sm uppercase tracking-widest font-medium text-center cursor-pointer hover:bg-white transition-colors"
                >
                  {t.bookNow}
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
