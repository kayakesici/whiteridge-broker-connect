import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

const checklist = [
  "Business overview or teaser",
  "Sector and location",
  "Revenue and adjusted EBITDA / SDE",
  "Asking price or valuation expectations",
  "Reason for sale",
  "Customer concentration",
  "Staff and owner involvement",
  "Lease/property details if relevant",
  "Latest accounts or management information",
];

const inputCls =
  "w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-primary placeholder:text-muted-foreground focus:border-[var(--ridge)] focus:outline-none focus:ring-1 focus:ring-[var(--ridge)]";
const labelCls = "mb-1.5 block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground";

export function Submit() {
  const [sent, setSent] = useState(false);

  return (
    <section id="submit" className="border-b border-border bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Section 06"
          title="Have a suitable opportunity?"
          copy="For initial review, please send as much of the following as available."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <ul className="space-y-3 rounded-sm border border-border bg-card p-8">
            {checklist.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm text-primary">
                <span className="mt-2 inline-block h-px w-3 shrink-0 bg-[var(--ridge)]" />
                {c}
              </li>
            ))}
          </ul>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-sm border border-border bg-card p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={labelCls}>Name</label>
                <input className={inputCls} required />
              </div>
              <div>
                <label className={labelCls}>Company</label>
                <input className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Email</label>
                <input type="email" className={inputCls} required />
              </div>
              <div>
                <label className={labelCls}>Phone</label>
                <input className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Opportunity sector</label>
                <input className={inputCls} placeholder="e.g. HVAC, dental" />
              </div>
              <div>
                <label className={labelCls}>Business location</label>
                <input className={inputCls} placeholder="e.g. South East" />
              </div>
              <div>
                <label className={labelCls}>Revenue range</label>
                <input className={inputCls} placeholder="£" />
              </div>
              <div>
                <label className={labelCls}>EBITDA / SDE range</label>
                <input className={inputCls} placeholder="£" />
              </div>
              <div className="md:col-span-2">
                <label className={labelCls}>Asking price</label>
                <input className={inputCls} placeholder="£" />
              </div>
              <div className="md:col-span-2">
                <label className={labelCls}>Message</label>
                <textarea rows={4} className={inputCls} />
              </div>
              <div className="md:col-span-2">
                <label className={labelCls}>Teaser or IM</label>
                <div className="flex items-center justify-between rounded-sm border border-dashed border-border bg-background px-4 py-4 text-sm text-muted-foreground">
                  <span>Attach a file (PDF, DOCX)</span>
                  <input type="file" className="text-xs" />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-8 w-full rounded-sm bg-primary px-6 py-3 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {sent ? "Thank you — we will be in touch" : "Submit opportunity"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
