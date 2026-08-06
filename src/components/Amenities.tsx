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
        return <Users className="w-7 h-7 text-[#d1bfa5]" />;
      case 'bed':
        return <Bed className="w-7 h-7 text-[#d1bfa5]" />;
      case 'shower':
        return <ShowerHead className="w-7 h-7 text-[#d1bfa5]" />;
      case 'kitchen':
        return <UtensilsCrossed className="w-7 h-7 text-[#d1bfa5]" />;
      case 'fireplace':
        return <Flame className="w-7 h-7 text-[#d1bfa5]" />;
      case 'wifi':
        return <Wifi className="w-7 h-7 text-[#d1bfa5]" />;
      default:
        return <Users className="w-7 h-7 text-[#d1bfa5]" />;
    }
  };

  return (
    <section className="py-24 px-6 sm:px-12 md:px-16 bg-[#1e1b19] border-t border-[#4c463d]/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column: Title & Subtitle */}
        <div className="md:col-span-4 space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e8e1dd]">
            {t.title}
          </h2>
          <p className="text-[#cfc5ba] text-base font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Right Column: 6 Amenity Items */}
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {t.items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 p-5 bg-[#221f1c]/60 border border-[#4c463d]/30 rounded-sm group hover:border-[#d1bfa5]/60 hover:bg-[#282421] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d1bfa5]/5 transition-all duration-300 cursor-pointer"
            >
              <div className="p-3 bg-[#181614] w-fit border border-[#4c463d]/40 rounded-sm group-hover:border-[#d1bfa5] group-hover:bg-[#2c2723] transition-all duration-300">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {getIcon(item.icon)}
                </div>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#e8e1dd] group-hover:text-[#d1bfa5] border-b border-[#4c463d]/30 pb-2 group-hover:border-[#d1bfa5] transition-colors duration-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
