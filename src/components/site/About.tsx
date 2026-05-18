import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="About Whiteridge"
          title="A focused acquisition platform for essential UK services"
          copy="Whiteridge Capital was founded by Izaak Rainbow Cooper and Kaya Kesici to acquire and operate profitable UK service businesses. The firm combines investment, M&A, operations, and technology experience to identify good businesses, protect what already works, and improve the systems around them."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {[
            {
              name: "Izaak Rainbow Cooper",
              role: "Co-Founder, Strategy & Operations",
              body: "Focuses on strategy, operations, systems, and post-acquisition improvement.",
              initials: "IR",
            },
            {
              name: "Kaya Kesici",
              role: "Co-Founder, Investments",
              body: "Focuses on sourcing, deal assessment, structuring, diligence, and investor relations.",
              initials: "KK",
            },
          ].map((p) => (
            <div key={p.name} className="bg-card p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-mono text-sm text-primary-foreground">
                {p.initials}
              </div>
              <h3 className="mt-6 text-xl text-primary">{p.name}</h3>
              <p className="text-sm uppercase tracking-wider text-[var(--ridge)]">{p.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
