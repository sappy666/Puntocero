import React from 'react';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';

interface LocationMapProps {
  lang: Language;
}

export const LocationMap: React.FC<LocationMapProps> = ({ lang }) => {
  const t = translations[lang].location;

  const directMapUrl = 'https://maps.app.goo.gl/XXQnvE5Zzbhvc63d9';

  const handleOpenGoogleMaps = () => {
    window.open(directMapUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="map" className="py-24 sm:py-36 px-6 sm:px-12 md:px-20 bg-[#0c0c0e] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-8 gap-6"
        >
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-zinc-400 block mb-3 font-medium">
              UBICACIÓN PRIVILEGIADA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              {t.title}
            </h2>
            <p className="font-sans text-base text-zinc-400 mt-2 font-light tracking-wide">
              {t.address}
            </p>
          </div>

          <button
            onClick={handleOpenGoogleMaps}
            className="inline-flex items-center gap-2.5 px-5 py-3 border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-white transition-all duration-200 text-xs font-sans uppercase tracking-widest self-start md:self-end group cursor-pointer"
          >
            <MapPin size={15} className="text-zinc-400 group-hover:text-white transition-colors" />
            <span>{t.openMaps}</span>
            <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </motion.div>

        {/* Embedded Interactive Map Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative w-full h-[450px] sm:h-[550px] md:h-[600px] border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden group"
        >
          {/* Interactive Google Map iframe */}
          <iframe
            title="Ubicación Punto Cero Patagonia en Bahía Murta"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152778.6917637841!2d-72.7844005!3d-46.4635831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9632eb99ebf424bf%3A0x89785cbfa558e860!2sBah%C3%ADa%20Murta%2C%20R%C3%ADo%20Ib%C3%A1%C3%B1ez%2C%20Ays%C3%A9n!5e0!3m2!1ses!2scl!4v1710000000000!5m2!1ses!2scl"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'contrast(1.05) saturate(0.95)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
          ></iframe>

          {/* Floating Location Overlay Card */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-[#121215]/95 backdrop-blur-md p-6 border border-zinc-800 shadow-2xl space-y-3 pointer-events-auto">
            <div className="flex items-center gap-2.5 text-xs text-zinc-400 uppercase tracking-widest font-sans font-medium">
              <Navigation size={14} className="text-zinc-300" />
              <span>Patagonia Chilena &bull; Carretera Austral</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-light text-white">
              Bahía Murta, Lago General Carrera
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              A orillas del lago General Carrera, accesible mediante la mítica Ruta 7 (Carretera Austral), Región de Aysén.
            </p>
            <div className="pt-1">
              <a
                href={directMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-zinc-300 border-b border-zinc-600 pb-1 hover:text-white hover:border-white transition-colors"
              >
                <span>Ver en Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

