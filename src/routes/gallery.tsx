import { useEffect, useState } from "react";
import { EditorialCta, PageIntro, SiteFooter } from "@/components/site-chrome";
import { ScrollReveal } from "@/components/scroll-reveal";
import hero from "@/assets/lee-wood-hero.jpg";
import about from "@/assets/lee-wood-about.jpg";
import kitchen from "@/assets/lee-wood-kitchen.jpg";
import wardrobe from "@/assets/lee-wood-wardrobe.jpg";
import living from "@/assets/lee-wood-living.jpg";
import cta from "@/assets/lee-wood-cta.jpg";

const categories = ["All", "Kitchens", "Wardrobes", "Living", "Complete"] as const;
type Category = (typeof categories)[number];

const projects = [
  {
    category: "Modular Kitchen",
    filter: "Kitchens",
    title: "The Culinary Room",
    detail: "Warm timber / stone",
    image: kitchen,
  },
  {
    category: "Bespoke Wardrobe",
    filter: "Wardrobes",
    title: "Quiet Storage",
    detail: "Oak / smoked glass",
    image: wardrobe,
  },
  {
    category: "Living Interior",
    filter: "Living",
    title: "Gathering Space",
    detail: "Layered light / texture",
    image: living,
  },
  {
    category: "Complete Interior",
    filter: "Complete",
    title: "House in Balance",
    detail: "Wood / neutral stone",
    image: hero,
  },
  {
    category: "Bedroom Interior",
    filter: "Living",
    title: "Material Study",
    detail: "Craft / natural grain",
    image: about,
  },
  {
    category: "Tropical Residence",
    filter: "Complete",
    title: "After Dark",
    detail: "Ambient / architectural",
    image: cta,
  },
] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  useEffect(() => {
    document.title = "Selected Projects — Lee Wood Interior";
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.filter === activeCategory);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <PageIntro
        eyebrow="01 / Selected spaces"
        title={
          <>
            Interior
            <br />
            portfolio
          </>
        }
        accent={<em className="font-normal">to belong.</em>}
        description="Kitchens, wardrobes, living rooms, and details composed around daily life, natural materials, and precise craftsmanship."
      />

      <section className="pb-24 lg:pb-28">
        <div
          className="site-container mb-10 flex flex-wrap gap-2 sm:gap-3"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`press-scale h-10 px-5 text-xs font-semibold uppercase tracking-[0.06em] transition-colors ${
                activeCategory === cat
                  ? "bg-foreground text-background"
                  : "border border-border bg-card text-foreground/70 hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="site-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ScrollReveal key={project.title} className="group border border-border bg-card p-3">
              <article>
                <div className="image-reveal aspect-[4/5] overflow-hidden bg-surface">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category} by Lee Wood Interior`}
                    loading="lazy"
                    className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>
                <div className="p-4 pt-6">
                  <p className="micro-copy text-primary-readable">{project.category}</p>
                  <h2 className="mt-3 font-display text-2xl font-medium">{project.title}</h2>
                  <p className="mt-2 text-sm text-foreground/60">{project.detail}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <EditorialCta
        title={
          <>
            Have a specific space
            <br />
            in mind?
          </>
        }
        description="Every project begins with a conversation about the room, your daily routines, and the materials you love."
      />
      <SiteFooter />
    </main>
  );
}
