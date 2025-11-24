import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";

const portraitImage =
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80";

export function About() {
  return (
    <section id="about" className="px-6 py-20 lg:px-12">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
        <div className="relative overflow-hidden rounded-[32px] border border-border-subtle bg-white/60 p-4">
          <div className="relative h-[480px] rounded-[28px] bg-canvas-deep">
            <Image
              src={portraitImage}
              alt="Isabel Laurent in her studio"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <SectionHeading
            eyebrow="About the artist"
            title="Isabel Laurent"
            description="Lisbon-based painter investigating botanicals, architecture, and memory through multi-layered oil studies."
          />
          <p className="text-base text-muted">
            Isabel studied at the Royal College of Art before establishing her
            namesake studio in 2012. Her practice blends botanical research,
            field recordings, and slow material studies to arrive at works that
            feel intimate yet expansive.
          </p>
          <p className="text-base text-muted">
            Between exhibitions she hosts small-format salons, mentoring artists
            on process, critique, and building a sustainable studio rhythm.
          </p>
          <div className="grid gap-4 rounded-2xl border border-border-subtle bg-white/70 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-muted">
              Focus
            </p>
            <ul className="space-y-2 text-sm text-ink/80">
              <li>• Large-scale oil abstractions informed by botanicals</li>
              <li>• Textural experiments with plaster, charcoal, and ink</li>
              <li>• Intimate mentoring for emerging painters</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
