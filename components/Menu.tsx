"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { brand } from "@/lib/brand";
import { categories, menuItems } from "@/lib/menuData";
import type { MenuCategory } from "@/lib/menuData";
import { fadeUp, staggerContainer, viewport } from "./motionPresets";

type CategoryFilter = (typeof categories)[number];

const badgeColors: Record<MenuCategory, string> = {
  "Jollof Packs": "bg-gold text-bg",
  "Proteins & Add-ons": "bg-ember text-white",
  "Pies & Sides": "bg-cream text-bg",
  "Catering Trays": "bg-green text-white"
};

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: (index: number) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: index * 0.045, type: "spring", stiffness: 190, damping: 20 } }),
  exit: { opacity: 0, y: 20, scale: 0.97, transition: { duration: 0.2 } },
  hover: { y: -7, transition: { type: "spring", stiffness: 260, damping: 18 } }
};

export default function Menu() {
  const [active, setActive] = useState<CategoryFilter>("All");
  const filteredItems = useMemo(() => active === "All" ? menuItems : menuItems.filter((item) => item.category === active), [active]);

  return (
    <section id="menu" className="relative overflow-hidden bg-bg px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 grain opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <motion.div className="mx-auto max-w-3xl text-center" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.p variants={fadeUp} className="font-mono text-xs font-bold uppercase text-gold">Choose your vibe</motion.p>
          <motion.h2 variants={fadeUp} className="mt-5 font-display text-5xl font-black leading-[0.95] text-cream sm:text-6xl lg:text-7xl">Jollof for every kind of hunger</motion.h2>
          <motion.p variants={fadeUp} className="mt-6 font-accent text-3xl italic text-gold-light">Build your pack, share a tray or feed the whole celebration.</motion.p>
        </motion.div>

        <div className="gallery-scroll mx-auto mt-12 flex max-w-5xl gap-2 overflow-x-auto rounded-full border border-gold/20 bg-surface/45 p-2">
          {categories.map((category) => {
            const selected = active === category;
            return <button key={category} type="button" aria-pressed={selected} className="focus-ring relative shrink-0 rounded-full px-5 py-3 font-mono text-[0.68rem] font-bold uppercase text-cream" onClick={() => setActive(category)}>
              {selected ? <motion.span layoutId="activeTab" className="absolute inset-0 rounded-full bg-gold" transition={{ type: "spring", stiffness: 360, damping: 28 }} /> : null}
              <span className={`relative z-10 ${selected ? "text-bg" : "text-cream/72"}`}>{category}</span>
            </button>;
          })}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.article layout key={item.id} custom={index} variants={cardVariants} initial="hidden" animate="visible" exit="exit" whileHover="hover" className="group overflow-hidden rounded-[8px] border border-gold/12 bg-surface shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.name} width={1000} height={750} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-transparent to-transparent" />
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 font-mono text-[0.64rem] font-bold uppercase ${badgeColors[item.category]}`}>{item.badge}</span>
                </div>
                <div className="p-6">
                  <p className="font-mono text-[0.68rem] uppercase text-gold-light/75">{item.category}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-white">{item.name}</h3>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-cream/68">{item.desc}</p>
                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-gold/12 pt-5">
                    <p className="font-mono text-xs font-bold uppercase text-gold">{item.serving}</p>
                    <a href={`${brand.whatsapp}?text=Hello%20Jollof%20Vibes%2C%20I%27d%20like%20to%20order%20${encodeURIComponent(item.name)}.`} target="_blank" rel="noreferrer" aria-label={`Order ${item.name} on WhatsApp`} className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-gold text-bg transition-transform group-hover:rotate-6"><ArrowUpRight className="h-5 w-5" aria-hidden /></a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div className="mt-12 flex justify-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport}>
          <a href={`${brand.whatsapp}?text=Hello%20Jollof%20Vibes%2C%20please%20send%20me%20your%20current%20menu%20and%20prices.`} target="_blank" rel="noreferrer" className="focus-ring flex items-center gap-3 rounded-full border border-gold/30 px-7 py-4 font-mono text-xs font-bold uppercase text-cream transition-colors hover:bg-gold hover:text-bg"><MessageCircle className="h-5 w-5" />Ask for today&apos;s menu & prices</a>
        </motion.div>
      </div>
    </section>
  );
}
