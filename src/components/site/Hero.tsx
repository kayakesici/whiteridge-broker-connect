export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      {/* subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--ridge) 22%, transparent), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--bone) 1px, transparent 1px), linear-gradient(90deg, var(--bone) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at top, black 40%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-28 text-center md:py-40">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--ridge)] shadow-[0_0_10px_var(--ridge-glow)]" />
          UK acquisition platform
        </div>
        <h1 className="mx-auto max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
          We acquire profitable UK service businesses
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Whiteridge Capital is a UK acquisition platform focused on owner-operated service
          businesses where sellers need a credible, straightforward buyer.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#submit"
            className="rounded-md bg-[var(--ridge)] px-5 py-3 text-sm font-medium text-[var(--ink)] transition-opacity hover:opacity-90"
          >
            Send us a deal
          </a>
          <a
            href="mailto:deals@whiteridge-capital.co.uk"
            className="rounded-md border border-border bg-card/50 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            Email the team
          </a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Confidential discussions. NDA-ready. Fast initial review.
        </p>
      </div>
    </section>
  );
}
