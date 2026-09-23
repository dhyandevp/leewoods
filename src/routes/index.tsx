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

const serviceCategories = [
  {
    number: "01",
    title: "Modular Kitchens",
    image: kitchenImage,
    description:
      "Purpose-built culinary spaces balancing ergonomic workflow, concealed storage, and teak warmth.",
    scope: "Quartz counters · Soft-close systems · Concealed pantry",
  },
  {
    number: "02",
    title: "Bespoke Wardrobes",
    image: wardrobeImage,
    description:
      "Floor-to-ceiling storage tailored to your daily rhythm, architectural ceiling heights, and wardrobe collection.",
    scope: "Fluted timber · Integrated illumination · Velvet-lined drawers",
  },
  {
    number: "03",
    title: "Living & Work",
    image: livingImage,
    description:
      "Serene lounge spaces, acoustic wall paneling, and tailored home office suites made for focused living.",
    scope: "Floating consoles · Teak paneling · Architectural lighting",
  },
] as const;

const philosophyPrinciples = [
  {
    number: "01",
    title: "Purpose",
    subtitle: "Habit, Movement & Light",
    description:
      "Architecture begins from how you move through a room at dawn, where sunlight lands at midday, and how spaces rest at night. Utility is never hidden; it is refined.",
  },
  {
    number: "02",
    title: "Proportion",
    subtitle: "Volume & Negative Space",
    description:
      "A quiet room breathes. We balance solid joinery with generous negative space, maintaining unbroken horizontal datum lines and disciplined structural alignment.",
  },
  {
    number: "03",
    title: "Material",
    subtitle: "Honesty & Tactile Warmth",
    description:
      "Natural materials that patina with dignity: solid Malabar teak, honed stone, textured lime wash, raw linen, and patinated bronze hardware.",
  },
] as const;

