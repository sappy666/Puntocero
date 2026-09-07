import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';
import { ExternalLink } from 'lucide-react';

const livingPhoto = "https://puntoceropatagonia.com/wp-content/uploads/2026/08/casa-bahia-murta-punto-cero-patagonia-13-scaled.webp";
const diningPhoto = "https://puntoceropatagonia.com/wp-content/uploads/2026/08/casa-bahia-murta-punto-cero-patagonia-28-scaled.webp";
const exteriorTwilightPhoto = "https://puntoceropatagonia.com/wp-content/uploads/2026/08/casa-bahia-murta-punto-cero-patagonia-17-scaled.webp";

interface ArchitecturalRetreatProps {
  lang: Language;
}

export const ArchitecturalRetreat: React.FC<ArchitecturalRetreatProps> = ({ lang }) => {
  const t = translations[lang].architecturalRetreat;

  return (
    <section className="py-28 sm:py-40 md:py-48 px-6 sm:px-12 md:px-20 bg-[#0c0c0e] border-t border-zinc-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-8 gap-6"
        >
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-zinc-400 block mb-3 font-medium">
              {t.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              {t.title}
            </h2>
            <p className="font-sans text-xs uppercase text-zinc-500 mt-3 font-medium tracking-[0.2em]">
              {t.subtitle}
            </p>
          </div>

          {/* External Architect Link */}
          <a
            href={t.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-white transition-all duration-200 text-xs font-sans uppercase tracking-widest self-start md:self-end group cursor-pointer"
          >
            <span>{t.portfolioLabel}</span>
            <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </motion.div>

        {/* Photo Gallery Grid - Larger Photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
        >
          {/* Main Large Photo */}
          <div className="md:col-span-6 relative group overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-colors duration-300 min-h-[420px] sm:min-h-[500px] lg:min-h-[560px]">
            <img
              src={livingPhoto}
              alt="Living interior de Casa Bahía Murta con vista panorámica al Lago General Carrera"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Dual Staggered Photos */}
          <div className="md:col-span-6 grid grid-rows-2 gap-8">
            <div className="relative group overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-colors duration-300 min-h-[200px] sm:min-h-[240px]">
              <img
                src={diningPhoto}
                alt="Comedor y cocina de Casa Bahía Murta con estructura de madera de Lenga"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="relative group overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-colors duration-300 min-h-[200px] sm:min-h-[240px]">
              <img
                src={exteriorTwilightPhoto}
                alt="Vista aérea de Casa Bahía Murta al atardecer sobre el valle"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Minimal Narrative & Spec Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-2 items-start"
        >
          <div className="lg:col-span-7 space-y-4 text-zinc-300 text-sm font-light leading-relaxed">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>

          {/* Technical Spec Sheet */}
          <div className="lg:col-span-5 bg-zinc-900/40 border border-zinc-800 p-6 space-y-4">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-300 font-medium border-b border-zinc-800 pb-3">
              Ficha Técnica
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs">
              {t.specs.map((spec, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block font-sans uppercase text-zinc-400 text-[10px] tracking-widest">
                    {spec.label}
                  </span>
                  <span className="block font-sans text-zinc-200 font-normal">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-zinc-800">
              <a
                href={t.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans text-zinc-300 hover:text-white transition-colors duration-200"
              >
                <span>Ver reportaje fotográfico completo en Roland Halbe</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

