"use client";

import { motion, useDragControls } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { fadeUp, staggerContainer, viewport } from "./motionPresets";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=900",
    alt: "Chef plating a colorful dish"
  },
  {
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=900",
    alt: "Restaurant table set with shared dishes"
  },
  {
    src: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=900",
    alt: "Rice and vegetables served in a bowl"
  },
  {
    src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=900",
    alt: "A plated restaurant dish with fresh garnish"
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900",
    alt: "Warm modern restaurant interior"
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900",
    alt: "Friends enjoying a restaurant meal together"
  }
];

const vibeStats = [
  { label: "Open Daily", icon: Clock },
  { label: "Obuasi, Ashanti", icon: MapPin },
  { label: "+233 20 932 8888", icon: Phone }
];

export default function Gallery() {
  const dragControls = useDragControls();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [dragLimit, setDragLimit] = useState(0);
  const [grabbing, setGrabbing] = useState(false);

  useEffect(() => {
    const updateDragLimit = () => {
      const node = trackRef.current;
      if (!node) {
        return;
      }

      const parentWidth = node.parentElement?.clientWidth ?? 0;
      setDragLimit(Math.max(node.scrollWidth - parentWidth, 0));
    };

    updateDragLimit();
    window.addEventListener("resize", updateDragLimit);
    return () => window.removeEventListener("resize", updateDragLimit);
  }, []);

  return (
    <section id="gallery" className="overflow-hidden bg-bg py-24 lg:py-32">
      <motion.div
        className="mx-auto max-w-4xl px-4 text-center sm:px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h2
          variants={fadeUp}
          className="font-display text-5xl font-black leading-[0.95] tracking-normal text-cream sm:text-6xl lg:text-7xl"
        >
          The EDMA Experience
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-5 font-accent text-3xl italic text-gold-light/90">
          More than a meal — it&apos;s a moment.
        </motion.p>
      </motion.div>

      <motion.div
        className={`gallery-scroll mt-14 overflow-x-auto px-4 sm:px-6 lg:px-8 ${
          grabbing ? "cursor-grabbing" : "cursor-grab"
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          ref={trackRef}
          className="flex w-max items-stretch pb-6"
          drag="x"
          dragControls={dragControls}
          dragListener={false}
          dragConstraints={{ left: -dragLimit, right: 0 }}
          dragElastic={0.08}
          onPointerDown={(event) => {
            setGrabbing(true);
            dragControls.start(event);
          }}
          onPointerUp={() => setGrabbing(false)}
          onPointerCancel={() => setGrabbing(false)}
        >
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.src}
              className="relative -ml-8 first:ml-0 sm:-ml-12"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="h-[420px] w-[300px] overflow-hidden rounded-[8px] border border-gold/12 bg-surface shadow-2xl sm:h-[500px] sm:w-[380px]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={760}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </motion.figure>
          ))}
        </motion.div>
      </motion.div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-3 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {vibeStats.map((stat) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              className="flex items-center justify-center gap-3 border border-gold/15 bg-surface/45 px-5 py-4 text-center font-mono text-xs font-bold uppercase tracking-[0.18em] text-cream/80"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
            >
              <Icon className="h-5 w-5 text-gold" aria-hidden />
              {stat.label}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
