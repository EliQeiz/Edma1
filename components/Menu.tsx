"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, menuItems } from "@/lib/menuData";
import type { MenuCategory } from "@/lib/menuData";
import { fadeUp, staggerContainer, viewport } from "./motionPresets";

type CategoryFilter = (typeof categories)[number];

const badgeColors: Record<MenuCategory, string> = {
  Continental: "bg-ember/95 text-white",
  "Rice & Noodles": "bg-gold text-bg",
  "Local Dishes": "bg-green text-cream",
  "Sides & Salads": "bg-cream text-bg"
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.05,
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }),
  exit: { opacity: 0, y: 24, scale: 0.96, transition: { duration: 0.2 } },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { type: "spring", stiffness: 260, damping: 18 }
  }
};

const overlayVariants = {
  hidden: { y: "100%" },
  visible: { y: "100%" },
  exit: { y: "100%" },
  hover: { y: 0, transition: { type: "spring", stiffness: 240, damping: 22 } }
};

export default function Menu() {
  const [active, setActive] = useState<CategoryFilter>("All");

  const filteredItems = useMemo(() => {
    if (active === "All") {
      return menuItems;
    }

    return menuItems.filter((item) => item.category === active);
  }, [active]);

  return (
    <section id="menu" className="relative overflow-hidden bg-[#100b07] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 grain opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p variants={fadeUp} className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-gold">
            What We Serve
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-5xl font-black leading-[0.95] tracking-normal text-cream sm:text-6xl lg:text-7xl"
          >
            A Taste of Ghana, For Everyone
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 font-accent text-3xl italic text-gold-light/90">
            Your ultimate destination for delicious continental and authentic local dishes
          </motion.p>
        </motion.div>

        <div className="gallery-scroll mx-auto mt-12 flex max-w-4xl gap-3 overflow-x-auto rounded-full border border-gold/15 bg-bg/55 p-2 backdrop-blur">
          {categories.map((category) => {
            const selected = active === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={selected}
                className="focus-ring relative shrink-0 rounded-full px-5 py-3 font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cream transition-colors"
                onClick={() => setActive(category)}
              >
                {selected ? (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 360, damping: 28 }}
                  />
                ) : null}
                <span className={`relative z-10 ${selected ? "text-bg" : "text-cream/72"}`}>
                  {category}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.article
                layout
                key={item.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
                className="group relative overflow-hidden rounded-[8px] border border-gold/10 bg-surface shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={600}
                    height={450}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/15 to-transparent" />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1.5 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] ${badgeColors[item.category]}`}
                  >
                    {item.badge}
                  </span>
                </div>

                <div className="relative min-h-[190px] p-6">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                    {item.category}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-bold leading-tight tracking-normal text-white">
                    {item.name}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-cream/68">{item.desc}</p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <p className="font-mono text-xl font-bold text-gold">GHS {item.price}</p>
                    <ShoppingBag className="h-5 w-5 text-gold/70" aria-hidden />
                  </div>
                </div>

                <motion.div
                  variants={overlayVariants}
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-ember to-gold p-4"
                >
                  <a
                    href={`https://wa.me/233209328888?text=Hello%20EDMA%2C%20I%27d%20like%20to%20order%20${encodeURIComponent(
                      item.name
                    )}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring flex items-center justify-center gap-2 rounded-full bg-bg px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-cream"
                  >
                    Order
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </motion.div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
