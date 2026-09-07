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
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
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

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-zinc-400 font-sans text-xs uppercase tracking-widest font-normal">
          {navLinks.map((link) => {
            const LinkTag: any = link.route ? Link : 'a';
            const linkProp = link.route ? { to: link.href } : { href: link.href };
            return (
              <LinkTag
                key={link.href}
                {...linkProp}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className="hover:text-white transition-colors duration-200 relative py-1"
              >
                <span>{link.label}</span>
                {hoveredLink === link.href && (
                  <motion.span
                    layoutId="navUnderline"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-white origin-left"
                  />
                )}
              </LinkTag>
            );
          })}
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

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenBooking}
            className="bg-zinc-100 text-zinc-950 px-5 py-2.5 font-sans text-xs uppercase tracking-widest font-medium hover:bg-white transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
          >
            {t.bookNow}
          </motion.button>
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
            className="text-zinc-200 p-2 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[#121215] border-b border-zinc-800 px-6 py-6 font-sans text-xs uppercase tracking-widest"
          >
            <div className="space-y-3">
              {navLinks.map((link, i) =>
                link.route ? (
                  <MotionLink
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.25 }}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-zinc-200 hover:text-white border-b border-zinc-800/50"
                  >
                    {link.label}
                  </MotionLink>
                ) : (
                  <motion.a
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.25 }}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-zinc-200 hover:text-white border-b border-zinc-800/50"
                  >
                    {link.label}
                  </motion.a>
                )
              )}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.25 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full mt-4 bg-zinc-100 text-zinc-950 py-3 font-sans text-xs uppercase tracking-widest font-medium text-center cursor-pointer"
              >
                {t.bookNow}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
