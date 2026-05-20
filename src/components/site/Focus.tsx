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

const criteria = [
  ["Revenue", "£200k to £1m"],
  ["Earnings", "£150k+ SDE / EBITDA preferred"],
  ["Geography", "UK-wide"],
  ["Ownership", "Independent, owner-operated businesses"],
  ["Situation", "Retirement, succession, partial exit, or owner transition"],
  [
    "Avoid",
    "Franchises, distressed businesses, high owner-dependence, single-customer concentration",
  ],
];

export function Focus() {
  return (
    <section id="look-for" className="border-b border-border py-12 md:py-[72px]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">What we look for</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We focus on established service businesses with recurring or repeat demand, clear
            succession rationale, and practical scope for operational improvement.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-[var(--ridge)]/40 hover:bg-card"
            >
              <div className="h-1.5 w-6 rounded-full bg-[var(--ridge)] shadow-[0_0_12px_var(--ridge-glow)]" />
              <h3 className="mt-4 text-base font-medium text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {criteria.map(([k, v]) => (
            <div key={k} className="rounded-xl border border-border bg-card/60 p-5">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--ridge)]">
                {k}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
