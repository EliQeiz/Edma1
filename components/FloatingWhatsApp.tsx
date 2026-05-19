"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/233209328888"
      target="_blank"
      rel="noreferrer"
      aria-label="Message EDMA Restaurant on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_50px_rgba(37,211,102,0.38)]"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.8, type: "spring", stiffness: 220, damping: 16 }}
      whileHover={{ scale: 1.08, rotate: -4 }}
      whileTap={{ scale: 0.94 }}
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </motion.a>
  );
}
