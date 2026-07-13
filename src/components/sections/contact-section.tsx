"use client";

import { FormEvent, useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/common/fade-in";
import { contactInfo, personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Have an AI product idea?</h2>
            <p className="mt-4 text-lg font-medium text-foreground">
              {personalInfo.availability}
            </p>
            <p className="mt-2 text-muted-foreground">
              Let&apos;s discuss how intelligent software can help your business grow.
            </p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="mt-8 inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Mail className="h-4 w-4" />
              {contactInfo.email}
            </a>
          </FadeIn>

          <FadeIn delay={0.15}>
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border bg-card p-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">Message sent!</h3>
                <p className="mt-2 text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-2xl border bg-card p-8 shadow-sm"
              >
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    className="w-full rounded-lg border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="details" className="mb-1.5 block text-sm font-medium">
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows={4}
                    className="w-full resize-none rounded-lg border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Tell me about your AI product idea..."
                  />
                </div>
                <Button type="submit" className="w-full gap-2" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                  <Send className={cn("h-4 w-4", loading && "opacity-50")} />
                </Button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
