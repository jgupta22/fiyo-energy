import { Building2, Factory, Server } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "EPC Contractors",
    need: "Need: predictable lead times, multi-site coordination, and competitive package pricing across electrical scope.",
    solution:
      "We act as a single procurement interface across transformers, switchgear, and cables - compressing vendor count and reducing project risk.",
  },
  {
    icon: Server,
    title: "Data Center Operators",
    need: "Need: high-reliability equipment meeting Tier III/IV redundancy and 99.99%+ uptime expectations.",
    solution:
      "Specification-led sourcing from vetted OEMs, with structured QA, factory acceptance support, and on-time delivery to commissioning windows.",
  },
  {
    icon: Factory,
    title: "Enterprise & Industrial Buyers",
    need: "Need: dependable electrical infrastructure for plants, captive setups, and industrial expansion projects.",
    solution:
      "End-to-end sourcing for electrical packages - from transformers and panels to cabling - with commercial flexibility for capex cycles.",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="bg-background py-24 sm:py-32">
      <div className="container-tight">
        <div className="max-w-2xl">
          <span className="eyebrow">08 - Industries</span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-balance sm:text-4xl">
            Who we serve.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We work with organizations building the physical layer of India's digital and
            industrial economy.
          </p>
        </div>

        <div className="mt-14 space-y-px overflow-hidden rounded-md border border-border bg-border">
          {industries.map((ind) => (
            <article
              key={ind.title}
              className="grid grid-cols-1 gap-8 bg-card p-8 transition-colors hover:bg-surface-muted md:grid-cols-12 md:p-10"
            >
              <div className="md:col-span-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-border text-accent">
                  <ind.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-primary">{ind.title}</h3>
              </div>
              <div className="md:col-span-9 md:grid md:grid-cols-2 md:gap-10">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Their Need
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.need}</p>
                </div>
                <div className="mt-6 md:mt-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                    How We Solve It
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">{ind.solution}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
