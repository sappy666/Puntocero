import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Expand } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';
import { ImageLightbox } from '../components/ImageLightbox';

interface GalleryProps {
  lang: Language;
}

// Curated asymmetric spans for a magazine-style mosaic; packed tightly via grid-flow-dense.
const SPANS = [
  'col-span-2 row-span-2', // 0 — hero
  'col-span-2 row-span-1', // 1 — wide
  'col-span-1 row-span-2', // 2 — tall
  'col-span-1 row-span-1', // 3
  'col-span-2 row-span-1', // 4 — wide
  'col-span-1 row-span-2', // 5 — tall
  'col-span-1 row-span-1', // 6
  'col-span-2 row-span-2', // 7 — hero
  'col-span-1 row-span-2', // 8 — tall
  'col-span-2 row-span-1', // 9 — wide
];

export const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  const t = translations[lang].galleryPage;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${t.title} — Galería | Punto Cero Patagonia`;
    return () => {
      document.title = prevTitle;
    };
  }, [t.title]);

  return (
    <main className="pt-32 md:pt-44 pb-28 sm:pb-40 px-6 sm:px-12 md:px-20 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-zinc-800 pb-8 mb-12 md:mb-16"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200 text-xs font-sans uppercase tracking-widest mb-6 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            <span>{t.backLabel}</span>
          </Link>
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-zinc-400 block mb-3 font-medium">
            {t.tag}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight">
            {t.title}
          </h1>
          <p className="font-sans text-base text-zinc-400 mt-4 font-light tracking-wide max-w-xl">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[240px] lg:auto-rows-[280px] grid-flow-row-dense">
          {t.photos.map((photo, idx) => (
            <motion.button
              key={photo.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={photo.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (idx % 6) * 0.05 }}
              className={`relative group overflow-hidden border border-zinc-800 hover:border-zinc-500 transition-colors duration-300 cursor-pointer text-left ${SPANS[idx % SPANS.length]}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                referrerPolicy="no-referrer"
                loading={idx < 2 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#0c0c0e]/90 border border-zinc-700 backdrop-blur-md p-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-200">
                <Expand size={14} />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox */}
      <ImageLightbox
        images={t.photos}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </main>
  );
};
