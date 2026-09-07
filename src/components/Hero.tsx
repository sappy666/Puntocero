import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';

interface HeroProps {
  lang: Language;
  onCheckAvailability: (checkIn: string, checkOut: string, guests: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onCheckAvailability }) => {
  const t = translations[lang].hero;
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability(checkIn, checkOut, guests);
  };

  return (
    <header className="relative w-full min-h-screen pt-32 md:pt-44 pb-28 sm:pb-36 px-6 sm:px-12 md:px-20 flex items-end overflow-hidden">
      {/* Background Ambient Video Loop with Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          fetchPriority="high"
          aria-hidden="true"
          referrerPolicy="no-referrer"
          poster="https://puntoceropatagonia.com/wp-content/uploads/2026/08/casa-bahia-murta-punto-cero-patagonia-01-scaled.webp"
          className="w-full h-full object-cover scale-100"
        >
          <source src="https://www.puntoceropatagonia.com/wp-content/uploads/2025/08/Banner-365-video-horizontal-prueba.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/60 to-black/50" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-end">
        {/* Left Column: Title & Quote */}
        <div className="lg:col-span-8 text-zinc-100 space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9.5rem] font-light tracking-tight leading-[0.9] text-white"
          >
            {t.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="max-w-2xl space-y-4"
          >
            <p className="text-xl sm:text-2xl text-zinc-200 font-light leading-relaxed">
              {t.subtitle}
            </p>
            <p className="font-serif italic text-2xl sm:text-3xl text-zinc-300 font-light pt-2 tracking-wide">
              {t.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="pt-6"
          >
            <a
              href="#features"
              className="group inline-flex items-center gap-4 border-b border-zinc-500 text-zinc-300 pb-1.5 font-sans text-xs uppercase tracking-[0.2em] hover:text-white hover:border-white transition-all duration-200"
            >
              <span>{t.discoverMore}</span>
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Reservation Form Overlay Card */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="lg:col-span-4 bg-[#121215]/90 backdrop-blur-md p-8 sm:p-10 border border-zinc-800 shadow-2xl rounded-none"
        >
          <h2 className="font-sans text-2xl font-light text-white mb-6 border-b border-zinc-800 pb-3 uppercase tracking-wider">
            {t.reservationTitle}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Check-in */}
            <div className="border-b border-zinc-700 pb-2 focus-within:border-white transition-colors duration-200">
              <label className="block font-sans text-[11px] uppercase tracking-wider mb-1 text-zinc-400">
                {t.checkIn}
              </label>
              <input
                type="date"
                required
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-white font-sans text-sm focus:outline-none cursor-pointer"
              />
            </div>

            {/* Check-out */}
            <div className="border-b border-zinc-700 pb-2 focus-within:border-white transition-colors duration-200">
              <label className="block font-sans text-[11px] uppercase tracking-wider mb-1 text-zinc-400">
                {t.checkOut}
              </label>
              <input
                type="date"
                required
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-white font-sans text-sm focus:outline-none cursor-pointer"
              />
            </div>

            {/* Guests Selector */}
            <div className="border-b border-zinc-700 pb-2 focus-within:border-white transition-colors duration-200">
              <label className="block font-sans text-[11px] uppercase tracking-wider mb-1 text-zinc-400">
                {t.guests}
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-white font-sans text-sm focus:outline-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num} className="bg-[#121215] text-white">
                    {num} {num === 1 ? 'Huésped' : 'Huéspedes'}
                  </option>
                ))}
              </select>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full bg-zinc-100 text-zinc-950 py-3.5 font-sans text-xs uppercase tracking-widest font-medium hover:bg-white transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              {t.checkAvailability}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </header>
  );
};
