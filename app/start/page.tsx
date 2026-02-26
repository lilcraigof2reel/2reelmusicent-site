export default function StartPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Start a Project</h1>
      <p className="mt-4 text-zinc-300">
        Tell us what you’re building. We typically respond within 24 hours.
      </p>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm text-zinc-300">
          Next: we’ll build a real form that emails you automatically (no paid subscriptions).
        </p>
      </div>
    </main>
  );
}