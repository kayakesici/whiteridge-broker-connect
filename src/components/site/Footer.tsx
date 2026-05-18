export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <div className="flex items-center gap-2 font-serif text-xl">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--ridge)]" />
              Whiteridge Capital
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/65">
              Confidential discussions welcomed.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-4 text-sm">
            <a href="#focus" className="text-primary-foreground/75 hover:text-primary-foreground">
              Acquisition Criteria
            </a>
            <a href="#submit" className="text-primary-foreground/75 hover:text-primary-foreground">
              Submit Opportunity
            </a>
            <a href="#contact" className="text-primary-foreground/75 hover:text-primary-foreground">
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 md:flex-row">
          <p>© {new Date().getFullYear()} Whiteridge Capital. All rights reserved.</p>
          <p>United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}
