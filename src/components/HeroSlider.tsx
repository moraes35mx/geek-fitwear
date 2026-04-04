'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1800&q=90',
    line: 'Vista o sol.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1800&q=90',
    line: 'Mova-se como a água.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1800&q=90',
    line: 'Feito de luz.',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section
      data-hero
      className="relative w-full h-screen overflow-hidden bg-[#2B2B2B]"
    >
      {/* Images — crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        >
          <img
            src={slides[current].image}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.78) saturate(0.9) sepia(0.08)' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Warm overlay — subtle sand tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={`line-${current}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif font-light text-[#F5F1E8] text-5xl md:text-7xl lg:text-8xl tracking-tight italic"
          >
            {slides[current].line}
          </motion.p>
        </AnimatePresence>

        {/* Brand tag below */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 text-[#F5F1E8]/50 text-[9px] tracking-[0.45em] uppercase font-light"
        >
          GreekFit — SS 2025
        </motion.span>
      </div>

      {/* Bottom: scroll cue + dots */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-8 lg:px-12">
        {/* Slide dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-500 rounded-full ${
                i === current
                  ? 'w-5 h-[3px] bg-[#C2A27C]'
                  : 'w-[3px] h-[3px] bg-[#F5F1E8]/30 hover:bg-[#F5F1E8]/60'
              }`}
            />
          ))}
        </div>

        {/* Scroll cue */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#F5F1E8]/40 text-[8px] tracking-[0.4em] uppercase">Rolar</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-[#F5F1E8]/30 to-transparent"
          />
        </div>
      </div>

      {/* Progress line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#F5F1E8]/10">
        <motion.div
          key={current}
          className="h-full bg-[#C2A27C]/60"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 6, ease: 'linear' }}
        />
      </div>
    </section>
  );
}
