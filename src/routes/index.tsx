import { Link } from "react-router";
import { useEffect } from "react";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionLabel, SiteFooter, SiteHeader, mapUrl } from "@/components/site-chrome";
import heroImage from "@/assets/lee-wood-hero.jpg";
import aboutImage from "@/assets/lee-wood-about.jpg";
import kitchenImage from "@/assets/lee-wood-kitchen.jpg";
import wardrobeImage from "@/assets/lee-wood-wardrobe.jpg";
import livingImage from "@/assets/lee-wood-living.jpg";
import ctaImage from "@/assets/lee-wood-cta.jpg";

const categories = [
  [
    "01",
    "Modular Kitchens",
    kitchenImage,
    "Purpose-built kitchens balancing movement, storage, and material warmth.",
  ],
  [
    "02",
    "Wardrobes",
    wardrobeImage,
    "Bespoke storage designed around the architecture and your everyday rhythm.",
  ],
  [
    "03",
    "Living & Work",
    livingImage,
    "Calm living rooms, fitted furniture, and focused spaces for work.",
  ],
] as const;

export default function HomePage() {
  useEffect(() => {
    document.title = "Lee Wood Interior — Interior Architecture in Kannur";
  }, []);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <div className="site-container">
        <SiteHeader home />
      </div>

      <section className="site-container pb-4 pt-8 lg:pt-10">
        <div className="grid bg-card lg:h-[clamp(650px,82vh,760px)] lg:grid-cols-[2fr_3fr]">
          <div className="flex min-h-[34rem] min-w-0 flex-col justify-center gap-12 px-6 py-12 sm:px-10 lg:px-12 xl:px-16">
            <div className="reveal-up">
              <SectionLabel>Interior architecture / Kannur</SectionLabel>
              <h1 className="mt-8 font-display text-[clamp(4rem,6vw,6.25rem)] font-normal leading-[.9]">
                <span className="block">Lee</span>
                <span className="block">Wood</span>
                <span className="block text-primary">Interior</span>
              </h1>
            </div>
            <div>
              <p className="max-w-md text-[15px] leading-7 text-foreground/68">
                Warm, precise interiors shaped around daily life—from modular kitchens and wardrobes
                to complete homes and offices.
              </p>
              <Button
                asChild
                variant="ghost"
                className="group mt-7 h-auto rounded-none p-0 hover:bg-transparent hover:text-primary-readable press-scale"
              >
                <Link to="/gallery">
                  <span className="grid size-13 shrink-0 place-items-center rounded-full border border-foreground/22 transition-colors group-hover:border-primary group-hover:bg-primary">
                    <ArrowRight size={16} />
                  </span>
                  <span className="ml-4 text-[11px] font-semibold uppercase">View projects</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="image-reveal relative min-h-[31rem] overflow-hidden bg-foreground lg:min-h-0">
            <img
              src={heroImage}
              alt="Warm tropical-modern interior with natural timber and garden views"
              className="absolute inset-0 size-full object-cover object-center"
            />
            <div className="absolute bottom-[8%] left-[7%] h-[28%] w-[26%] border-b border-l border-primary/65" />
            <span className="absolute bottom-8 right-8 border-r border-primary pr-4 font-display text-3xl text-background">
              01
            </span>
          </div>
        </div>
        <a
          href="#studio"
          aria-label="Discover the studio"
          className="mx-auto mt-6 flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.06em] text-foreground/75 transition-colors hover:text-primary-readable"
        >
          <span>Scroll</span>
          <ArrowDown size={14} />
        </a>
      </section>

      <section id="studio" className="section-space">
        <div className="site-container grid gap-14 lg:grid-cols-12 lg:items-center">
          <ScrollReveal className="relative pb-14 lg:col-span-6">
            <div className="image-reveal aspect-[6/5] overflow-hidden">
              <img
                src={aboutImage}
                alt="Lee Wood living and dining interior"
                loading="lazy"
                className="size-full object-cover object-center"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[88%] bg-foreground p-6 text-background sm:w-[58%] sm:p-8">
              <p className="micro-copy text-primary">Material / Light / Proportion</p>
              <p className="mt-4 text-[15px] leading-7 text-background/72">
                Rooms composed for calm, movement, and the rituals of everyday life.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-5 lg:col-start-8">
            <SectionLabel>01 / The studio</SectionLabel>
            <h2 className="section-title mt-8">
              Built around
              <br />
              the way you
              <br />
              live.
            </h2>
            <p className="body-copy mt-8">
              We design calm, tailored spaces where storage, movement, texture, and light function
              as one considered architectural whole. Every decision begins with the room and the
              people who use it.
            </p>
            <div className="micro-copy mt-9 grid grid-cols-2 gap-6 border-t border-border pt-6 text-foreground/75">
              <span>
                Homes
                <br />& offices
              </span>
              <span>
                Design
                <br />& furniture
              </span>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase hover:text-primary-readable"
            >
              Meet the studio <ArrowRight size={15} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface-dark text-surface-dark-foreground">
        <div className="site-container py-20 lg:py-28">
          <div className="grid gap-8 border-b border-surface-dark-foreground/16 pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel light>02 / Architecture</SectionLabel>
              <h2 className="section-title mt-8">Spaces with purpose.</h2>
            </div>
            <p className="text-[15px] leading-7 text-surface-dark-foreground/75 lg:col-span-4 lg:col-start-9">
              From functional planning to material detail, each interior is made as one considered
              whole.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {categories.map(([number, title, image, copy]) => (
              <ScrollReveal key={title}>
                <article className="group relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={image}
                    alt={`${title} by Lee Wood Interior`}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover brightness-105 transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-[48%] bg-[linear-gradient(180deg,transparent,color-mix(in_oklab,var(--surface-dark)_85%,transparent))]" />
                  <div className="absolute inset-x-0 bottom-0 p-7 lg:p-8">
                    <span className="micro-copy text-primary-on-dark">{number}</span>
                    <h3 className="mt-4 font-display text-[clamp(1.35rem,2vw,1.8rem)] font-medium">
                      {title}
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-surface-dark-foreground/85">
                      {copy}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 text-right">
            <Button
              asChild
              variant="outline"
              className="editorial-button border-surface-dark-foreground/35 bg-transparent text-surface-dark-foreground hover:bg-primary hover:text-primary-foreground press-scale"
            >
              <Link to="/services">
                Explore services <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative min-h-[42rem] overflow-hidden text-surface-dark-foreground lg:min-h-[46rem]">
        <img
          src={ctaImage}
          alt="Tropical residence at dusk"
          loading="lazy"
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--surface-dark)_85%,transparent),color-mix(in_oklab,var(--surface-dark)_45%,transparent)_52%,transparent_76%)]" />
        <div className="site-container relative flex min-h-[42rem] flex-col justify-center py-20 lg:min-h-[46rem]">
          <SectionLabel light>03 / Project enquiries</SectionLabel>
          <h2 className="section-title mt-8 max-w-4xl text-surface-dark-foreground">
            Let the space
            <br />
            become yours.
          </h2>
          <p className="mt-8 max-w-lg text-[15px] leading-7 text-surface-dark-foreground/85">
            Visit Lee Wood Interior in Pilathara, Kannur, or tell us about your project and let us
            shape it from the first idea.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="editorial-button bg-primary text-primary-foreground hover:bg-primary/90 press-scale"
            >
              <Link to="/contact">
                Start an enquiry <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="editorial-button border-surface-dark-foreground/50 bg-transparent text-surface-dark-foreground hover:bg-surface-dark-foreground hover:text-surface-dark press-scale"
            >
              <a href={mapUrl} target="_blank" rel="noreferrer">
                <MapPin />
                Get directions
              </a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter dark />
    </main>
  );
}
