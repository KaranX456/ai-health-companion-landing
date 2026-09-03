import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  BellRing,
  Brain,
  Camera,
  ClipboardList,
  FileText,
  HeartPulse,
  ListOrdered,
  MessagesSquare,
  Pill,
  Send,
  ShieldCheck,
  Stethoscope,
  Sun,
  UserRound,
} from "lucide-react";

import { Nav } from "@/components/landing/Nav";
import { OpenAppButton } from "@/components/landing/OpenAppButton";
import { Reveal } from "@/components/landing/Reveal";
import { SignupForm } from "@/components/landing/SignupForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Health Companion — Symptom tracking with doctor-reviewed guidance" },
      {
        name: "description",
        content:
          "Organize symptoms, medications and photos, get evidence-backed guidance ranked by confidence, and have a real clinician review every finding before treatment.",
      },
      {
        property: "og:title",
        content: "AI Health Companion — Doctor-reviewed health guidance",
      },
      {
        property: "og:description",
        content:
          "Evidence-based symptom tracking and non-diagnostic guidance, always confirmed by a real clinician before any treatment step.",
      },
    ],
  }),
  component: Landing,
});

const patientFeatures = [
  {
    icon: ClipboardList,
    title: "Symptom Organizer",
    body: "Log what you feel over time and walk into your appointment with a clear pre-visit summary.",
  },
  {
    icon: BellRing,
    title: "Medication reminders",
    body: "One-tap confirmation straight from the reminder — no login required to mark a dose taken.",
  },
  {
    icon: Camera,
    title: "Photo-based triage guidance",
    body: "Never names a condition. Only tells you \u201cworth a doctor's look\u201d or \u201ccommon, monitor.\u201d",
  },
  {
    icon: Sun,
    title: "Daily wellbeing check-ins",
    body: "A short check-in each day, with supportive crisis resources surfaced when they matter.",
  },
  {
    icon: MessagesSquare,
    title: "Community experiences",
    body: "Relevant stories from health forums, always clearly labeled as personal anecdotes.",
  },
  {
    icon: Send,
    title: "One-tap doctor hand-off",
    body: "Securely send your organized history to your linked physician whenever you're ready.",
  },
];

const clinicianFeatures = [
  {
    icon: UserRound,
    title: "Consolidated patient dossier",
    body: "History, medications, photos and check-ins gathered into one reviewable record.",
  },
  {
    icon: ListOrdered,
    title: "Ranked differential diagnosis",
    body: "Expandable evidence trail behind every possibility — non-diagnostic by default until reviewed.",
  },
  {
    icon: AlertTriangle,
    title: "Drug interaction & allergy flags",
    body: "Safety checks cross-referenced against drug-safety databases before anything is prescribed.",
  },
  {
    icon: FileText,
    title: "AI-drafted SOAP notes",
    body: "A structured first draft you edit and finalize — the clinician always signs off.",
  },
  {
    icon: Stethoscope,
    title: "Assembled treatment options",
    body: "Surfaced only after you confirm a diagnosis, never before.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence before action",
    body: "The interface requires reviewing the supporting evidence before an assessment can be acted on.",
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Track & share",
    body: "Patients log symptoms, medications and photos over time, and can optionally browse relevant community experiences from health forums — always clearly labeled as personal anecdotes, never medical evidence.",
  },
  {
    icon: Brain,
    title: "Evidence-based scoring",
    body: "A structured clinical engine cross-references medical history, drug-safety databases and medical literature to build a ranked list of possibilities — never a single flat diagnosis, always shown with its supporting evidence and a confidence level: well-established, moderate, or rare-or-contested.",
  },
  {
    icon: Stethoscope,
    title: "Doctor reviews & confirms",
    body: "A linked physician reviews the evidence trail, confirms or adjusts the assessment, and only then are treatment options and next steps shared. Always doctor-mediated, never automatic.",
  },
];

function PulseLine() {
  return (
    <svg
      viewBox="0 0 800 200"
      fill="none"
      aria-hidden="true"
      className="w-full max-w-3xl text-brand"
    >
      <path
        d="M0 100h180l24-46 26 92 30-124 34 158 26-80h60l20-30 22 60 24-24h334"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <path d="M0 140h800" stroke="currentColor" strokeWidth="1" opacity="0.12" />
      <path d="M0 60h800" stroke="currentColor" strokeWidth="1" opacity="0.12" />
    </svg>
  );
}

