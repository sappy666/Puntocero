import React from 'react';
import { Compass } from 'lucide-react';
import { Language, translations } from '../translations';

interface AttractionsProps {
  lang: Language;
}

export const Attractions: React.FC<AttractionsProps> = ({ lang }) => {
  const t = translations[lang].attractions;

  return (
    <section id="attractions" className="py-28 sm:py-40 md:py-48 px-6 sm:px-12 md:px-20 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center border-t border-zinc-800 pt-24">
        {/* Left Column: Image */}
        <div className="lg:col-span-6 order-2 lg:order-1 overflow-hidden border border-zinc-800 hover:border-zinc-500 transition-all duration-300 group shadow-2xl">
          <img
            src={t.image}
            alt={t.title}
            className="w-full aspect-[16/11] object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Right Column: Text */}
        <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-zinc-400 block font-medium">
            {t.tag}
          </span>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight tracking-tight">
            {t.title}
          </h2>

          <div className="group inline-flex items-center gap-3 text-zinc-300 border-b border-zinc-800 pb-3 font-sans text-xs tracking-widest uppercase">
            <Compass size={16} className="text-zinc-400" />
            <span>{t.distance}</span>
          </div>

          <p className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed max-w-xl">
            {t.desc}
          </p>
        </div>
      </div>
    </section>
  );
};
