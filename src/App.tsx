import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Amenities } from './components/Amenities';
import { SpacesGallery } from './components/SpacesGallery';
import { Attractions } from './components/Attractions';
import { LocationMap } from './components/LocationMap';
import { ContactFooter } from './components/ContactFooter';
import { BookingModal } from './components/BookingModal';
import { ImageLightbox } from './components/ImageLightbox';
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

  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    desc: string;
  } | null>(null);

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

      {/* Amenities Grid */}
      <Amenities lang={lang} />

      {/* Visual Spaces Gallery */}
      <SpacesGallery
        lang={lang}
        onSelectImage={(img) => setLightboxImage(img)}
      />

      {/* Surrounding Attractions */}
      <Attractions lang={lang} />

      {/* Location Map */}
      <LocationMap lang={lang} />

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

      {/* Full-Screen Image Lightbox */}
      <ImageLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}
