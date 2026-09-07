import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';
import { renderWithHighlights } from './TextHighlight';

interface ManifestoProps {
  lang: Language;
}

export const Manifesto: React.FC<ManifestoProps> = ({ lang }) => {
  const t = translations[lang].manifesto;

  return (
    <section id="features" className="py-28 sm:py-40 md:py-48 px-6 sm:px-12 md:px-20 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center border-t border-zinc-800 pt-24">
        {/* Text Story Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-8"
        >
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-zinc-400 block mb-3 font-medium">
              {t.title}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-snug text-white tracking-tight">
              {t.lead}
            </h2>
          </div>
          <div className="space-y-6 text-zinc-300 text-base sm:text-lg font-light leading-relaxed sm:leading-loose">
            <p className="first-letter:font-serif first-letter:text-6xl sm:first-letter:text-7xl first-letter:text-white first-letter:font-light first-letter:float-left first-letter:leading-[0.8] first-letter:pr-3 first-letter:pt-1.5">
              {renderWithHighlights(t.p1, t.highlights)}
            </p>
            <p>{renderWithHighlights(t.p2, t.highlights)}</p>
            <p>{renderWithHighlights(t.p3, t.highlights)}</p>
          </div>
        </motion.div>

        {/* High-res Interior Photo Column - Extra Large */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-7 overflow-hidden border border-zinc-800 transition-all duration-300 group cursor-pointer shadow-2xl"
        >
          <img
            src="https://puntoceropatagonia.com/wp-content/uploads/2026/08/casa-bahia-murta-punto-cero-patagonia-01-scaled.webp"
            alt="Vista exterior de Casa Bahía Murta al atardecer, sobre el Lago General Carrera"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            className="w-full h-auto aspect-[16/11] object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
          />
        </motion.div>
      </div>
    </section>
  );
};
