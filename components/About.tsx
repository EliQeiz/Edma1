"use client";

import { motion, useInView } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { slideLeft, slideRight, staggerContainer, viewport } from "./motionPresets";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800",
    alt: "A warm Ghanaian-style food spread",
    rotate: "-rotate-3",
    offset: "z-10"
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
    alt: "Restaurant dining room with a welcoming evening mood",
    rotate: "rotate-2",
    offset: "ml-12 -mt-12 z-20 sm:ml-24"
  },
  {
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
    alt: "Chef preparing food in a restaurant kitchen",
    rotate: "-rotate-[1.5deg]",
    offset: "-mt-10 ml-4 z-30 sm:ml-10"
  }
];

export default function About() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const [counts, setCounts] = useState({ dishes: 0, years: 0 });

  useEffect(() => {
    if (!statsInView) {
      return undefined;
    }

    let frame = 0;
    const totalFrames = 48;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts({
        dishes: Math.round(40 * eased),
        years: Math.max(1, Math.round(1 * eased))
      });

      if (frame >= totalFrames) {
        window.clearInterval(timer);
      }
    }, 24);

    return () => window.clearInterval(timer);
  }, [statsInView]);

  return (
    <section id="about" className="relative overflow-hidden bg-bg px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-gold">
            Our Story
          </p>
          <h2 className="mt-5 font-display text-5xl font-black leading-[0.95] tracking-normal text-cream sm:text-6xl lg:text-7xl">
            Born in Obuasi, Built on Flavor
          </h2>
          <div className="mt-8 space-y-5 text-base font-light leading-8 text-cream/78 sm:text-lg">
            <p>
              EDMA Restaurant opened its doors in December 2024 with one mission — to bring
              the rich, bold flavors of Ghanaian cuisine to a beautiful dining experience right
              here in Obuasi.
            </p>
            <p>
              We serve the dishes you grew up loving — steaming Jollof rice, crispy Yam Chips,
              silky Banku with pepper sauce — elevated with fresh ingredients and prepared with
              care by our talented kitchen team.
            </p>
            <p>
              Continental favorites, signature creations like &quot;The Most Wanted&quot;, and pizza
              round out a menu that has something for every craving.
            </p>
          </div>

          <motion.div
            ref={statsRef}
            className="mt-10 grid gap-3 sm:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div
              className="border-l border-gold/35 bg-surface/45 px-5 py-4"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <p className="font-mono text-3xl font-bold text-gold">{counts.dishes}+</p>
              <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                dishes
              </p>
            </motion.div>
            <motion.div
              className="border-l border-gold/35 bg-surface/45 px-5 py-4"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <p className="font-mono text-3xl font-bold text-gold">{counts.years} Year</p>
              <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                of excellence
              </p>
            </motion.div>
            <motion.div
              className="border-l border-gold/35 bg-surface/45 px-5 py-4"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <p className="flex items-center gap-2 font-mono text-2xl font-bold text-gold sm:text-3xl">
                <Heart className="h-7 w-7 fill-gold text-gold" aria-hidden />
                Obuasi&apos;s
              </p>
              <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                own
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative min-h-[560px]"
        >
          <motion.div
            aria-hidden
            className="absolute right-2 top-2 z-40 grid h-24 w-24 place-items-center rounded-full border border-gold/35 bg-gold/10 text-gold-light backdrop-blur"
            animate={{ rotate: [0, 12, -8, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-10 w-10" />
          </motion.div>

          <div className="relative mx-auto max-w-[520px] pt-14">
            {photos.map((photo, index) => (
              <motion.figure
                key={photo.src}
                className={`relative w-[82%] bg-cream p-3 shadow-2xl ${photo.rotate} ${photo.offset}`}
                initial={{ opacity: 0, y: 60, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.14, type: "spring", stiffness: 160, damping: 18 }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={620}
                  loading="lazy"
                  className="h-56 w-full object-cover sm:h-64"
                />
                <figcaption className="px-1 pt-3 font-accent text-xl italic text-surface">
                  EDMA moments
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
