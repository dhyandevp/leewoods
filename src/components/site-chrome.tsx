import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Instagram, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

export const mainNavigation = [
  { label: "Projects", to: "/gallery" },
  { label: "Studio", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export const mapUrl =
  "https://maps.google.com/maps/place/lee+wood+interio/data=!4m2!3m1!1s0x3ba4259b1f68d5f1:0x99b811d342095886";
export const instagramUrl = "https://www.instagram.com/leewood.interio/";

export function Wordmark({
  light = false,
  compact = false,
}: {
  light?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className={`inline-grid shrink-0 leading-none ${light ? "text-background" : "text-foreground"}`}
      aria-label="Lee Wood Interior home"
    >
      <span className="font-display text-base font-semibold uppercase sm:text-lg">
        Lee Wood{compact ? " Interior" : ""}
      </span>
      {!compact && (
        <span
          className={`mt-2 text-[9px] font-semibold uppercase ${light ? "text-background/62" : "text-foreground/52"}`}
        >
          Interior / Kannur
        </span>
      )}
    </Link>
  );
}

export function SiteHeader({ home = false, light = false }: { home?: boolean; light?: boolean }) {
  return (
    <header className={`site-header ${light ? "text-background" : "text-foreground"}`}>
      <Wordmark light={light} compact={!home} />
      {home ? (
        <nav className="flex items-center gap-6" aria-label="Main navigation">
          <Link
            to="/gallery"
            className={`micro-link md:hidden ${light ? "text-background/72 hover:text-primary" : "text-foreground/62 hover:text-primary-readable"}`}
          >
            Projects
          </Link>
          <span className="hidden items-center gap-6 md:flex">
            {mainNavigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`micro-link ${light ? "text-background/72 hover:text-primary" : "text-foreground/62 hover:text-primary-readable"}`}
              >
                {item.label}
              </Link>
            ))}
          </span>
        </nav>
      ) : (
        <Button
          asChild
          variant="ghost"
          className={`h-11 rounded-none px-0 text-[10px] font-semibold uppercase ${light ? "text-background/72 hover:bg-transparent hover:text-primary" : "text-foreground/62 hover:bg-transparent hover:text-primary-readable"}`}
        >
          <Link to="/">
            <ArrowLeft size={15} /> Back to studio
          </Link>
        </Button>
      )}
    </header>
  );
}

export function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`section-label ${light ? "text-primary" : "text-primary-readable"}`}>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

export function PageIntro({
  eyebrow,
  title,
  accent,
  description,
  image,
  imageAlt,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  accent?: ReactNode;
  description: string;
  image?: string;
  imageAlt?: string;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-foreground text-background" : "bg-background text-foreground"}>
      <div className="site-container">
        <SiteHeader light={dark} />
        <div className={`page-intro ${image ? "page-intro-with-image" : ""}`}>
          <ScrollReveal
            className={
              image
                ? "flex min-w-0 flex-col justify-between"
                : "grid min-w-0 gap-12 lg:grid-cols-12 lg:items-end"
            }
          >
            <div className={image ? "" : "lg:col-span-8"}>
              <SectionLabel light={dark}>{eyebrow}</SectionLabel>
              <h1 className="editorial-title mt-9">
                {title}
                {accent && <span className="block text-primary">{accent}</span>}
              </h1>
            </div>
            <p
              className={`${image ? "mt-12" : "lg:col-span-4"} max-w-lg border-l border-primary pl-6 text-[15px] leading-7 sm:text-base ${dark ? "text-background/72" : "text-foreground/68"}`}
            >
              {description}
            </p>
          </ScrollReveal>
          {image && (
            <ScrollReveal className="image-reveal relative min-h-[27rem] overflow-hidden bg-surface lg:min-h-[40rem]">
              <img
                src={image}
                alt={imageAlt ?? "Lee Wood Interior project"}
                className="absolute inset-0 size-full object-cover"
              />
              <span className="absolute bottom-6 right-6 border-r border-primary pr-4 font-display text-3xl text-background">
                01
              </span>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}

export function EditorialCta({
  title = (
    <>
      Let the space
      <br />
      become yours.
    </>
  ),
  description = "Tell us about your project and begin a focused conversation around the room, its purpose, and the way you want to live.",
}: {
  title?: ReactNode;
  description?: string;
}) {
  return (
    <section className="bg-secondary">
      <ScrollReveal className="site-container flex flex-col gap-10 py-20 sm:flex-row sm:items-end sm:justify-between lg:py-24">
        <div>
          <SectionLabel>Begin a conversation</SectionLabel>
          <h2 className="section-title mt-7">{title}</h2>
          <p className="body-copy mt-7">{description}</p>
        </div>
        <Button
          asChild
          className="editorial-button shrink-0 bg-foreground text-background hover:bg-primary hover:text-primary-foreground"
        >
          <Link to="/contact">
            Start an enquiry <ArrowRight size={16} />
          </Link>
        </Button>
      </ScrollReveal>
    </section>
  );
}

export function SiteFooter({ dark = false }: { dark?: boolean }) {
  void dark;
  return (
    <footer className="site-footer">
      <div className="site-container site-footer-container">
        <div className="site-footer-top">
          <span className="site-footer-brand">Lee Wood Interior © 2026</span>
          <span className="site-footer-location">Kannur / Kerala</span>
          <nav className="site-footer-navigation" aria-label="Footer navigation">
            {mainNavigation.slice(0, 3).map((item) => (
              <Link key={item.to} to={item.to} className="site-footer-link">
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="site-footer-link">
              Contact
            </Link>
          </nav>
        </div>
        <div className="site-footer-bottom">
          <span className="site-footer-copyright">© Copyright</span>
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="site-footer-utility site-footer-directions"
          >
            <MapPin size={12} strokeWidth={1.5} /> Directions
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="site-footer-utility site-footer-instagram"
          >
            <Instagram size={12} strokeWidth={1.5} /> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
