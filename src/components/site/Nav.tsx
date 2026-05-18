export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-serif text-lg tracking-tight text-primary">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--ridge)]" />
          Whiteridge Capital
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#focus" className="hover:text-primary">Focus</a>
          <a href="#buybox" className="hover:text-primary">Buy box</a>
          <a href="#process" className="hover:text-primary">Process</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
        <a
          href="#submit"
          className="hidden rounded-sm bg-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90 md:inline-block"
        >
          Submit opportunity
        </a>
      </div>
    </header>
  );
}
