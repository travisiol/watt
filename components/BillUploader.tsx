"use client";

import { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, FileText, Loader2, UploadCloud } from "lucide-react";

type Status = "idle" | "received" | "checking" | "ready";

const ACCEPTED = ["image/jpeg", "image/png", "application/pdf"];

export function BillUploader() {
  const [status, setStatus] = useState<Status>("idle");
  const [fileName, setFileName] = useState<string>("");
  const [dragActive, setDragActive] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const runDemoFlow = useCallback((file: File) => {
    if (!ACCEPTED.includes(file.type)) return;

    timers.current.forEach(clearTimeout);
    timers.current = [];

    setFileName(file.name);
    setStatus("received");

    timers.current.push(
      setTimeout(() => setStatus("checking"), 900),
      setTimeout(() => setStatus("ready"), 2400)
    );
  }, []);

  return (
    <section id="upload" className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
            SUBMIT YOUR BILL.
          </h2>
          <p className="mt-5 text-lg text-grey-2">
            JPG, PNG or PDF. This is a preview of the flow — verification
            connects later.
          </p>
        </motion.div>

        <motion.label
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragActive(false);
            const file = e.dataTransfer.files?.[0];
            if (file) runDemoFlow(file);
          }}
          className={`mt-12 flex min-h-[280px] cursor-pointer flex-col items-center justify-center gap-5 rounded-3xl border-2 border-dashed p-10 text-center transition-colors ${
            dragActive
              ? "border-yellow bg-yellow/5"
              : "border-line bg-panel/40 hover:border-grey"
          }`}
        >
          <input
            type="file"
            accept={ACCEPTED.join(",")}
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) runDemoFlow(file);
              e.target.value = "";
            }}
          />

          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-5"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line">
                  <UploadCloud className="h-7 w-7 text-yellow" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-lg font-bold tracking-tight">
                    DROP YOUR ELECTRICITY BILL
                  </div>
                  <div className="mt-1 text-sm text-grey-2">
                    or click to upload &middot; JPG, PNG, PDF
                  </div>
                </div>
              </motion.div>
            )}

            {status === "received" && (
              <motion.div
                key="received"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow/10">
                  <FileText className="h-7 w-7 text-yellow" strokeWidth={1.5} />
                </div>
                <div className="text-lg font-bold">Bill received ✓</div>
                <div className="max-w-[240px] truncate text-sm text-grey-2">
                  {fileName}
                </div>
              </motion.div>
            )}

            {status === "checking" && (
              <motion.div
                key="checking"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4"
              >
                <Loader2 className="h-8 w-8 animate-spin text-yellow" strokeWidth={1.75} />
                <div className="text-lg font-bold tracking-tight">
                  Checking bill...
                </div>
              </motion.div>
            )}

            {status === "ready" && (
              <motion.div
                key="ready"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow">
                  <Check className="h-7 w-7 text-black" strokeWidth={2.5} />
                </div>
                <div className="text-lg font-bold tracking-tight">
                  Bill ready for verification.
                </div>
                <div className="text-sm text-grey-2">
                  Demo preview &middot; no bill was actually processed.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.label>
      </div>
    </section>
  );
}
