"use client";

import { motion } from "framer-motion";
import { TOKEN_SYMBOL } from "@/config/watt";

const FLOW = ["USE POWER", "SUBMIT BILL", "GET REWARDED"];

export function WattEconomy() {
  return (
    <section className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black tracking-tight sm:text-6xl"
        >
          POWERED BY <span className="text-yellow">{TOKEN_SYMBOL}.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-lg text-lg text-grey-2"
        >
          A portion of {TOKEN_SYMBOL} activity funds the WATT reward pool.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          {FLOW.map((step, i) => (
            <div key={step} className="flex items-center gap-4 sm:gap-6">
              <span className="rounded-full border border-line px-5 py-2.5 text-sm font-bold tracking-wide">
                {step}
              </span>
              {i < FLOW.length - 1 && (
                <span className="text-xl text-yellow">→</span>
              )}
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-base font-semibold text-white/80"
        >
          {TOKEN_SYMBOL} holders receive an enhanced reward rate.
        </motion.p>
      </div>
    </section>
  );
}
