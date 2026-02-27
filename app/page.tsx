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
  
)}
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-72 w-[34rem] rounded-full bg-white/5 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          Booking: Music + Video + Artist Development
        </div>

        <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
  transition={{ duration: 0.8 }}
className="text-5xl font-bold"
>
2Reel Music Entertainment
</motion.h1>

        <p className="mt-5 max-w-2xl text-lg text-zinc-300">
          Hybrid powerhouse for{" "}
          <span className="text-white">Music Production</span>,{" "}
          <span className="text-white">Video Production</span>, and{" "}
          <span className="text-white">Artist Development</span>.
          Premium sound. Cinematic visuals. Built to feel expensive.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/start"
            className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Start a Project
          </Link>

          <Link
            href="/work"
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View Our Work
          </Link>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <Bucket
            title="Music Production"
            desc="Production • Recording • Vocal editing • Mixing • Mastering"
            href="/services#music"
            cta="Book Production"
          />
          <Bucket
            title="Video Production"
            desc="Shoot • Edit • Color • Story • Performance visuals"
            href="/services#video"
            cta="Build Visuals"
          />
          <Bucket
            title="Artist Development"
            desc="Brand • Strategy • Rollouts • Label readiness"
            href="/label"
            cta="Label Inquiry"
          />
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold">Bookings</div>
          <p className="mt-2 text-sm text-zinc-300">
            Email:{" "}
            <a
              className="underline hover:text-white"
              href="mailto:2ReelMusicEnt.booking@gmail.com"
            >
              2ReelMusicEnt.booking@gmail.com
            </a>
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Response time: typically within 24 hours.
          </p>
        </div>
      </section>
    </main>
  );
}

function Bucket({
  title,
  desc,
  href,
  cta,
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-2 text-sm text-zinc-400">{desc}</p>
      <Link
        href={href}
        className="mt-5 inline-flex rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition group-hover:bg-zinc-200"
      >
        {cta}
      </Link>
    </div>
  );
}