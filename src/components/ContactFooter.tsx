import React, { useState } from 'react';
import { Phone, Mail, CheckCircle } from 'lucide-react';
import { Language, translations } from '../translations';
import { Logo } from './Logo';

interface ContactFooterProps {
  lang: Language;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ lang }) => {
  const t = translations[lang];
  const c = t.contact;
  const f = t.footer;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <footer id="contact" className="bg-[#0c0c0e] border-t border-zinc-800 text-zinc-300 py-28 sm:py-36 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Info */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <div className="mb-6">
                <Logo />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-3 tracking-tight">
                {c.title}
              </h2>
              <p className="text-zinc-400 text-sm font-light max-w-sm mb-6 leading-relaxed">
                {c.subtitle}
              </p>

              <div className="space-y-3 pt-1">
                <a
                  href={`tel:${c.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 group w-fit transition-colors duration-200"
                >
                  <div className="p-2 bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                    <Phone size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-sans text-xs uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors">
                    {c.phone}
                  </span>
                </a>

                <a
                  href={`mailto:${c.email}`}
                  className="flex items-center gap-3 group w-fit transition-colors duration-200"
                >
                  <div className="p-2 bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                    <Mail size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-sans text-xs uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors">
                    {c.email}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
            {submitted && (
              <div className="mb-6 p-4 bg-zinc-800/80 border border-zinc-700 text-white flex items-center gap-3 font-sans text-xs uppercase tracking-wide">
                <CheckCircle size={18} />
                <span>{c.form.success}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="border-b border-zinc-700 pb-2 focus-within:border-white transition-colors duration-200">
                <label className="block font-sans text-xs uppercase tracking-wider mb-1 text-zinc-400">
                  {c.form.name}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={c.form.namePlaceholder}
                  className="w-full bg-transparent border-none p-0 focus:ring-0 text-white font-sans text-sm placeholder-zinc-600 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="border-b border-zinc-700 pb-2 focus-within:border-white transition-colors duration-200">
                <label className="block font-sans text-xs uppercase tracking-wider mb-1 text-zinc-400">
                  {c.form.email}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={c.form.emailPlaceholder}
                  className="w-full bg-transparent border-none p-0 focus:ring-0 text-white font-sans text-sm placeholder-zinc-600 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="border-b border-zinc-700 pb-2 focus-within:border-white transition-colors duration-200">
                <label className="block font-sans text-xs uppercase tracking-wider mb-1 text-zinc-400">
                  {c.form.message}
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={c.form.messagePlaceholder}
                  className="w-full bg-transparent border-none p-0 focus:ring-0 text-white font-sans text-sm placeholder-zinc-600 resize-none focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-zinc-100 text-zinc-950 px-6 py-3.5 font-sans text-xs uppercase tracking-widest font-medium hover:bg-white transition-all duration-200 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? c.form.sending : c.form.send}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-zinc-800 mt-16">
          <div className="flex flex-wrap gap-6 font-sans text-xs uppercase tracking-widest text-zinc-400">
            <a href="#" className="hover:text-white transition-colors duration-200">
              {f.privacy}
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              {f.terms}
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              {f.sustainability}
            </a>
          </div>

          <div className="text-left md:text-right text-zinc-400 text-xs font-light space-y-1">
            <p>{f.copyright}</p>
            <p className="font-sans text-[11px] text-zinc-500">
              Fotografía: <a href="https://rolandhalbe.eu/portfolio/casa-bahia-murta-by-tomas-villalon/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 underline underline-offset-2 hover:text-white transition-colors">Roland Halbe</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
