export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(var(--bone) 1px, transparent 1px), linear-gradient(90deg, var(--bone) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
        <p className="mb-8 text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
          UK Acquisition Platform
        </p>
        <h1 className="max-w-4xl text-4xl leading-[1.1] md:text-6xl">
          A straightforward buyer for profitable UK service businesses.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
          Whiteridge Capital acquires established, owner-operated service businesses across the UK,
          with a focus on essential sectors, recurring demand, and succession-led opportunities.
        </p>
        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="#submit"
            className="rounded-sm bg-[var(--bone)] px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-[var(--bone)]/90"
          >
            Submit an opportunity
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Contact Whiteridge
          </a>
        </div>
      </div>
    </section>
  );
}
