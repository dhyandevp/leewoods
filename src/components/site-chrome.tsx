import { Link, useLocation } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
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
export const phoneUrl = "tel:+919447000000";
export const whatsappUrl = "https://wa.me/919447000000";
export const emailUrl = "mailto:studio@leewoodinterior.com";
export const studioPhone = "+91 94470 00000";
export const studioEmail = "studio@leewoodinterior.com";

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
      className={`inline-grid shrink-0 leading-none ${light ? "text-surface-dark-foreground" : "text-foreground"}`}
      aria-label="Lee Wood Interior home"
    >
      <span className="font-display text-base font-semibold uppercase sm:text-lg">
        Lee Wood{compact ? " Interior" : ""}
      </span>
      {!compact && (
        <span
          className={`mt-2 text-[9px] font-semibold uppercase ${light ? "text-surface-dark-foreground/70" : "text-foreground/52"}`}
        >
          Interior / Kannur
        </span>
      )}
    </Link>
  );
}

export function SiteHeader({ home = false, light = false }: { home?: boolean; light?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
      // Focus trap
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0]!;
        const last = focusable[focusable.length - 1]!;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    // Focus first focusable element in menu
    requestAnimationFrame(() => {
      const close = menuRef.current?.querySelector<HTMLElement>("button");
      close?.focus();
    });

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`site-header ${light ? "text-surface-dark-foreground" : "text-foreground"}`}
      >
        <Wordmark light={light} compact={!home} />
        <nav className="flex items-center gap-6" aria-label="Main navigation">
          {/* Mobile: hamburger */}
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            className={`press-scale md:hidden ${light ? "text-surface-dark-foreground/80" : "text-foreground/62"}`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu size={22} />
          </button>
          {/* Desktop: inline links */}
          <span className="hidden items-center gap-6 md:flex">
            {mainNavigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`micro-link ${light ? "text-surface-dark-foreground/80 hover:text-primary-on-dark" : "text-foreground/62 hover:text-primary-readable"} ${location.pathname === item.to ? (light ? "!text-primary-on-dark" : "!text-primary-readable") : ""}`}
                {...(location.pathname === item.to ? { "aria-current": "page" as const } : {})}
              >
                {item.label}
              </Link>
            ))}
          </span>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        ref={menuRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-0 z-50 flex flex-col bg-surface-dark text-surface-dark-foreground transition-opacity duration-300 md:hidden ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!menuOpen}
      >
        <div className="site-container flex min-h-[5.25rem] items-center justify-between sm:min-h-[6.5rem]">
          <Wordmark light compact />
          <button
            type="button"
            onClick={closeMenu}
            className="press-scale text-surface-dark-foreground/72"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>
        <nav
          className="site-container flex flex-1 flex-col justify-center gap-8"
          aria-label="Mobile navigation"
        >
          {mainNavigation.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={`font-display text-4xl font-normal transition-colors hover:text-primary ${location.pathname === item.to ? "text-primary" : "text-surface-dark-foreground/90"}`}
              {...(location.pathname === item.to ? { "aria-current": "page" as const } : {})}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                transition: `opacity .4s cubic-bezier(.2,.8,.2,1) ${i * 60}ms, transform .4s cubic-bezier(.2,.8,.2,1) ${i * 60}ms`,
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
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
    <p className={`section-label ${light ? "text-primary-on-dark" : "text-primary-readable"}`}>
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
    <section
      className={
        dark ? "bg-surface-dark text-surface-dark-foreground" : "bg-background text-foreground"
      }
    >
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
                {accent && (
                  <span className={`block ${dark ? "text-primary-on-dark" : "text-primary"}`}>
                    {accent}
                  </span>
                )}
              </h1>
            </div>
            <p
              className={`${image ? "mt-12" : "lg:col-span-4"} max-w-lg border-l border-primary pl-6 text-[15px] leading-7 sm:text-base ${dark ? "text-surface-dark-foreground/78" : "text-foreground/68"}`}
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
              <span
                aria-hidden="true"
                className="absolute bottom-6 right-6 border-r border-primary pr-4 font-display text-3xl text-surface-dark-foreground"
              >
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
            {mainNavigation.map((item) => (
              <Link key={item.to} to={item.to} className="site-footer-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="site-footer-bottom">
          <span className="site-footer-copyright">Kannur, Kerala</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href={phoneUrl} className="site-footer-utility" aria-label="Call studio">
              <Phone size={12} strokeWidth={1.5} /> {studioPhone}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="site-footer-utility"
              aria-label="WhatsApp studio"
            >
              <MessageCircle size={12} strokeWidth={1.5} /> WhatsApp
            </a>
            <a href={mapUrl} target="_blank" rel="noreferrer" className="site-footer-utility">
              <MapPin size={12} strokeWidth={1.5} /> Directions
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="site-footer-utility">
              <Instagram size={12} strokeWidth={1.5} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
