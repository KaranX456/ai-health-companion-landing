import { Activity } from "lucide-react";
import { useEffect, useState } from "react";

import { OpenAppButton } from "./OpenAppButton";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="page-container landing-nav">
        <a href="#top" className="brand-logo">
          <span className="logo-tile">
            <Activity />
          </span>
          <span className="nav-brand-name">
            AI Health Companion
          </span>
        </a>
        <div className="nav-actions">
          <a
            href="#how-it-works"
            className="nav-link"
          >
            How it works
          </a>
          <a
            href="#trust"
            className="nav-link"
          >
            Trust and safety
          </a>
          <OpenAppButton />
        </div>
      </nav>
    </header>
  );
}
