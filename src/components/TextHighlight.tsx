import React from 'react';
import { motion } from 'motion/react';

// Wraps a phrase with an animated highlighter-marker sweep that triggers once in view.
export const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="relative inline whitespace-normal">
    <motion.span
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="absolute inset-x-0 bottom-[0.05em] top-[0.15em] bg-amber-500/25 origin-left -z-10"
      style={{ transformOrigin: 'left' }}
    />
    <span className="text-zinc-50">{children}</span>
  </span>
);

// Splits text on the given phrases (exact substring match) and wraps matches in <Highlight>.
export const renderWithHighlights = (text: string, phrases: string[]): React.ReactNode => {
  if (!phrases.length) return text;
  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escaped.join('|')})`, 'g');
  return text.split(pattern).map((part, i) =>
    phrases.includes(part) ? <Highlight key={i}>{part}</Highlight> : part
  );
};
