"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  DEMO_BILL_DEFAULT,
  DEMO_BILL_MAX,
  DEMO_BILL_MIN,
  formatCurrency,
  holderReward,
  standardReward,
  BASE_REWARD_PERCENT,
  HOLDER_REWARD_PERCENT,
} from "@/config/watt";

export function BillCalculator() {
  const [amount, setAmount] = useState(DEMO_BILL_DEFAULT);

  const standard = standardReward(amount);
  const holder = holderReward(amount);

  return (
    <section className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl"
        >
          YOUR BILL IS
          <br />
          WORTH MORE.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-line bg-panel p-7 sm:p-9"
          >
            <div className="flex items-center justify-between">
              <span className="eyebrow">Electricity bill</span>
              <span className="text-xs text-grey-2">DEMO</span>
            </div>

            <div className="mt-5 text-5xl font-black tabular-nums sm:text-6xl">
              {formatCurrency(amount)}
            </div>

            <input
              type="range"
              min={DEMO_BILL_MIN}
              max={DEMO_BILL_MAX}
              step={0.1}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="range-yellow mt-8 w-full"
              aria-label="Bill amount"
            />
            <div className="mt-2 flex justify-between text-xs text-grey-2">
              <span>{formatCurrency(DEMO_BILL_MIN)}</span>
              <span>{formatCurrency(DEMO_BILL_MAX)}</span>
            </div>

            <div className="hairline my-7" />

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-grey-2">Provider</span>
                <span className="tracking-widest text-grey-2">••••••••</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-grey-2">Billing period</span>
                <span className="text-white/80">AUG 2026</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center gap-4"
          >
            <div className="rounded-2xl border border-line p-7">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-grey-2">
                  Standard reward · {BASE_REWARD_PERCENT}%
                </span>
              </div>
              <div className="mt-2 text-4xl font-black tabular-nums sm:text-5xl">
                {formatCurrency(standard)}
              </div>
            </div>

            <div className="rounded-2xl border border-yellow/40 bg-yellow/5 p-7">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-yellow">
                  With {"$WATT"} · {HOLDER_REWARD_PERCENT}%
                </span>
              </div>
              <div className="mt-2 text-4xl font-black tabular-nums text-yellow sm:text-5xl">
                {formatCurrency(holder)}
              </div>
            </div>

            <p className="mt-1 text-xs text-grey-2">
              Demo calculator. Not a claim about an actual submitted bill.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