function Landing() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-aura pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-24 size-96 rounded-full bg-brand/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-24 -right-24 size-[26rem] rounded-full bg-accent/60 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur">
              <HeartPulse className="size-3.5 text-brand" />
              Decision support, not diagnosis
            </span>
            <h1 className="mt-7 font-display text-[2.7rem] leading-[1.03] font-semibold text-ink sm:text-6xl lg:text-[4.25rem]">
              Organized symptoms.
              <br />
              <span className="text-gradient-brand">Evidence-backed guidance.</span>
              <br />
              Always reviewed by a real clinician.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              AI Health Companion helps you track what you&apos;re experiencing and turns it into
              structured, evidence-linked guidance. It doesn&apos;t replace your doctor — it&apos;s
              non-diagnostic support that helps you and your clinician communicate better.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <OpenAppButton size="lg" />
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface/70 px-7 py-3.5 text-base font-medium text-foreground backdrop-blur transition-colors hover:bg-surface"
              >
                See how it works
              </a>
            </div>
          </Reveal>

          <Reveal delay={140} className="mt-16 flex justify-center">
            <PulseLine />
          </Reveal>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-y border-border bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              When something feels off, the internet is a bad first stop
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A random search either spirals into overwhelming anxiety or shrugs you off with
              &ldquo;it&apos;s probably nothing.&rdquo; Neither helps. And by the time you sit down
              with a doctor, weeks of scattered symptoms are hard to recall, let alone explain.
              There&apos;s no good way to organize what you&apos;re actually experiencing before
              that visit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              How it works
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Three steps, and a human at the end of every one
            </h2>
          </Reveal>

          <ol className="relative mt-14 space-y-6">
            <div
              aria-hidden="true"
              className="absolute top-8 bottom-8 left-[1.65rem] hidden w-px bg-gradient-to-b from-brand/60 via-brand/25 to-transparent sm:block"
            />
            {steps.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 110} className="relative">
                <div className="flex flex-col gap-5 rounded-3xl border border-border bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:flex-row sm:p-8">
                  <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-soft">
                    <step.icon className="size-6" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-sm font-semibold text-brand">
                        Step {index + 1}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-y border-border bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              What&apos;s inside
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Built for both sides of the conversation
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-10">
            {[
              { label: "For Patients", icon: UserRound, items: patientFeatures },
              { label: "For Clinicians", icon: Stethoscope, items: clinicianFeatures },
            ].map((column) => (
              <div key={column.label}>
                <Reveal className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <column.icon className="size-4.5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">{column.label}</h3>
                </Reveal>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {column.items.map((item, index) => (
                    <Reveal
                      as="li"
                      key={item.title}
                      delay={index * 70}
                      className="group h-full rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift"
                    >
                      <item.icon className="size-5 text-brand transition-transform duration-300 group-hover:scale-110" />
                      <h4 className="mt-3.5 font-display text-base font-semibold text-ink">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </Reveal>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section id="trust" className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Trust &amp; safety
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Careful by design, not by disclaimer
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                title: "Guidance, never a diagnosis",
                body: "Nothing here diagnoses you. The product is decision support for you and your clinician, and it says so at every step.",
              },
              {
                icon: Activity,
                title: "The disclosure gate",
                body: "You only ever see a named condition when confidence is well-established, it's backed by real evidence, and the case is benign and monitorable. Otherwise you see urgency guidance only — \u201csee a doctor today\u201d — never a name.",
              },
              {
                icon: MessagesSquare,
                title: "Community stays separate",
                body: "Forum experiences are clearly labeled as personal anecdotes and are kept visually and structurally apart from clinical evidence.",
              },
              {
                icon: Pill,
                title: "Doctor-mediated treatment",
                body: "No treatment step is ever surfaced automatically. A physician reviews the evidence trail and confirms before anything moves forward.",
              },
            ].map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 90}
                className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-7"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="get-started" className="border-t border-border bg-hero-aura py-24 sm:py-32">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-5xl">
              Try it today
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Join the list for product updates and early access — or skip the form entirely and
              open the app right now.
            </p>
            <div className="mt-8">
              <OpenAppButton size="lg" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SignupForm />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-brand text-primary-foreground">
                <Activity className="size-4" />
              </span>
              <span className="font-display text-base font-semibold text-ink">
                AI Health Companion
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Organized symptoms, evidence-backed guidance, and a real clinician in the loop.
            </p>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-muted-foreground md:text-right">
            AI Health Companion is a decision-support tool and does not replace professional medical
            care.
          </p>
        </div>
      </footer>
    </div>
  );
}
