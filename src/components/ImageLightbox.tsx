import React from 'react';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  image: { src: string; title: string; desc: string } | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fadeIn">
      {/* Top Bar */}
      <div className="flex justify-between items-center text-[#e8e1dd] z-10 max-w-7xl mx-auto w-full">
        <div>
          <span className="font-sans text-xs uppercase tracking-widest text-[#d1bfa5]">Punto Cero Patagonia</span>
          <h3 className="font-serif text-2xl text-[#e8e1dd]">{image.title}</h3>
        </div>
        <button
          onClick={onClose}
          className="p-3 bg-[#221f1c] border border-[#4c463d] rounded-full text-[#e8e1dd] hover:bg-[#d1bfa5] hover:text-[#5a4d39] transition-colors cursor-pointer"
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Image */}
      <div className="flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        <img
          src={image.src}
          alt={image.title}
          className="max-h-[75vh] max-w-full object-contain shadow-2xl rounded-sm border border-[#4c463d]/30"
        />
      </div>

      {/* Bottom Description */}
      <div className="max-w-3xl mx-auto text-center z-10 pb-4">
        <p className="text-[#cfc5ba] text-base font-light leading-relaxed">
          {image.desc}
        </p>
      </div>
    </div>
  );
};
