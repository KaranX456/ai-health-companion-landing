import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export const APP_URL = "https://carepath-patient.lovable.app";

export function OpenAppButton({
  className,
  size = "default",
  label = "Open the app",
}: {
  className?: string;
  size?: "default" | "lg";
  label?: string;
}) {
  return (
    <a
      href={APP_URL}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-lift hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm",
        className,
      )}
    >
      {label}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
