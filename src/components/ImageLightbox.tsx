import React from 'react';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  image: { src: string; title: string; desc: string } | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ image, onClose }) => {
  React.useEffect(() => {
    if (!image) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center text-white z-10 max-w-7xl mx-auto w-full">
        <div>
          <span className="font-sans text-[11px] uppercase tracking-widest text-zinc-400">Punto Cero Patagonia</span>
          <h3 id="lightbox-title" className="font-sans text-xl font-light text-white">{image.title}</h3>
        </div>
        <button
          onClick={onClose}
          aria-label="Cerrar imagen ampliada"
          className="p-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main Image */}
      <div className="flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        <img
          src={image.src}
          alt={image.title}
          className="max-h-[75vh] max-w-full object-contain shadow-2xl border border-zinc-800"
        />
      </div>

      {/* Bottom Description */}
      <div className="max-w-3xl mx-auto text-center z-10 pb-4">
        <p className="text-zinc-400 text-sm font-light leading-relaxed">
          {image.desc}
        </p>
      </div>
    </div>
  );
};
