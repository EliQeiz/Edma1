"use client";

import { motion } from "framer-motion";
import { CookingPot, MapPin, MessageCircle, Phone } from "lucide-react";
import { brand } from "@/lib/brand";
import { fadeUp, staggerContainer, viewport } from "./motionPresets";

const quickLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Our promise", href: "#about" },
  { label: "Catering", href: "#catering" },
  { label: "Contact", href: "#contact" }
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-bg px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute inset-0 grain opacity-60" aria-hidden />
      <motion.div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.7fr_1fr]" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
        <motion.div variants={fadeUp}>
          <div className="flex items-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-gold text-bg"><CookingPot className="h-7 w-7" /></span>
            <div>
              <p className="gold-text font-display text-4xl font-black leading-none">Jollof Vibes</p>
              <p className="mt-1 font-mono text-[0.65rem] uppercase text-muted">Good Food. Great Love.</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-cream/70">Individual jollof packs, family trays, event catering and delivery from Agona Swedru—prepared with love and served with excellence.</p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="font-mono text-xs font-bold uppercase text-gold">Quick links</h3>
          <div className="mt-6 grid gap-3">
            {quickLinks.map((link) => <a key={link.label} href={link.href} className="focus-ring w-fit text-sm text-cream/70 transition-colors hover:text-gold-light">{link.label}</a>)}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="font-mono text-xs font-bold uppercase text-gold">Order & enquiries</h3>
          <div className="mt-6 grid gap-4 text-sm text-cream/72">
            <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />{brand.location}</p>
            <a href={brand.phoneHref} className="focus-ring flex w-fit items-center gap-3 transition-colors hover:text-gold-light"><Phone className="h-5 w-5 text-gold" aria-hidden />{brand.phoneDisplay}</a>
            <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="focus-ring flex w-fit items-center gap-3 transition-colors hover:text-gold-light"><MessageCircle className="h-5 w-5 text-gold" aria-hidden />Chat on WhatsApp</a>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative mx-auto mt-14 max-w-7xl border-t border-divider pt-6 text-center font-mono text-[0.68rem] uppercase text-muted">© 2026 Jollof Vibes. Made with love in Agona Swedru.</div>
    </footer>
  );
}
