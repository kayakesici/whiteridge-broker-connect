const items = [
  "Clear initial fit assessment",
  "Fast yes/no feedback",
  "NDA-ready review process",
  "Professional communication",
];

export function Review() {
  return (
    <section id="review" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
          <div>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Review process
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We review suitable opportunities quickly, communicate clearly, and only progress
              deals that fit our acquisition criteria.
            </p>
          </div>
          <ul className="grid gap-3 self-center">
            {items.map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 rounded-lg border border-border bg-card/60 px-5 py-4 text-sm text-foreground"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--ridge)]/15 text-[var(--ridge)]">
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8l3.5 3.5L13 5" />
                  </svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
