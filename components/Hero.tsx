"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, MessageCircle } from "lucide-react";
import { brand } from "@/lib/brand";

const heroVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.13, duration: 0.75, ease: [0.22, 1, 0.36, 1] } })
};

const floatingWords = [
  { text: "JOLLOF", className: "-left-5 top-[18%] text-7xl lg:text-9xl", duration: 18 },
  { text: "LOVE", className: "right-2 top-[52%] text-7xl lg:text-9xl", duration: 22 },
  { text: "VIBES", className: "bottom-[8%] left-[14%] text-7xl lg:text-9xl", duration: 20 }
];

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 260]);

  return (
    <section id="top" className="relative grid min-h-screen place-items-center overflow-hidden px-4 pb-10 pt-24 sm:px-6 lg:px-8">
      <motion.div aria-hidden className="absolute inset-0 bg-cover bg-center will-change-transform" style={{ y: bgY, backgroundImage: "url(/images/jollof-hero.webp)" }} />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(38,6,7,0.96)_0%,rgba(38,6,7,0.86)_40%,rgba(38,6,7,0.35)_72%,rgba(38,6,7,0.52)_100%)]" />
      <div aria-hidden className="grain absolute inset-0 opacity-60" />

      {floatingWords.map((word, index) => (
        <motion.span key={word.text} aria-hidden className={`pointer-events-none absolute z-[1] select-none font-display font-black leading-none ${word.className}`} style={{ color: "rgba(242,181,51,0.08)" }} animate={{ y: [0, index % 2 ? 20 : -18, 0], rotate: [0, index % 2 ? 3 : -3, 0] }} transition={{ duration: word.duration, repeat: Infinity, ease: "easeInOut" }}>{word.text}</motion.span>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-3xl text-left">
          <motion.div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-bg/55 px-4 py-2 font-mono text-[0.68rem] uppercase text-gold-light backdrop-blur" custom={0} initial="hidden" animate="visible" variants={heroVariants}>
            <MapPin className="h-4 w-4" aria-hidden />
            Agona Swedru · Delivery available
          </motion.div>

          <h1 className="font-display text-5xl font-black leading-[0.91] text-cream sm:text-6xl md:text-7xl">
            <motion.span className="block" custom={1} initial="hidden" animate="visible" variants={heroVariants}>Good food.</motion.span>
            <motion.span className="gold-text block font-accent italic" custom={2} initial="hidden" animate="visible" variants={heroVariants}>Made with love.</motion.span>
            <motion.span className="block" custom={3} initial="hidden" animate="visible" variants={heroVariants}>Served with vibes.</motion.span>
          </h1>

          <motion.p className="mt-6 max-w-xl text-base leading-7 text-cream/82 sm:text-lg" custom={4} initial="hidden" animate="visible" variants={heroVariants}>
            Smoky Ghanaian jollof, generous proteins, golden meat pies and fresh sides—packed for lunch, family sharing and every celebration.
          </motion.p>

          <motion.div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row" custom={5} initial="hidden" animate="visible" variants={heroVariants}>
            <motion.a href={`${brand.whatsapp}?text=Hello%20Jollof%20Vibes%2C%20I%27d%20like%20to%20order.`} target="_blank" rel="noreferrer" className="focus-ring flex items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 font-mono text-sm font-bold uppercase text-bg shadow-gold" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
              <MessageCircle className="h-5 w-5" aria-hidden />
              Order on WhatsApp
            </motion.a>
            <motion.a href="#menu" className="focus-ring flex items-center justify-center gap-3 rounded-full border border-cream/30 bg-cream/10 px-8 py-4 font-mono text-sm font-bold uppercase text-cream backdrop-blur" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
              Explore the menu
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.a href="#about" aria-label="Scroll to our promise" className="focus-ring absolute bottom-5 left-1/2 z-10 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border border-gold/30 bg-bg/55 text-gold-light backdrop-blur" animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
        <ArrowDown className="h-5 w-5" aria-hidden />
      </motion.a>
    </section>
  );
}
