"use client";

import { motion } from "framer-motion";
import { LightningMark } from "./Logo";

export function BillCard({
  amount,
  provider = "PROVIDER •••• ••••",
  period = "AUG 2026",
  floating = true,
  className = "",
}: {
  amount: string;
  provider?: string;
  period?: string;
  floating?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      animate={
        floating
          ? { y: [0, -10, 0] }
          : undefined
      }
      transition={
        floating
          ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
      className={`relative w-[280px] sm:w-[320px] rounded-2xl border border-line bg-panel p-6 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,217,0,0.25), transparent 70%)",
        }}
      />

      <div className="flex items-center justify-between">
        <span className="eyebrow">Electricity bill</span>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow/10">
          <LightningMark className="h-3.5 w-3.5 text-yellow" />
        </div>
      </div>

      <div className="mt-6">
        <div className="text-4xl font-black tabular-nums text-white sm:text-5xl">
          {amount}
        </div>
      </div>

      <div className="hairline my-6" />

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-grey-2">Provider</span>
          <span className="tracking-widest text-grey-2">{provider}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-grey-2">Billing period</span>
          <span className="text-white/80">{period}</span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 rounded-full border border-yellow/30 bg-yellow/5 px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
        <span className="text-xs font-semibold tracking-wide text-yellow">
          Eligible for reward
        </span>
      </div>
    </motion.div>
  );
}
