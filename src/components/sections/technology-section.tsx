"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/common/fade-in";
import { technologyGroups } from "@/lib/data";
import { cn } from "@/lib/utils";

export function TechnologySection() {
  const [activeGroup, setActiveGroup] = useState(0);
  const group = technologyGroups[activeGroup];

  return (
    <section id="technology" className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Technology
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">What I build with technology</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Not a skill list — systems and products shipped across AI, full-stack, and cloud.
            </p>
          </div>
        </FadeIn>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative mx-auto flex h-72 w-72 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-primary/20" />
              <div className="tech-orbit absolute inset-4 rounded-full border border-primary/10" />
              <div className="tech-orbit-reverse absolute inset-10 rounded-full border border-violet-500/10" />
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-center text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25">
                AI
                <br />
                First
              </div>
              {technologyGroups.map((g, i) => {
                const angle = (i / technologyGroups.length) * 360 - 90;
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * 110;
                const y = Math.sin(rad) * 110;
                return (
                  <button
                    key={g.name}
                    onClick={() => setActiveGroup(i)}
                    className={cn(
                      "absolute z-20 rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
                      activeGroup === i
                        ? "border-primary bg-primary text-primary-foreground shadow-md"
                        : "bg-card text-muted-foreground hover:border-primary/40"
                    )}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    {g.name.split(" ")[0]}
                  </button>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border bg-card p-8"
            >
              <h3 className="text-xl font-bold">{group.name}</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-xl border bg-muted/40 px-4 py-2.5 text-sm font-medium"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
