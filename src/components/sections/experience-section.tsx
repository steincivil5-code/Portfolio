import { FadeIn } from "@/components/common/fade-in";
import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Experience
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Building at scale</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From Big Tech to AI startups — shipping production systems and intelligent products.
            </p>
          </div>
        </FadeIn>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <FadeIn key={exp.id} delay={index * 0.08}>
              <div
                className={`relative mb-10 flex gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden flex-1 md:block" />
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background md:absolute md:left-1/2 md:-translate-x-1/2">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 rounded-xl border bg-card p-6 shadow-sm md:max-w-[calc(50%-2.5rem)]">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {exp.startDate}
                      {exp.endDate ? ` — ${exp.endDate}` : " — Present"}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{exp.description}</p>
                  {exp.achievements && (
                    <ul className="mt-4 space-y-1.5">
                      {exp.achievements.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground">
                          · {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
