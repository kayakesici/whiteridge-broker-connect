interface Props {
  eyebrow?: string;
  title: string;
  copy?: string;
}

export function SectionHeader({ eyebrow, title, copy }: Props) {
  return (
    <div className="mx-auto max-w-3xl">
      {eyebrow && (
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[var(--ridge)]">{eyebrow}</p>
      )}
      <h2 className="text-3xl leading-tight md:text-4xl">{title}</h2>
      {copy && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{copy}</p>}
    </div>
  );
}
