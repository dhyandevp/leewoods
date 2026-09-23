import { Link } from "react-router";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { SectionLabel, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found — Lee Wood Interior";
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-between bg-background text-foreground">
      <div className="site-container">
        <SiteHeader />
      </div>
      <section className="site-container flex flex-1 flex-col items-center justify-center py-20 text-center">
        <SectionLabel>404 / Notice</SectionLabel>
        <h1 className="mt-8 font-display text-6xl font-medium sm:text-8xl">Room Not Found</h1>
        <p className="body-copy mx-auto mt-6 text-center">
          The space you are looking for has been relocated or does not exist. Explore our selected
          projects or return to the studio.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="editorial-button bg-foreground text-background hover:bg-primary hover:text-primary-foreground press-scale"
          >
            <Link to="/">
              Return to studio <ArrowRight size={15} />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="editorial-button border-foreground/30 bg-transparent text-foreground hover:bg-foreground hover:text-background press-scale"
          >
            <Link to="/gallery">View portfolio</Link>
          </Button>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
