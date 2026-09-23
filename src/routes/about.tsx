import { useEffect } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import {
  EditorialCta,
  PageIntro,
  SectionLabel,
  SiteFooter,
  mapUrl,
} from "@/components/site-chrome";
import { ScrollReveal } from "@/components/scroll-reveal";
import aboutImage from "@/assets/lee-wood-about.jpg";
import livingImage from "@/assets/lee-wood-living.jpg";
import wardrobeImage from "@/assets/lee-wood-wardrobe.jpg";

const principles = [
  {
    number: "01",
    title: "Purpose",
    subtitle: "Habit, Movement & Light",
    description:
      "Each room begins with how it needs to work—movement, storage, comfort, and the rituals of everyday life. We calibrate circulation paths before shaping decorative elements.",
  },
  {
    number: "02",
    title: "Proportion",
    subtitle: "Volume & Negative Space",
    description:
      "Cabinetry, consoles, and partitions become integral extensions of the architecture. Continuous horizontal datums and disciplined ceiling heights create visual stillness.",
  },
  {
    number: "03",
    title: "Material",
    subtitle: "Honesty & Tactile Warmth",
    description:
      "Natural grain, honed granite, breathable lime plasters, and patinated bronze hardware. Materials chosen to age gracefully under tropical light and monsoon humidity.",
  },
] as const;

export default function AboutPage() {
  useEffect(() => {
    document.title = "Studio — Lee Wood Interior | Kannur";
  }, []);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* 1. Studio Page Intro Hero */}
      <PageIntro
        eyebrow="01 / The studio"
        title={
          <>
            Spaces
            <br />
            made
          </>
        }
        accent={<span className="font-normal text-bronze">to belong.</span>}
        description="Lee Wood Interior is an architectural interior practice based in Kannur. We shape calm, precise residential and commercial environments where storage, movement, texture, and light function as one considered whole."
        image={aboutImage}
        imageAlt="Warm architectural interior composed of solid timber and linen by Lee Wood Interior"
      />

      {/* 2. Philosophy Manifesto: How We Think */}
      <section className="section-space border-y border-border bg-secondary/30">
        <div className="site-container grid gap-14 lg:grid-cols-12 lg:gap-8">
          <ScrollReveal className="lg:col-span-4">
            <SectionLabel>02 / How we think</SectionLabel>
            <h2 className="section-title mt-6">
              The room
              <br />
              leads the
              <br />
              <span className="text-bronze">design.</span>
            </h2>
            <p className="body-copy mt-6 text-foreground/75">
              We reject transient decorative trends in favor of architectural permanence, functional
              clarity, and unforced quiet luxury.
            </p>
          </ScrollReveal>

          <div className="space-y-2 lg:col-span-7 lg:col-start-6">
            {principles.map((p) => (
              <ScrollReveal
                key={p.number}
                className="grid gap-4 border-t border-border py-8 sm:grid-cols-[4rem_13rem_1fr]"
              >
                <span className="font-mono text-xs font-semibold tracking-widest text-bronze">
                  {p.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium text-foreground">{p.title}</h3>
                  <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-stone">
                    {p.subtitle}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/75">{p.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Local Practice in Kannur: Dark Forest Architectural Section */}
      <section className="bg-forest text-ivory">
        <div className="site-container grid gap-14 py-20 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-28">
          <ScrollReveal className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            <div className="image-reveal aspect-[4/5] overflow-hidden border border-white/10 bg-forest sm:translate-y-8">
              <img
                src={livingImage}
                alt="Lee Wood living room interior with custom acoustic paneling"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
            <div className="image-reveal aspect-[4/5] overflow-hidden border border-white/10 bg-forest">
              <img
                src={wardrobeImage}
                alt="Lee Wood bespoke teak wardrobe system with integrated lighting"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-5">
            <SectionLabel light>03 / Local practice</SectionLabel>
            <h2 className="section-title mt-6 text-ivory">
              Rooted in
              <br />
              <span className="text-bronze">Kannur.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-ivory/80">
              Operating from Pilathara, Cheruthazham, Lee Wood Interior specializes in responsive
              architecture calibrated for Malabar’s coastal microclimate. We engineer bespoke
              joinery to withstand high seasonal humidity, prioritize natural cross-ventilation, and
              source sustainable solid timbers.
            </p>
            <div className="mt-8 flex flex-col gap-4 border-t border-white/14 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-bronze" size={16} />
                <address className="not-italic text-sm leading-relaxed text-ivory/85">
                  Pialathara, Cheruthazham
                  <br />
                  Kannur District, Kerala 670741
                </address>
              </div>
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-bronze transition-colors hover:text-white"
              >
                Directions
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Editorial Call to Action */}
      <EditorialCta
        title={
          <>
            See how the thinking
            <br />
            becomes a <span className="text-bronze">space.</span>
          </>
        }
        description="Share your architectural drawings, spatial ideas, or residential project requirements with our Kannur studio."
      />

      {/* Global High-Contrast Footer */}
      <SiteFooter dark />
    </main>
  );
}
