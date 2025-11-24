"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { heroStats } from "@/lib/content";

const heroImage =
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80";

export function Hero() {
  const figureRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: figureRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["-4%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section className="relative isolate overflow-hidden px-6 pb-24 pt-32 lg:px-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-32 w-96 rounded-full bg-accent-strong/10 blur-[100px]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center">
        <div className="space-y-10">
          <div className="flex flex-col gap-4">
            <span className="text-sm uppercase tracking-[0.35em] text-muted">
              Isabel Laurent Studio
            </span>
            <h1 className="font-serif text-5xl leading-tight text-ink sm:text-6xl">
              Poetic abstractions rooted in botanical memory and light.
            </h1>
            <p className="text-lg text-muted sm:max-w-xl">
              Contemporary oil paintings and intimate ateliers exploring texture,
              gesture, and the quiet drama of botanicals. Crafted in Lisbon,
              collected worldwide.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-canvas transition hover:bg-accent-strong"
            >
              View Collection
            </a>
            <a
              href="#classes"
              className="inline-flex items-center justify-center rounded-full border border-ink/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink/80 transition hover:border-ink/40"
            >
              Upcoming Classes
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border-subtle bg-white/60 p-5 shadow-[0_10px_40px_rgba(20,15,10,0.08)] backdrop-blur"
              >
                <p className="text-3xl font-semibold text-ink">{stat.value}</p>
                <p className="text-sm uppercase tracking-[0.25em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          ref={figureRef}
          style={{ y: translateY, scale }}
          className="relative flex h-[520px] w-full items-end justify-center overflow-hidden rounded-[48px] border border-border-subtle bg-canvas-deep/60 p-6 shadow-[0_40px_120px_rgba(14,10,8,0.25)]"
        >
          <Image
            src={heroImage}
            alt="Large abstract painting leaning on a studio wall"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
            priority
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />

          <div className="relative w-full rounded-3xl bg-white/75 p-5 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.35em] text-muted">
              Studio Session
            </p>
            <p className="mt-2 font-serif text-2xl text-ink">
              Botanicals in Motion
            </p>
            <p className="text-sm text-muted">Layered pigments · April Salon</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
