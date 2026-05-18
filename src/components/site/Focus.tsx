import { SectionHeader } from "./SectionHeader";

const cards = [
  {
    n: "01",
    title: "Trades & home services",
    body: "HVAC, plumbing, electrical, roofing, and other essential local services.",
  },
  {
    n: "02",
    title: "Healthcare services",
    body: "Dental, veterinary, physiotherapy, and other regulated hands-on services.",
  },
  {
    n: "03",
    title: "Commercial cleaning & facilities management",
    body: "Contract-led B2B services with recurring demand and low customer churn.",
  },
  {
    n: "04",
    title: "Regulatory compliance",
    body: "Fire safety, gas, electrical, health & safety, and other mandated services.",
  },
];

export function Focus() {
  return (
    <section id="focus" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Acquisition focus"
          title="Our acquisition focus"
          copy="We look for established, profitable, owner-operated businesses with durable local demand, repeat or recurring revenue, and clear scope for operational improvement."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {cards.map((c) => (
            <div key={c.n} className="bg-card p-8 transition-colors hover:bg-accent">
              <div className="flex items-baseline justify-between border-b border-border pb-4">
                <h3 className="text-xl text-primary">{c.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">{c.n}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
