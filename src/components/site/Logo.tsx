type LogoProps = {
  variant?: "light" | "dark";
};

const Logo = ({ variant = "dark" }: LogoProps) => {
  const isLight = variant === "light";
  return (
    <a href="#top" className="group inline-flex items-center gap-2.5" aria-label="Fiyo Energy home">
      <span className="relative flex h-7 w-7 items-center justify-center rounded-sm bg-accent">
        <span className="absolute inset-0 rounded-sm bg-accent/40 blur-md transition-opacity group-hover:opacity-100" aria-hidden />
        <svg viewBox="0 0 24 24" className="relative h-4 w-4 text-accent-foreground" fill="currentColor" aria-hidden>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      </span>
      <span className={`text-base font-semibold tracking-tight ${isLight ? "text-surface-dark-foreground" : "text-primary"}`}>
        Fiyo<span className="text-accent">.</span>Energy
      </span>
    </a>
  );
};

export default Logo;
