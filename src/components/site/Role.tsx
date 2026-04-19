const Role = () => {
  return (
    <section className="border-y border-border bg-surface-muted py-24 sm:py-32">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">02 - Our Role</span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              Execution, not just supply.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-7">
            <p>
              Founded in 2026, Fiyo Energy operates as an execution partner that bridges the gap
              between supply and demand. We are not a generic distributor. We are a sourcing and
              execution partner accountable for delivery outcomes.
            </p>
            <p>
              We help businesses navigate the power infrastructure ecosystem through aggregated
              sourcing, faster procurement cycles, and competitive commercial terms, while
              maintaining single-point coordination across vendors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Role;
