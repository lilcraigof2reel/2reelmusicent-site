export default function WorkPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Work</h1>
      <p className="mt-4 text-zinc-300">
        Featured music + video projects from 2Reel Music Entertainment.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { title: "Music Videos", desc: "Cinematic direction + clean edits." },
          { title: "Studio Sessions", desc: "Recording, vocal production, mixing." },
          { title: "Promo / Brand", desc: "Rollouts, visuals, content systems." },
        ].map((x) => (
          <div
            key={x.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-lg font-semibold">{x.title}</div>
            <p className="mt-2 text-sm text-zinc-400">{x.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}