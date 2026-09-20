"use client";

import { motion } from "framer-motion";
import { BillCard } from "./BillCard";
import { ElectricTrace } from "./ElectricTrace";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-40 sm:px-10 sm:pt-48 lg:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[560px] w-[560px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, rgba(255,217,0,0.5), transparent 70%)" }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-3 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-yellow" />
            </span>
            <span className="eyebrow text-grey-2">ELECTRICITY NEVER STOPS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[13vw] font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[6.4vw] xl:text-[92px]"
          >
            YOUR POWER
            <br />
            PAYS <span className="text-yellow glow-text">YOU BACK.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-md text-lg text-grey-2"
          >
            Submit your electricity bill.
            <br />
            Get rewarded by WATT.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a href="#upload" className="btn btn-primary text-sm">
              SUBMIT YOUR BILL
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-semibold text-grey-2 transition-colors hover:text-white"
            >
              HOW IT WORKS →
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div
            aria-hidden
            className="circuit-grid pointer-events-none absolute -inset-20"
          />
          <ElectricTrace
            viewBox="0 0 420 520"
            d="M 10 60 L 150 60 L 150 170 L 260 170"
            duration={3.2}
            className="pointer-events-none absolute -left-6 -top-10 h-[520px] w-[420px] opacity-70"
          />
          <ElectricTrace
            viewBox="0 0 420 520"
            d="M 410 470 L 270 470 L 270 350 L 160 350"
            duration={3.8}
            delay={1.1}
            className="pointer-events-none absolute -left-6 -top-10 h-[520px] w-[420px] opacity-70"
          />
          <BillCard amount="€184.20" />
        </motion.div>
      </div>
    </section>
  );
}
