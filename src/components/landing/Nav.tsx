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
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-soft">
            <Activity className="size-4.5" />
          </span>
          <span className="font-display text-[0.98rem] font-semibold tracking-tight text-ink sm:text-base">
            AI Health Companion
          </span>
        </a>
        <div className="flex items-center gap-5">
          <a
            href="#how-it-works"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline"
          >
            How it works
          </a>
          <a
            href="#trust"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline"
          >
            Trust &amp; safety
          </a>
          <OpenAppButton />
        </div>
      </nav>
    </header>
  );
}
