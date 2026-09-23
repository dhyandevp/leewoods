import { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { EditorialCta, PageIntro, SectionLabel, SiteFooter } from "@/components/site-chrome";
import { ScrollReveal } from "@/components/scroll-reveal";
import kitchenImage from "@/assets/lee-wood-kitchen.jpg";
import wardrobeImage from "@/assets/lee-wood-wardrobe.jpg";
import livingImage from "@/assets/lee-wood-living.jpg";
import heroImage from "@/assets/lee-wood-hero.jpg";

const disciplines = [
  {
    number: "01",
    title: "Modular Kitchens",
    image: kitchenImage,
    imageAlt: "Bespoke modular kitchen with warm timber cabinetry and quartz countertops",
    description:
      "Culinary spaces engineered around movement, ergonomic work triangles, and architectural calmness. We balance hardwearing stone surfaces with warm timber touchpoints.",
    specs: [
      "Moisture-resistant marine plywood carcass",
      "Seamless quartz & honed granite counter datums",
      "Soft-close concealed German hardware",
      "Concealed breakfast & spice storage pantries",
    ],
  },
  {
    number: "02",
    title: "Bespoke Wardrobes",
    image: wardrobeImage,
    imageAlt: "Floor-to-ceiling built-in wardrobe with precision joinery and integrated lighting",
    description:
      "Storage tailored to the exact volume of your rooms and personal collection. Full-height installations eliminate dead ceiling bulkheads and celebrate unbroken vertical grain.",
    specs: [
      "Floor-to-ceiling monolithic architectural elevation",
      "Integrated 2700K warm LED profile lighting",
      "Belgian linen & velvet interior accessory trays",
      "Fluted solid timber & tinted acoustic glass options",
    ],
  },
  {
    number: "03",
    title: "Living & Media Units",
    image: livingImage,
    imageAlt: "Calm living room with integrated floating media unit and balanced illumination",
    description:
      "Restful gathering spaces anchored by tailored joinery. Entertainment systems and wiring disappear into acoustic wall paneling, leaving only pure form and tactile warmth.",
    specs: [
      "Floating consoles with concealed ventilation & wiring",
      "Acoustic fluted teak and oak wall claddings",
      "Architectural display niches with concealed illumination",
      "Custom integrated lounge and reading benches",
    ],
  },
  {
    number: "04",
    title: "Complete Residences",
    image: heroImage,
    imageAlt: "Turnkey architectural interior for complete tropical residence in Kannur",
    description:
      "A holistic architectural engagement from bare structural shell to handover. We coordinate spatial planning, custom cabinetry, material finishes, and lighting choreography.",
    specs: [
      "Comprehensive spatial planning & circulation mapping",
      "Full MEP, electrical & architectural lighting coordination",
      "Custom freestanding furniture & site-built joinery",
      "End-to-end material procurement & on-site supervision",
    ],
  },
] as const;

const scopeItems = [
  { title: "Residential Interiors", desc: "Villas, apartments, and heritage renovations" },
  { title: "Modular Kitchen Architecture", desc: "Wet & dry kitchen zones, islands, pantries" },
  { title: "Master Suites & Wardrobes", desc: "Walk-in closets, vanity suites, integrated beds" },
  { title: "Living & Media Joinery", desc: "Acoustic consoles, bookcases, partition screens" },
  {
    title: "Commercial & Studio Spaces",
    desc: "Executive suites, boutique retail, creative offices",
  },
  { title: "Bespoke Furniture Works", desc: "Dining tables, credenzas, custom seating in teak" },
];

const materialSupplies = [
  {
    title: "Multiwood",
    category: "100% Waterproof & Termite-Proof Core",
    desc: "High-density polymer composite sheets completely immune to moisture, water logging, and termite attacks. The gold standard for wet kitchens, coastal washrooms, and damp tropical environments.",
  },
  {
    title: "Mica (Laminates)",
    category: "Architectural High-Pressure Laminates",
    desc: "Premium tactile surface collection featuring ultra-matte anti-fingerprint finishes, organic stone textures, and authentic woodgrains engineered for scratch resistance and visual longevity.",
  },
  {
    title: "Louvers",
    category: "Linear Acoustic & Decorative Fluted Panels",
    desc: "Precision-fluted interior wall cladding and architectural louvers that create rhythmic shadow lines, acoustic dampening, and elegant vertical texture for living rooms and feature pavilions.",
  },
  {
    title: "Hardware",
    category: "Engineered Movement & Fittings",
    desc: "Concealed German soft-close hinges, synchronized heavy-duty drawer runners, lift-up systems, and architectural bronze handles designed for effortless, lifelong tactile movement.",
  },
] as const;

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Services & Disciplines — Lee Wood Interior | Kannur";
  }, []);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* 1. Page Intro Hero */}
      <PageIntro
        dark
        eyebrow="01 / Disciplines & Scope"
        title={<>What we</>}
        accent={<span className="font-normal text-bronze">shape.</span>}
        description="From targeted joinery to complete residences across Kannur and Kerala, each discipline brings spatial planning, noble materials, and daily function into one harmonious architectural whole."
        image={kitchenImage}
        imageAlt="Modular kitchen architecture by Lee Wood Interior"
      />

      {/* 2. Alternating Editorial Modules */}
      <section className="section-space">
        <div className="site-container">
          <div className="max-w-2xl">
            <SectionLabel>02 / Disciplines</SectionLabel>
            <h2 className="section-title mt-6">
              Designed as a <span className="text-bronze">whole.</span>
            </h2>
            <p className="body-copy mt-4 text-foreground/75">
              Each commission receives individual design attention. We do not use prefabricated
              catalog templates; every cabinet and junction is drawn for its specific room.
            </p>
          </div>

          <div className="mt-16 space-y-24 lg:space-y-32">
            {disciplines.map((d, index) => {
              const isEven = index % 2 === 1;
              return (
                <ScrollReveal
                  key={d.title}
                  className={`grid gap-10 lg:grid-cols-12 lg:items-center ${
                    isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`image-reveal relative aspect-[16/11] overflow-hidden border border-border bg-secondary lg:col-span-7 ${
                      isEven ? "lg:col-start-6" : ""
                    }`}
                  >
                    <img
                      src={d.image}
                      alt={d.imageAlt}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                    <span className="absolute left-6 top-6 border-l border-bronze bg-forest/90 px-3.5 py-1.5 font-mono text-xs font-semibold text-ivory backdrop-blur-sm">
                      {d.number}
                    </span>
                  </div>

                  {/* Text Column */}
                  <div
                    className={`flex flex-col justify-center lg:col-span-5 ${
                      isEven ? "lg:col-start-1" : ""
                    }`}
                  >
                    <span className="font-mono text-xs font-semibold tracking-widest text-bronze">
                      {d.number} / Architectural Discipline
                    </span>
                    <h3 className="mt-3 font-display text-3xl font-normal text-foreground sm:text-4xl">
                      {d.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-foreground/75">
                      {d.description}
                    </p>

                    <div className="mt-6 border-t border-border pt-6">
                      <p className="text-xs font-semibold tracking-wider uppercase text-foreground/60">
                        Technical Highlights
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {d.specs.map((spec) => (
                          <li
                            key={spec}
                            className="flex items-start gap-2.5 text-xs text-foreground/80 sm:text-[13px]"
                          >
                            <Check size={14} className="mt-0.5 shrink-0 text-bronze" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Project Scope Matrix */}
      <section className="border-t border-border bg-secondary/40 py-20 lg:py-28">
        <div className="site-container grid gap-14 lg:grid-cols-12 lg:gap-8">
          <ScrollReveal className="lg:col-span-5">
            <SectionLabel>03 / Project scope</SectionLabel>
            <h2 className="section-title mt-6">
              One room or a<br />
              <span className="text-bronze">complete interior.</span>
            </h2>
            <p className="body-copy mt-6 text-foreground/75">
              Whether you require a single high-performance kitchen or a turnkey residential
              interior, we adjust our engagement structure to match your project's architectural
              stage.
            </p>
            <div className="mt-8">
              <Button
                asChild
                className="editorial-button bg-forest text-ivory hover:bg-bronze hover:text-white dark:bg-bronze dark:text-white dark:hover:bg-bronze/90 transition-colors"
              >
                <Link to="/contact">
                  Discuss your scope <ArrowRight size={14} />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <div className="grid content-start gap-px bg-border sm:grid-cols-2 lg:col-span-7">
            {scopeItems.map((item, i) => (
              <div key={item.title} className="flex flex-col justify-between bg-card p-6 sm:p-7">
                <span className="font-mono text-xs font-semibold text-bronze">0{i + 1}</span>
                <div className="mt-6">
                  <h4 className="font-display text-lg font-medium text-foreground">{item.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/65">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Quality Materials & Architectural Supplies */}
      <section className="border-t border-border bg-card py-20 lg:py-28">
        <div className="site-container">
          <div className="max-w-2xl">
            <SectionLabel>04 / Material supply</SectionLabel>
            <h2 className="section-title mt-6">
              Multiwood • Mica • Louvers • <span className="text-bronze">Hardware.</span>
            </h2>
            <p className="body-copy mt-4 text-foreground/75">
              Quality materials for modern & durable spaces. We supply and integrate tested,
              weather-resistant core boards, architectural surface laminates, fluted panels, and
              precision hardware designed for coastal durability.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {materialSupplies.map((mat, i) => (
              <ScrollReveal
                key={mat.title}
                className="flex flex-col justify-between border border-border bg-secondary/30 p-6 sm:p-8"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-bronze">M-0{i + 1}</span>
                  <h3 className="mt-4 font-display text-2xl font-normal text-foreground">
                    {mat.title}
                  </h3>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-stone">
                    {mat.category}
                  </span>
                  <p className="mt-4 text-xs leading-relaxed text-foreground/75">{mat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Editorial Call to Action */}
      <EditorialCta
        title={
          <>
            Tell us what the room
            <br />
            needs to <span className="text-bronze">become.</span>
          </>
        }
        description="We collaborate with homeowners, architects, and builders throughout Kannur and northern Kerala."
      />

      {/* Global High-Contrast Footer */}
      <SiteFooter dark />
    </main>
  );
}
