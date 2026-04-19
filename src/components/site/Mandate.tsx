import datacenter from "@/assets/datacenter.jpg";

const Mandate = () => {
  return (
    <section id="mandate" className="bg-background py-24 sm:py-32">
      <div className="container-tight">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">01 - Industry Context</span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              Industry Context
            </h2>
            <div className="mt-8 overflow-hidden rounded-md border border-border">
              <img
                src={datacenter}
                alt="Modern AI data center hall with rows of server racks"
                width={1600}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-7 lg:pt-16">
            <p>
              Artificial Intelligence is driving an unprecedented technological shift. The
              expansion of cloud computing, AI workloads, and large-scale data storage requires
              data centers built for extreme power density and 99.99%+ uptime.
            </p>
            <p>
              Scaling this infrastructure is a significant operational challenge. Project timelines
              are routinely derailed by procurement bottlenecks, fragmented vendor management, and
              unpredictable lead times across the electrical supply chain.
            </p>
            <p className="text-foreground">
              India sits at a critical juncture. Building robust, dependable power systems is
              essential to keep pace with global technology demand, and to unlock the country's
              role in the next decade of digital infrastructure.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
              {[
                { k: "Procurement", v: "Aggregated sourcing across OEMs" },
                { k: "Lead Time", v: "Compressed via parallel suppliers" },
                { k: "Compliance", v: "IS / IEC specification mastery" },
              ].map((i) => (
                <div key={i.k} className="bg-card p-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {i.k}
                  </div>
                  <div className="mt-2 text-sm text-foreground">{i.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mandate;
