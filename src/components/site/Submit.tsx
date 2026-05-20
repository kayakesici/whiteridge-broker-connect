import { useState } from "react";

const inputCls =
  "w-full rounded-md border border-input bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--ridge)] focus:outline-none focus:ring-1 focus:ring-[var(--ridge)]";
const labelCls = "mb-1.5 block text-xs font-medium text-muted-foreground";

const directEmails = [
  "kaya@whiteridge-capital.co.uk",
  "izaak@whiteridge-capital.co.uk",
];

export function Submit() {
  const [sent, setSent] = useState(false);

  return (
    <section id="submit" className="border-b border-border py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Start a confidential review
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              For initial review, share a teaser, IM, information pack, or short company summary.
              We will confirm fit quickly and move to NDA where appropriate.
            </p>

            <a
              href="mailto:deals@whiteridge-capital.co.uk"
              className="mt-10 flex items-center justify-between rounded-xl border border-[var(--ridge)]/40 bg-[var(--ridge)]/10 px-6 py-5 transition-colors hover:bg-[var(--ridge)]/15"
            >
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--ridge)]">
                  Primary
                </div>
                <div className="mt-1 text-lg text-foreground">deals@whiteridge-capital.co.uk</div>
              </div>
              <span className="text-[var(--ridge)]">→</span>
            </a>

            <div className="mt-4 space-y-3">
              {directEmails.map((e) => (
                <a
                  key={e}
                  href={`mailto:${e}`}
                  className="flex items-center justify-between rounded-lg border border-border bg-card/60 px-5 py-4 text-sm text-foreground transition-colors hover:border-[var(--ridge)]/40"
                >
                  <span>{e}</span>
                  <span className="text-[var(--ridge)]">→</span>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-xl border border-border bg-card/40 p-6 md:p-7"
          >
            {sent ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--ridge)]/15 text-[var(--ridge)]">
                  <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8l3.5 3.5L13 5" />
                  </svg>
                </div>
                <p className="mt-5 max-w-sm text-base text-foreground">
                  Thank you. Your information has been submitted for confidential review.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className={labelCls}>Name</label>
                    <input className={inputCls} required />
                  </div>
                  <div>
                    <label className={labelCls}>Company</label>
                    <input className={inputCls} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelCls}>Email</label>
                    <input type="email" className={inputCls} required />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelCls}>Message</label>
                    <textarea rows={4} className={inputCls} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelCls}>Attachment</label>
                    <label className="flex cursor-pointer items-center justify-between rounded-md border border-dashed border-border bg-background/50 px-4 py-3.5 text-sm text-muted-foreground transition-colors hover:border-[var(--ridge)]/40">
                      <span>Teasers, IMs, accounts, and information packs are welcome.</span>
                      <input type="file" className="hidden" />
                      <span className="text-xs text-[var(--ridge)]">Attach</span>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-7 w-full rounded-md bg-[var(--ridge)] px-5 py-3 text-sm font-medium text-[var(--ink)] transition-opacity hover:opacity-90"
                >
                  Start confidential review
                </button>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Confidential. Reviewed only for acquisition assessment.
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
