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
  [
    "01",
    "Purpose",
    "Each room begins with how it needs to work—movement, storage, comfort, and the routines it holds.",
  ],
  [
    "02",
    "Proportion",
    "Cabinetry and furniture become part of the architecture, giving every element a clear place.",
  ],
  [
    "03",
    "Material",
    "Natural grain, considered finishes, and layered light bring warmth and quiet character.",
  ],
] as const;

export default function AboutPage() {
  useEffect(() => {
    document.title = "Studio — Lee Wood Interior";
  }, []);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <PageIntro
        eyebrow="01 / The studio"
        title={
          <>
            Spaces
            <br />
            made
          </>
        }
        accent={<em className="font-normal">to belong.</em>}
        description="Lee Wood Interior plans warm, precise environments around the people who use them. Storage, movement, texture, and light are considered together—not as separate details."
        image={aboutImage}
        imageAlt="Warm contemporary interior by Lee Wood Interior"
      />

      <section className="section-space">
        <div className="site-container grid gap-14 lg:grid-cols-12 lg:gap-8">
          <ScrollReveal className="lg:col-span-4">
            <SectionLabel>02 / How we think</SectionLabel>
            <h2 className="section-title mt-8">
              The room
              <br />
              leads the
              <br />
              design.
            </h2>
          </ScrollReveal>
          <div className="lg:col-span-7 lg:col-start-6">
            {principles.map(([number, title, copy]) => (
              <ScrollReveal
                key={title}
                className="grid gap-5 border-t border-border py-8 sm:grid-cols-[3rem_8rem_1fr] md:grid-cols-[3rem_12rem_1fr]"
              >
                <span className="micro-copy text-primary-readable">{number}</span>
                <h3 className="font-display text-2xl font-medium">{title}</h3>
                <p className="body-copy">{copy}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-dark text-surface-dark-foreground">
        <div className="site-container grid gap-14 py-20 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-28">
          <ScrollReveal className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <img
              src={livingImage}
              alt="Lee Wood living interior"
              loading="lazy"
              className="aspect-[4/5] size-full object-cover sm:translate-y-10"
            />
            <img
              src={wardrobeImage}
              alt="Lee Wood bespoke wardrobe"
              loading="lazy"
              className="aspect-[4/5] size-full object-cover"
            />
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-4 lg:col-start-9">
            <SectionLabel light>03 / Local practice</SectionLabel>
            <h2 className="section-title mt-8">
              Rooted in
              <br />
              Kannur.
            </h2>
            <p className="mt-8 text-[15px] leading-8 text-surface-dark-foreground/75">
              Based in Pilathara, Cheruthazham, Lee Wood Interior works across residential and
              commercial spaces, from individual furniture and built-ins to complete interiors.
            </p>
            <div className="mt-9 flex items-start justify-between border-t border-surface-dark-foreground/16 pt-6 text-sm leading-6 text-surface-dark-foreground/85">
              <div className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-primary-on-dark" size={16} />
                <address className="not-italic">
                  Pilathara, Cheruthazham
                  <br />
                  Kannur District, Kerala 670741
                </address>
              </div>
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-on-dark hover:underline"
              >
                Directions
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <EditorialCta
        title={
          <>
            See how the thinking
            <br />
            becomes a space.
          </>
        }
      />
      <SiteFooter />
    </main>
  );
}
