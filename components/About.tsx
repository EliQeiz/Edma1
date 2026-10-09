"use client";

import { motion } from "framer-motion";
import { Bike, Heart, Package, Users, UtensilsCrossed } from "lucide-react";
import { fadeUp, slideLeft, slideRight, staggerContainer, viewport } from "./motionPresets";

const services = [
  { title: "Individual packs", copy: "Perfect for lunch, work or food on the go.", icon: Package },
  { title: "Family trays", copy: "Generous portions made for sharing at home.", icon: Users },
  { title: "Event catering", copy: "A full Jollof Vibes spread for occasions big or small.", icon: UtensilsCrossed },
  { title: "Delivery available", copy: "Freshly prepared and brought right to your door.", icon: Bike }
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream px-4 py-24 text-bg sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="font-mono text-xs font-bold uppercase text-ember">Our promise</p>
          <h2 className="mt-5 max-w-xl font-display text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">
            One pot. Plenty of joy.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-bg/72">
            Jollof Vibes is built around the food Ghana loves to gather around. Every pack and tray starts with richly seasoned jollof and is finished with the chicken, goat meat, eggs, sausages, meat pies, plantain and fresh salad that make it feel complete.
          </p>
          <div className="mt-7 flex items-center gap-3 font-accent text-3xl italic text-ember">
            <Heart className="h-7 w-7 fill-ember" aria-hidden />
            Made with love. Served with joy.
          </div>
        </motion.div>

        <motion.div className="relative min-h-[560px]" variants={slideRight} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.figure className="absolute left-0 top-6 w-[70%] overflow-hidden rounded-[8px] border-8 border-white shadow-2xl" initial={{ opacity: 0, y: 40, rotate: 0 }} whileInView={{ opacity: 1, y: 0, rotate: -3 }} viewport={viewport} transition={{ type: "spring", stiffness: 150, damping: 18 }}>
            <img src="/images/jollof-chicken-eggs.webp" alt="Ghanaian jollof rice with grilled chicken and boiled eggs" width={1000} height={1000} loading="lazy" className="h-80 w-full object-cover" />
          </motion.figure>
          <motion.figure className="absolute bottom-2 right-0 z-10 w-[64%] overflow-hidden rounded-[8px] border-8 border-white shadow-2xl" initial={{ opacity: 0, y: 50, rotate: 0 }} whileInView={{ opacity: 1, y: 0, rotate: 3 }} viewport={viewport} transition={{ delay: 0.15, type: "spring", stiffness: 150, damping: 18 }}>
            <img src="/images/meat-pies-sausages.webp" alt="Golden meat pies and grilled sausages" width={1000} height={1000} loading="lazy" className="h-72 w-full object-cover" />
          </motion.figure>
          <motion.div className="absolute right-5 top-0 z-20 grid h-28 w-28 place-items-center rounded-full bg-ember px-4 text-center font-mono text-xs font-bold uppercase text-cream shadow-ember" animate={{ rotate: [0, 6, -5, 0] }} transition={{ duration: 6, repeat: Infinity }}>
            Prepared with excellence
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="mx-auto mt-20 grid max-w-7xl gap-px overflow-hidden rounded-[8px] border border-bg/12 bg-bg/12 sm:grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
        {services.map(({ title, copy, icon: Icon }) => (
          <motion.div key={title} variants={fadeUp} className="bg-white p-7">
            <Icon className="h-7 w-7 text-gold" aria-hidden />
            <h3 className="mt-5 font-display text-2xl font-bold">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-bg/65">{copy}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
