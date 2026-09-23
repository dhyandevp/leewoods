import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Instagram,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState, type FormEvent, type ReactNode, useEffect } from "react";
import {
  PageIntro,
  SectionLabel,
  SiteFooter,
  emailUrl,
  instagramUrl,
  mapUrl,
  phoneUrl,
  studioEmail,
  studioPhone,
  whatsappUrl,
} from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import contactImage from "@/assets/lee-wood-cta.jpg";
import { enquirySchema, budgetRanges, projectTypes, type EnquiryInput } from "@/lib/enquiry-schema";

const fieldClass =
  "h-[52px] rounded-none border-border bg-card px-3.5 text-[15px] text-foreground shadow-none placeholder:text-muted-foreground focus-visible:border-forest focus-visible:ring-0";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryInput, string>>>({});
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");

  useEffect(() => {
    document.title = "Project Enquiries & Studio — Lee Wood Interior | Kannur";
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError("");
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const raw = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      projectLocation: fd.get("projectLocation") as string,
      projectType,
      budget,
      message: fd.get("message") as string,
      website: fd.get("website") as string,
    };

    const result = enquirySchema.safeParse(raw);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof EnquiryInput;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      const firstKey = result.error.issues[0]?.path[0];
      if (firstKey) {
        const elId = `contact-${firstKey
          .toString()
          .replace(/([A-Z])/g, "-$1")
          .toLowerCase()}`;
        document.getElementById(elId)?.focus();
      }
      return;
    }

    // ponytail: Web3Forms (250 free submissions/mo). Configure VITE_WEB3FORMS_KEY in .env.
    setSubmitting(true);
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_WEB3FORMS_KEY";
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New architectural enquiry from ${result.data.name}`,
          from_name: "Lee Wood Interior Website",
          ...result.data,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSent(true);
      (e.target as HTMLFormElement).reset();
      setProjectType("");
      setBudget("");
    } catch {
      setSubmitError(
        "Could not submit enquiry online right now. Please call or WhatsApp our studio directly at +91 94470 00000 or email studio@leewoodinterior.com.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="bg-background text-foreground">
      {/* 1. Page Intro Hero */}
      <PageIntro
        eyebrow="01 / Project enquiries"
        title={
          <>
            Let's shape
            <br />
            your
          </>
        }
        accent={<span className="font-normal text-bronze">space.</span>}
        description="Share the essentials of your project. We will schedule a focused consultation to discuss your room layout, materials, joinery scope, and budget."
      />

      <section className="pb-24 lg:pb-32">
        <div className="site-container grid items-start gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Studio Address & Direct Channels */}
          <div className="space-y-8 lg:col-span-5">
            <div className="image-reveal relative aspect-[16/10] overflow-hidden border border-border bg-secondary">
              <img
                src={contactImage}
                alt="Lee Wood Interior residential project at twilight"
                loading="lazy"
                className="size-full object-cover object-center"
              />
            </div>

            <div className="border border-border bg-card p-6 sm:p-8">
              <SectionLabel>Studio address</SectionLabel>
              <address className="mt-4 text-sm not-italic leading-relaxed text-foreground/80">
                <span className="font-semibold text-foreground">Lee Wood Interior</span>
                <br />
                Pialathara, Cheruthazham
                <br />
                Kannur District, Kerala 670741
                <br />
                India
              </address>

              <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-xs text-foreground/70">
                <Clock size={14} className="shrink-0 text-bronze" />
                <span>Monday – Saturday: 9:00 AM – 7:00 PM (By appointment)</span>
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                <a
                  href={phoneUrl}
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-bronze"
                >
                  <Phone size={14} className="text-bronze" />
                  {studioPhone}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-bronze"
                >
                  <MessageCircle size={14} className="text-bronze" />
                  WhatsApp Consultation
                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href={emailUrl}
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-bronze"
                >
                  <Mail size={14} className="text-bronze" />
                  {studioEmail}
                </a>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-bronze"
                >
                  <MapPin size={14} className="text-bronze" />
                  Get Studio Directions
                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-bronze"
                >
                  <Instagram size={14} className="text-bronze" />
                  Instagram Portfolio
                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Project Brief Form */}
          <div className="border border-border bg-card p-6 sm:p-10 lg:col-span-7 xl:p-12">
            {sent ? (
              <div className="flex min-h-[34rem] flex-col items-start justify-center" role="status">
                <span className="grid size-14 place-items-center bg-forest text-ivory">
                  <Check size={24} />
                </span>
                <h2 className="mt-8 font-display text-4xl font-normal text-foreground">
                  Enquiry <span className="text-bronze">received.</span>
                </h2>
                <p className="body-copy mt-4 text-foreground/75">
                  Thank you. Your project brief has been sent to our studio team. We will review
                  your requirements and get in touch within one business day.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSent(false)}
                  className="editorial-button mt-8 border-border bg-transparent text-foreground hover:border-forest hover:bg-forest/5"
                >
                  Submit another brief
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="mb-10 border-b border-border pb-6">
                  <SectionLabel>Project brief</SectionLabel>
                  <h2 className="mt-3 font-display text-3xl font-medium text-foreground sm:text-4xl">
                    Tell us what you <span className="text-bronze">need.</span>
                  </h2>
                </div>
                <input
                  name="website"
                  className="sr-only"
                  tabIndex={-1}
                  autoComplete="new-password"
                  aria-hidden="true"
                />
                <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  <Field id="contact-name" label="Your name" error={errors.name}>
                    <Input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      maxLength={100}
                      placeholder="Full name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className={fieldClass}
                    />
                  </Field>
                  <Field id="contact-email" label="Email address" error={errors.email}>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={255}
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      className={fieldClass}
                    />
                  </Field>
                  <Field id="contact-phone" label="Phone number" error={errors.phone}>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={30}
                      placeholder="+91 94470 00000"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                      className={fieldClass}
                    />
                  </Field>
                  <Field
                    id="contact-location"
                    label="Project location"
                    error={errors.projectLocation}
                  >
                    <Input
                      id="contact-location"
                      name="projectLocation"
                      maxLength={150}
                      placeholder="Town / City (e.g. Kannur, Thalassery)"
                      aria-invalid={!!errors.projectLocation}
                      aria-describedby={
                        errors.projectLocation ? "contact-location-error" : undefined
                      }
                      className={fieldClass}
                    />
                  </Field>
                  <Field id="contact-project-type" label="Project type" error={errors.projectType}>
                    <Select value={projectType} onValueChange={setProjectType}>
                      <SelectTrigger
                        id="contact-project-type"
                        className={fieldClass}
                        aria-invalid={!!errors.projectType}
                        aria-describedby={
                          errors.projectType ? "contact-project-type-error" : undefined
                        }
                      >
                        <SelectValue placeholder="Select discipline" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field id="contact-budget" label="Estimated budget" error={errors.budget}>
                    <Select value={budget} onValueChange={setBudget}>
                      <SelectTrigger
                        id="contact-budget"
                        className={fieldClass}
                        aria-invalid={!!errors.budget}
                        aria-describedby={errors.budget ? "contact-budget-error" : undefined}
                      >
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field id="contact-message" label="About your project" error={errors.message}>
                      <Textarea
                        id="contact-message"
                        name="message"
                        maxLength={1500}
                        placeholder="Rooms, architectural requirements, timeline, and any specific materials in mind..."
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "contact-message-error" : undefined}
                        className="min-h-36 resize-y rounded-none border-border bg-card px-3.5 py-3 text-[15px] leading-relaxed text-foreground shadow-none placeholder:text-muted-foreground focus-visible:border-forest focus-visible:ring-0"
                      />
                    </Field>
                  </div>
                </div>
                {submitError && (
                  <p className="mt-6 text-sm text-destructive" role="alert">
                    {submitError}
                  </p>
                )}
                <Button
                  type="submit"
                  disabled={submitting}
                  className="editorial-button mt-8 bg-forest text-ivory hover:bg-bronze hover:text-white transition-colors"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      Sending brief...
                    </>
                  ) : (
                    <>
                      Submit architectural brief <ArrowRight size={15} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Global High-Contrast Footer */}
      <SiteFooter dark />
    </main>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error: string | undefined;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground/70"
      >
        {label}
      </Label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
