const cards = [
  {
    title: "Trades & home services",
    body: "HVAC, plumbing, electrical, roofing, and related essential services.",
  },
  {
    title: "Regulatory compliance",
    body: "Fire safety, gas, electrical, health & safety, and other mandated services.",
  },
  {
    title: "Commercial cleaning & FM",
    body: "Contract-led B2B services with recurring demand.",
  },
  {
    title: "Healthcare services",
    body: "Dental, veterinary, physiotherapy, and other regulated hands-on services.",
  },
];

export function Focus() {
  return (
    <section id="fits" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">What fits</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We focus on established, profitable, owner-operated service businesses with repeat
            demand and clear succession rationale.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group rounded-xl border border-border bg-card/60 p-6 transition-colors hover:border-[var(--ridge)]/40 hover:bg-card"
            >
              <div className="h-1.5 w-6 rounded-full bg-[var(--ridge)] shadow-[0_0_12px_var(--ridge-glow)]" />
              <h3 className="mt-5 text-base font-medium text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
