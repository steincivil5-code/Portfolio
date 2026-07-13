import { FadeIn } from "@/components/common/fade-in";
import { personalInfo, services } from "@/lib/data";
import { Brain, Compass, Layers } from "lucide-react";

const iconMap = {
  brain: Brain,
  layers: Layers,
  compass: Compass,
};

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              About
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Engineering intelligence with product thinking
            </h2>
            <div className="mt-6 space-y-4 text-left text-muted-foreground md:text-center md:text-lg">
              {personalInfo.bio.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 text-base font-medium text-foreground md:text-lg">
              {personalInfo.coreMessage}
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className="group h-full rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
