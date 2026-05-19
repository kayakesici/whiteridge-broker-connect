const rows = [
  ["Revenue", "£200k to £1m"],
  ["Earnings", "£150k+ SDE / EBITDA preferred"],
  ["Geography", "UK-wide"],
  ["Ownership", "Independent, owner-operated businesses"],
  ["Situation", "Retirement, succession, partial exit, or owner transition"],
  ["Avoid", "Franchises, distressed businesses, high owner-dependence, single-customer concentration"],
];

export function BuyBox() {
  return (
    <section id="criteria" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Acquisition criteria</h2>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map(([k, v]) => (
            <div
              key={k}
              className="rounded-xl border border-border bg-card/60 p-6"
            >
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--ridge)]">
                {k}
              </div>
              <div className="mt-3 text-base leading-relaxed text-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
