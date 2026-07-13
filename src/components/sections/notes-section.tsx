import { BookOpen, Clock } from "lucide-react";
import { FadeIn } from "@/components/common/fade-in";
import { Badge } from "@/components/ui/badge";
import { engineeringNotes } from "@/lib/data";

export function NotesSection() {
  return (
    <section id="notes" className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Engineering Notes
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Technical writing</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Short notes on shipping production AI — RAG, agents, scaling, and voice platforms.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2">
          {engineeringNotes.map((note, index) => (
            <FadeIn key={note.id} delay={index * 0.06}>
              <article className="group h-full rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Engineering note
                  </span>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary">{note.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{note.excerpt}</p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {note.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {note.readTime}
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
