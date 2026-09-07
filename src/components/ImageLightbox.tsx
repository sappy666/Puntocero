import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxImage {
  src: string;
  alt: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ images, index, onClose, onNavigate }) => {
  const isOpen = index !== null;
  const total = images.length;

  const goPrev = React.useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + total) % total);
  }, [index, total, onNavigate]);

  const goNext = React.useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % total);
  }, [index, total, onNavigate]);

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, goPrev, goNext]);

  if (!isOpen || index === null) return null;
  const current = images[index];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Galería de fotos en pantalla completa"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center text-white z-10 max-w-7xl mx-auto w-full shrink-0">
        <span className="font-sans text-[11px] uppercase tracking-widest text-zinc-400 tabular-nums">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <button
          onClick={onClose}
          aria-label="Cerrar galería"
          className="p-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main Image */}
      <div className="flex-1 flex items-center justify-center gap-3 sm:gap-6 min-h-0">
        <button
          onClick={goPrev}
          aria-label="Foto anterior"
          className="hidden sm:flex shrink-0 p-3 bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer"
        >
          <ChevronLeft size={22} />
        </button>

        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="max-h-[75vh] max-w-full object-contain shadow-2xl border border-zinc-800"
        />

        <button
          onClick={goNext}
          aria-label="Foto siguiente"
          className="hidden sm:flex shrink-0 p-3 bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Mobile Prev/Next + Caption */}
      <div className="flex items-center justify-between gap-4 max-w-3xl mx-auto w-full z-10 pt-4 shrink-0">
        <button
          onClick={goPrev}
          aria-label="Foto anterior"
          className="sm:hidden p-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>
        <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed text-center flex-1">
          {current.alt}
        </p>
        <button
          onClick={goNext}
          aria-label="Foto siguiente"
          className="sm:hidden p-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
