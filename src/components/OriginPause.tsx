import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';

interface OriginPauseProps {
  lang: Language;
}

export const OriginPause: React.FC<OriginPauseProps> = ({ lang }) => {
  const t = translations[lang].originPause;

  return (
    <section className="py-20 sm:py-28 px-6 bg-[#12100e] relative overflow-hidden border-t border-b border-[#4c463d]/30 text-center select-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[250px] bg-[#d1bfa5]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Animated Compass Icon / Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6"
        >
          <div className="relative inline-flex items-center justify-center p-3 rounded-full border border-[#d1bfa5]/30 bg-[#181512]/80 backdrop-blur-sm shadow-xl">
            <svg
              viewBox="0 0 100 100"
              className="h-8 w-8 text-[#d1bfa5] animate-pulse"
              fill="currentColor"
            >
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="4.5" />
              <circle cx="50" cy="50" r="5" fill="currentColor" />
              <polygon points="50,5 42,25 58,25" fill="currentColor" />
              <polygon points="50,95 42,75 58,75" fill="currentColor" />
              <polygon points="5,50 25,42 25,58" fill="currentColor" />
              <polygon points="95,50 75,42 75,58" fill="currentColor" />
            </svg>
          </div>
        </motion.div>

        {/* Top Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d1bfa5]/60 to-transparent mb-6"
        />

        {/* Animated Main Phrase */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#d1bfa5] tracking-[0.2em] uppercase font-light mb-4"
        >
          {t.title}
        </motion.h2>

        {/* Animated Subtitle / Rest Phrase */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif italic text-base sm:text-lg md:text-xl text-[#cfc5ba] max-w-2xl font-light leading-relaxed"
        >
          "{t.subtitle}"
        </motion.p>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d1bfa5]/60 to-transparent mt-8"
        />
      </div>
    </section>
  );
};
