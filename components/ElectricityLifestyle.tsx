"use client";

import { motion } from "framer-motion";
import { AirVent, Gauge, Lamp, Lightbulb, Plug, WashingMachine } from "lucide-react";

const TILES = [
  { icon: AirVent, label: "Air conditioning" },
  { icon: Lightbulb, label: "Apartment lights" },
  { icon: Lamp, label: "Street lamps" },
  { icon: WashingMachine, label: "Washing machine" },
  { icon: Plug, label: "Every outlet" },
  { icon: Gauge, label: "The meter, running" },
];

export function ElectricityLifestyle() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-black-2 px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            YOU ALREADY PAY FOR POWER.
          </h2>
          <p className="mt-5 text-lg text-grey-2">WATT gives something back.</p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {TILES.map((tile, i) => {
            const Icon = tile.icon;
            return (
              <motion.div
                key={tile.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group flex aspect-square flex-col items-center justify-center gap-4 rounded-2xl border border-line bg-panel/40 transition-colors hover:border-yellow/30"
              >
                <Icon
                  className="h-8 w-8 text-grey-2 transition-colors group-hover:text-yellow sm:h-9 sm:w-9"
                  strokeWidth={1.5}
                />
                <span className="px-4 text-center text-xs text-grey-2 sm:text-sm">
                  {tile.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
