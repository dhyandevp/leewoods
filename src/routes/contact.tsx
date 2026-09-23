import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Instagram,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
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
  "h-[52px] rounded-none border-foreground/20 bg-transparent px-3.5 text-[15px] text-foreground shadow-none placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-0";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryInput, string>>>({});
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");

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
          subject: `New enquiry from ${result.data.name}`,
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
      <PageIntro
        eyebrow="Project enquiries / Kannur"
        title={
          <>
            Let's
            <br />
            shape your
          </>
        }
        accent={<em className="font-normal">space.</em>}
        description="Share the essentials of your project. Lee Wood Interior can then begin a focused conversation around your space, needs, materials, and scope."
      />
      <section className="pb-20 lg:pb-24">
        <div className="site-container grid items-start gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <img
              src={contactImage}
              alt="Tropical residence illuminated at dusk"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-center"
            />
            <div className="grid gap-8 border border-t-0 border-border p-6 sm:grid-cols-2 sm:p-7">
              <div>
                <p className="micro-copy text-primary-readable">Studio address</p>
                <address className="mt-4 text-[15px] not-italic leading-7 text-foreground/68">
                  Lee Wood Interior
                  <br />
                  Pilathara, Cheruthazham
                  <br />
                  Kannur District, Kerala 670741
                  <br />
                  India
                </address>
              </div>
              <div className="flex flex-col items-start justify-end gap-3 text-[10px] font-semibold uppercase">
                <a
                  href={phoneUrl}
                  className="group inline-flex items-center gap-2 hover:text-primary-readable"
                >
                  <Phone size={14} />
                  {studioPhone}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 hover:text-primary-readable"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href={emailUrl}
                  className="group inline-flex items-center gap-2 hover:text-primary-readable"
                >
                  <Mail size={14} />
                  {studioEmail}
                </a>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 hover:text-primary-readable"
                >
                  <MapPin size={14} />
                  Get directions
                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 hover:text-primary-readable"
                >
                  <Instagram size={14} />
                  Instagram
                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="border border-foreground/20 bg-background p-6 sm:p-10 lg:col-span-7 xl:p-12">
            {sent ? (
              <div className="flex min-h-[34rem] flex-col items-start justify-center" role="status">
                <span className="grid size-14 place-items-center bg-primary text-primary-foreground">
                  <Check />
                </span>
                <h2 className="mt-8 font-display text-4xl font-medium sm:text-5xl">
                  Enquiry received
                </h2>
                <p className="body-copy mt-5">
                  Thank you. Your project details have been sent to Lee Wood Interior.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSent(false)}
                  className="mt-8 h-12 rounded-none border-border bg-transparent px-6 text-[10px] font-semibold uppercase hover:bg-foreground hover:text-background"
                >
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="mb-10 border-b border-foreground/15 pb-7">
                  <SectionLabel>Project brief</SectionLabel>
                  <h2 className="mt-5 font-display text-4xl font-medium leading-tight sm:text-[46px]">
                    Tell us what you need
                  </h2>
                </div>
                <input
                  name="website"
                  className="sr-only"
                  tabIndex={-1}
                  autoComplete="new-password"
                  aria-hidden="true"
                />
                <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
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
                      placeholder="+91"
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
                      placeholder="Town or district"
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
                        <SelectValue placeholder="Select project" />
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
                        <SelectValue placeholder="Select range" />
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
                        placeholder="Rooms, requirements, timeline, and anything else we should know"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "contact-message-error" : undefined}
                        className="min-h-36 resize-y rounded-none border-foreground/20 bg-transparent px-3.5 py-3 text-[15px] leading-6 text-foreground shadow-none placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-0"
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
                  className="group mt-8 h-[50px] min-w-40 rounded-none bg-foreground px-6 text-[10px] font-semibold uppercase text-background transition-colors duration-300 hover:bg-foreground/90 press-scale"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Sending enquiry
                    </>
                  ) : (
                    <>
                      Send enquiry{" "}
                      <ArrowRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
      <SiteFooter />
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
        className="text-[10px] font-semibold uppercase tracking-[0.06em] text-muted-foreground"
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
