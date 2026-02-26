export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <p className="mt-4 text-zinc-300">
        Booking email:{" "}
        <a
          href="mailto:2ReelMusicEnt.booking@gmail.com"
          className="underline hover:text-white"
        >
          2ReelMusicEnt.booking@gmail.com
        </a>
      </p>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm text-zinc-300">
          Next: we’ll add a real contact form that sends directly to your email.
        </p>
      </div>
    </main>
  );
}