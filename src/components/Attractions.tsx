import React, { useState } from 'react';
import { Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, translations } from '../translations';

interface AttractionsProps {
  lang: Language;
}

export const Attractions: React.FC<AttractionsProps> = ({ lang }) => {
  const t = translations[lang].attractions;
  const items = t.items;
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const current = items[index];

  const goTo = (nextIndex: number) => {
    const dir = nextIndex > index ? 1 : -1;
    setSlide([(nextIndex + items.length) % items.length, dir]);
  };

  const goPrev = () => goTo(index - 1);
  const goNext = () => goTo(index + 1);

  return (
    <section id="attractions" className="py-28 sm:py-40 md:py-48 px-6 sm:px-12 md:px-20 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto border-t border-zinc-800 pt-24">
        {/* Header: tag + carousel controls */}
        <div className="flex items-center justify-between mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-zinc-400 block font-medium">
            {t.tag}
          </span>

          <div className="flex items-center gap-4">
            <span className="font-sans text-xs text-zinc-500 tracking-widest tabular-nums">
              {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                aria-label={t.prevLabel}
                className="p-2.5 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors duration-200 cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={goNext}
                aria-label={t.nextLabel}
                className="p-2.5 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors duration-200 cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Slide */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Image */}
              <div className="lg:col-span-6 order-2 lg:order-1 overflow-hidden border border-zinc-800 hover:border-zinc-500 transition-all duration-300 group shadow-2xl">
                <img
                  src={current.image}
                  alt={current.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[16/11] object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Text */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight tracking-tight">
                  {current.name}
                </h2>

                <div className="inline-flex items-center gap-3 text-zinc-300 border-b border-zinc-800 pb-3 font-sans text-xs tracking-widest uppercase">
                  <Compass size={16} className="text-zinc-400" />
                  <span>{current.distance}</span>
                </div>

                <p className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                  {current.desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 mt-10">
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => goTo(i)}
              aria-label={item.name}
              aria-current={i === index}
              className={`h-1.5 transition-all duration-300 cursor-pointer ${
                i === index ? 'w-8 bg-white' : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
