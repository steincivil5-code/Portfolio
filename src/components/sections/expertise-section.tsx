"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/common/fade-in";
import { expertiseCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ExpertiseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = expertiseCategories[activeIndex];

  return (
    <section id="expertise" className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Expertise
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Where I create the most impact</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              AI engineering, product development, and cloud infrastructure — combined to ship
              production systems that scale.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:col-span-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {expertiseCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "shrink-0 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all lg:w-full",
                  activeIndex === index
                    ? "border-primary bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          <FadeIn className="lg:col-span-3" delay={0.1}>
            <motion.div
              key={active.name}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className={cn(
                "rounded-2xl border bg-gradient-to-br p-8",
                active.color
              )}
            >
              <h3 className="text-2xl font-bold">{active.name}</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {active.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 rounded-xl border bg-card/80 px-4 py-3 backdrop-blur-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
