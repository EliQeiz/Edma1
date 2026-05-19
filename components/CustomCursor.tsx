"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const cursorX = useSpring(mouseX, { stiffness: 280, damping: 26, mass: 0.4 });
  const cursorY = useSpring(mouseY, { stiffness: 280, damping: 26, mass: 0.4 });
  const dotX = useSpring(mouseX, { stiffness: 600, damping: 32 });
  const dotY = useSpring(mouseY, { stiffness: 600, damping: 32 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(finePointer);

    if (!finePointer) {
      return undefined;
    }

    document.body.classList.add("has-custom-cursor");

    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX - 16);
      mouseY.set(event.clientY - 16);
    };

    window.addEventListener("mousemove", move);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[120] h-8 w-8 rounded-full border border-gold/80 mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[121] h-2 w-2 rounded-full bg-gold-light"
        style={{ x: dotX, y: dotY }}
      />
    </>
  );
}
