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
      <nav className="page-container flex min-h-20 items-center justify-between gap-4 py-3.5">
        <a href="#top" className="brand-logo">
          <span className="flex size-7 items-center justify-center text-brand">
            <Activity className="size-6" />
          </span>
          <span className="nav-brand-name text-base font-semibold text-ink">
            AI Health Companion
          </span>
        </a>
        <div className="flex items-center gap-5">
          <a
            href="#how-it-works"
            className="hidden min-h-11 items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            How it works
          </a>
          <a
            href="#trust"
            className="hidden min-h-11 items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            Trust and safety
          </a>
          <OpenAppButton />
        </div>
      </nav>
    </header>
  );
}
