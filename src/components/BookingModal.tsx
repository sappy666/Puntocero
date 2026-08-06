import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Users, ShieldCheck } from 'lucide-react';
import { Language, translations } from '../translations';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialCheckIn = '',
  initialCheckOut = '',
  initialGuests = 2,
}) => {
  const t = translations[lang].modal;

  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const [guests, setGuests] = useState(initialGuests);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  // Calculate nights
  let nights = 3;
  if (checkIn && checkOut) {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
    if (diff > 0) nights = diff;
  }
  const pricePerNight = 450;
  const totalAmount = nights * pricePerNight;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#221f1c] border border-[#4c463d] max-w-lg w-full rounded-sm p-6 sm:p-8 relative text-[#e8e1dd] shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#cfc5ba] hover:text-white p-2 focus:outline-none"
        >
          <X size={22} />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 bg-[#d1bfa5]/20 text-[#d1bfa5] rounded-full flex items-center justify-center mx-auto border border-[#d1bfa5]/40">
              <CheckCircle size={36} />
            </div>
            <h3 className="font-serif text-3xl text-[#e8e1dd]">
              {t.bookingTitle}
            </h3>
            <p className="text-[#cfc5ba] text-base leading-relaxed">
              {t.successMessage}
            </p>
            <div className="bg-[#1e1b19] p-4 rounded-sm border border-[#4c463d]/30 text-left font-mono text-xs space-y-2 text-[#cfc5ba]">
              <div><strong className="text-[#d1bfa5]">Llegada:</strong> {checkIn || 'Por confirmar'}</div>
              <div><strong className="text-[#d1bfa5]">Salida:</strong> {checkOut || 'Por confirmar'}</div>
              <div><strong className="text-[#d1bfa5]">Huéspedes:</strong> {guests}</div>
              <div><strong className="text-[#d1bfa5]">Contacto:</strong> {guestName} ({guestEmail})</div>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-[#d1bfa5] text-[#5a4d39] py-3 font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#383431] hover:text-[#e8e1dd] transition-all cursor-pointer"
            >
              {t.close}
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 pb-4 border-b border-[#4c463d]/40">
              <span className="font-mono text-xs uppercase tracking-widest text-[#d1bfa5]">Punto Cero Patagonia</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#e8e1dd] mt-1">
                {t.bookingTitle}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Dates Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border-b border-[#4c463d] pb-2">
                  <label className="block font-mono text-xs uppercase tracking-wider mb-1 text-[#cfc5ba]">
                    Llegada
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-transparent border-none p-0 text-[#e8e1dd] font-sans text-xs focus:ring-0 focus:outline-none"
                  />
                </div>
                <div className="border-b border-[#4c463d] pb-2">
                  <label className="block font-mono text-xs uppercase tracking-wider mb-1 text-[#cfc5ba]">
                    Salida
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-transparent border-none p-0 text-[#e8e1dd] font-sans text-xs focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="border-b border-[#4c463d] pb-2">
                <label className="block font-mono text-xs uppercase tracking-wider mb-1 text-[#cfc5ba]">
                  {t.guestsLabel}
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-transparent border-none p-0 text-[#e8e1dd] font-sans text-sm focus:ring-0 focus:outline-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num} className="bg-[#221f1c] text-[#e8e1dd]">
                      {num} {num === 1 ? 'Huésped' : 'Huéspedes'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Personal Details */}
              <div className="space-y-4 pt-2">
                <div className="border-b border-[#4c463d] pb-2">
                  <label className="block font-mono text-xs uppercase tracking-wider mb-1 text-[#cfc5ba]">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-transparent border-none p-0 text-[#e8e1dd] font-sans text-sm focus:ring-0 focus:outline-none"
                  />
                </div>

                <div className="border-b border-[#4c463d] pb-2">
                  <label className="block font-mono text-xs uppercase tracking-wider mb-1 text-[#cfc5ba]">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="correo@ejemplo.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-transparent border-none p-0 text-[#e8e1dd] font-sans text-sm focus:ring-0 focus:outline-none"
                  />
                </div>

                <div className="border-b border-[#4c463d] pb-2">
                  <label className="block font-mono text-xs uppercase tracking-wider mb-1 text-[#cfc5ba]">
                    Teléfono de Contacto
                  </label>
                  <input
                    type="tel"
                    placeholder="+56 9 1234 5678"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-transparent border-none p-0 text-[#e8e1dd] font-sans text-sm focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>

              {/* Pricing breakdown */}
              <div className="bg-[#1e1b19] p-4 rounded-sm border border-[#4c463d]/40 space-y-2 font-mono text-xs">
                <div className="flex justify-between text-[#cfc5ba]">
                  <span>Tarifa noche ({nights} noches)</span>
                  <span>${pricePerNight * nights} USD</span>
                </div>
                <div className="flex justify-between text-[#d1bfa5] font-semibold text-sm pt-2 border-t border-[#4c463d]/30">
                  <span>{t.totalEstimated}</span>
                  <span>${totalAmount} USD</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#d1bfa5] text-[#5a4d39] py-4 font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#383431] hover:text-[#e8e1dd] transition-all cursor-pointer shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Procesando...' : t.confirmBooking}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
