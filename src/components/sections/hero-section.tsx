"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/common/fade-in";
import { featuredTechnologies, personalInfo, stats } from "@/lib/data";

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero-grid relative flex min-h-screen items-center pt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card/80 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Senior AI Product Engineer · Available for select projects</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {personalInfo.headline}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {personalInfo.subheadline}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" className="gap-2 px-8" onClick={() => scrollTo("projects")}>
              View Projects
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8" onClick={() => scrollTo("contact")}>
              Let&apos;s Work Together
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-14 flex flex-wrap gap-2">
            {featuredTechnologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                className="rounded-xl border bg-card/80 p-5 text-center backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
