const items = [
  {
    title: "Confidential review",
    body: "Information is reviewed discreetly and only for acquisition assessment.",
  },
  {
    title: "Clear initial response",
    body: "We aim to confirm quickly whether the opportunity appears to fit.",
  },
  {
    title: "NDA where appropriate",
    body: "Where there is a clear fit, we can move into NDA and review further information.",
  },
  {
    title: "Professional follow-up",
    body: "We communicate directly, ask sensible questions, and respect the process.",
  },
];

export function Review() {
  return (
    <section id="review" className="border-b border-border py-12 md:py-[72px]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              What to expect
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We review initial information confidentially, respond clearly, and move forward only
              where there is a genuine fit.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it) => (
              <div
                key={it.title}
                className="rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-[var(--ridge)]/40 hover:bg-card"
              >
                <h3 className="text-base font-medium text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
