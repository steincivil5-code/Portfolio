import { contactInfo, personalInfo } from "@/lib/data";
import { BrandLogo } from "@/components/common/brand-logo";
import { SocialIcon } from "@/components/common/social-icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/20 py-12">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <BrandLogo className="text-primary" />
          <p className="text-center text-sm text-muted-foreground">
            © {year} {personalInfo.name}. Built with Next.js & AI-first engineering.
          </p>
          <div className="flex items-center gap-3">
            {contactInfo.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                aria-label={social.platform}
              >
                <SocialIcon platform={social.platform} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
