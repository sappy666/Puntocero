import React from 'react';
import { Hero } from '../components/Hero';
import { Manifesto } from '../components/Manifesto';
import { OriginPause } from '../components/OriginPause';
import { ArchitecturalRetreat } from '../components/ArchitecturalRetreat';
import { Programs } from '../components/Programs';
import { Amenities } from '../components/Amenities';
import { Attractions } from '../components/Attractions';
import { LocationMap } from '../components/LocationMap';
import { CtaBanner } from '../components/CtaBanner';
import { ContactFooter } from '../components/ContactFooter';
import { Language } from '../translations';

interface HomeProps {
  lang: Language;
  onCheckAvailability: (checkIn: string, checkOut: string, guests: number) => void;
  onOpenBooking: () => void;
}

export const Home: React.FC<HomeProps> = ({ lang, onCheckAvailability, onOpenBooking }) => {
  return (
    <>
      {/* Hero Header Section */}
      <Hero lang={lang} onCheckAvailability={onCheckAvailability} />

      {/* Manifesto / Features Section */}
      <Manifesto lang={lang} />

      {/* Volver al Origen Visual Rest Break */}
      <OriginPause lang={lang} />

      {/* Architectural Retreat Section */}
      <ArchitecturalRetreat lang={lang} />

      {/* Programs & Experiences */}
      <Programs lang={lang} onOpenBooking={onOpenBooking} />

      {/* Amenities Grid */}
      <Amenities lang={lang} />

      {/* Surrounding Attractions */}
      <Attractions lang={lang} />

      {/* Location Map */}
      <LocationMap lang={lang} />

      {/* Prominent Booking CTA Banner */}
      <CtaBanner lang={lang} onOpenBooking={onOpenBooking} />

      {/* Contact Form & Footer */}
      <ContactFooter lang={lang} />
    </>
  );
};
