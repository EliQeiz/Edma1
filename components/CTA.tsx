"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, UtensilsCrossed } from "lucide-react";
import { brand } from "@/lib/brand";
import { springTap } from "./motionPresets";

const words = "Your next good meal starts here.".split(" ");

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-4 py-24 text-cream sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[url('/images/catering-spread.webp')] bg-cover bg-center" aria-hidden />
      <div className="absolute inset-0 bg-bg/88" aria-hidden />
      <div className="absolute inset-0 grain opacity-55" aria-hidden />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div className="grid h-20 w-20 place-items-center rounded-full bg-gold text-bg shadow-gold" initial={{ opacity: 0, scale: 0.7, rotate: -12 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ type: "spring", stiffness: 180, damping: 14 }} animate={{ y: [0, -7, 0] }}>
          <UtensilsCrossed className="h-9 w-9" aria-hidden />
        </motion.div>

        <motion.h2 className="mt-8 flex flex-wrap justify-center gap-x-3 gap-y-1 font-display text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.075 } } }}>
          {words.map((word, index) => <motion.span key={`${word}-${index}`} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>{word}</motion.span>)}
        </motion.h2>

        <motion.p className="mt-6 max-w-2xl text-lg leading-8 text-cream/78" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}>
          Tell us what you are craving, how many people you are feeding and when you need it. We will help you put the right pack or tray together.
        </motion.p>

        <motion.div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}>
          <motion.a href={`${brand.whatsapp}?text=Hello%20Jollof%20Vibes%2C%20I%27d%20like%20to%20place%20an%20order.`} target="_blank" rel="noreferrer" className="focus-ring flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 font-mono text-sm font-bold uppercase text-bg shadow-gold" whileHover={{ scale: 1.05, y: -2 }} whileTap={springTap}>
            <MessageCircle className="h-5 w-5" aria-hidden />
            WhatsApp {brand.phoneDisplay}
          </motion.a>
          <motion.a href={brand.phoneHref} className="focus-ring flex items-center justify-center gap-3 rounded-full border border-cream/45 bg-cream/10 px-7 py-4 font-mono text-sm font-bold uppercase text-cream backdrop-blur" whileHover={{ scale: 1.05, y: -2 }} whileTap={springTap}>
            <Phone className="h-5 w-5" aria-hidden />
            Call to enquire
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
