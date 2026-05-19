"use client";

import { motion } from "framer-motion";

const tickerItems = [
  "🍽️ Obuasi's Favourite Restaurant",
  "⭐ 1 Year & Growing Strong",
  "🔥 Best Jollof in Town",
  "📍 Serving Obuasi Daily",
  "❤️ Local Flavours, Premium Quality",
  "🏆 The Most Wanted is BACK"
];

export default function Ticker() {
  const loop = [...tickerItems, ...tickerItems];

  return (
    <section className="overflow-hidden border-y border-gold/20 bg-gold py-4 text-bg">
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap font-mono text-sm font-bold uppercase tracking-[0.16em] sm:text-base"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        whileHover={{ scale: 1.01 }}
      >
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-8">
            {item}
            <span className="h-2 w-2 rounded-full bg-bg/50" aria-hidden />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
