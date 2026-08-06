import React from 'react';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { Language, translations } from '../translations';

interface CtaBannerProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ lang, onOpenBooking }) => {
  const t = translations[lang].cta || {
    tag: 'EXPERIENCIA ÚNICA',
    title: '¿Listo para desconectarte y volver al origen?',
    subtitle: 'Reserva tu estancia en Bahía Murta Retreat y vive la tranquilidad absoluta de la Patagonia chilena.',
    button: 'RESERVAR TU ESTANCIA',
  };

  return (
    <section className="relative py-28 px-6 sm:px-12 md:px-16 overflow-hidden bg-[#100e0b]">
      {/* Background Image with Hover Zoom Parallax effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFNL1CoMe7J5jBVolakJWVpj3gKj99oREijC7VJek1T2F4oxW9LNcdQSVRDVOR1XzYlnj7DzjwTkz-TU-H5da4KBKPPTfPXPFtWTvsXf_4xC6_PEZ4f7omgDMOcEaqH5a9l3ZpUhhA5jq1A6JEKd7SUOEfFnCIbO9BQV81DVNdjoN0Eov07SoKVlXK7l54YG5B3VYGmt8vo0dAIIXvsfSTz4FT1db9Ixu-qbb2k60gg6JrrdmYw0ZKvlW3cOAkIa7Dow"
          alt="Punto Cero Patagonia CTA"
          className="w-full h-full object-cover grayscale opacity-25 hover:opacity-35 hover:scale-105 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#100e0b] via-[#100e0b]/80 to-[#100e0b]/90" />
      </div>

      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#d1bfa5]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Card */}
      <div className="relative z-10 max-w-5xl mx-auto border border-[#4c463d]/40 bg-[#1e1b19]/90 backdrop-blur-md p-8 sm:p-14 shadow-2xl rounded-sm hover:border-[#d1bfa5]/60 transition-all duration-500 group">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Info */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d1bfa5]/10 border border-[#d1bfa5]/30 rounded-full text-[#d1bfa5] font-mono text-[11px] uppercase tracking-widest">
              <Sparkles size={12} className="animate-pulse" />
              <span>{t.tag}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#e8e1dd] leading-tight">
              {t.title}
            </h2>

            <p className="text-[#cfc5ba] text-base sm:text-lg font-light max-w-2xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Action CTA Button */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto lg:w-full bg-[#d1bfa5] text-[#5a4d39] px-8 py-5 font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-3 hover:bg-[#e8e1dd] hover:text-[#151310] transition-all duration-500 shadow-xl hover:shadow-[#d1bfa5]/20 transform hover:-translate-y-0.5 cursor-pointer group/btn"
            >
              <Calendar size={16} />
              <span>{t.button}</span>
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#cfc5ba]/70">
              $450 USD / Noche • Hasta 10 Huéspedes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
