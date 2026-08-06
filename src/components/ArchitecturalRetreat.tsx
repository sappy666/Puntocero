import React from 'react';
import { Language, translations } from '../translations';
import { Compass } from 'lucide-react';

const retreatImage = new URL('../assets/images/patagonia_retreat_lake_1786044642443.jpg', import.meta.url).href;

interface ArchitecturalRetreatProps {
  lang: Language;
}

export const ArchitecturalRetreat: React.FC<ArchitecturalRetreatProps> = ({ lang }) => {
  const t = translations[lang].architecturalRetreat;

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 md:px-16 bg-[#1a1714] relative overflow-hidden border-t border-[#4c463d]/30">
      {/* Decorative subtle background gradient blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#d1bfa5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#d1bfa5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Image with architectural frame */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative rounded-sm overflow-hidden border border-[#4c463d]/40 group shadow-2xl">
            <img
              src={retreatImage}
              alt="Architectural Retreat Lago General Carrera Patagonia"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover aspect-[4/5] opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151310] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#151310]/80 backdrop-blur-md border border-[#4c463d]/50 rounded-sm">
              <div className="flex items-center gap-2 text-[#d1bfa5] font-sans text-xs uppercase tracking-widest mb-1">
                <Compass size={14} />
                <span>Patagonia Chilena</span>
              </div>
              <p className="font-serif text-sm text-[#e8e1dd] italic">
                "Aquí la arquitectura no compite con la naturaleza: se vuelve parte de ella."
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Text */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.22em] text-[#d1bfa5] block mb-2 font-medium">
              {t.tag}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-snug text-[#e8e1dd] mb-2">
              {t.title}
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-[#d1bfa5] font-light">
              {t.lead}
            </p>
          </div>

          <div className="space-y-4 text-[#cfc5ba] text-sm sm:text-base font-light leading-relaxed">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p className="border-l-2 border-[#d1bfa5]/50 pl-4 py-1 text-[#e8e1dd] italic">
              {t.p3}
            </p>
            <p>{t.p4}</p>
            <p>{t.p5}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
