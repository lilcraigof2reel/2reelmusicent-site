"use client";

import { useState, type ReactNode } from "react";
import Navbar from "./navbar";
import StartProjectPanel from "./StartProjectPanel";

export default function Shell({ children }: { children: ReactNode }) {
  const [isStartOpen, setIsStartOpen] = useState(false);

  return (
    <>
      <Navbar onStartClick={() => setIsStartOpen(true)} />
      <StartProjectPanel
        isOpen={isStartOpen}
        onClose={() => setIsStartOpen(false)}
      />
      {children}
    </>
  );
}