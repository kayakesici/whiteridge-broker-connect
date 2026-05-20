export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2.5 text-[15px] font-medium tracking-tight">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--ridge)] shadow-[0_0_10px_var(--ridge-glow)]" />
              Whiteridge Capital
            </div>
            <p className="mt-3 text-sm text-muted-foreground">whiteridge-capital.co.uk</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Confidential discussions welcomed.
            </p>
          </div>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <a href="#fits" className="hover:text-foreground">What fits</a>
            <a href="#criteria" className="hover:text-foreground">Criteria</a>
            <a href="#review" className="hover:text-foreground">Review</a>
            <a href="#submit" className="hover:text-foreground">Contact</a>
          </nav>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-[11px] text-muted-foreground/80">
          <p className="max-w-3xl leading-relaxed">
            Whiteridge Capital reviews opportunities selectively. Submission of information does
            not constitute an offer, commitment, or agreement to proceed.
          </p>
          <div className="mt-4 flex flex-col justify-between gap-2 md:flex-row">
            <p>© {new Date().getFullYear()} Whiteridge Capital</p>
            <p>United Kingdom</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
