import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';

interface OriginPauseProps {
  lang: Language;
}

export const OriginPause: React.FC<OriginPauseProps> = ({ lang }) => {
  const t = translations[lang].originPause;

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-12 bg-[#0c0c0e] relative border-t border-b border-zinc-800 text-center select-none">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Minimalist Top Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-20 h-[1px] bg-zinc-700 mb-8"
        />

        {/* Animated Main Phrase */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-3xl sm:text-4xl md:text-5xl text-zinc-100 tracking-[0.25em] uppercase font-extralight mb-6"
        >
          {t.title}
        </motion.h2>

        {/* Animated Subtitle / Rest Phrase */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-base sm:text-lg text-zinc-400 max-w-2xl font-light leading-relaxed tracking-wide"
        >
          {t.subtitle}
        </motion.p>

        {/* Minimalist Bottom Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-20 h-[1px] bg-zinc-700 mt-8"
        />
      </div>
    </section>
  );
};
