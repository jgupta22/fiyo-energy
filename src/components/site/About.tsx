import transformer from "@/assets/transformer.jpg";

const About = () => {
  return (
    <section id="about" className="bg-background py-24 sm:py-32">
      <div className="container-tight">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">05 - About</span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              About Fiyo Energy
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Fiyo Energy Private Limited is a power infrastructure solutions company focused on
                supporting the rapid expansion of data center and industrial power systems across
                India.
              </p>
              <p>
                We are founded by electrical engineers turned entrepreneurs who understand both the
                technical complexity and the on-ground realities of delivering power infrastructure
                at scale.
              </p>
              <p className="text-foreground">
                Our goal is simple: to ensure India has the right infrastructure to support the
                next wave of AI-driven growth.
              </p>
              <p>
                From research institutions and enterprises to large EPC contractors and data center
                operators, we enable organizations to build and scale reliable power systems for
                mission-critical operations.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-md border border-border">
              <img
                src={transformer}
                alt="Industrial transformer in a manufacturing facility"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border">
              {[
                ["Founded", "2026"],
                ["Headquarters", "India"],
                ["Focus", "Data Center & Industrial"],
                ["Entity", "Fiyo Energy Pvt. Ltd."],
              ].map(([k, v]) => (
                <div key={k} className="bg-card p-5">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
