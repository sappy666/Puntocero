import React from 'react';
import { Language, translations } from '../translations';
import { ExternalLink, Compass } from 'lucide-react';

const mainExtPhoto = "https://lh3.googleusercontent.com/aida-public/AB6AXuDJeZBRPfHfk-mnP3TueilqDDBs9l7P08C2nyTxXXXWzsOGxjfqBSVHMDpHwhu7CvjVhoIyJopvdSDTorPVoEWqeh53BB4-OnKhjkYFf7BrnXy7mY_n54zMWZ5pHaOaibZx53CoXxpYQlv1Vz4RwApchQ8acTh6S7gC6nv2iP1F78jTKVG8vHQkUmHLfLOxH2SH2uF2G43ijwv5FxoViInIlralqVl5Pn0b67Fe5WbYi0vbIXrGLCM0r6bx12KEHviR4A";
const livingPhoto = "https://lh3.googleusercontent.com/aida-public/AB6AXuBERrGGMMfAP3vxvQz4Lf2fxGyHg94o_8ZvirKA0wI5x2-3pJS6lerJu0o_8SakRIZIu1LIUXEM9Iso5GFDvOU554scdZqKq3QYPv7qAkfUMyOOR5hQCK47hiqqfSTMPaBwY8D4tXulAnEEQvi-LIC5gl3YmXAEzanxbMwCmz81XVFWM0YtMJ3ZaZ-AIGZhFM1qY7xOvp4Mjg-QrI5vzLmCA1P5D8PcWYB_lTWEKy4t_v7mh74I8uvIE2o0Bk_c5AT07g";
const bedroomPhoto = "https://lh3.googleusercontent.com/aida-public/AB6AXuD9TetUkLuviha5uqx3pNoi2YGO8h6w_6cJWV7Sx-zQ8E4etSfMULvABMdKaGwBlwtFIldb82hWqo_5q0Vr2Kb7nvucAaptdR3fAgTvRMeeLFCebxu-6okEXCDQP7AEbTAqSJFAtvTJrAs5IJEY7JK11GvqX7Ue6uPOUcU6QEoP2S6xa8drZOE8ivmsjHz6MhKnOQR3YAh5UTO0vgZYv90XIfwjwyToplZsnV5JDA-IhFyIn1lfpmaQriC7LuKMjTUW7Q";

interface ArchitecturalRetreatProps {
  lang: Language;
}

export const ArchitecturalRetreat: React.FC<ArchitecturalRetreatProps> = ({ lang }) => {
  const t = translations[lang].architecturalRetreat;

  return (
    <section className="py-28 sm:py-40 md:py-48 px-6 sm:px-12 md:px-20 bg-[#0c0c0e] border-t border-zinc-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-8 gap-6">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-zinc-400 block mb-3 font-medium">
              {t.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              {t.title}
            </h2>
            <p className="font-sans text-base text-zinc-400 mt-2 font-light tracking-wide">
              {t.subtitle}
            </p>
          </div>

          {/* External Architect Link */}
          <a
            href={t.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-white transition-all duration-200 text-xs font-sans uppercase tracking-widest self-start md:self-end group"
          >
            <span>{t.portfolioLabel}</span>
            <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* Photo Gallery Grid - Larger Photos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Main Large Photo */}
          <div className="md:col-span-7 relative group overflow-hidden border border-zinc-800 min-h-[480px] sm:min-h-[580px] lg:min-h-[660px]">
            <img
              src={mainExtPhoto}
              alt="Casa Bahía Murta por Tomás Villalón"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-zinc-300 font-sans tracking-wider">
              <span className="flex items-center gap-2 uppercase text-[11px] text-zinc-300">
                <Compass size={14} className="text-zinc-400" /> Exterior en Madera de Lenga
              </span>
              <span className="text-zinc-400 text-[11px]">Fotografía: Roland Halbe</span>
            </div>
          </div>

          {/* Dual Staggered Photos */}
          <div className="md:col-span-5 grid grid-rows-2 gap-8">
            <div className="relative group overflow-hidden border border-zinc-800 min-h-[280px] sm:min-h-[310px]">
              <img
                src={livingPhoto}
                alt="Living interior Casa Bahía Murta"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/80 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 text-[11px] font-sans text-zinc-300 tracking-wider uppercase">
                Espacios Interiores & Ventanales
              </span>
            </div>

            <div className="relative group overflow-hidden border border-zinc-800 min-h-[280px] sm:min-h-[310px]">
              <img
                src={bedroomPhoto}
                alt="Dormitorio con vistas al Lago General Carrera"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/80 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 text-[11px] font-sans text-zinc-300 tracking-wider uppercase">
                Integración con la Pendiente del Terreno
              </span>
            </div>
          </div>
        </div>

        {/* Minimal Narrative & Spec Sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-2 items-start">
          <div className="lg:col-span-7 space-y-4 text-zinc-300 text-sm font-light leading-relaxed">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>

          {/* Technical Spec Sheet */}
          <div className="lg:col-span-5 bg-zinc-900/40 border border-zinc-800 p-6 space-y-4">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-300 font-medium border-b border-zinc-800 pb-3">
              Ficha Técnica
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs">
              {t.specs.map((spec, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block font-sans uppercase text-zinc-400 text-[10px] tracking-widest">
                    {spec.label}
                  </span>
                  <span className="block font-sans text-zinc-200 font-normal">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-zinc-800">
              <a
                href={t.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans text-zinc-300 hover:text-white transition-colors duration-200"
              >
                <span>Ver reportaje fotográfico completo en Roland Halbe</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

