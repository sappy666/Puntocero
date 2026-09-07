import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { OriginPause } from './components/OriginPause';
import { ArchitecturalRetreat } from './components/ArchitecturalRetreat';
import { Programs } from './components/Programs';
import { Amenities } from './components/Amenities';
import { Attractions } from './components/Attractions';
import { LocationMap } from './components/LocationMap';
import { CtaBanner } from './components/CtaBanner';
import { ContactFooter } from './components/ContactFooter';
import { BookingModal } from './components/BookingModal';
import { ScrollToTop } from './components/ScrollToTop';
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
    <div className="min-h-screen bg-[#151310] text-[#e8e1dd] selection:bg-[#d1bfa5] selection:text-[#5a4d39]">
      {/* Fixed Sticky Header Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Hero Header Section */}
      <Hero
        lang={lang}
        onCheckAvailability={handleCheckAvailability}
      />

      {/* Manifesto / Features Section */}
      <Manifesto lang={lang} />

      {/* Volver al Origen Visual Rest Break */}
      <OriginPause lang={lang} />

      {/* Architectural Retreat Section */}
      <ArchitecturalRetreat lang={lang} />

      {/* Programs & Experiences */}
      <Programs lang={lang} onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Amenities Grid */}
      <Amenities lang={lang} />

      {/* Surrounding Attractions */}
      <Attractions lang={lang} />

      {/* Location Map */}
      <LocationMap lang={lang} />

      {/* Prominent Booking CTA Banner */}
      <CtaBanner
        lang={lang}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Contact Form & Footer */}
      <ContactFooter lang={lang} />

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
  );
}