export default function HomePage() {
  useEffect(() => {
    document.title = "Lee Wood Interior — Interior Architecture in Kannur";
  }, []);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* Sticky Header */}
      <div className="site-container">
        <SiteHeader home />
      </div>

      {/* 1. Asymmetric Hero Section */}
      <section className="site-container pb-6 pt-6 sm:pt-8 lg:pt-10">
        <div className="grid border border-border bg-card lg:min-h-[clamp(640px,80vh,760px)] lg:grid-cols-[44%_56%]">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="flex flex-col justify-between px-6 py-12 sm:px-10 lg:px-12 xl:px-16">
            <div className="reveal-up">
              <SectionLabel>Interior Architecture</SectionLabel>
              <h1 className="mt-8 font-display text-[clamp(3.75rem,5.5vw,5.75rem)] font-light leading-[0.92] tracking-tight text-foreground">
                <span className="block">Lee</span>
                <span className="block">Wood</span>
                <span className="block font-normal text-bronze">Interior</span>
              </h1>
            </div>

            <div className="mt-12 max-w-md border-t border-border pt-8">
              <p className="text-[15px] leading-relaxed text-foreground/75 sm:text-base">
                Warm, restrained architectural interiors shaped around daily life—from modular
                kitchens and custom wardrobes to complete residences in Kannur, Kerala.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  className="editorial-button bg-forest text-ivory hover:bg-bronze hover:text-white transition-colors"
                >
                  <Link to="/gallery">
                    View projects <ArrowRight size={15} />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="editorial-button border-border bg-transparent text-foreground hover:border-forest hover:bg-forest/5"
                >
                  <Link to="/about">Our studio</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Photography with Architectural Index */}
          <div className="image-reveal relative min-h-[30rem] overflow-hidden bg-forest lg:min-h-0">
            <img
              src={heroImage}
              alt="Warm tropical minimalist interior with solid timber and garden views"
              className="absolute inset-0 size-full object-cover object-center"
            />
            {/* Fine architectural corner marking */}
            <div className="pointer-events-none absolute bottom-[8%] left-[7%] h-[24%] w-[24%] border-b border-l border-bronze/60" />
            <span
              aria-hidden="true"
              className="absolute bottom-8 right-8 border-r border-bronze pr-4 font-display text-3xl font-light text-ivory"
            >
              01
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-6 flex justify-center">
          <a
            href="#studio"
            aria-label="Scroll to studio introduction"
            className="flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase text-foreground/60 transition-colors hover:text-bronze"
          >
            <span>Scroll</span>
            <ArrowDown size={13} />
          </a>
        </div>
      </section>

      {/* 2. Studio Intro: Asymmetric Split */}
      <section id="studio" className="section-space">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: Image with Overlapping Dark Forest Caption */}
          <ScrollReveal className="relative pb-12 lg:col-span-6">
            <div className="image-reveal aspect-[5/4] overflow-hidden bg-secondary">
              <img
                src={aboutImage}
                alt="Lee Wood living and dining interior crafted with natural teak and linen"
                loading="lazy"
                className="size-full object-cover object-center"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[90%] border-l-2 border-bronze bg-forest p-6 text-ivory sm:w-[62%] sm:p-8">
              <p className="text-xs font-semibold tracking-[0.1em] uppercase text-bronze">
                Material / Light / Proportion
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ivory/80">
                Rooms composed for calm, movement, and the tactile rituals of everyday living.
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Editorial Narrative */}
          <ScrollReveal className="lg:col-span-5 lg:col-start-8">
            <SectionLabel>01 / The studio</SectionLabel>
            <h2 className="section-title mt-6">
              Built around
              <br />
              the way you
              <br />
              <span className="text-bronze">live.</span>
            </h2>
            <p className="body-copy mt-6">
              We design calm, tailored spaces where storage, movement, texture, and light function
              as one considered architectural whole. Every decision begins with the room and the
              people who inhabit it.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 text-xs font-semibold tracking-wider uppercase text-foreground/75">
              <div>
                <span className="text-bronze font-mono">01</span>
                <p className="mt-1 font-sans">
                  Residential
                  <br />
                  Interiors
                </p>
              </div>
              <div>
                <span className="text-bronze font-mono">02</span>
                <p className="mt-1 font-sans">
                  Custom Teak
                  <br />
                  Joinery
                </p>
              </div>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-foreground transition-colors hover:text-bronze"
            >
              Meet the studio <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Design Philosophy Manifesto: How We Think */}
      <section className="border-y border-border bg-secondary/40 py-20 lg:py-28">
        <div className="site-container">
          <div className="max-w-3xl">
            <SectionLabel>02 / Philosophy</SectionLabel>
            <h2 className="section-title mt-6">
              The room leads the <span className="text-bronze">design.</span>
            </h2>
            <p className="body-copy mt-4 text-foreground/75">
              Three quiet architectural principles guide every commission from structural layout to
              custom hardware.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {philosophyPrinciples.map((item) => (
              <ScrollReveal
                key={item.number}
                className="flex flex-col justify-between border-t border-border pt-6"
              >
                <div>
                  <span className="font-mono text-xs font-semibold tracking-widest text-bronze">
                    {item.number} / {item.title}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-medium text-foreground">
                    {item.subtitle}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services (Dark Forest Section) */}
      <section className="bg-forest text-ivory">
        <div className="site-container py-20 lg:py-28">
          <div className="grid gap-8 border-b border-white/14 pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel light>03 / Disciplines</SectionLabel>
              <h2 className="section-title mt-6 text-ivory">
                Spaces with <span className="text-bronze">purpose.</span>
              </h2>
            </div>
            <p className="text-[15px] leading-relaxed text-ivory/75 lg:col-span-4 lg:col-start-9">
              From functional planning to material detailing, each interior is crafted as one
              harmonious architectural composition.
            </p>
          </div>

          {/* 3 Image-Driven Panels */}
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {serviceCategories.map((service) => (
              <ScrollReveal key={service.title}>
                <article className="group relative flex aspect-[4/5] w-full flex-col justify-between overflow-hidden border border-white/10 bg-forest p-7 lg:p-8">
                  <img
                    src={service.image}
                    alt={`${service.title} by Lee Wood Interior`}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover brightness-[0.88] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062018] via-[#062018]/60 to-transparent" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-widest text-bronze">
                      {service.number}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-ivory/60">
                      Bespoke Craft
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-display text-2xl font-normal text-ivory">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-ivory/80">
                      {service.description}
                    </p>
                    <div className="mt-4 border-t border-white/10 pt-3 text-xs uppercase tracking-wider text-bronze font-medium">
                      {service.scope}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 flex justify-end">
            <Button
              asChild
              variant="outline"
              className="editorial-button border-white/25 bg-transparent text-ivory hover:border-bronze hover:bg-bronze hover:text-white transition-colors"
            >
              <Link to="/services">
                Explore all services <ArrowRight size={14} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Featured Project Spotlight */}
      <section className="section-space border-b border-border">
        <div className="site-container">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>04 / Spotlight</SectionLabel>
              <h2 className="section-title mt-4">
                The Evening <span className="text-bronze">Residence.</span>
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-foreground transition-colors hover:text-bronze"
            >
              View complete portfolio <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="image-reveal relative aspect-[16/10] overflow-hidden bg-secondary lg:col-span-8">
              <img
                src={ctaImage}
                alt="The Evening Residence interior featuring natural teak finishes"
                loading="lazy"
                className="size-full object-cover object-center"
              />
              <span className="absolute bottom-6 left-6 border-l border-bronze bg-forest/85 px-4 py-2 font-mono text-xs text-ivory backdrop-blur-sm">
                Location: Kannur, Kerala · Completed 2025
              </span>
            </div>

            <div className="space-y-6 lg:col-span-4">
              <div className="border-t border-border pt-4">
                <span className="text-xs uppercase tracking-wider text-foreground/50">
                  Typology
                </span>
                <p className="mt-1 text-sm font-medium text-foreground">
                  Private Tropical Residence
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <span className="text-xs uppercase tracking-wider text-foreground/50">
                  Disciplines
                </span>
                <p className="mt-1 text-sm font-medium text-foreground">
                  Modular Kitchen · Master Suite · Fluted Teak Wall Cladding
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <span className="text-xs uppercase tracking-wider text-foreground/50">
                  Materials
                </span>
                <p className="mt-1 text-sm font-medium text-foreground">
                  Honed Granite · Solid Teak · Brushed Brass · Belgian Linen
                </p>
              </div>
              <Button
                asChild
                className="editorial-button mt-4 w-full bg-forest text-ivory hover:bg-bronze hover:text-white"
              >
                <Link to="/gallery">
                  Explore project details <ArrowRight size={14} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Editorial CTA Section */}
      <section className="relative min-h-[38rem] overflow-hidden text-ivory lg:min-h-[42rem]">
        <img
          src={ctaImage}
          alt="Tropical residence in dusk light"
          loading="lazy"
          className="absolute inset-0 size-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062018]/90 via-[#062018]/70 to-transparent" />
        <div className="site-container relative flex min-h-[38rem] flex-col justify-center py-20 lg:min-h-[42rem]">
          <SectionLabel light>05 / Project Enquiries</SectionLabel>
          <h2 className="section-title mt-6 max-w-2xl text-ivory">
            Let the space
            <br />
            become <span className="text-bronze">yours.</span>
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ivory/80">
            Visit our studio at Pialathara, Cheruthazham, Kannur, or start an architectural brief
            for your upcoming residential or commercial commission.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="editorial-button bg-bronze text-white hover:bg-bronze/90 transition-colors"
            >
              <Link to="/contact">
                Start an enquiry <ArrowRight size={15} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="editorial-button border-white/30 bg-transparent text-ivory hover:border-ivory hover:bg-white/10"
            >
              <a href={mapUrl} target="_blank" rel="noreferrer">
                <MapPin size={14} /> Get directions
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Global High-Contrast Footer */}
      <SiteFooter dark />
    </main>
  );
}
