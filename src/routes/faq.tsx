import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EditorialCta, PageIntro, SectionLabel, SiteFooter } from "@/components/site-chrome";

const planning = [
  [
    "Where is Lee Wood Interior located?",
    "Our studio and joinery workshop are located in Pialathara, Cheruthazham, Kannur District, Kerala 670741. We actively undertake residential and commercial projects across Kannur, Payyanur, Thalassery, and surrounding districts.",
  ],
  [
    "What interior disciplines do you execute?",
    "We specialize in modular kitchen architecture, floor-to-ceiling bespoke wardrobes, living and acoustic media units, solid teak furniture, and complete turnkey residential fit-outs.",
  ],
  [
    "Can an interior be designed around my exact architectural floor plan?",
    "Yes. We collaborate from bare shell, structural drawings, or renovation stages. Every cabinet dimension, circulation passage, electrical datum, and lighting circuit is drawn precisely for your room.",
  ],
  [
    "How does the design and execution process unfold?",
    "We begin with a site visit or plan consultation to understand daily routines and spatial requirements. We then present spatial layouts, 3D visualizations, and tactile material palettes. Once approved, fabrication takes place in our workshop prior to on-site assembly.",
  ],
  [
    "How do I request a tailored project quotation?",
    "You can submit an enquiry via our Contact page detailing your project type, room requirements, site location, and anticipated timeline. We then schedule a focused consultation to provide an itemized estimate.",
  ],
] as const;

const services = [
  [
    "What materials and hardware do you recommend for Kerala's coastal climate?",
    "Due to Malabar's seasonal monsoon humidity, we use boiling-water-resistant (BWR/BWP) marine-grade plywood carcasses combined with solid Malabar teak and moisture-resistant laminates or veneers. All drawer runners and hinges are high-grade corrosion-resistant German hardware (Blum or Hettich).",
  ],
  [
    "Do you handle office and commercial interior commissions?",
    "Yes. In addition to private homes, we design executive suites, creative studios, and boutique retail spaces where quiet luxury, acoustic control, and functional storage are required.",
  ],
  [
    "Can you fabricate standalone custom teak furniture?",
    "Yes. We design and craft bespoke solid teak dining tables, floating consoles, credenzas, and lounge benches designed to integrate seamlessly with the room's built-in architecture.",
  ],
  [
    "How long does a typical interior project take to complete?",
    "A targeted modular kitchen or wardrobe suite generally takes 3 to 5 weeks from technical sign-off to installation. Comprehensive turnkey residences typically span 8 to 14 weeks depending on site readiness and carpentry scope.",
  ],
  [
    "Can I visit your workshop or completed residences in Kannur?",
    "Yes. We welcome clients to our Pilathara studio by appointment to review material samples, joinery mockups, and finish options. Site visits to completed projects can also be arranged with homeowner consent.",
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
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-4 font-display text-3xl font-medium text-foreground sm:text-4xl">
        {title}
      </h2>
      <Accordion type="single" collapsible className="mt-8 border-t border-border">
        {questions.map(([q, a], i) => (
          <AccordionItem key={q} value={`${label}-${i}`} className="border-border">
            <AccordionTrigger className="py-5 text-left font-display text-base font-normal tracking-normal text-foreground transition-colors hover:text-bronze hover:no-underline sm:text-lg">
              {q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-sm leading-relaxed text-foreground/75">
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
    document.title = "FAQ & Process — Lee Wood Interior | Kannur";
  }, []);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* 1. Page Intro Hero */}
      <PageIntro
        eyebrow="01 / Common questions"
        title={
          <>
            Frequently
            <br />
            asked questions
          </>
        }
        accent={<span className="font-normal text-bronze">Start here.</span>}
        description="Clear answers regarding project planning, materials, joinery engineering, and commissioning an interior with Lee Wood Interior in Kannur."
      />

      {/* 2. Accordion Groups */}
      <section className="pb-24 lg:pb-32">
        <div className="site-container grid gap-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <QuestionGroup label="01 / Planning" title="Your space & scope" questions={planning} />
          </div>
          <div>
            <QuestionGroup
              label="02 / Craft & Materials"
              title="Execution & quality"
              questions={services}
            />
          </div>
        </div>
      </section>

      {/* 3. Editorial Call to Action */}
      <EditorialCta
        title={
          <>
            Have another question
            <br />
            about your <span className="text-bronze">space?</span>
          </>
        }
        description="Speak with our team directly. We are happy to discuss layout options, materials, and project timelines."
      />

      {/* Global High-Contrast Footer */}
      <SiteFooter dark />
    </main>
  );
}
