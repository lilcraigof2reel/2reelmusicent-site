"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar({ onStartClick }: { onStartClick: () => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center">
  <Image
    src="/images/branding/2reel-logo.png"
    alt="2Reel Music Entertainment"
    width={180}
    height={50}
    priority
    className="h-8 w-auto"
  />
</Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">

          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <Link href="/services" className="hover:text-white transition">
            Services
          </Link>

          <Link href="/work" className="hover:text-white transition">
            Work
          </Link>

          <Link href="/label" className="hover:text-white transition">
            Label
          </Link>

          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>

          <button
  onClick={onStartClick}
  className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-zinc-200 transition"
>
  Start Project
</button>

        </nav>
      </div>
    </header>
  );
}