"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu as MenuIcon, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
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

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 32);
  });

  const goToSection = (href: string) => {
    setOpen(false);
    const node = document.querySelector(href);
    node?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      className="fixed left-0 right-0 top-0 z-50 border-b px-4 py-4 sm:px-6 lg:px-8"
      animate={{
        backgroundColor:
          scrolled || isMobile || open ? "rgba(13, 10, 7, 0.95)" : "rgba(13, 10, 7, 0)",
        borderColor:
          scrolled || isMobile || open ? "rgba(232, 160, 32, 0.18)" : "rgba(232, 160, 32, 0)",
        backdropFilter: scrolled || isMobile || open ? "blur(18px)" : "blur(0px)"
      }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <button
          type="button"
          className="focus-ring text-left"
          onClick={() => goToSection("#top")}
          aria-label="Go to top"
        >
          <span className="gold-text block font-display text-4xl font-black leading-none tracking-normal">
            EDMA
          </span>
          <span className="mt-1 block font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
            Restaurant · Obuasi
          </span>
        </button>

        <motion.div
          className="hidden items-center gap-8 md:flex"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
        >
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              type="button"
              className="focus-ring font-body text-sm font-medium text-cream/80 transition-colors hover:text-gold-light"
              variants={{
                hidden: { opacity: 0, y: -18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
              }}
              onClick={() => goToSection(link.href)}
            >
              {link.label}
            </motion.button>
          ))}
        </motion.div>

        <div className="flex items-center gap-3">
          <motion.a
            href="https://obuasimart.com/"
            target="_blank"
            rel="noreferrer"
            className="focus-ring hidden items-center gap-2 rounded-full bg-ember px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white shadow-ember sm:flex"
            animate={{
              scale: [1, 1.035, 1],
              boxShadow: [
                "0 0 0 rgba(201,75,31,0)",
                "0 0 36px rgba(201,75,31,0.34)",
                "0 0 0 rgba(201,75,31,0)"
              ]
            }}
            transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            <ShoppingBag className="h-4 w-4" aria-hidden />
            Order Now
          </motion.a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-gold/25 bg-surface/70 text-cream md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mx-auto mt-4 max-w-7xl overflow-hidden rounded-[8px] border border-gold/15 bg-bg/95 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="grid gap-1 p-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  className="focus-ring rounded-[6px] px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.18em] text-cream/85 hover:bg-gold/10"
                  onClick={() => goToSection(link.href)}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://obuasimart.com/"
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-1 rounded-[6px] bg-ember px-4 py-3 text-center font-mono text-xs font-bold uppercase tracking-[0.18em] text-white"
                onClick={() => setOpen(false)}
              >
                Order Now
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
