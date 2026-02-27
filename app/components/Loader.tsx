"use client";

import { motion } from "framer-motion";

export default function Loader() {
  console.log("Loader rendered");
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        {/* Animated ring + center mark */}
        <div className="relative h-24 w-24">
          <motion.div
            className="absolute inset-0 rounded-full border border-white/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/25 border-t-white/80"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
          />

          <motion.div
            className="absolute inset-2 rounded-full border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
          >
            <div className="text-white font-semibold tracking-wide">
              2Reel
            </div>
          </motion.div>
        </div>

        {/* “Music • Video • Development” fade */}
        <motion.div
          className="text-xs text-white/50 tracking-[0.25em] uppercase"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          Music • Video • Development
        </motion.div>

        {/* Loading bar */}
        <div className="w-56 h-[2px] bg-white/10 overflow-hidden rounded">
          <motion.div
            className="h-full bg-white/70"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 0.9, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
}