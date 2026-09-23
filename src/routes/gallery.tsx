import { useEffect, useState } from "react";
import { EditorialCta, PageIntro, SiteFooter } from "@/components/site-chrome";
import { ScrollReveal } from "@/components/scroll-reveal";
import hero from "@/assets/lee-wood-hero.jpg";
import about from "@/assets/lee-wood-about.jpg";
import kitchen from "@/assets/lee-wood-kitchen.jpg";
import wardrobe from "@/assets/lee-wood-wardrobe.jpg";
import living from "@/assets/lee-wood-living.jpg";
import cta from "@/assets/lee-wood-cta.jpg";

const categories = ["All", "Kitchens", "Wardrobes", "Living & Work", "Complete Residences"] as const;
type Category = (typeof categories)[number];

const projects = [
  {
    id: "01",
    category: "Complete Residences",
    filter: "Complete Residences",
    title: "House in Balance",
    location: "Thalassery, Kerala",
    year: "2025",
    materials: "Solid Teak · Fluted Panels · Honed Slate",
    description:
      "A complete private residence where expansive garden views meet warm interior wood paneling and concealed architectural storage.",
    image: hero,
    span: "lg:col-span-12",
    aspect: "aspect-[21/9]",
  },
  {
    id: "02",
    category: "Modular Kitchen",
    filter: "Kitchens",
    title: "The Culinary Sanctuary",
    location: "Kannur, Kerala",
    year: "2025",
    materials: "Quartz Countertops · Marine Ply · German Hardware",
    description:
      "Ergonomic kitchen layout featuring integrated cutlery organization, seamless quartz datum lines, and a concealed walk-in pantry.",
    image: kitchen,
    span: "lg:col-span-7",
    aspect: "aspect-[16/11]",
  },
  {
    id: "03",
    category: "Bespoke Wardrobe",
    filter: "Wardrobes",
    title: "Quiet Master Suite Wardrobe",
    location: "Payyanur, Kerala",
    year: "2024",
    materials: "Smoked Glass · Warm 2700K LED · Belgian Linen",
    description:
      "Floor-to-ceiling bespoke cabinetry with illuminated open bays, acoustic velvet accessory drawers, and custom bronze pull handles.",
    image: wardrobe,
    span: "lg:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    id: "04",
    category: "Living & Work",
    filter: "Living & Work",
    title: "The Acoustic Media Lounge",
    location: "Pilathara, Kannur",
    year: "2024",
    materials: "Fluted Teak Cladding · Floating Marble Console",
    description:
      "A serene living and media pavilion designed for focused acoustics, concealed wiring, and balanced ambient architectural illumination.",
    image: living,
    span: "lg:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    id: "05",
    category: "Living & Work",
    filter: "Living & Work",
    title: "The Dining & Library Pavilion",
    location: "Cheruthazham, Kannur",
    year: "2024",
    materials: "Natural Grain Malabar Teak · Raw Linen Upholstery",
    description:
      "An open-plan dining suite celebrating exposed solid joinery, tactile linen textures, and unbroken sightlines to the courtyard.",
    image: about,
    span: "lg:col-span-7",
    aspect: "aspect-[16/11]",
  },
  {
    id: "06",
    category: "Complete Residences",
    filter: "Complete Residences",
    title: "The Evening Residence",
    location: "Kannur, Kerala",
    year: "2025",
    materials: "Brushed Brass · Honed Granite · Custom Teak Joinery",
    description:
      "Comprehensive architectural lighting and interior fit-out shaped for restful evenings, soft shadow play, and peaceful retreat.",
    image: cta,
    span: "lg:col-span-12",
    aspect: "aspect-[21/9]",
  },
] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  useEffect(() => {
    document.title = "Selected Projects — Lee Wood Interior | Kannur";
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.filter === activeCategory);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* 1. Page Intro Hero */}
      <PageIntro
        eyebrow="01 / Selected spaces"
        title={
          <>
            Architectural
            <br />
            portfolio
          </>
        }
        accent={<span className="font-normal text-bronze">to belong.</span>}
        description="A curated selection of kitchens, wardrobes, living spaces, and turnkey residences executed across Kannur and northern Kerala."
      />

      {/* 2. Filter Bar */}
      <section className="pb-24 lg:pb-32">
        <div className="site-container mb-12">
          <div
            className="flex flex-wrap items-center gap-2 border-b border-border pb-6"
            role="tablist"
            aria-label="Filter portfolio projects by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`editorial-button h-10 px-5 text-xs font-semibold uppercase tracking-[0.08em] transition-all ${
                  activeCategory === cat
                    ? "bg-forest text-ivory"
                    : "border border-border bg-card text-foreground/70 hover:border-forest hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Asymmetric Curated Projects Grid */}
        <div className="site-container grid gap-10 lg:grid-cols-12">
          {filteredProjects.map((project) => (
            <ScrollReveal
              key={project.id}
              className={`group border border-border bg-card p-4 transition-all duration-300 hover:border-forest/40 ${project.span}`}
            >
              <article className="flex h-full flex-col justify-between">
                <div className={`image-reveal relative ${project.aspect} overflow-hidden bg-secondary`}>
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category} by Lee Wood Interior`}
                    loading="lazy"
                    className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-5 top-5 border-l border-bronze bg-forest/90 px-3 py-1 font-mono text-xs font-semibold text-ivory backdrop-blur-sm">
                    {project.id}
                  </span>
                </div>

                <div className="mt-6 flex flex-col justify-between gap-4 p-2 sm:p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-4">
                    <div>
                      <span className="font-mono text-xs font-semibold tracking-wider uppercase text-bronze">
                        {project.category}
                      </span>
                      <h2 className="mt-1 font-display text-2xl font-normal text-foreground sm:text-3xl">
                        {project.title}
                      </h2>
                    </div>
                    <div className="text-right">
                      <span className="block text-xs uppercase tracking-wider text-foreground/50">
                        {project.location}
                      </span>
                      <span className="font-mono text-xs font-medium text-foreground/75">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[1.5fr_1fr] sm:items-end">
                    <p className="text-sm leading-relaxed text-foreground/75">
                      {project.description}
                    </p>
                    <div className="text-left sm:text-right">
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-stone">
                        Materials
                      </span>
                      <p className="text-xs text-foreground/85">{project.materials}</p>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 4. Editorial Call to Action */}
      <EditorialCta
        title={
          <>
            Have a specific space
            <br />
            in <span className="text-bronze">mind?</span>
          </>
        }
        description="Every project begins with a focused architectural consultation regarding the room, your spatial routines, and natural materials."
      />

      {/* Global High-Contrast Footer */}
      <SiteFooter dark />
    </main>
  );
}
