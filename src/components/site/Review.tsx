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
    <section id="review" className="border-b border-border py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            What to expect
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            We review initial information confidentially, respond clearly, and move forward only
            where there is a genuine fit.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-xl border border-border bg-card/60 p-6 transition-colors hover:border-[var(--ridge)]/40 hover:bg-card"
            >
              <div className="h-1.5 w-6 rounded-full bg-[var(--ridge)] shadow-[0_0_12px_var(--ridge-glow)]" />
              <h3 className="mt-5 text-base font-medium text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
