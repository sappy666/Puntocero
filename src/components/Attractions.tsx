import React from 'react';
import { Compass } from 'lucide-react';
import { Language, translations } from '../translations';

interface AttractionsProps {
  lang: Language;
}

export const Attractions: React.FC<AttractionsProps> = ({ lang }) => {
  const t = translations[lang].attractions;

  return (
    <section id="attractions" className="py-24 sm:py-32 px-6 sm:px-12 md:px-16 bg-[#100e0b]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center border-t border-[#4c463d]/30 pt-16">
        {/* Left Column: Image */}
        <div className="md:col-span-5 order-2 md:order-1 rounded-sm shadow-2xl overflow-hidden border border-[#4c463d]/30 hover:border-[#d1bfa5]/60 hover:shadow-2xl hover:shadow-[#d1bfa5]/10 transition-all duration-700 group">
          <img
            src={t.image}
            alt={t.title}
            className="w-full aspect-square object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
          />
        </div>

        {/* Right Column: Text */}
        <div className="md:col-span-6 md:col-start-7 order-1 md:order-2 space-y-6">
          <span className="font-sans text-xs uppercase tracking-widest text-[#d1bfa5] block">
            {t.tag}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e8e1dd] leading-tight">
            {t.title}
          </h2>

          <div className="group inline-flex items-center gap-3 text-[#cfc5ba] border-b border-[#4c463d]/40 pb-3 font-sans text-xs tracking-widest uppercase hover:text-[#d1bfa5] hover:border-[#d1bfa5] transition-colors duration-300">
            <Compass size={18} className="text-[#d1bfa5] group-hover:rotate-45 transition-transform duration-500" />
            <span>{t.distance}</span>
          </div>

          <p className="text-[#cfc5ba] text-base sm:text-lg font-light leading-relaxed max-w-xl">
            {t.desc}
          </p>
        </div>
      </div>
    </section>
  );
};
