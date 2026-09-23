import { useEffect } from "react";
import { EditorialCta, PageIntro, SectionLabel, SiteFooter } from "@/components/site-chrome";
import { ScrollReveal } from "@/components/scroll-reveal";
import kitchenImage from "@/assets/lee-wood-kitchen.jpg";
import wardrobeImage from "@/assets/lee-wood-wardrobe.jpg";
import livingImage from "@/assets/lee-wood-living.jpg";
import heroImage from "@/assets/lee-wood-hero.jpg";

const services = [
  [
    "01",
    "Modular kitchens",
    kitchenImage,
    "Purpose-built kitchens balancing movement, storage, and material warmth.",
    "Bespoke modular kitchen with warm timber cabinetry and integrated storage",
  ],
  [
    "02",
    "Bespoke wardrobes",
    wardrobeImage,
    "Custom storage designed around the architecture and your everyday rhythm.",
    "Custom built-in wardrobe with precision joinery",
  ],
  [
    "03",
    "Living & media",
    livingImage,
    "TV units, fitted elements, and living spaces composed for comfort and connection.",
    "Calm living room with integrated TV unit and balanced lighting",
  ],
  [
    "04",
    "Complete interiors",
    heroImage,
    "A joined-up approach to home and office interiors, furniture, finishes, and planning.",
    "Comprehensive residential interior architecture in Kannur",
  ],
] as const;

const scope = [
  "Home interiors",
  "Office interiors",
  "Furniture works",
  "TV units",
  "Custom storage",
  "Material detailing",
];

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Services & Scope — Lee Wood Interior";
  }, []);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <PageIntro
        dark
        eyebrow="01 / Disciplines & Scope"
        title={<>What we</>}
        accent={<em className="font-normal">shape.</em>}
        description="From focused cabinetry to complete spaces, each service brings planning, materials, furniture, and practical use into one coherent interior."
        image={kitchenImage}
        imageAlt="Modular kitchen by Lee Wood Interior"
      />

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel>02 / Disciplines</SectionLabel>
              <h2 className="section-title mt-8">Designed as a whole.</h2>
            </div>
            <p className="body-copy lg:col-span-4 lg:col-start-9">
              Every discipline responds to the room, the required function, and the way the finished
              space will be used.
            </p>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {services.map(([number, title, image, copy, altText]) => (
              <ScrollReveal key={title}>
                <article>
                  <div className="image-reveal relative aspect-[5/4] overflow-hidden bg-surface">
                    <img
                      src={image}
                      alt={altText}
                      loading="lazy"
                      className="size-full object-cover object-center"
                    />
                    <span className="absolute left-5 top-5 grid size-10 place-items-center bg-foreground text-xs font-semibold text-primary">
                      {number}
                    </span>
                  </div>
                  <div className="grid gap-5 border-b border-border py-7 sm:grid-cols-[1fr_1.15fr]">
                    <h3 className="font-display text-2xl font-medium sm:text-3xl">{title}</h3>
                    <p className="body-copy">{copy}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="site-container grid gap-14 py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
          <ScrollReveal className="lg:col-span-5">
            <SectionLabel>03 / Project scope</SectionLabel>
            <h2 className="section-title mt-8">
              One room or a<br />
              complete interior.
            </h2>
            <p className="body-copy mt-8">
              The scope is shaped around the site, required furniture and cabinetry, chosen
              materials, and the needs shared during the project conversation.
            </p>
          </ScrollReveal>
          <div className="grid content-start sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {scope.map((item, i) => (
              <div
                key={item}
                className="flex min-h-28 items-end justify-between border-t border-foreground/18 py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
              >
                <span className="font-display text-lg font-medium">{item}</span>
                <span className="micro-copy text-primary-readable">0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EditorialCta
        title={
          <>
            Tell us what the room
            <br />
            needs to become.
          </>
        }
      />
      <SiteFooter />
    </main>
  );
}
