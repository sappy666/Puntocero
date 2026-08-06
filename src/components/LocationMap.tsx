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
    <section id="map" className="relative h-[550px] sm:h-[620px] w-full bg-[#151310] overflow-hidden group/map">
      {/* Topographic Map Graphic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={t.mapImage}
          alt="Mapa Topográfico Bahía Murta"
          className="w-full h-full object-cover grayscale opacity-30 mix-blend-luminosity scale-105 group-hover/map:scale-110 group-hover/map:opacity-40 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151310] via-transparent to-[#151310]/80" />
      </div>

      {/* Centered Floating Location Card */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="bg-[#221f1c]/95 backdrop-blur-md p-8 sm:p-10 border border-[#4c463d]/50 text-center max-w-md w-full shadow-2xl rounded-sm space-y-4 transform transition-all duration-500 hover:scale-[1.03] hover:border-[#d1bfa5] hover:shadow-2xl hover:shadow-[#d1bfa5]/10 group">
          <div className="w-12 h-12 rounded-full bg-[#d1bfa5]/10 border border-[#d1bfa5]/30 flex items-center justify-center mx-auto text-[#d1bfa5] group-hover:scale-110 group-hover:bg-[#d1bfa5] group-hover:text-[#151310] transition-all duration-500">
            <MapPin size={24} className="group-hover:animate-bounce" />
          </div>

          <h3 className="font-serif text-3xl text-[#e8e1dd] group-hover:text-[#d1bfa5] transition-colors duration-300">
            {t.title}
          </h3>

          <p className="text-[#cfc5ba] text-base font-light">
            {t.address}
          </p>

          <div className="pt-2">
            <button
              onClick={handleOpenGoogleMaps}
              className="group/btn inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-[#d1bfa5] border-b border-[#d1bfa5] pb-1 hover:text-[#e8e1dd] hover:border-[#e8e1dd] transition-colors duration-300 cursor-pointer"
            >
              <span>{t.openMaps}</span>
              <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
