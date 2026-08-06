import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { Language, translations } from '../translations';

interface LocationMapProps {
  lang: Language;
}

export const LocationMap: React.FC<LocationMapProps> = ({ lang }) => {
  const t = translations[lang].location;

  const handleOpenGoogleMaps = () => {
    window.open(
      'https://maps.google.com/?q=Bahía+Murta,+Región+de+Aysén,+Chile',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="map" className="relative h-[560px] sm:h-[640px] w-full bg-[#0c0c0e] overflow-hidden group/map">
      {/* Topographic Map Graphic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={t.mapImage}
          alt="Mapa Topográfico Bahía Murta"
          className="w-full h-full object-cover grayscale opacity-20 mix-blend-luminosity scale-102 group-hover/map:scale-105 group-hover/map:opacity-30 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-[#0c0c0e]/80" />
      </div>

      {/* Centered Floating Location Card */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="bg-[#121215]/95 backdrop-blur-md p-8 sm:p-10 border border-zinc-800 text-center max-w-md w-full shadow-2xl space-y-4 transition-all duration-300 hover:border-zinc-600 group">
          <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mx-auto text-zinc-300 group-hover:bg-zinc-100 group-hover:text-zinc-950 transition-all duration-300">
            <MapPin size={20} />
          </div>

          <h3 className="font-sans text-2xl font-light text-white tracking-tight">
            {t.title}
          </h3>

          <p className="text-zinc-400 text-sm font-light">
            {t.address}
          </p>

          <div className="pt-2">
            <button
              onClick={handleOpenGoogleMaps}
              className="group/btn inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-zinc-300 border-b border-zinc-600 pb-1 hover:text-white hover:border-white transition-colors duration-200 cursor-pointer"
            >
              <span>{t.openMaps}</span>
              <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
