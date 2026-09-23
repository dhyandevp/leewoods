import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EditorialCta, PageIntro, SiteFooter } from "@/components/site-chrome";

const planning = [
  [
    "Where is Lee Wood Interior based?",
    "Lee Wood Interior is based in Pilathara, Cheruthazham, Kannur District, Kerala 670741.",
  ],
  [
    "What interior services do you offer?",
    "The studio works on modular kitchens, custom wardrobes, furniture, living and media spaces, complete home interiors, and office interior projects.",
  ],
  [
    "Can an interior be designed around my exact space?",
    "Yes. Planning, cabinetry, storage, materials, and finishes are shaped around the room and the way you use it.",
  ],
  [
    "How does an interior project begin?",
    "A project begins with a conversation about the space, practical needs, style, and scope. The next steps are confirmed directly for each project.",
  ],
  [
    "How can I request a quotation?",
    "Use our project enquiry form to share your location, project type, budget range, and requirements. Lee Wood Interior can then follow up.",
  ],
] as const;

const services = [
  [
    "Do you create modular kitchens?",
    "Yes. Modular kitchens are one of the studio's core services, alongside wardrobes, TV units, furniture works, and complete interiors.",
  ],
  [
    "Do you take office interior projects?",
    "Yes. Lee Wood Interior works across home and office interiors, with the exact scope confirmed directly for each project.",
  ],
  [
    "Can you make custom furniture?",
    "Yes. Furniture and built-in pieces can be planned as part of the interior so their dimensions, materials, and function belong to the room.",
  ],
  [
    "Is pricing available online?",
    "No fixed pricing is listed. A quotation depends on the site, design scope, materials, and required furniture or cabinetry.",
  ],
  [
    "Where can I see current work?",
    "The portfolio presents a selection of completed spaces. You can also follow our recent updates on Instagram or visit our studio in Pilathara.",
  ],
] as const;

function QuestionGroup({
  label,
  title,
  questions,
}: {
  label: string;
  title: string;
  questions: ReadonlyArray<readonly [string, string]>;
}) {
  return (
    <section>
      <p className="micro-copy text-primary-readable">{label}</p>
      <h2 className="mt-5 font-display text-4xl font-medium sm:text-5xl">{title}</h2>
      <Accordion type="single" collapsible className="mt-9 border-t border-border">
        {questions.map(([q, a], i) => (
          <AccordionItem key={q} value={`${label}-${i}`} className="border-border">
            <AccordionTrigger className="py-6 text-left font-display text-base font-medium tracking-normal hover:text-primary-readable hover:no-underline sm:text-lg">
              {q}
            </AccordionTrigger>
            <AccordionContent className="max-w-xl pb-7 text-sm leading-7 text-foreground/70">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default function FaqPage() {
  useEffect(() => {
    document.title = "FAQ & Process — Lee Wood Interior";
  }, []);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <PageIntro
        eyebrow="01 / Common questions"
        title={
          <>
            Frequently
            <br />
            asked questions
          </>
        }
        accent={<em className="font-normal">Start here.</em>}
        description="Clear answers about planning, services, scope, and beginning an interior project with Lee Wood Interior."
      />
      <section className="pb-24 lg:pb-28">
        <div className="site-container grid gap-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <QuestionGroup label="Planning" title="Your space" questions={planning} />
          </div>
          <div>
            <QuestionGroup label="Services" title="Our craft" questions={services} />
          </div>
        </div>
      </section>
      <EditorialCta
        title={
          <>
            Have another question
            <br />
            about your space?
          </>
        }
        description="Speak with our team directly. We are happy to discuss layout options, materials, and project timelines."
      />
      <SiteFooter />
    </main>
  );
}
