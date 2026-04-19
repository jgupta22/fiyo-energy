import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Industry Context", href: "#mandate" },
  { label: "Offerings", href: "#offerings" },
  { label: "About", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-tight flex h-16 items-center justify-between">
        <Logo variant={scrolled ? "dark" : "light"} />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-surface-dark-foreground/75 hover:text-surface-dark-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          asChild
          size="sm"
          className="bg-accent text-accent-foreground hover:bg-accent-glow"
        >
          <a href="#contact">Contact</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
