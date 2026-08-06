import React from 'react';
import { Maximize2 } from 'lucide-react';
import { Language, translations } from '../translations';
import { CompactGallery } from './CompactGallery';

interface SpacesGalleryProps {
  lang: Language;
  onSelectImage: (image: { src: string; title: string; desc: string }) => void;
}

export const SpacesGallery: React.FC<SpacesGalleryProps> = ({ lang, onSelectImage }) => {
  const t = translations[lang].spaces;

  return (
    <section id="gallery" className="py-24 sm:py-32 px-6 sm:px-12 md:px-16 bg-[#151310]">
      <div className="max-w-7xl mx-auto">
        {/* Header Bar */}
        <header className="mb-20 border-b border-[#4c463d]/30 pb-8 flex justify-between items-end">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#e8e1dd]">
            {t.title}
          </h2>
          <span className="font-mono text-xs uppercase tracking-widest text-[#cfc5ba] hidden md:block">
            {t.tag}
          </span>
        </header>

        {/* Spaces List */}
        <div className="space-y-28">
          {t.items.map((space, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={space.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                {/* Image Column */}
                <div
                  className={`md:col-span-8 rounded-sm shadow-xl relative group cursor-pointer border border-transparent hover:border-[#d1bfa5]/60 hover:shadow-2xl hover:shadow-[#d1bfa5]/10 transition-all duration-700 ${
                    isEven ? 'md:order-1' : 'md:order-2'
                  }`}
                  onClick={() =>
                    onSelectImage({ src: space.image, title: space.name, desc: space.desc })
                  }
                >
                  <div className="w-full aspect-[16/9] overflow-hidden bg-[#221f1c] relative">
                    <img
                      src={space.image}
                      alt={space.name}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                    
                    {/* Hover Lightbox Indicator */}
                    <div className="absolute top-4 right-4 bg-[#151310]/90 border border-[#4c463d] backdrop-blur-md p-2.5 text-[#d1bfa5] opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 rounded-sm flex items-center gap-2">
                      <Maximize2 size={16} />
                      <span className="font-mono text-[10px] uppercase tracking-widest hidden sm:inline">Ampliar</span>
                    </div>
                  </div>
                </div>

                {/* Text Column */}
                <div className={`md:col-span-4 space-y-4 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#d1bfa5] hover:text-white transition-colors duration-300">
                    {space.name}
                  </h3>
                  <p className="text-[#cfc5ba] text-base font-light leading-relaxed">
                    {space.desc}
                  </p>
                  <button
                    onClick={() =>
                      onSelectImage({ src: space.image, title: space.name, desc: space.desc })
                    }
                    className="group/btn inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e8e1dd] border-b border-[#4c463d] pb-1 hover:border-[#d1bfa5] hover:text-[#d1bfa5] transition-all duration-300 pt-2 cursor-pointer"
                  >
                    <span>Ver Imagen Completa</span>
                    <Maximize2 size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Photo Gallery Grid for all photos */}
        <CompactGallery lang={lang} onSelectImage={onSelectImage} />
      </div>
    </section>
  );
};
