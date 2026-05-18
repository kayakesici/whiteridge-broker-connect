import { SectionHeader } from "./SectionHeader";

const steps = [
  ["Initial opportunity review", "We review the teaser, headline financials, sector, geography, and seller situation."],
  ["NDA and information review", "If the opportunity fits, we sign an NDA and review the IM, financials, and operational information."],
  ["Initial valuation and fit assessment", "We assess earnings quality, owner-dependence, customer concentration, and operational upside."],
  ["Seller conversation", "Where appropriate, we speak with the broker and seller to understand goals, timing, and succession needs."],
  ["Indicative offer", "For suitable opportunities, we submit an indicative offer or proposal."],
  ["Due diligence and completion", "We progress legal, financial, and commercial diligence in a structured way."],
];

export function Process() {
  return (
    <section id="process" className="border-b border-border bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Broker process" title="A simple acquisition process" />
        <ol className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border">
          {steps.map(([t, b], i) => (
            <li key={t} className="grid grid-cols-[auto_1fr] gap-6 bg-card p-8 md:grid-cols-[80px_220px_1fr] md:gap-10 md:p-10">
              <div className="font-mono text-sm text-[var(--ridge)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg text-primary">{t}</h3>
              <p className="col-span-2 text-sm leading-relaxed text-muted-foreground md:col-span-1">{b}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
