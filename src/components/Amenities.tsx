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
    <section className="py-10 sm:py-14 px-6 sm:px-12 md:px-16 bg-[#0c0c0e] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Compact Left Header */}
        <div className="md:w-1/3 space-y-1">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium block">
            {t.title}
          </span>
          <h3 className="font-sans text-xl sm:text-2xl font-light text-white tracking-tight">
            {t.subtitle}
          </h3>
        </div>

        {/* Compact Right Grid (6 items in a clean row/grid) */}
        <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {t.items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 p-2 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors duration-200"
            >
              <div className="p-1.5 bg-zinc-800/60 border border-zinc-700/60 shrink-0">
                {getIcon(item.icon)}
              </div>
              <span className="font-sans text-[11px] uppercase tracking-wider text-zinc-300 truncate">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
