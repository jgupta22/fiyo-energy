import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-tight py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A sourcing and execution partner for critical power infrastructure across India.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Navigate
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                ["Industry Context", "#mandate"],
                ["Offerings", "#offerings"],
                ["About", "#about"],
                ["Industries", "#industries"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="text-muted-foreground transition-colors hover:text-accent">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Contact
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:sales@fiyoenergy.com"
                  className="text-muted-foreground transition-colors hover:text-accent"
                >
                  sales@fiyoenergy.com
                </a>
              </li>
              <li className="text-muted-foreground">India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Fiyo Energy Private Limited. All rights reserved.</div>
          <div>Power infrastructure · India</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
