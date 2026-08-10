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

  const categoriesKeys = ['all', ...Object.keys(t.categories || {})];

  const getCategoryLabel = (key: string) => {
    if (key === 'all') return t.filterAll || 'TODAS';
    return t.categories?.[key as keyof typeof t.categories] || key.toUpperCase();
  };

  const filteredPhotos = activeCategory === 'all'
    ? t.galleryPhotos
    : t.galleryPhotos.filter((p) => p.category === activeCategory);

  return (
    <div className="mt-20 pt-16 border-t border-zinc-800">
      {/* Gallery Header & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-zinc-400 font-sans text-xs uppercase tracking-widest mb-2 font-medium">
            <Images size={14} />
            <span>{t.fullGallerySubtitle || 'Explora todos los rincones'}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight">
            {t.fullGalleryTitle || 'Galería Completa de Fotografía'}
          </h3>
        </div>

        {/* Counter Badge */}
        <div className="font-sans text-xs text-zinc-400 bg-zinc-900 px-3 py-1.5 border border-zinc-800 w-fit">
          {filteredPhotos.length} {filteredPhotos.length === 1 ? 'Fotografía' : 'Fotografías'}
        </div>
      </div>

      {/* Filter Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        <div className="flex items-center gap-1.5 text-zinc-400 mr-2 font-sans text-xs uppercase tracking-wider shrink-0">
          <Filter size={13} className="text-zinc-400" />
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
              className={`px-3.5 py-1.5 font-sans text-xs uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer border ${
                isActive
                  ? 'bg-zinc-100 text-zinc-950 border-zinc-100 font-medium'
                  : 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white'
              }`}
            >
              {getCategoryLabel(catKey)} ({count})
            </button>
          );
        })}
      </div>

      {/* Photo Cards Grid - Larger Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
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
            className="group relative aspect-[16/11] bg-zinc-900 border border-zinc-800 overflow-hidden cursor-pointer hover:border-zinc-500 transition-all duration-300 shadow-xl"
          >
            {/* Image */}
            <img
              src={photo.image}
              alt={photo.title}
              loading="lazy"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300 ease-out"
            />

            {/* Dark gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3" />

            {/* Title & Tag on Hover */}
            <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
              <span className="font-sans text-[9px] uppercase tracking-wider text-zinc-400 block mb-0.5">
                {t.categories?.[photo.category as keyof typeof t.categories] || photo.category}
              </span>
              <p className="font-sans text-xs text-white line-clamp-1 leading-snug font-light">
                {photo.title}
              </p>
            </div>

            {/* Hover Expand Icon Badge */}
            <div className="absolute top-2 right-2 bg-black/70 border border-zinc-700 p-1.5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Maximize2 size={12} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
