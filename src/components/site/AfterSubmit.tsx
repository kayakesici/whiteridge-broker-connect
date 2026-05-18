import { SectionHeader } from "./SectionHeader";

const steps = [
  ["Initial review", "We assess sector, location, earnings, owner involvement, and deal fit."],
  ["Follow-up questions", "Where relevant, we ask for missing information and clarify the seller's objectives."],
  ["NDA and detailed review", "If the opportunity fits, we move into NDA, IM review, financial analysis, and seller discussion."],
];

export function AfterSubmit() {
  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="How we work"
          title="What happens after you submit?"
          copy="Once an opportunity is submitted, we review the headline information against our acquisition criteria. If there is a clear fit, we will respond with initial questions, confirm the NDA process where required, and progress to a more detailed review of the IM, accounts, and seller objectives."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {steps.map(([t, b], i) => (
            <div key={t} className="bg-card p-8">
              <div className="font-mono text-xs text-[var(--ridge)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-lg text-primary">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
