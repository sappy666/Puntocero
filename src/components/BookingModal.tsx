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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#121215] border border-zinc-800 max-w-lg w-full p-6 sm:p-8 relative text-zinc-200 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 focus:outline-none cursor-pointer"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-14 h-14 bg-zinc-800 text-white rounded-full flex items-center justify-center mx-auto border border-zinc-700">
              <CheckCircle size={30} />
            </div>
            <h3 className="font-serif text-2xl font-light text-white">
              {t.bookingTitle}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {t.successMessage}
            </p>
            <div className="bg-zinc-900/60 p-4 border border-zinc-800 text-left font-sans text-xs space-y-2 text-zinc-300">
              <div><strong className="text-white">{t.checkInLabel}:</strong> {checkIn || t.toConfirm}</div>
              <div><strong className="text-white">{t.checkOutLabel}:</strong> {checkOut || t.toConfirm}</div>
              <div><strong className="text-white">{t.guestsLabel}:</strong> {guests}</div>
              <div><strong className="text-white">{t.contactLabel}:</strong> {guestName} ({guestEmail})</div>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-zinc-100 text-zinc-950 py-3 font-sans text-xs uppercase tracking-widest font-medium hover:bg-white transition-all cursor-pointer"
            >
              {t.close}
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 pb-4 border-b border-zinc-800">
              <span className="font-sans text-[11px] uppercase tracking-widest text-zinc-400">Punto Cero Patagonia</span>
              <h3 className="font-serif text-2xl font-light text-white mt-1">
                {t.bookingTitle}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Dates Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border-b border-zinc-700 pb-2">
                  <label className="block font-sans text-[11px] uppercase tracking-wider mb-1 text-zinc-400">
                    {t.checkInLabel}
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-transparent border-none p-0 text-white font-sans text-xs focus:ring-0 focus:outline-none"
                  />
                </div>
                <div className="border-b border-zinc-700 pb-2">
                  <label className="block font-sans text-[11px] uppercase tracking-wider mb-1 text-zinc-400">
                    {t.checkOutLabel}
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-transparent border-none p-0 text-white font-sans text-xs focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="border-b border-zinc-700 pb-2">
                <label className="block font-sans text-[11px] uppercase tracking-wider mb-1 text-zinc-400">
                  {t.guestsLabel}
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-transparent border-none p-0 text-white font-sans text-sm focus:ring-0 focus:outline-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num} className="bg-[#121215] text-white">
                      {num} {num === 1 ? t.guestSingular : t.guestPlural}
                    </option>
                  ))}
                </select>
              </div>

              {/* Personal Details */}
              <div className="space-y-4 pt-1">
                <div className="border-b border-zinc-700 pb-2">
                  <label className="block font-sans text-[11px] uppercase tracking-wider mb-1 text-zinc-400">
                    {t.fullNameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.fullNamePlaceholder}
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-transparent border-none p-0 text-white font-sans text-sm placeholder-zinc-600 focus:ring-0 focus:outline-none"
                  />
                </div>

                <div className="border-b border-zinc-700 pb-2">
                  <label className="block font-sans text-[11px] uppercase tracking-wider mb-1 text-zinc-400">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t.emailPlaceholder}
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-transparent border-none p-0 text-white font-sans text-sm placeholder-zinc-600 focus:ring-0 focus:outline-none"
                  />
                </div>

                <div className="border-b border-zinc-700 pb-2">
                  <label className="block font-sans text-[11px] uppercase tracking-wider mb-1 text-zinc-400">
                    {t.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    placeholder={t.phonePlaceholder}
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-transparent border-none p-0 text-white font-sans text-sm placeholder-zinc-600 focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>

              {/* Pricing breakdown */}
              <div className="bg-zinc-900/60 p-4 border border-zinc-800 space-y-2 font-sans text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>{t.nightlyRateCalc} ({nights} {t.nightsPlural})</span>
                  <span>${pricePerNight * nights} USD</span>
                </div>
                <div className="flex justify-between text-white font-medium text-sm pt-2 border-t border-zinc-800">
                  <span>{t.totalEstimated}</span>
                  <span>${totalAmount} USD</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-zinc-100 text-zinc-950 py-3.5 font-sans text-xs uppercase tracking-widest font-medium hover:bg-white transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? t.processing : t.confirmBooking}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
