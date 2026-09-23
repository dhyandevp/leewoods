import { Link, useLocation } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Sun,
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

export function Wordmark({ light = false }: { light?: boolean; compact?: boolean }) {
  return (
    <Link
      to="/"
      className={`inline-flex shrink-0 items-center py-1 leading-none ${light ? "text-surface-dark-foreground" : "text-foreground"}`}
      aria-label="Lee Wood Interior home"
    >
      <span className="font-display text-sm font-semibold tracking-[0.08em] uppercase sm:text-base">
        Lee Wood Interior
      </span>
    </Link>
  );
}

export function ThemeToggle({ light = false }: { light?: boolean }) {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    if (next === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key === "theme" && (e.newValue === "light" || e.newValue === "dark")) {
        setTheme(e.newValue);
        const root = document.documentElement;
        if (e.newValue === "dark") {
          root.classList.add("dark");
          root.classList.remove("light");
          root.setAttribute("data-theme", "dark");
        } else {
          root.classList.remove("dark");
          root.classList.add("light");
          root.setAttribute("data-theme", "light");
        }
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`press-scale flex size-8 items-center justify-center border transition-colors ${
        light
          ? "border-white/20 text-surface-dark-foreground/80 hover:border-white/40 hover:text-white"
          : "border-border text-foreground/80 hover:border-bronze hover:text-bronze"
      }`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}

export function SiteHeader({ home = false, light = false }: { home?: boolean; light?: boolean }) {
  void home;
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
        className={`site-header sticky top-0 z-40 w-full backdrop-blur-md transition-colors duration-200 ${
          light
            ? "border-b border-white/10 bg-surface-dark/92 text-surface-dark-foreground"
            : "border-b border-border/80 bg-background/92 text-foreground"
        }`}
      >
        <Wordmark light={light} />
        <nav className="flex items-center gap-4 sm:gap-6" aria-label="Main navigation">
          {/* Mobile: theme toggle & hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle light={light} />
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              className={`press-scale p-1 ${light ? "text-surface-dark-foreground/80 hover:text-surface-dark-foreground" : "text-foreground/75 hover:text-foreground"}`}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu size={22} />
            </button>
          </div>
          {/* Desktop: inline links & theme toggle */}
          <div className="hidden items-center gap-7 md:flex">
            {mainNavigation.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-xs font-medium tracking-[0.08em] uppercase transition-colors duration-150 ${
                    light
                      ? active
                        ? "text-bronze font-semibold"
                        : "text-surface-dark-foreground/80 hover:text-bronze"
                      : active
                        ? "text-bronze font-semibold"
                        : "text-foreground/75 hover:text-foreground"
                  }`}
                  {...(active ? { "aria-current": "page" as const } : {})}
                >
                  {item.label}
                </Link>
              );
            })}
            <ThemeToggle light={light} />
          </div>
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
        <div className="site-container flex min-h-[4.75rem] items-center justify-between sm:min-h-[5.25rem]">
          <Wordmark light compact />
          <div className="flex items-center gap-3">
            <ThemeToggle light />
            <button
              type="button"
              onClick={closeMenu}
              className="press-scale p-1 text-surface-dark-foreground/80 hover:text-surface-dark-foreground"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
        </div>
        <nav
          className="site-container flex flex-1 flex-col justify-center gap-7"
          aria-label="Mobile navigation"
        >
          {mainNavigation.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={`font-display text-3xl font-normal transition-colors hover:text-bronze ${location.pathname === item.to ? "text-bronze font-medium" : "text-surface-dark-foreground/90"}`}
              {...(location.pathname === item.to ? { "aria-current": "page" as const } : {})}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                transition: `opacity .35s cubic-bezier(.2,.8,.2,1) ${i * 50}ms, transform .35s cubic-bezier(.2,.8,.2,1) ${i * 50}ms`,
              }}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8 border-t border-white/10 pt-6 text-xs tracking-wider text-surface-dark-foreground/60 uppercase">
            Thaza Kayaload, Kannur, Kerala
          </div>
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
    <section className="border-t border-border bg-secondary/60">
      <ScrollReveal className="site-container flex flex-col gap-10 py-20 sm:flex-row sm:items-end sm:justify-between lg:py-24">
        <div className="max-w-2xl">
          <SectionLabel>Begin a conversation</SectionLabel>
          <h2 className="section-title mt-6">{title}</h2>
          <p className="body-copy mt-6 text-foreground/75">{description}</p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-4">
          <Button
            asChild
            className="editorial-button bg-forest text-ivory hover:bg-bronze hover:text-white dark:bg-bronze dark:text-white dark:hover:bg-bronze/90 transition-colors"
          >
            <Link to="/contact">
              Start an enquiry <ArrowRight size={15} />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="editorial-button border border-border bg-transparent text-foreground hover:border-bronze hover:text-bronze transition-colors"
          >
            <a href={mapUrl} target="_blank" rel="noreferrer">
              <MapPin size={14} className="shrink-0 text-bronze" /> Get directions
            </a>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}

export function SiteFooter({ dark = false }: { dark?: boolean }) {
  void dark;
  return (
    <footer className="site-footer bg-[#062018] text-[#F3F0E8]">
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
          <span className="site-footer-copyright">
            Thaza Kayaload, Kannur District, Kerala 670741
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href={phoneUrl} className="site-footer-utility" aria-label="Call studio">
              <Phone size={13} strokeWidth={1.75} /> {studioPhone}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="site-footer-utility"
              aria-label="WhatsApp studio"
            >
              <MessageCircle size={13} strokeWidth={1.75} /> WhatsApp
            </a>
            <a href={mapUrl} target="_blank" rel="noreferrer" className="site-footer-utility">
              <MapPin size={13} strokeWidth={1.75} /> Directions
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="site-footer-utility">
              <Instagram size={13} strokeWidth={1.75} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
