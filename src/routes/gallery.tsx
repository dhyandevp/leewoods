import { ArrowUpRight } from "lucide-react";
import { PageIntro, SiteFooter } from "@/components/site-chrome";
import { ScrollReveal } from "@/components/scroll-reveal";
import hero from "@/assets/lee-wood-hero.jpg";
import about from "@/assets/lee-wood-about.jpg";
import kitchen from "@/assets/lee-wood-kitchen.jpg";
import wardrobe from "@/assets/lee-wood-wardrobe.jpg";
import living from "@/assets/lee-wood-living.jpg";
import cta from "@/assets/lee-wood-cta.jpg";

const projects = [
  ["Modular Kitchen", "The Culinary Room", "Warm timber / stone", kitchen],
  ["Bespoke Wardrobe", "Quiet Storage", "Oak / smoked glass", wardrobe],
  ["Living Interior", "Gathering Space", "Layered light / texture", living],
  ["Complete Interior", "House in Balance", "Wood / neutral stone", hero],
  ["Bedroom / Interior", "Material Study", "Craft / natural grain", about],
  ["Tropical Residence", "After Dark", "Ambient / architectural", cta],
] as const;

export default function GalleryPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <PageIntro
        eyebrow="Lee Wood Interior / Selected spaces"
        title={
          <>
            Interior
            <br />
            portfolio
          </>
        }
        accent={<>Made to belong</>}
        description="Kitchens, wardrobes, living rooms, and details composed around daily life, natural materials, and precise craftsmanship."
      />
      <section className="pb-24 lg:pb-28">
        <div className="site-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(([category, title, detail, image]) => (
            <ScrollReveal key={title} className="group border border-border bg-card p-3">
              <article>
                <div className="image-reveal aspect-[4/5] overflow-hidden bg-surface">
                  <img
                    src={image}
                    alt={`${category} by Lee Wood Interior`}
                    className="size-full object-cover object-center"
                  />
                </div>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 p-4 pt-6">
                  <div className="min-w-0">
                    <p className="micro-copy text-primary-readable">{category}</p>
                    <h2 className="mt-3 font-display text-2xl font-medium">{title}</h2>
                    <p className="mt-2 text-sm text-foreground/58">{detail}</p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
