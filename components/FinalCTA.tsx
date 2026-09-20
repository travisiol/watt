"use client";

import { motion } from "framer-motion";
import { APP_URL } from "@/config/watt";
import { LightningMark } from "./Logo";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-yellow px-6 py-28 text-black sm:px-10 sm:py-36">
      <LightningMark className="pointer-events-none absolute -right-10 -top-16 h-72 w-72 text-black/10 sm:h-[26rem] sm:w-[26rem]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-black leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl"
        >
          YOUR NEXT BILL
          <br />
          COULD PAY YOU BACK.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <a href={APP_URL} className="btn btn-dark text-sm">
            GET WATT
          </a>
          <span className="text-sm font-semibold text-black/60">
            Get rewarded for power.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
