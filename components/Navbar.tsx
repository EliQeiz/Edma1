"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { CookingPot, Menu as MenuIcon, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand } from "@/lib/brand";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Our promise", href: "#about" },
  { label: "Catering", href: "#catering" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 32));

  const goToSection = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const solid = scrolled || isMobile || open;

  return (
    <motion.nav
      className="fixed inset-x-0 top-0 z-50 border-b px-4 py-3 sm:px-6 lg:px-8"
      animate={{
        backgroundColor: solid ? "rgba(38, 6, 7, 0.96)" : "rgba(38, 6, 7, 0)",
        borderColor: solid ? "rgba(217, 148, 18, 0.22)" : "rgba(217, 148, 18, 0)",
        backdropFilter: solid ? "blur(18px)" : "blur(0px)"
      }}
      transition={{ duration: 0.28 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <button type="button" className="focus-ring flex items-center gap-3 text-left" onClick={() => goToSection("#top")} aria-label="Go to top">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-gold text-bg">
            <CookingPot className="h-6 w-6" aria-hidden />
          </span>
          <span>
            <span className="gold-text block font-display text-2xl font-black leading-none sm:text-3xl">Jollof Vibes</span>
            <span className="mt-1 block font-mono text-[0.58rem] uppercase text-cream/60">Good Food. Great Love.</span>
          </span>
        </button>

        <motion.div className="hidden items-center gap-7 md:flex" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.18 } } }}>
          {navLinks.map((link) => (
            <motion.button key={link.href} type="button" className="focus-ring text-sm font-medium text-cream/80 transition-colors hover:text-gold-light" variants={{ hidden: { opacity: 0, y: -14 }, visible: { opacity: 1, y: 0 } }} onClick={() => goToSection(link.href)}>
              {link.label}
            </motion.button>
          ))}
        </motion.div>

        <div className="flex items-center gap-3">
          <motion.a href={`${brand.whatsapp}?text=Hello%20Jollof%20Vibes%2C%20I%27d%20like%20to%20place%20an%20order.`} target="_blank" rel="noreferrer" className="focus-ring hidden items-center gap-2 rounded-full bg-gold px-5 py-3 font-mono text-xs font-bold uppercase text-bg shadow-gold sm:flex" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.96 }}>
            <MessageCircle className="h-4 w-4" aria-hidden />
            Order now
          </motion.a>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-gold/30 bg-surface/80 text-cream md:hidden" onClick={() => setOpen((value) => !value)}>
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[8px] border border-gold/20 bg-bg/98 md:hidden" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
            <div className="grid gap-1 p-2">
              {navLinks.map((link) => <button key={link.href} type="button" className="focus-ring rounded-[6px] px-4 py-3 text-left font-mono text-xs uppercase text-cream/85 hover:bg-gold/10" onClick={() => goToSection(link.href)}>{link.label}</button>)}
              <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="focus-ring mt-1 rounded-[6px] bg-gold px-4 py-3 text-center font-mono text-xs font-bold uppercase text-bg" onClick={() => setOpen(false)}>Order on WhatsApp</a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
