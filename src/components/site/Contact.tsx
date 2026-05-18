import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Section 07"
          title="Contact Whiteridge Capital"
          copy="For broker introductions, acquisition opportunities, or confidential discussions, contact:"
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {[
            { name: "Kaya Kesici", email: "kaya@whiteridge.capital" },
            { name: "Izaak Rainbow Cooper", email: "izaak@whiteridge.capital" },
          ].map((c) => (
            <div key={c.email} className="bg-card p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--ridge)]">Direct contact</p>
              <h3 className="mt-3 text-xl text-primary">{c.name}</h3>
              <a
                href={`mailto:${c.email}`}
                className="mt-2 inline-block text-base text-primary underline-offset-4 hover:underline"
              >
                {c.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
