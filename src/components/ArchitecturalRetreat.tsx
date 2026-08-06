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
    <section className="py-24 sm:py-32 px-6 sm:px-12 md:px-16 bg-[#1a1714] border-t border-[#4c463d]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#4c463d]/30 pb-8 gap-6">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.22em] text-[#d1bfa5] block mb-2 font-medium">
              {t.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e8e1dd] tracking-tight">
              {t.title}
            </h2>
            <p className="font-sans text-sm text-[#a89f91] mt-1 font-light tracking-wide">
              {t.subtitle}
            </p>
          </div>

          {/* External Architect Link */}
          <a
            href={t.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 border border-[#4c463d]/60 bg-[#151310]/60 hover:bg-[#151310] hover:border-[#d1bfa5] text-[#d1bfa5] hover:text-white transition-all duration-300 text-xs font-sans uppercase tracking-widest rounded-sm self-start md:self-end group"
          >
            <span>{t.portfolioLabel}</span>
            <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>

        {/* Photo Gallery Grid - Focus on Photography */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Photo */}
          <div className="md:col-span-7 relative group rounded-sm overflow-hidden border border-[#4c463d]/40 shadow-xl min-h-[380px] sm:min-h-[480px]">
            <img
              src={mainExtPhoto}
              alt="Casa Bahía Murta por Tomás Villalón"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151310]/90 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-[#e8e1dd]/90 font-sans tracking-wider">
              <span className="flex items-center gap-1.5 uppercase">
                <Compass size={13} className="text-[#d1bfa5]" /> Exterior en Madera de Lenga
              </span>
              <span className="text-[#a89f91] text-[11px]">Fotografía: Roland Halbe</span>
            </div>
          </div>

          {/* Dual Staggered Photos */}
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            <div className="relative group rounded-sm overflow-hidden border border-[#4c463d]/40 shadow-lg min-h-[220px]">
              <img
                src={livingPhoto}
                alt="Living interior Casa Bahía Murta"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151310]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-sans text-[#e8e1dd] tracking-wider uppercase">
                Espacios Interiores & Ventanales
              </span>
            </div>

            <div className="relative group rounded-sm overflow-hidden border border-[#4c463d]/40 shadow-lg min-h-[220px]">
              <img
                src={bedroomPhoto}
                alt="Dormitorio con vistas al Lago General Carrera"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151310]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-sans text-[#e8e1dd] tracking-wider uppercase">
                Integración con la Pendiente del Terreno
              </span>
            </div>
          </div>
        </div>

        {/* Subtle Architectural Narrative & Spec Sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4 items-start">
          <div className="lg:col-span-7 space-y-4 text-[#cfc5ba] text-sm sm:text-base font-light leading-relaxed">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>

          {/* Technical Spec Sheet */}
          <div className="lg:col-span-5 bg-[#151310]/80 border border-[#4c463d]/40 p-6 rounded-sm space-y-4">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#d1bfa5] font-semibold border-b border-[#4c463d]/30 pb-3">
              Ficha Técnica
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs">
              {t.specs.map((spec, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block font-sans uppercase text-[#a89f91] text-[10px] tracking-widest">
                    {spec.label}
                  </span>
                  <span className="block font-sans text-[#e8e1dd] font-medium">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-[#4c463d]/30">
              <a
                href={t.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans text-[#d1bfa5] hover:text-white transition-colors duration-300"
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

