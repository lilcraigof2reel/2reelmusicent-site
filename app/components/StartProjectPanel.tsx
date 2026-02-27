"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function StartProjectPanel({ isOpen, onClose }: Props) {
  const [step, setStep] = useState(1);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Slide Panel */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-zinc-900 text-white z-50 p-8 shadow-2xl overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold">Start Your Project</h2>
              <button onClick={onClose} className="text-white/60 hover:text-white">
                ✕
              </button>
            </div>

            {step === 1 && (
              <div className="space-y-6">
                <p className="text-white/70">What do you need?</p>
                <div className="space-y-3">
                  {["Music Production", "Video Production", "Artist Development", "Other"].map((item) => (
                    <button
                      key={item}
                      onClick={() => setStep(2)}
                      className="w-full border border-white/20 p-3 rounded hover:bg-white/10 transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <p className="text-white/70">Budget Range?</p>
                <div className="space-y-3">
                  {["$500–$1,000", "$1,000–$3,000", "$3,000+", "Let’s discuss"].map((item) => (
                    <button
                      key={item}
                      onClick={() => setStep(3)}
                      className="w-full border border-white/20 p-3 rounded hover:bg-white/10 transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <p className="text-white/70">Tell us about your project</p>
                <textarea
                  className="w-full bg-black/40 border border-white/20 rounded p-3 h-32"
                  placeholder="Project details..."
                />
                <button
                  onClick={() => setStep(4)}
                  className="w-full bg-white text-black p-3 rounded font-medium hover:bg-white/80 transition"
                >
                  Continue
                </button>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-black/40 border border-white/20 rounded p-3"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-black/40 border border-white/20 rounded p-3"
                />
                <button className="w-full bg-white text-black p-3 rounded font-medium hover:bg-white/80 transition">
                  Submit
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}