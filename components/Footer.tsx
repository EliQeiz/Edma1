"use client";

import { motion } from "framer-motion";
import { Instagram, MapPin, Music2, Phone } from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "./motionPresets";

const quickLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
  { label: "Order Online", href: "https://obuasimart.com/", external: true }
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-bg px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute inset-0 grain opacity-70" aria-hidden />

      <motion.div
        className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div variants={fadeUp}>
          <p className="gold-text font-display text-6xl font-black leading-none tracking-normal">
            EDMA
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.24em] text-muted">
            Restaurant · Obuasi
          </p>
          <p className="mt-6 max-w-sm text-sm font-light leading-7 text-cream/70">
            Your ultimate destination for delicious continental and authentic local dishes.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-gold">
            Quick Links
          </h3>
          <div className="mt-6 grid gap-3">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="focus-ring w-fit text-sm text-cream/70 transition-colors hover:text-gold-light"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-gold">
            Contact & Social
          </h3>
          <div className="mt-6 grid gap-4 text-sm text-cream/72">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
              Obuasi, Ashanti Region, Ghana
            </p>
            <a
              href="tel:+233209328888"
              className="focus-ring flex w-fit items-center gap-3 transition-colors hover:text-gold-light"
            >
              <Phone className="h-5 w-5 text-gold" aria-hidden />
              +233 20 932 8888
            </a>
          </div>

          <div className="mt-7 flex gap-3">
            <motion.a
              href="https://www.instagram.com/edmarestaurant.obuasi/"
              target="_blank"
              rel="noreferrer"
              aria-label="EDMA Restaurant on Instagram"
              className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-gold/20 bg-surface text-gold"
              whileHover={{ scale: 1.12, rotate: 8 }}
              whileTap={{ scale: 0.94 }}
            >
              <Instagram className="h-5 w-5" aria-hidden />
            </motion.a>
            <motion.a
              href="https://www.tiktok.com/@edmarestaurant.obuasi"
              target="_blank"
              rel="noreferrer"
              aria-label="EDMA Restaurant on TikTok"
              className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-gold/20 bg-surface text-gold"
              whileHover={{ scale: 1.12, rotate: -8 }}
              whileTap={{ scale: 0.94 }}
            >
              <Music2 className="h-5 w-5" aria-hidden />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative mx-auto mt-14 max-w-7xl border-t border-divider pt-6 text-center font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
        © 2025 EDMA Restaurant. All rights reserved. | Made with ❤️ in Obuasi
      </div>
    </footer>
  );
}
