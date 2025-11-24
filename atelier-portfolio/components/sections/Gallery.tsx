"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { artworks } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Gallery() {
  return (
    <section id="gallery" className="px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="Featured works"
          title="A living archive of pigments, botanicals, and light."
          description="Curated selection from the 2022–2024 series exploring tactile botanicals and atmospheric landscapes."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {artworks.map((piece) => (
            <motion.article
              key={piece.title}
              variants={item}
              className="group relative overflow-hidden rounded-3xl border border-border-subtle bg-white/60 shadow-[0_25px_80px_rgba(19,14,10,0.08)] transition hover:-translate-y-1.5"
            >
              <div className="relative h-72">
                <Image
                  src={piece.image}
                  alt={piece.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col gap-2 border-t border-border-subtle px-6 py-5">
                <div className="flex items-center justify-between text-sm text-muted">
                  <span>{piece.medium}</span>
                  <span>{piece.year}</span>
                </div>
                <h3 className="font-serif text-2xl text-ink">{piece.title}</h3>
                <p className="text-sm uppercase tracking-[0.25em] text-muted/80">
                  {piece.size}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
