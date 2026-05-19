"use client";

import { motion } from "framer-motion";
import { Instagram, Phone, Utensils } from "lucide-react";
import { springTap } from "./motionPresets";

const words = "Ready to Taste the Difference?".split(" ");

const particles = [
  { icon: "🍛", left: "8%", top: "70%", duration: 10, delay: 0, rotate: [0, 14, -8, 0] },
  { icon: "🍗", left: "18%", top: "18%", duration: 12, delay: 0.5, rotate: [0, -18, 10, 0] },
  { icon: "🥘", left: "78%", top: "22%", duration: 11, delay: 0.2, rotate: [0, 12, 20, 0] },
  { icon: "🍚", left: "88%", top: "68%", duration: 13, delay: 0.8, rotate: [0, -12, 8, 0] },
  { icon: "🍕", left: "52%", top: "82%", duration: 14, delay: 0.35, rotate: [0, 16, -14, 0] }
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(120deg,#e8a020,#c94b1f,#f5c842,#c94b1f)] bg-[length:220%_220%] px-4 py-24 text-bg sm:px-6 lg:px-8">
      <motion.div
        aria-hidden
        className="absolute inset-0"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(232,160,32,0.2), rgba(201,75,31,0.28), rgba(245,200,66,0.16))",
          backgroundSize: "220% 220%"
        }}
      />
      <div className="absolute inset-0 grain opacity-50" aria-hidden />

      {particles.map((particle) => (
        <motion.span
          key={`${particle.icon}-${particle.left}`}
          aria-hidden
          className="pointer-events-none absolute text-4xl sm:text-5xl"
          style={{ left: particle.left, top: particle.top }}
          animate={{
            y: [0, -42, 0],
            opacity: [0.35, 0.85, 0.35],
            rotate: particle.rotate
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {particle.icon}
        </motion.span>
      ))}

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          className="grid h-20 w-20 place-items-center rounded-full border border-bg/20 bg-bg/15 text-bg"
          initial={{ opacity: 0, scale: 0.7, rotate: -16 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 180, damping: 14 }}
          animate={{ y: [0, -8, 0] }}
        >
          <Utensils className="h-9 w-9" aria-hidden />
        </motion.div>

        <motion.h2
          className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 font-display text-5xl font-black leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {words.map((word) => (
            <motion.span
              key={word}
              variants={{
                hidden: { opacity: 0, y: 34, rotate: 2 },
                visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.55 } }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          className="mt-6 max-w-2xl text-lg leading-8 text-bg/78"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Visit us in Obuasi or call ahead to reserve your table.
        </motion.p>

        <motion.div
          className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.a
            href="tel:+233209328888"
            className="focus-ring flex items-center justify-center gap-3 rounded-full border border-white/70 bg-white/10 px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.14em] text-white backdrop-blur"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={springTap}
          >
            <Phone className="h-5 w-5" aria-hidden />
            Call +233 20 932 8888
          </motion.a>
          <motion.a
            href="https://www.instagram.com/edmarestaurant.obuasi/"
            target="_blank"
            rel="noreferrer"
            className="focus-ring flex items-center justify-center gap-3 rounded-full bg-bg px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.14em] text-cream shadow-2xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={springTap}
          >
            <Instagram className="h-5 w-5" aria-hidden />
            Follow Us on Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
