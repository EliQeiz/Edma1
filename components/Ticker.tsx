"use client";

import { motion } from "framer-motion";

const tickerItems = ["Smoky Ghanaian Jollof", "Individual Packs", "Family Trays", "Event Catering", "Delivery Available", "Made With Love"];

export default function Ticker() {
  const loop = [...tickerItems, ...tickerItems];
  return (
    <section className="overflow-hidden border-y border-bg/20 bg-gold py-4 text-bg">
      <motion.div className="flex w-max items-center gap-8 whitespace-nowrap font-mono text-sm font-bold uppercase sm:text-base" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 24, ease: "linear" }}>
        {loop.map((item, index) => <span key={`${item}-${index}`} className="flex items-center gap-8">{item}<span className="h-2 w-2 rounded-full bg-ember" aria-hidden /></span>)}
      </motion.div>
    </section>
  );
}
