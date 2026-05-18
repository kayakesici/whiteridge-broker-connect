import { SectionHeader } from "./SectionHeader";

const items = [
  ["Clear buy box", "Defined sectors, sizes, and criteria so you know quickly whether an opportunity fits."],
  ["Fast initial review", "We respond promptly to teasers and headline information."],
  ["Professional communication", "Direct, courteous, and informed conversations with brokers and sellers."],
  ["Serious acquisition intent", "We engage only on opportunities we are genuinely prepared to progress."],
  ["Flexible deal-by-deal approach", "Structures shaped around the seller's situation, not a rigid template."],
  ["Respect for broker-led processes", "We work within your process and protect your seller relationships."],
];

export function WhyBrokers() {
  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Section 03"
          title="Built to move quickly and professionally"
          copy="We understand that brokers need credible buyers who can review opportunities quickly, ask sensible questions, and avoid wasting seller time. Whiteridge uses a structured acquisition process to assess fit, review financials, and progress suitable opportunities efficiently."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map(([t, b]) => (
            <div key={t} className="bg-card p-8">
              <div className="mb-3 h-px w-8 bg-[var(--ridge)]" />
              <h3 className="text-lg text-primary">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
