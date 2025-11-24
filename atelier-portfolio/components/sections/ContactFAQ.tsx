import { faqs } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";

export function ContactFAQ() {
  return (
    <section id="contact" className="px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="Connect"
          title="Commissions, collaborations, and studio visits."
          description="Share a little about what you’re envisioning—Isabel reads every message personally and responds within two business days."
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
          <form
            className="flex flex-col gap-6 rounded-3xl border border-border-subtle bg-white/70 p-8 shadow-[0_20px_60px_rgba(19,14,10,0.08)]"
            action="#"
          >
            <label className="flex flex-col gap-2 text-sm text-muted">
              Name
              <input
                type="text"
                name="name"
                placeholder="Ana Marques"
                className="rounded-2xl border border-border-subtle bg-white/80 px-4 py-3 text-base text-ink outline-none transition focus:border-ink focus:bg-white"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-muted">
              Email
              <input
                type="email"
                name="email"
                placeholder="studio@email.com"
                className="rounded-2xl border border-border-subtle bg-white/80 px-4 py-3 text-base text-ink outline-none transition focus:border-ink focus:bg-white"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-muted">
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about the commission, class, or collaboration you have in mind."
                className="rounded-2xl border border-border-subtle bg-white/80 px-4 py-3 text-base text-ink outline-none transition focus:border-ink focus:bg-white"
                required
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-canvas transition hover:bg-accent-strong"
            >
              Send message
            </button>
          </form>

          <div className="rounded-3xl border border-border-subtle bg-canvas-deep/60 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-muted">
              FAQ
            </p>
            <div className="mt-6 space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-border-subtle bg-white/70 p-5"
                >
                  <summary className="cursor-pointer list-none text-base font-medium text-ink">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm text-muted">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
