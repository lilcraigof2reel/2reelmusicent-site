"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
export default function Home() {  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(t);
  }, []);
 return (
  <main className="min-h-screen bg-black text-white">
    {!loaded && <Loader />}

    {/* Top glow */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      ...
    </div>

    {/* Rest of homepage */}
    <section>...</section>
    </main>
);
}