"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MapPin, Phone } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1920";

const heroVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const floatingWords = [
  {
    text: "JOLLOF",
    className: "-left-6 top-[18%] text-7xl sm:text-8xl lg:text-9xl xl:text-[9rem]",
    x: [0, 28, -16, 0],
    y: [0, -18, 24, 0],
    rotate: [-4, 1, -2, -4],
    duration: 18
  },
  {
    text: "BANKU",
    className: "-right-8 top-[52%] text-7xl sm:text-8xl lg:text-9xl xl:text-[8rem]",
    x: [0, -24, 14, 0],
    y: [0, 22, -16, 0],
    rotate: [5, 2, 7, 5],
    duration: 22
  },
  {
    text: "TILAPIA",
    className: "bottom-[6%] left-[10%] text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem]",
    x: [0, 18, -20, 0],
    y: [0, -16, 20, 0],
    rotate: [2, -2, 4, 2],
    duration: 20
  }
];

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 320]);

  return (
    <section
      id="top"
      className="relative grid min-h-screen place-items-center overflow-hidden px-4 pb-12 pt-24 text-center sm:px-6 lg:px-8"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          y: bgY,
          backgroundImage: `url(${heroImage})`
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(13,10,7,0.94)_0%,rgba(13,10,7,0.64)_42%,rgba(42,31,15,0.88)_100%)]"
      />
      <div aria-hidden className="grain absolute inset-0 opacity-70" />

      {floatingWords.map((word) => (
        <motion.span
          key={word.text}
          aria-hidden
          className={`pointer-events-none absolute z-[1] select-none font-display font-black leading-none ${word.className}`}
          style={{ color: "rgba(232, 160, 32, 0.075)" }}
          animate={{ x: word.x, y: word.y, rotate: word.rotate }}
          transition={{ duration: word.duration, repeat: Infinity, ease: "easeInOut" }}
        >
          {word.text}
        </motion.span>
      ))}

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        <motion.div
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-bg/55 px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-gold-light backdrop-blur"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <MapPin className="h-4 w-4" aria-hidden />
          Obuasi, Ashanti Region · Since 2024
        </motion.div>

        <h1 className="font-display text-5xl font-black leading-[0.9] tracking-normal text-cream sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem]">
          <motion.span className="block" custom={1} initial="hidden" animate="visible" variants={heroVariants}>
            Where Every
          </motion.span>
          <motion.span
            className="gold-text block font-accent italic"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            Plate Tells
          </motion.span>
          <motion.span className="block" custom={3} initial="hidden" animate="visible" variants={heroVariants}>
            A Story
          </motion.span>
        </h1>

        <motion.p
          className="mt-5 max-w-2xl text-base font-light leading-7 text-cream/86 sm:text-lg"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          Authentic Ghanaian flavors and continental favorites, served with heart in the city of gold.
        </motion.p>

        <motion.div
          className="mt-7 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
          custom={5}
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <motion.a
            href="#menu"
            className="focus-ring w-full rounded-full bg-gold px-8 py-4 text-center font-mono text-sm font-bold uppercase tracking-[0.16em] text-bg shadow-gold sm:w-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            View Our Menu
          </motion.a>
          <motion.a
            href="tel:+233209328888"
            className="focus-ring flex w-full items-center justify-center gap-3 rounded-full border border-cream/25 bg-cream/10 px-8 py-4 text-center font-mono text-sm font-bold uppercase tracking-[0.16em] text-cream backdrop-blur sm:w-auto"
            whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(245, 200, 66, 0.7)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call to Reserve
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to EDMA story"
        className="focus-ring absolute bottom-6 left-1/2 z-10 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border border-gold/25 bg-bg/40 text-gold-light backdrop-blur"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" aria-hidden />
      </motion.a>
    </section>
  );
}
