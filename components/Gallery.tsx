"use client";

import { motion, useDragControls } from "framer-motion";
import { Bike, MapPin, PartyPopper } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { fadeUp, staggerContainer, viewport } from "./motionPresets";

const galleryImages = [
  { src: "/images/catering-spread.webp", alt: "Full Jollof Vibes catering spread", label: "Celebration spread" },
  { src: "/images/jollof-hero.webp", alt: "Large jollof tray with chicken and plantain", label: "Family tray" },
  { src: "/images/assorted-jollof.webp", alt: "Assorted jollof with meats and sausage", label: "Assorted jollof" },
  { src: "/images/goat-jollof.webp", alt: "Jollof rice with goat meat and plantain", label: "Goat meat pack" },
  { src: "/images/meat-pies-sausages.webp", alt: "Fresh meat pies and sausages", label: "Fresh sides" },
  { src: "/images/fresh-salad.webp", alt: "Fresh vegetable and egg salad", label: "Fresh salad" }
];

export default function Gallery() {
  const dragControls = useDragControls();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [dragLimit, setDragLimit] = useState(0);
  const [grabbing, setGrabbing] = useState(false);

  useEffect(() => {
    const update = () => { const node = trackRef.current; if (node) setDragLimit(Math.max(node.scrollWidth - (node.parentElement?.clientWidth ?? 0), 0)); };
    update(); window.addEventListener("resize", update); return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section id="catering" className="overflow-hidden bg-cream py-24 text-bg lg:py-32">
      <motion.div className="mx-auto max-w-4xl px-4 text-center sm:px-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
        <motion.p variants={fadeUp} className="font-mono text-xs font-bold uppercase text-ember">Catering & family trays</motion.p>
        <motion.h2 variants={fadeUp} className="mt-5 font-display text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">Bring the vibes to your table</motion.h2>
        <motion.p variants={fadeUp} className="mt-5 font-accent text-3xl italic text-ember">From a quiet family meal to a full celebration spread.</motion.p>
      </motion.div>

      <motion.div className={`gallery-scroll mt-14 overflow-x-auto px-4 sm:px-6 lg:px-8 ${grabbing ? "cursor-grabbing" : "cursor-grab"}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewport}>
        <motion.div ref={trackRef} className="flex w-max items-stretch pb-6" drag="x" dragControls={dragControls} dragListener={false} dragConstraints={{ left: -dragLimit, right: 0 }} dragElastic={0.08} onPointerDown={(event) => { setGrabbing(true); dragControls.start(event); }} onPointerUp={() => setGrabbing(false)} onPointerCancel={() => setGrabbing(false)}>
          {galleryImages.map((image, index) => (
            <motion.figure key={image.src} className="relative -ml-7 first:ml-0 sm:-ml-10" initial={{ opacity: 0, x: 70 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewport} transition={{ delay: index * 0.07, duration: 0.6 }}>
              <motion.div className="relative h-[430px] w-[300px] overflow-hidden rounded-[8px] border-8 border-white shadow-2xl sm:h-[500px] sm:w-[380px]" whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 220, damping: 18 }}>
                <img src={image.src} alt={image.alt} width={1000} height={1000} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent p-6 pt-20 font-display text-2xl font-bold text-cream">{image.label}</div>
              </motion.div>
            </motion.figure>
          ))}
        </motion.div>
      </motion.div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-px overflow-hidden rounded-[8px] border border-bg/12 bg-bg/12 px-4 sm:grid-cols-3 sm:px-0">
        {[{ label: "Events big or small", icon: PartyPopper }, { label: "Agona Swedru", icon: MapPin }, { label: "Delivery available", icon: Bike }].map(({ label, icon: Icon }) => <motion.div key={label} className="flex items-center justify-center gap-3 bg-white px-5 py-5 text-center font-mono text-xs font-bold uppercase" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport}><Icon className="h-5 w-5 text-gold" aria-hidden />{label}</motion.div>)}
      </div>
    </section>
  );
}
