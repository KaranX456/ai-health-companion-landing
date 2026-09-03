import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

const schema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  full_name: z
    .string()
    .trim()
    .max(100, { message: "Name must be less than 100 characters" })
    .optional(),
  interest: z.enum(["patient", "clinician", "other"]),
});

const OPTIONS = [
  { value: "patient", label: "Patient" },
  { value: "clinician", label: "Clinician" },
  { value: "other", label: "Just curious" },
] as const;

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [interest, setInterest] = useState<"patient" | "clinician" | "other">("patient");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const parsed = schema.safeParse({ email, full_name: name, interest });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setStatus("loading");
    const { error } = await supabase.from("landing_page_signups").insert({
      email: parsed.data.email.toLowerCase(),
      full_name: parsed.data.full_name ? parsed.data.full_name : null,
      interest: parsed.data.interest,
    });

    if (error) {
      setStatus("idle");
      if (error.code === "23505") {
        toast.success("You're already on the list — we'll be in touch.");
        setStatus("done");
        return;
      }
      toast.error("Something went wrong. Please try again in a moment.");
      return;
    }

    setStatus("done");
    toast.success("Thanks — we'll be in touch.");
  }

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-border bg-surface p-8 text-center shadow-soft">
        <h3 className="font-display text-xl font-semibold text-ink">Thanks — we&apos;ll be in touch.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          You&apos;re on the list. In the meantime, you can jump straight into the app.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Email
          </span>
          <input
            type="email"
            required
            value={email}
            maxLength={255}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-ring/30"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Name <span className="normal-case font-normal">(optional)</span>
          </span>
          <input
            type="text"
            value={name}
            maxLength={100}
            onChange={(e) => setName(e.target.value)}
            placeholder="Alex Mwangi"
            className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-ring/30"
          />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          I&apos;m a
        </legend>
        <div className="mt-2 flex flex-wrap gap-2 rounded-xl bg-secondary p-1.5">
          {OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setInterest(option.value)}
              aria-pressed={interest === option.value}
              className={cn(
                "flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                interest === option.value
                  ? "bg-surface text-ink shadow-soft"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lift disabled:opacity-60"
      >
        {status === "loading" && <Loader2 className="size-4 animate-spin" />}
        Join the list
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        No spam. Product updates and early access only.
      </p>
    </form>
  );
}
