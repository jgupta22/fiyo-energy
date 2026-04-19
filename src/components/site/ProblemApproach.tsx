import { CheckCircle2 } from "lucide-react";

const approach = [
  {
    title: "Deep Product Mastery",
    body: "Strong technical understanding of specifications, ratings, and compliance requirements across electrical equipment categories.",
  },
  {
    title: "Vetted Supplier Networks",
    body: "Active relationships across Tier 1 OEMs, mid-sized manufacturers, and reliable regional suppliers, matched to project needs.",
  },
  {
    title: "Reliability First",
    body: "Clear communication, fast response times, and disciplined follow-through on commitments throughout the project lifecycle.",
  },
];

const ProblemApproach = () => {
  return (
    <section className="border-y border-border bg-surface-muted py-24 sm:py-32">
      <div className="container-tight grid gap-16 lg:grid-cols-2">
        <div>
          <span className="eyebrow">06 - Problem</span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-balance sm:text-4xl">
            The problem we solve.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Behind every AI system and cloud application sits a physical network of data centers,
              supported by complex power systems with strict compliance standards and high
              redundancy requirements.
            </p>
            <p>
              As demand surges, execution partners face significant friction sourcing reliable
              equipment on time. Delays directly impact revenue, commissioning windows, and
              operational continuity.
            </p>
            <p className="text-foreground">
              Fiyo Energy removes this friction through active supplier management and
              execution-focused delivery.
            </p>
          </div>
        </div>

        <div>
          <span className="eyebrow">07 - Approach</span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-balance sm:text-4xl">
            Our approach.
          </h2>
          <ul className="mt-8 space-y-6">
            {approach.map((a) => (
              <li
                key={a.title}
                className="flex gap-4 border-t border-border pt-6 first:border-t-0 first:pt-0"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" strokeWidth={1.6} />
                <div>
                  <h3 className="text-base font-semibold text-primary">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemApproach;
