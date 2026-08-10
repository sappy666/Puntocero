import React from 'react';
import { Users, Bed, ShowerHead, UtensilsCrossed, Flame, Wifi } from 'lucide-react';
import { Language, translations } from '../translations';

interface AmenitiesProps {
  lang: Language;
}

export const Amenities: React.FC<AmenitiesProps> = ({ lang }) => {
  const t = translations[lang].amenities;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'group':
        return <Users className="w-4 h-4 text-zinc-300" />;
      case 'bed':
        return <Bed className="w-4 h-4 text-zinc-300" />;
      case 'shower':
        return <ShowerHead className="w-4 h-4 text-zinc-300" />;
      case 'kitchen':
        return <UtensilsCrossed className="w-4 h-4 text-zinc-300" />;
      case 'fireplace':
        return <Flame className="w-4 h-4 text-zinc-300" />;
      case 'wifi':
        return <Wifi className="w-4 h-4 text-zinc-300" />;
      default:
        return <Users className="w-4 h-4 text-zinc-300" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 px-6 sm:px-12 md:px-20 bg-[#0c0c0e] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
        {/* Header Title */}
        <div className="lg:w-1/3 space-y-2">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium block">
            {t.title}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">
            {t.subtitle}
          </h3>
        </div>

        {/* Spacious Amenities Grid - 3 cols max on desktop so each item gets ample width without truncation */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {t.items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 px-4 py-3 sm:px-5 sm:py-3.5 bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors duration-200"
            >
              <div className="p-2 bg-zinc-800/60 border border-zinc-700/60 shrink-0 text-zinc-300">
                {getIcon(item.icon)}
              </div>
              <span className="font-sans text-xs font-medium uppercase tracking-wider text-zinc-200 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
