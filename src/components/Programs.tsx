import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';

interface ProgramsProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Programs: React.FC<ProgramsProps> = ({ lang, onOpenBooking }) => {
  const t = translations[lang].programs;
  const [featured, ...rest] = t.items;

  return (
    <section id="programs" className="py-28 sm:py-40 md:py-48 px-6 sm:px-12 md:px-20 bg-[#0c0c0e] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center flex flex-col items-center"
        >
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-zinc-400 block mb-3 font-medium">
            {t.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
            {t.title}
          </h2>
          <div className="w-16 h-[1px] bg-zinc-700 mt-6" />
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Featured Program */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 relative group overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-300 min-h-[480px] sm:min-h-[560px] lg:min-h-[640px]"
          >
            <img
              src={featured.image}
              alt={featured.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/40 to-transparent" />

            <span className="absolute top-6 left-6 px-3 py-1.5 bg-[#0c0c0e]/90 border border-zinc-600 text-white text-[10px] font-sans uppercase tracking-widest">
              {featured.badge}
            </span>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 space-y-4">
              <div className="flex items-center gap-2 text-zinc-300 font-sans text-xs uppercase tracking-widest">
                <Clock size={14} />
                <span>{featured.duration}</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
                {featured.name}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed max-w-md">
                {featured.desc}
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2.5 bg-zinc-100 text-zinc-950 px-5 py-3 font-sans text-xs uppercase tracking-widest font-medium hover:bg-white transition-all duration-200 cursor-pointer"
                >
                  <span>{featured.primaryCta}</span>
                  <ArrowRight size={14} />
                </button>
                <a
                  href={`#${featured.id}`}
                  className="font-sans text-xs uppercase tracking-widest text-zinc-200 border-b border-zinc-500 pb-1 hover:text-white hover:border-white transition-colors duration-200"
                >
                  {featured.secondaryCta}
                </a>
              </div>
            </div>
          </motion.article>

          {/* Secondary Programs */}
          <div className="md:col-span-5 grid grid-rows-2 gap-8">
            {rest.map((program, idx) => (
              <motion.article
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 * (idx + 1) }}
                className="relative group overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-300 min-h-[280px] sm:min-h-[300px]"
              >
                <img
                  src={program.image}
                  alt={program.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/50 to-transparent" />

                <span
                  className={`absolute top-5 px-2.5 py-1 bg-[#0c0c0e]/90 border border-zinc-600 text-white text-[10px] font-sans uppercase tracking-widest ${
                    idx === 0 ? 'left-5' : 'right-5'
                  }`}
                >
                  {program.badge}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-white tracking-tight">
                    {program.name}
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                    {program.desc}
                  </p>
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 pt-1 font-sans text-[11px] uppercase tracking-widest text-white hover:text-zinc-300 transition-colors duration-200 cursor-pointer"
                  >
                    <span>{program.cta}</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
