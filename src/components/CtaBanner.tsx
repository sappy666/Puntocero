import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
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
    <section className="relative py-28 sm:py-40 px-6 sm:px-12 md:px-20 overflow-hidden bg-[#0c0c0e]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFNL1CoMe7J5jBVolakJWVpj3gKj99oREijC7VJek1T2F4oxW9LNcdQSVRDVOR1XzYlnj7DzjwTkz-TU-H5da4KBKPPTfPXPFtWTvsXf_4xC6_PEZ4f7omgDMOcEaqH5a9l3ZpUhhA5jq1A6JEKd7SUOEfFnCIbO9BQV81DVNdjoN0Eov07SoKVlXK7l54YG5B3VYGmt8vo0dAIIXvsfSTz4FT1db9Ixu-qbb2k60gg6JrrdmYw0ZKvlW3cOAkIa7Dow"
          alt="Punto Cero Patagonia CTA"
          className="w-full h-full object-cover grayscale opacity-15 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/90 to-[#0c0c0e]/95" />
      </div>

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl mx-auto border border-zinc-800 bg-[#121215]/90 backdrop-blur-md p-10 sm:p-16 shadow-2xl hover:border-zinc-700 transition-all duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Info */}
          <div className="lg:col-span-8 space-y-5">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-zinc-400 block font-medium">
              {t.tag}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight">
              {t.title}
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg font-light max-w-2xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Action CTA Button */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenBooking}
              className="w-full sm:w-auto lg:w-full bg-zinc-100 text-zinc-950 px-6 py-4 font-sans text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 hover:bg-white transition-all duration-200 cursor-pointer group/btn shadow-md hover:shadow-lg"
            >
              <Calendar size={15} />
              <span>{t.button}</span>
              <ArrowRight size={15} className="group-hover/btn:translate-x-0.5 transition-transform duration-200" />
            </motion.button>
            <span className="font-sans text-[11px] uppercase tracking-wider text-zinc-400">
              $450 USD / Noche • Hasta 10 Huéspedes
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
