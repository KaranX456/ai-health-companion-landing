import { createFileRoute } from "@tanstack/react-router";
import { Activity } from "lucide-react";

import { Nav } from "@/components/landing/Nav";
import { OpenAppButton } from "@/components/landing/OpenAppButton";
import { SignupForm } from "@/components/landing/SignupForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "AI Health Companion — Symptom tracking with doctor-reviewed guidance" },
      {
        name: "description",
        content: "Organize symptoms, medications and photos, get evidence-backed guidance ranked by confidence, and have a real clinician review every finding before treatment.",
      },
      { property: "og:title", content: "AI Health Companion — Doctor-reviewed health guidance" },
      {
        property: "og:description",
        content: "Evidence-based symptom tracking and non-diagnostic guidance, always confirmed by a real clinician before any treatment step.",
      },
    ],
  }),
  component: Landing,
});

const steps = [
  { title: "Track", body: "Log symptoms, medications and photos as they happen." },
  { title: "Score", body: "A clinical engine checks your history against drug-safety data and medical literature, then ranks the possibilities with their evidence and a confidence level." },
  { title: "Review", body: "Your linked doctor reviews the evidence and confirms before any treatment step is shared." },
];

const patientFeatures = [
  { title: "Symptom organizer", body: "A clear pre-visit summary of what you've logged." },
  { title: "Medication reminders", body: "Confirm a dose in one tap, no login needed." },
  { title: "Photo triage guidance", body: "Never names a condition. It only says worth a doctor's look, or common, monitor." },
  { title: "Doctor hand-off", body: "Send your organized history to your linked physician." },
];

const clinicianFeatures = [
  { title: "Patient dossier", body: "History, medications, photos and check-ins in one record." },
  { title: "Ranked differential", body: "Every possibility comes with an expandable evidence trail." },
  { title: "Safety flags", body: "Drug interaction and allergy checks before anything is prescribed." },
  { title: "SOAP drafts and treatment options", body: "Drafted for you to edit. Options appear only after you confirm a diagnosis." },
];

const trustItems = [
  { title: "No diagnosis", body: "Nothing here diagnoses you. It is decision support for you and your clinician." },
  { title: "A name only when it's safe", body: 'You see a condition name only when confidence is well established, the evidence is real, and the case is benign. Otherwise you see urgency guidance, like "see a doctor today."' },
  { title: "Community stays separate", body: "Forum experiences are labeled as personal anecdotes and kept apart from clinical evidence." },
];

function PulseLine() {
  return (
    <svg viewBox="0 0 800 200" fill="none" aria-hidden="true" className="w-full text-accent-attention">
      <path
        className="pulse-draw"
        pathLength="1"
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
    <div id="top" className="landing-page min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section className="bg-hero-aura pt-36 pb-16 sm:pt-44 sm:pb-20">
          <div className="mx-auto max-w-5xl px-5">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl text-ink sm:text-5xl lg:text-6xl">
                Organized symptoms.<br />Reviewed by a real clinician.
              </h1>
              <p className="mt-7 max-w-[62ch] text-lg text-muted-foreground">
                Track what you&apos;re experiencing, get evidence-linked guidance, and bring a clear record to your doctor.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                <OpenAppButton size="lg" />
                <a href="#how-it-works" className="text-base font-medium text-ink underline-offset-4 hover:underline">How it works</a>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">Decision support, not diagnosis.</p>
            </div>
            <div className="mt-10 sm:mt-12"><PulseLine /></div>
          </div>
        </section>

        <section id="how-it-works" className="border-t border-border py-24 sm:py-32">
          <div className="mx-auto max-w-5xl px-5">
            <h2 className="text-3xl text-ink sm:text-4xl">How it works</h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {steps.map((step, index) => (
                <li key={step.title} className="min-w-0 border-t border-border pt-5">
                  <span className="text-sm text-muted-foreground">{index + 1}</span>
                  <h3 className="mt-6 text-xl text-ink">{step.title}</h3>
                  <p className="mt-3 max-w-[62ch] text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="features" className="border-t border-border bg-surface py-24 sm:py-32">
          <div className="mx-auto max-w-5xl px-5">
            <h2 className="max-w-3xl text-3xl text-ink sm:text-4xl">Built for both sides of the conversation</h2>
            <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-16">
              {[
                { label: "For patients", items: patientFeatures, patient: true },
                { label: "For clinicians", items: clinicianFeatures, patient: false },
              ].map((column) => (
                <div key={column.label} className="min-w-0">
                  <h3 className="text-2xl text-ink">{column.label}</h3>
                  <ul className="mt-7">
                    {column.items.map((item) => (
                      <li key={item.title} className="border-t border-border py-5">
                        <h4 className="font-semibold text-ink">{item.title}</h4>
                        <p className="mt-1 max-w-[62ch] text-muted-foreground">{item.body}</p>
                      </li>
                    ))}
                  </ul>
                  {column.patient && (
                    <p className="mt-4 max-w-[62ch] text-sm text-muted-foreground">
                      Also included: daily wellbeing check-ins and community experiences, always labeled as personal anecdotes.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="trust" className="border-t border-border py-24 sm:py-32">
          <div className="mx-auto max-w-5xl px-5">
            <h2 className="text-3xl text-ink sm:text-4xl">Careful by design</h2>
            <dl className="mt-12">
              {trustItems.map((item) => (
                <div key={item.title} className="grid gap-3 border-t border-border py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
                  <dt className="min-w-0 text-lg font-medium text-ink">{item.title}</dt>
                  <dd className="min-w-0 max-w-[62ch] text-muted-foreground">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="get-started" className="border-t border-border bg-hero-aura py-24 sm:py-32">
          <div className="mx-auto grid max-w-5xl items-start gap-12 px-5 lg:grid-cols-2 lg:gap-16">
            <div className="min-w-0">
              <h2 className="text-3xl text-ink sm:text-4xl">Try it today</h2>
              <p className="mt-5 max-w-[62ch] text-lg text-muted-foreground">Open the app now, or join the list for updates and early access.</p>
              <div className="mt-8"><OpenAppButton size="lg" /></div>
            </div>
            <div className="signup-presentation min-w-0"><SignupForm /></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface py-10">
        <div className="mx-auto grid max-w-5xl gap-6 px-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center">
          <a href="#top" className="flex min-w-0 items-center gap-2.5 text-ink">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand text-primary-foreground"><Activity className="size-4" /></span>
            <span className="font-medium">AI Health Companion</span>
          </a>
          <p className="max-w-[62ch] text-sm text-muted-foreground md:text-right">A decision-support tool. It does not replace professional medical care.</p>
        </div>
      </footer>
    </div>
  );
}
