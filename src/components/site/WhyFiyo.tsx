import { Clock, Gauge, HandCoins, Network } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Faster Delivery",
    body: "We resolve lead-time issues through smart sourcing and parallel supplier networks, keeping critical-path equipment on schedule.",
  },
  {
    icon: Gauge,
    title: "Execution Focus",
    body: "We prioritize execution speed and reliability so commissioning milestones and project go-live dates hold.",
  },
  {
    icon: HandCoins,
    title: "Commercial Flexibility",
    body: "Competitive pricing structures and flexible commercial terms aligned with on-ground project realities.",
  },
  {
    icon: Network,
    title: "Single-Point Coordination",
    body: "We absorb multi-vendor coordination as your primary vendor, simplifying procurement and accountability.",
  },
];

const WhyFiyo = () => {
  return (
    <section className="relative isolate overflow-hidden bg-surface-dark py-24 text-surface-dark-foreground sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" aria-hidden />
      <div className="container-tight relative">
        <div className="max-w-2xl">
          <span className="eyebrow">04 - Why Fiyo Energy</span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-balance text-surface-dark-foreground sm:text-4xl">
            Built for execution.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {items.map((it, idx) => (
            <div key={it.title} className="flex gap-5 border-t border-surface-dark-foreground/15 pt-8">
              <div className="flex-shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-surface-dark-foreground/20 text-accent-glow">
                  <it.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
              </div>
              <div>
                <div className="text-xs font-medium tracking-wider text-surface-dark-foreground/50">
                  0{idx + 1}
                </div>
                <h3 className="mt-1 text-lg font-semibold text-surface-dark-foreground">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-surface-dark-foreground/70">
                  {it.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFiyo;
