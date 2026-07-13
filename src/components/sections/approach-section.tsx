import { FadeIn } from "@/components/common/fade-in";
import { approachSteps } from "@/lib/data";

export function ApproachSection() {
  return (
    <section id="approach" className="py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Process
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">How I build</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A disciplined approach to turning AI ideas into reliable, production-grade software.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-5">
          {approachSteps.map((step, index) => (
            <FadeIn key={step.step} delay={index * 0.08}>
              <div className="group relative h-full rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {step.step}
                </div>
                <h3 className="font-semibold leading-snug">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                {index < approachSteps.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-border md:block" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
