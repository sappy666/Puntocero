import React from 'react';
import { Language, translations } from '../translations';

interface ManifestoProps {
  lang: Language;
}

export const Manifesto: React.FC<ManifestoProps> = ({ lang }) => {
  const t = translations[lang].manifesto;

  return (
    <section id="features" className="py-24 sm:py-32 px-6 sm:px-12 md:px-16 bg-[#151310]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center border-t border-[#4c463d]/30 pt-16">
        {/* Text Story Column */}
        <div className="md:col-span-6 lg:col-span-5 space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-[#e8e1dd]">
            {t.title}
          </h2>
          <div className="space-y-6 text-[#cfc5ba] text-base sm:text-lg font-light leading-relaxed">
            <p className="font-medium text-[#e8e1dd]/90">{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </div>
        </div>

        {/* High-res Interior Photo Column */}
        <div className="md:col-span-6 lg:col-span-6 lg:col-start-7 zoom-parallax rounded-sm shadow-2xl overflow-hidden group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFNL1CoMe7J5jBVolakJWVpj3gKj99oREijC7VJek1T2F4oxW9LNcdQSVRDVOR1XzYlnj7DzjwTkz-TU-H5da4KBKPPTfPXPFtWTvsXf_4xC6_PEZ4f7omgDMOcEaqH5a9l3ZpUhhA5jq1A6JEKd7SUOEfFnCIbO9BQV81DVNdjoN0Eov07SoKVlXK7l54YG5B3VYGmt8vo0dAIIXvsfSTz4FT1db9Ixu-qbb2k60gg6JrrdmYw0ZKvlW3cOAkIa7Dow"
            alt="Interior view of Punto Cero Patagonia retreat"
            className="w-full h-auto aspect-[4/3] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
          />
        </div>
      </div>
    </section>
  );
};
