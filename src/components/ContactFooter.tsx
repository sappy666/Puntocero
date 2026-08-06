import React, { useState } from 'react';
import { Phone, Mail, CheckCircle } from 'lucide-react';
import { Language, translations } from '../translations';

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
    <footer id="contact" className="bg-[#1e1b19] border-t border-[#4c463d]/30 text-[#e8e1dd] py-24 px-6 sm:px-12 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Info */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#e8e1dd] mb-4">
                {c.title}
              </h2>
              <p className="text-[#cfc5ba] text-base font-light max-w-sm mb-8 leading-relaxed">
                {c.subtitle}
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`tel:${c.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 group w-fit hover:translate-x-1 transition-transform duration-300"
                >
                  <div className="p-2.5 bg-[#221f1c] border border-[#4c463d]/40 rounded-sm group-hover:border-[#d1bfa5] group-hover:bg-[#2c2723] transition-all duration-300">
                    <Phone size={18} className="text-[#cfc5ba] group-hover:text-[#d1bfa5] transition-colors" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#cfc5ba] group-hover:text-[#d1bfa5] transition-colors duration-300">
                    {c.phone}
                  </span>
                </a>

                <a
                  href={`mailto:${c.email}`}
                  className="flex items-center gap-4 group w-fit hover:translate-x-1 transition-transform duration-300"
                >
                  <div className="p-2.5 bg-[#221f1c] border border-[#4c463d]/40 rounded-sm group-hover:border-[#d1bfa5] group-hover:bg-[#2c2723] transition-all duration-300">
                    <Mail size={18} className="text-[#cfc5ba] group-hover:text-[#d1bfa5] transition-colors" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#cfc5ba] group-hover:text-[#d1bfa5] transition-colors duration-300">
                    {c.email}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
            {submitted && (
              <div className="mb-6 p-4 bg-[#d1bfa5]/10 border border-[#d1bfa5]/40 text-[#d1bfa5] flex items-center gap-3 font-mono text-xs uppercase tracking-wide rounded-sm animate-fadeIn">
                <CheckCircle size={20} />
                <span>{c.form.success}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="border-b border-[#4c463d] pb-2 focus-within:border-[#d1bfa5] transition-colors duration-300">
                <label className="block font-mono text-xs uppercase tracking-wider mb-1 text-[#cfc5ba]">
                  {c.form.name}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={c.form.namePlaceholder}
                  className="w-full bg-transparent border-none p-0 focus:ring-0 text-[#e8e1dd] font-sans text-base placeholder-[#cfc5ba]/40 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="border-b border-[#4c463d] pb-2 focus-within:border-[#d1bfa5] transition-colors duration-300">
                <label className="block font-mono text-xs uppercase tracking-wider mb-1 text-[#cfc5ba]">
                  {c.form.email}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={c.form.emailPlaceholder}
                  className="w-full bg-transparent border-none p-0 focus:ring-0 text-[#e8e1dd] font-sans text-base placeholder-[#cfc5ba]/40 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="border-b border-[#4c463d] pb-2 focus-within:border-[#d1bfa5] transition-colors duration-300">
                <label className="block font-mono text-xs uppercase tracking-wider mb-1 text-[#cfc5ba]">
                  {c.form.message}
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={c.form.messagePlaceholder}
                  className="w-full bg-transparent border-none p-0 focus:ring-0 text-[#e8e1dd] font-sans text-base placeholder-[#cfc5ba]/40 resize-none focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#d1bfa5] text-[#5a4d39] px-8 py-4 font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#e8e1dd] hover:text-[#151310] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#d1bfa5]/20 transition-all duration-500 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? c.form.sending : c.form.send}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 border-t border-[#4c463d]/30 mt-20">
          <div className="flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest text-[#cfc5ba]">
            <a href="#" className="hover:text-[#d1bfa5] transition-colors duration-300">
              {f.privacy}
            </a>
            <a href="#" className="hover:text-[#d1bfa5] transition-colors duration-300">
              {f.terms}
            </a>
            <a href="#" className="hover:text-[#d1bfa5] transition-colors duration-300">
              {f.sustainability}
            </a>
          </div>

          <div className="text-left md:text-right text-[#cfc5ba] text-sm font-light">
            {f.copyright} <br />
            <span className="font-serif italic text-[#d1bfa5]">{f.sub}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
