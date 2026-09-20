"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollCurrent() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 20,
    mass: 0.4,
  });

  const dotTop = useTransform(smoothProgress, (v) => `${v * 100}%`);
  const dotOpacity = useTransform(smoothProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 left-[10px] z-40 hidden w-px sm:left-[18px] sm:block lg:left-[30px]"
    >
      <div className="absolute inset-0 w-px bg-white/[0.06]" />

      <motion.div
        className="absolute inset-x-0 top-0 w-px origin-top"
        style={{
          scaleY: smoothProgress,
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(255,217,0,0.95), rgba(255,217,0,0.35) 60%, rgba(255,217,0,0.05))",
        }}
      />

      <motion.div
        className="absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow"
        style={{
          top: dotTop,
          opacity: dotOpacity,
          boxShadow:
            "0 0 4px 1px rgba(255,217,0,0.95), 0 0 18px 6px rgba(255,217,0,0.55)",
        }}
      />
    </div>
  );
}
