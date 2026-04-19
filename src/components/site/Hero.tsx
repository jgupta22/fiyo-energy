import heroImg from "@/assets/hero-substation.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-surface-dark">
      <img
        src={heroImg}
        alt="High-voltage transformer substation at dusk"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid opacity-[0.06]" aria-hidden />

      <div className="container-tight relative flex min-h-[92vh] flex-col justify-end pb-20 pt-32">
        <div className="max-w-3xl reveal">
          <span className="eyebrow text-accent-glow">Power Infrastructure · India</span>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] text-surface-dark-foreground sm:text-5xl lg:text-6xl">
            Powering the infrastructure behind AI and data centers.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-surface-dark-foreground/75 sm:text-lg">
            Fiyo Energy is a sourcing and execution partner for critical power infrastructure,
            delivering transformers, switchgear, and complete electrical solutions to data centers,
            EPC contractors, and industrial projects across India.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-glow"
            >
              <a href="#contact" className="inline-flex items-center gap-2">
                Contact Us <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <a
              href="#offerings"
              className="text-sm font-medium text-surface-dark-foreground/80 transition-colors hover:text-surface-dark-foreground"
            >
              Explore offerings →
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-surface-dark-foreground/15 pt-8 md:grid-cols-4">
          {[
            { k: "99.99%+", v: "Target uptime supported" },
            { k: "Tier 1+", v: "Vetted supplier network" },
            { k: "Pan-India", v: "Project execution reach" },
            { k: "2026", v: "Founded by engineers" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-2xl font-semibold text-surface-dark-foreground">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-surface-dark-foreground/60">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
