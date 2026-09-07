import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { BookingModal } from './components/BookingModal';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState<{
    checkIn: string;
    checkOut: string;
    guests: number;
  }>({
    checkIn: '',
    checkOut: '',
    guests: 2,
  });

  const handleCheckAvailability = (checkIn: string, checkOut: string, guests: number) => {
    setBookingData({ checkIn, checkOut, guests });
    setIsBookingOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#151310] text-[#e8e1dd] selection:bg-[#d1bfa5] selection:text-[#5a4d39]">
        {/* Fixed Sticky Header Navigation */}
        <Navbar
          lang={lang}
          setLang={setLang}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                lang={lang}
                onCheckAvailability={handleCheckAvailability}
                onOpenBooking={() => setIsBookingOpen(true)}
              />
            }
          />
          <Route path="/galeria" element={<Gallery lang={lang} />} />
        </Routes>

        {/* Interactive Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          lang={lang}
          initialCheckIn={bookingData.checkIn}
          initialCheckOut={bookingData.checkOut}
          initialGuests={bookingData.guests}
        />

        {/* Floating Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}
