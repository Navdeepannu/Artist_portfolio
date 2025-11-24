"use client";

import { classes } from "@/lib/content";
import { Palette, Feather, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const iconMap = {
  palette: Palette,
  feather: Feather,
  sparkles: Sparkles,
};

export function Classes() {
  return (
    <section id="classes" className="px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="Classes"
          title="Refined, small-format painting experiences."
          description="Every class is intentionally small to allow for thoughtful critique, guided experimentation, and grounded studio rituals."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {classes.map((offering) => {
            const Icon = iconMap[offering.icon];
            return (
              <motion.article
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border-subtle bg-white/70 p-6 shadow-[0_12px_45px_rgba(20,15,10,0.08)]"
              >
                <div className="flex items-center gap-3 text-ink">
                  <span className="rounded-full border border-border-soft p-3">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">
                    {offering.cadence}
                  </p>
                </div>
                <h3 className="font-serif text-2xl leading-tight">
                  {offering.title}
                </h3>
                <p className="text-sm text-muted">{offering.description}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-ink/10 bg-ink text-canvas px-6 py-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">
              Private bookings
            </p>
            <p className="mt-2 text-2xl font-light">
              Reserve a bespoke session for your studio or design team.
            </p>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-white/10 px-6 py-3 text-sm uppercase tracking-[0.25em] text-white backdrop-blur transition hover:bg-white/20"
          >
            Book a class
          </a>
        </div>
      </div>
    </section>
  );
}
