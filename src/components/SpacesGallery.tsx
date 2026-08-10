import React from 'react';
import { Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';

interface SpacesGalleryProps {
  lang: Language;
  onSelectImage: (image: { src: string; title: string; desc: string }) => void;
}

export const SpacesGallery: React.FC<SpacesGalleryProps> = ({ lang, onSelectImage }) => {
  const t = translations[lang].spaces;

  return (
    <section id="gallery" className="py-28 sm:py-40 md:py-48 px-6 sm:px-12 md:px-20 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto">
        {/* Header Bar */}
        <motion.header
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 border-b border-zinc-800 pb-8"
        >
          <div className="flex justify-between items-end mb-3">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              {t.title}
            </h2>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-400 hidden md:block">
              {t.tag}
            </span>
          </div>
          {t.subtitle && (
            <p className="text-zinc-400 text-base font-light max-w-2xl leading-relaxed mt-2">
              {t.subtitle}
            </p>
          )}
        </motion.header>

        {/* Spaces List */}
        <div className="space-y-28 md:space-y-36">
          {t.items.map((space, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center"
              >
                {/* Image Column - Expansive */}
                <div
                  className={`md:col-span-8 overflow-hidden relative group cursor-pointer border border-zinc-800 hover:border-zinc-500 transition-all duration-300 shadow-2xl ${
                    isEven ? 'md:order-1' : 'md:order-2'
                  }`}
                  onClick={() =>
                    onSelectImage({ src: space.image, title: space.name, desc: space.desc })
                  }
                >
                  <div className="w-full aspect-[16/10] overflow-hidden bg-zinc-900 relative">
                    <img
                      src={space.image}
                      alt={space.name}
                      className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                    
                    {/* Hover Lightbox Indicator */}
                    <div className="absolute top-4 right-4 bg-[#0c0c0e]/90 border border-zinc-700 backdrop-blur-md px-3 py-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-2">
                      <Maximize2 size={14} />
                      <span className="font-sans text-[10px] uppercase tracking-widest hidden sm:inline">Ampliar</span>
                    </div>
                  </div>
                </div>

                {/* Text Column */}
                <div className={`md:col-span-4 space-y-4 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-white tracking-tight">
                    {space.name}
                  </h3>
                  <p className="text-zinc-300 text-base font-light leading-relaxed">
                    {space.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
