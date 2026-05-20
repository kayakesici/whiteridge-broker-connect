export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[15px] font-medium tracking-tight text-foreground"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--ridge)] shadow-[0_0_12px_var(--ridge-glow)]" />
          Whiteridge Capital
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#look-for" className="hover:text-foreground">
            What we look for
          </a>
          <a href="#review" className="hover:text-foreground">
            Review
          </a>
          <a href="#submit" className="hover:text-foreground">
            Contact
          </a>
        </nav>
        <a
          href="#submit"
          className="hidden rounded-md bg-[var(--ridge)] px-4 py-2 text-xs font-medium text-[var(--ink)] transition-opacity hover:opacity-90 md:inline-block"
        >
          Start a conversation
        </a>
      </div>
    </header>
  );
}
