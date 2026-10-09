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
        "fixed inset-x-0 top-0 z-50 ",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3.5">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand text-primary-foreground">
            <Activity className="size-4.5" />
          </span>
          <span className="min-w-0 text-sm font-medium text-ink sm:text-base">
            AI Health Companion
          </span>
        </a>
        <div className="flex shrink-0 items-center gap-6">
          <a
            href="#how-it-works"
            className="hidden text-sm font-medium text-muted-foreground hover:text-foreground md:inline"
          >
            How it works
          </a>
          <a
            href="#trust"
            className="hidden text-sm font-medium text-muted-foreground hover:text-foreground md:inline"
          >
            Trust &amp; safety
          </a>
          <OpenAppButton />
        </div>
      </nav>
    </header>
  );
}
