import React, { useState } from 'react';
import { Maximize2, Filter, Images } from 'lucide-react';
import { Language, translations } from '../translations';

interface CompactGalleryProps {
  lang: Language;
  onSelectImage: (image: { src: string; title: string; desc: string }) => void;
}

export const CompactGallery: React.FC<CompactGalleryProps> = ({ lang, onSelectImage }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const t = translations[lang].spaces;

  if (!t.galleryPhotos || t.galleryPhotos.length === 0) return null;

  const categoriesKeys = ['all', 'exterior', 'dormitorios', 'banos', 'interiores', 'entorno'];

  const getCategoryLabel = (key: string) => {
    if (key === 'all') return t.filterAll || 'TODAS';
    return t.categories?.[key as keyof typeof t.categories] || key.toUpperCase();
  };

  const filteredPhotos = activeCategory === 'all'
    ? t.galleryPhotos
    : t.galleryPhotos.filter((p) => p.category === activeCategory);

  return (
    <div className="mt-24 pt-16 border-t border-[#4c463d]/30">
      {/* Gallery Header & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-[#d1bfa5] font-sans text-xs uppercase tracking-widest mb-2">
            <Images size={14} />
            <span>{t.fullGallerySubtitle || 'Explora todos los rincones'}</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#e8e1dd]">
            {t.fullGalleryTitle || 'Galería Completa de Fotografía'}
          </h3>
        </div>

        {/* Counter Badge */}
        <div className="font-sans text-xs text-[#cfc5ba] bg-[#221f1c] px-3.5 py-2 border border-[#4c463d]/40 rounded-sm w-fit">
          {filteredPhotos.length} {filteredPhotos.length === 1 ? 'Fotografía' : 'Fotografías'}
        </div>
      </div>

      {/* Filter Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        <div className="flex items-center gap-1.5 text-[#cfc5ba] mr-2 font-sans text-xs uppercase tracking-wider shrink-0">
          <Filter size={13} className="text-[#d1bfa5]" />
          <span className="hidden sm:inline">Filtrar:</span>
        </div>
        {categoriesKeys.map((catKey) => {
          const isActive = activeCategory === catKey;
          const count = catKey === 'all'
            ? t.galleryPhotos.length
            : t.galleryPhotos.filter((p) => p.category === catKey).length;

          if (catKey !== 'all' && count === 0) return null;

          return (
            <button
              key={catKey}
              onClick={() => setActiveCategory(catKey)}
              className={`px-4 py-2 font-sans text-xs uppercase tracking-widest transition-all duration-300 rounded-sm shrink-0 cursor-pointer border ${
                isActive
                  ? 'bg-[#d1bfa5] text-[#1c1917] border-[#d1bfa5] font-semibold shadow-md'
                  : 'bg-[#1c1917]/80 text-[#cfc5ba] border-[#4c463d]/40 hover:border-[#d1bfa5]/60 hover:text-[#e8e1dd] hover:bg-[#282421]'
              }`}
            >
              {getCategoryLabel(catKey)} ({count})
            </button>
          );
        })}
      </div>

      {/* Smaller Photo Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() =>
              onSelectImage({
                src: photo.image,
                title: photo.title,
                desc: photo.desc,
              })
            }
            className="group relative aspect-[4/3] bg-[#221f1c] border border-[#4c463d]/30 overflow-hidden rounded-sm cursor-pointer hover:border-[#d1bfa5] hover:shadow-xl hover:shadow-[#d1bfa5]/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            {/* Image */}
            <img
              src={photo.image}
              alt={photo.title}
              loading="lazy"
              className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out"
            />

            {/* Dark gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#151310] via-[#151310]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3" />

            {/* Title & Tag on Hover */}
            <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
              <span className="font-sans text-[9px] uppercase tracking-wider text-[#d1bfa5] block mb-0.5">
                {t.categories?.[photo.category as keyof typeof t.categories] || photo.category}
              </span>
              <p className="font-serif text-xs text-white line-clamp-1 leading-snug">
                {photo.title}
              </p>
            </div>

            {/* Hover Expand Icon Badge */}
            <div className="absolute top-2 right-2 bg-[#151310]/80 border border-[#4c463d]/60 backdrop-blur-xs p-1.5 text-[#d1bfa5] opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 rounded-xs">
              <Maximize2 size={12} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
