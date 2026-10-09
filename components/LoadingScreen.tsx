"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CookingPot } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => { const timer = window.setTimeout(() => setShow(false), 1300); return () => window.clearTimeout(timer); }, []);
  return (
    <AnimatePresence>
      {show ? <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-bg grain" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.45 } }}>
        <motion.div className="text-center" initial={{ opacity: 0, y: 20, scale: 0.92 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7 }}>
          <motion.div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-gold text-bg" animate={{ y: [0, -7, 0] }} transition={{ duration: 1.2 }}><CookingPot className="h-8 w-8" /></motion.div>
          <p className="gold-text font-display text-5xl font-black sm:text-7xl">Jollof Vibes</p>
          <p className="mt-4 font-mono text-xs uppercase text-muted">Good Food. Great Love.</p>
        </motion.div>
      </motion.div> : null}
    </AnimatePresence>
  );
}
