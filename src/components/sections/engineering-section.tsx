import { ArrowUpRight, Code2, GitBranch } from "lucide-react";
import { FadeIn } from "@/components/common/fade-in";
import { Badge } from "@/components/ui/badge";
import { contactInfo, engineeringProjects } from "@/lib/data";

export function EngineeringSection() {
  return (
    <section id="engineering" className="py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Open Source / Engineering
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">Technical evidence</h2>
              <p className="mt-4 text-muted-foreground">
                Smaller demos and architecture sketches that show how I build RAG systems, agents,
                and voice pipelines — not just claim the skills.
              </p>
            </div>
            <a
              href={contactInfo.socialLinks.find((s) => s.platform === "GitHub")?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <GitBranch className="h-4 w-4" />
              View GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {engineeringProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground">
                      · {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
