import { SectionHeader } from "./SectionHeader";

const rows = [
  ["Geography", "UK-wide, with preference for London, South East, Midlands, and dense regional clusters."],
  ["Revenue", "£200k to £1m."],
  ["Earnings", "£150k+ SDE / EBITDA preferred."],
  ["Profitability", "15% to 20%+ margin preferred."],
  ["Ownership", "Independent, owner-operated businesses."],
  ["Deal type", "Majority acquisition, succession, or platform opportunity."],
  ["Avoided", "Franchises, high owner-dependence, single-customer concentration, distressed or speculative businesses."],
];

export function BuyBox() {
  return (
    <section id="buybox" className="border-b border-border bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Buy box" title="What fits our buy box" />
        <div className="mt-16 overflow-hidden rounded-sm border border-border bg-card">
          {rows.map(([k, v], i) => (
            <div
              key={k}
              className={`grid grid-cols-1 gap-2 px-6 py-6 md:grid-cols-[220px_1fr] md:gap-8 md:px-10 ${
                i !== rows.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--ridge)]">
                {k}
              </div>
              <div className="text-base leading-relaxed text-primary">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
