"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Layers,
  X,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/common/fade-in";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

function ArchitectureDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-muted/30 p-4">
      <div className="flex min-w-max items-center gap-2">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <div className="rounded-lg border bg-card px-3 py-2 text-center text-xs font-medium shadow-sm">
              {step}
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-card/95 px-6 py-4 backdrop-blur-sm">
          <div>
            <Badge variant="outline" className="mb-2">
              Case Study
            </Badge>
            <h3 className="text-xl font-bold">{project.title}</h3>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-8 p-6">
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border bg-primary/5 px-3 py-4 text-center"
                >
                  <div className="text-lg font-bold text-primary">{metric.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          {project.problem && (
            <div>
              <h4 className="mb-2 flex items-center gap-2 font-semibold">
                <Building2 className="h-4 w-4 text-primary" />
                The Challenge
              </h4>
              <p className="text-muted-foreground">{project.problem}</p>
            </div>
          )}

          {project.solution && (
            <div>
              <h4 className="mb-2 flex items-center gap-2 font-semibold">
                <Zap className="h-4 w-4 text-primary" />
                The Solution
              </h4>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>
          )}

          {project.architectureFlow && (
            <div>
              <h4 className="mb-3 flex items-center gap-2 font-semibold">
                <Layers className="h-4 w-4 text-primary" />
                Architecture flow
              </h4>
              <ArchitectureDiagram steps={project.architectureFlow} />
            </div>
          )}

          {project.architecture && (
            <div>
              <h4 className="mb-3 font-semibold">System design</h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.architecture.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border bg-muted/40 px-3 py-2 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="mb-3 font-semibold">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.highlights && (
            <div>
              <h4 className="mb-3 font-semibold">Results</h4>
              <ul className="space-y-2">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Featured Work
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Project case studies</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Not just what I can build — what I built, how it works, and the measurable results.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.08}>
              <article
                className="group cursor-pointer overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                onClick={() => setSelected(project)}
              >
                <div className="grid gap-6 p-8 lg:grid-cols-5">
                  <div className="lg:col-span-3">
                    <Badge className="mb-4">{project.category}</Badge>
                    <h3 className="text-2xl font-bold group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground">{project.description}</p>
                    {project.architectureFlow && (
                      <div className="mt-5 hidden sm:block">
                        <ArchitectureDiagram steps={project.architectureFlow} />
                      </div>
                    )}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-muted px-2.5 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between rounded-xl border bg-muted/30 p-6 lg:col-span-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Impact
                      </p>
                      <p className="mt-2 text-lg font-semibold leading-snug">
                        {project.impact}
                      </p>
                      {project.metrics && (
                        <div className="mt-4 grid grid-cols-1 gap-2">
                          {project.metrics.map((metric) => (
                            <div
                              key={metric.label}
                              className="flex items-center justify-between text-sm"
                            >
                              <span className="text-muted-foreground">{metric.label}</span>
                              <span className="font-semibold text-primary">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="mt-6 flex items-center gap-1 text-sm font-medium text-primary">
                      View case study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>

      {selected && <CaseStudyModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
