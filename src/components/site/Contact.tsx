import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";

// 1. Sign up at https://formspree.io (free)
// 2. Create a new form and copy the endpoint URL
// 3. Paste it below (replace YOUR_FORM_ID)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);

    try {
      const formData = new FormData(form);
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success("Thank you. We will get back to you shortly.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please email sales@fiyoenergy.com directly.");
      }
    } catch {
      toast.error("Network error. Please email sales@fiyoenergy.com directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-surface-dark py-24 text-surface-dark-foreground sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" aria-hidden />
      <div className="container-tight relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="eyebrow text-accent-glow">09 - Contact</span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-balance text-surface-dark-foreground sm:text-4xl">
            Get in touch to discuss your project requirements.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-surface-dark-foreground/70">
            Share project details, specifications, or timelines. Our team responds within one
            business day.
          </p>

          <div className="mt-10 space-y-5 border-t border-surface-dark-foreground/15 pt-8">
            <a
              href="mailto:sales@fiyoenergy.com"
              className="group flex items-start gap-4 transition-colors hover:text-accent-glow"
            >
              <Mail className="mt-0.5 h-5 w-5 text-accent-glow" strokeWidth={1.6} />
              <div>
                <div className="text-xs uppercase tracking-wider text-surface-dark-foreground/50">
                  Email
                </div>
                <div className="mt-1 text-sm font-medium">sales@fiyoenergy.com</div>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 text-accent-glow" strokeWidth={1.6} />
              <div>
                <div className="text-xs uppercase tracking-wider text-surface-dark-foreground/50">
                  Location
                </div>
                <div className="mt-1 text-sm font-medium">India</div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-md border border-surface-dark-foreground/15 bg-surface-dark-foreground/[0.03] p-8 backdrop-blur-sm lg:col-span-7"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs uppercase tracking-wider text-surface-dark-foreground/70">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                required
                className="border-surface-dark-foreground/20 bg-transparent text-surface-dark-foreground placeholder:text-surface-dark-foreground/40 focus-visible:ring-accent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-xs uppercase tracking-wider text-surface-dark-foreground/70">
                Company
              </Label>
              <Input
                id="company"
                name="company"
                className="border-surface-dark-foreground/20 bg-transparent text-surface-dark-foreground placeholder:text-surface-dark-foreground/40 focus-visible:ring-accent"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="email" className="text-xs uppercase tracking-wider text-surface-dark-foreground/70">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="border-surface-dark-foreground/20 bg-transparent text-surface-dark-foreground placeholder:text-surface-dark-foreground/40 focus-visible:ring-accent"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="message" className="text-xs uppercase tracking-wider text-surface-dark-foreground/70">
                Project details
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Equipment, capacity, location, timeline…"
                className="border-surface-dark-foreground/20 bg-transparent text-surface-dark-foreground placeholder:text-surface-dark-foreground/40 focus-visible:ring-accent"
              />
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <p className="text-xs text-surface-dark-foreground/50">
              We respond within one business day.
            </p>
            <Button
              type="submit"
              disabled={submitting}
              className="bg-accent text-accent-foreground hover:bg-accent-glow"
            >
              {submitting ? "Sending…" : (
                <span className="inline-flex items-center gap-2">
                  Send enquiry <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
