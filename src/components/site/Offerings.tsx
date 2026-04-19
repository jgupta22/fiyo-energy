import { Cable, CircuitBoard, Layers, Zap } from "lucide-react";

const offerings = [
  {
    icon: Zap,
    title: "Transformers",
    spec: "25 kVA - 50 MVA · up to 33 kV",
    body: "Dry-type and oil-filled distribution and power transformers, sourced to project specifications and compliance standards.",
  },
  {
    icon: CircuitBoard,
    title: "Switchgear & Panels",
    spec: "LV & MV · IS/IEC compliant",
    body: "LT and HT switchgear, PCC, MCC, APFC, and custom electrical panels engineered for data center and industrial loads.",
  },
  {
    icon: Layers,
    title: "DC Combiner Boxes",
    spec: "Solar & DC distribution",
    body: "Robust DC combiner boxes with surge protection and isolation for renewable and DC power distribution applications.",
  },
  {
    icon: Cable,
    title: "Cables & Components",
    spec: "LT/HT power · control · instrumentation",
    body: "Power and control cables, busways, and ancillary components, sourced from vetted Tier 1 and regional manufacturers.",
  },
];

const Offerings = () => {
  return (
    <section id="offerings" className="bg-background py-24 sm:py-32">
      <div className="container-tight">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">03 - What we do</span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              Critical infrastructure components.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A focused product portfolio covering the electrical backbone of modern data center
              and industrial power systems.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
          {offerings.map((o) => (
            <article
              key={o.title}
              className="group relative bg-card p-8 transition-colors hover:bg-surface-muted"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-border bg-background text-accent transition-colors group-hover:border-accent/60">
                  <o.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {o.spec}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">{o.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
