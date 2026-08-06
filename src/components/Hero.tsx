import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeroProps {
  lang: Language;
  onCheckAvailability: (checkIn: string, checkOut: string, guests: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onCheckAvailability }) => {
  const t = translations[lang].hero;
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability(checkIn, checkOut, guests);
  };

  return (
    <header className="relative w-full min-h-screen pt-28 md:pt-36 pb-20 px-6 sm:px-12 md:px-16 flex items-end zoom-parallax">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuASbR5EYy_4r3BvSM7-7YyaagCXDZc2UpsQiHBrO_HWK_TcU0vz9gz3i5kcaDahcVQvu_UQ0sKVDYvmkVZBNDqgJkCWZ9vL2lz1pTqbYTstVO6_TxHGaTqk6a6OalRKNH0bxkfkFinKJcdf9l7IRaIZTFilxiz0SQnr3arOh3mh0gmg88ASULmfnA8CLEM_YUfGNLMRUBpvK2HrtjIYQud3dQtDmnCFF5VcLK-s-fAnCld39lTkx62AWfK3SRe_Udiyxw')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#151310] via-[#151310]/40 to-black/30" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-end">
        {/* Left Column: Title & Quote */}
        <div className="md:col-span-8 text-[#e8e1dd] space-y-6">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white drop-shadow-sm">
            {t.title}
          </h1>

          <div className="max-w-xl space-y-3">
            <p className="text-lg sm:text-xl text-[#e8e1dd]/90 font-light leading-relaxed">
              {t.subtitle}
            </p>
            <p className="font-serif italic text-2xl sm:text-3xl text-[#d1bfa5] pt-2">
              {t.tagline}
            </p>
          </div>

          <div className="pt-4">
            <a
              href="#features"
              className="group inline-flex items-center gap-3 border-b border-[#d1bfa5] text-[#d1bfa5] pb-1 font-sans text-xs uppercase tracking-widest hover:opacity-90 hover:text-white hover:border-white transition-all duration-300"
            >
              <span>{t.discoverMore}</span>
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Right Column: Reservation Form Overlay Card */}
        <div className="md:col-span-4 bg-[#221f1c]/90 backdrop-blur-md p-8 border border-[#4c463d]/40 shadow-2xl rounded-sm hover:border-[#d1bfa5]/60 hover:shadow-[#d1bfa5]/10 transition-all duration-500">
          <h2 className="font-serif text-3xl text-[#e8e1dd] mb-6 border-b border-[#4c463d]/30 pb-3">
            {t.reservationTitle}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Check-in */}
            <div className="border-b border-[#4c463d] pb-2 focus-within:border-[#d1bfa5] transition-colors duration-300">
              <label className="block font-sans text-xs uppercase tracking-wider mb-1 text-[#cfc5ba]">
                {t.checkIn}
              </label>
              <input
                type="date"
                required
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-[#e8e1dd] font-sans text-sm focus:outline-none cursor-pointer"
              />
            </div>

            {/* Check-out */}
            <div className="border-b border-[#4c463d] pb-2 focus-within:border-[#d1bfa5] transition-colors duration-300">
              <label className="block font-sans text-xs uppercase tracking-wider mb-1 text-[#cfc5ba]">
                {t.checkOut}
              </label>
              <input
                type="date"
                required
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-[#e8e1dd] font-sans text-sm focus:outline-none cursor-pointer"
              />
            </div>

            {/* Guests Selector */}
            <div className="border-b border-[#4c463d] pb-2 focus-within:border-[#d1bfa5] transition-colors duration-300">
              <label className="block font-sans text-xs uppercase tracking-wider mb-1 text-[#cfc5ba]">
                {t.guests}
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-[#e8e1dd] font-sans text-sm focus:outline-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num} className="bg-[#221f1c] text-[#e8e1dd]">
                    {num} {num === 1 ? 'Huésped' : 'Huéspedes'}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#d1bfa5] text-[#5a4d39] py-4 font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#e8e1dd] hover:text-[#151310] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#d1bfa5]/20 transition-all duration-500 shadow-md cursor-pointer"
            >
              {t.checkAvailability}
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
