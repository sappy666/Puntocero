import React from 'react';
import { Language, translations } from '../translations';

interface ManifestoProps {
  lang: Language;
}

export const Manifesto: React.FC<ManifestoProps> = ({ lang }) => {
  const t = translations[lang].manifesto;

  return (
    <section id="features" className="py-28 sm:py-40 md:py-48 px-6 sm:px-12 md:px-20 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center border-t border-zinc-800 pt-24">
        {/* Text Story Column */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-zinc-400 block mb-3 font-medium">
              {t.title}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-snug text-white tracking-tight">
              {t.lead}
            </h2>
          </div>
          <div className="space-y-6 text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </div>
        </div>

        {/* High-res Interior Photo Column - Extra Large */}
        <div className="lg:col-span-7 overflow-hidden border border-zinc-800 transition-all duration-300 group cursor-pointer shadow-2xl">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFNL1CoMe7J5jBVolakJWVpj3gKj99oREijC7VJek1T2F4oxW9LNcdQSVRDVOR1XzYlnj7DzjwTkz-TU-H5da4KBKPPTfPXPFtWTvsXf_4xC6_PEZ4f7omgDMOcEaqH5a9l3ZpUhhA5jq1A6JEKd7SUOEfFnCIbO9BQV81DVNdjoN0Eov07SoKVlXK7l54YG5B3VYGmt8vo0dAIIXvsfSTz4FT1db9Ixu-qbb2k60gg6JrrdmYw0ZKvlW3cOAkIa7Dow"
            alt="Interior view of Punto Cero Patagonia retreat"
            className="w-full h-auto aspect-[16/11] object-cover opacity-95 group-hover:opacity-100 transition-all duration-500 ease-out"
          />
        </div>
      </div>
    </section>
  );
};
