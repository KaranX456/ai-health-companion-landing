import { createFileRoute } from "@tanstack/react-router";
import { Activity, ArrowRight, Check, AlertTriangle } from "lucide-react";
import { useState } from "react";

import { Nav } from "@/components/landing/Nav";
import { OpenAppButton } from "@/components/landing/OpenAppButton";
import { Reveal } from "@/components/landing/Reveal";
import { SignupForm } from "@/components/landing/SignupForm";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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

const steps = [
  { title: "Track", body: "Log symptoms, medications and photos as they happen." },
  { title: "Score", body: "Your history is checked against drug-safety data and medical literature, then ranked with its evidence and a confidence level." },
  { title: "Review", body: "Your linked doctor confirms before any treatment step is shared." },
];
const patientFeatures = [
  { title: "Symptom organizer", body: "A clear pre-visit summary of what you have logged." },
  { title: "Medication reminders", body: "Confirm a dose in one tap, no login needed." },
  { title: "Photo guidance", body: "Never names a condition. It says worth a doctor's look, or common, monitor." },
];
const clinicianFeatures = [
  { title: "Patient dossier", body: "History, medications, photos and check-ins in one record." },
  { title: "Ranked differential", body: "Every possibility comes with an expandable evidence trail." },
  { title: "Safety flags and SOAP drafts", body: "Interaction and allergy checks, plus notes drafted for you to edit. Treatment options appear only after you confirm a diagnosis." },
];

function PulseLine() {
  return (
    <svg
      viewBox="0 0 800 200"
      fill="none"
      aria-hidden="true"
      className="pulse-line w-full text-accent-attention"
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

function HeroCards() {
  const [taken, setTaken] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  return (
    <div className="hero-product">
      <div className="product-backdrop" aria-hidden="true" />
      <div className="card patient-today">
        <div className="product-heading"><Activity className="size-4 text-brand" /><span>Patient app · Today</span><span className="status-dot" /></div>
        <div className="mt-7 flex items-start justify-between gap-4">
          <div><h3 className="text-lg font-semibold text-ink">Morning dose</h3><p className="mt-1 text-sm text-muted-foreground">Confirm once you have taken it.</p></div>
          <span className="dose-mark" aria-hidden="true"><Check className="size-4" /></span>
        </div>
        <Button className="demo-primary mt-5" onClick={() => setTaken(true)}><Check className="size-4" />{taken ? "Dose confirmed" : "Yes, I took it"}</Button>
        <div className="mt-6 border-t border-border pt-5">
          <h3 className="text-base font-medium text-ink">Headache behind the eyes</h3>
          <div className="mt-2 flex items-center justify-between gap-3"><p className="text-sm text-muted-foreground">Logged this morning</p><div className="severity" role="img" aria-label="Severity 3 of 5">{[0,1,2,3,4].map(i => <span key={i} className={i < 3 ? "filled" : ""} />)}</div></div>
        </div>
      </div>
      <div className="card-dark evidence-card">
        <div className="product-heading"><span>Evidence trail · Clinician view</span><span className="evidence-dot" /></div>
        <div className="evidence-rows">
          <div><span>Tension-type headache</span><span className="evidence-pill established">Well-established</span></div>
          <div><span>Migraine</span><span className="evidence-pill">Moderate</span></div>
          <div><span>Cluster headache</span><span className="evidence-pill contested">Rare or contested</span></div>
        </div>
        <div className="evidence-footer"><span>{confirmed ? "Example review confirmed" : "Awaiting your review"}</span><Button variant="secondary" className="demo-light" onClick={() => setConfirmed(true)}>{confirmed ? "Confirmed" : "Confirm"}</Button></div>
      </div>
      <p className="product-caption">Illustrative example, not real patient data.</p>
    </div>
  );
}

function PatientIllustration() {
  const [sent, setSent] = useState(false);
  return (
    <div className="card feature-illustration">
      <div className="product-heading"><span>Symptom timeline</span><Activity className="size-4 text-brand" /></div>
      <div className="timeline-rows">{[
        ["Mon", "Headache behind the eyes"], ["Wed", "Light sensitivity"], ["Fri", "Headache, after screens"],
      ].map(([day, symptom], i) => <div className="timeline-row" key={day}><span className="text-sm text-muted-foreground">{day}</span><div><p className="text-base font-medium text-ink">{symptom}</p><span className={`timeline-bar timeline-bar-${i}`} /></div></div>)}</div>
      <div className="border-t border-border pt-5"><p className="mb-4 text-sm text-muted-foreground">{sent ? "Example summary sent" : "Pre-visit summary ready"}</p><Button className="demo-primary" onClick={() => setSent(true)}>{sent ? "Sent to my doctor" : "Send to my doctor"}<ArrowRight className="size-4" /></Button></div>
    </div>
  );
}

function ClinicianIllustration() {
  const [editing, setEditing] = useState(false);
  const [finalized, setFinalized] = useState(false);
  const [assessment, setAssessment] = useState("Assessment: working assessment drafted from the evidence trail. Edit, then finalize.");
  return (
    <div className="card feature-illustration">
      <div className="safety-flag"><AlertTriangle className="size-5 shrink-0" /><div><h3 className="font-semibold">Safety flag</h3><p className="mt-2 text-sm leading-relaxed">Possible interaction between two active medications. Review before prescribing.</p></div></div>
      <div className="mt-7 flex items-center justify-between"><h3 className="text-lg font-semibold text-ink">SOAP note</h3><span className="draft-chip">AI draft</span></div>
      {editing ? <textarea aria-label="Edit SOAP assessment" className="soap-input" value={assessment} onChange={event => setAssessment(event.target.value)} /> : <p className="my-5 text-base leading-relaxed text-muted-foreground">{assessment}</p>}
      <div className="flex gap-3"><Button className="demo-primary" onClick={() => { setFinalized(true); setEditing(false); }}>{finalized ? "Finalized" : "Finalize"}</Button><Button variant="outline" className="demo-outline" onClick={() => {setEditing(!editing); setFinalized(false);}}>{editing ? "Save edit" : "Edit"}</Button></div>
    </div>
  );
}

function Landing() {
  const [audience, setAudience] = useState<"patients" | "clinicians">("patients");
  const features = audience === "patients" ? patientFeatures : clinicianFeatures;
  return (
    <div id="top" className="landing-page min-h-screen text-foreground">
      <Nav />
      <main>
        <section className="hero-section">
          <div className="page-container hero-grid">
            <Reveal className="hero-copy">
              <h1>Organized symptoms.<br />Reviewed by a real clinician.</h1>
              <p className="hero-description">Track what you feel, get evidence-linked guidance, and bring a clear record to your doctor.</p>
              <div className="hero-actions"><OpenAppButton size="lg" /><a className="text-link" href="#how-it-works">See how it works</a></div>
              <p className="mt-5 text-sm text-muted-foreground">Decision support, not diagnosis.</p>
            </Reveal>
            <Reveal delay={120}><HeroCards /></Reveal>
          </div>
        </section>
        <div className="pulse-band"><PulseLine /></div>
        <section id="how-it-works" className="page-section">
          <div className="page-container">
            <Reveal><h2>How it works</h2></Reveal>
            <ol className="steps-grid">{steps.map((step, i) => <Reveal as="li" key={step.title} delay={i * 70} className="step-column"><span className="step-number">{i + 1}</span><h3 className="mt-5 text-[26px] font-medium text-ink">{step.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{step.body}</p></Reveal>)}</ol>
          </div>
        </section>
        <section id="features" className="page-section features-section">
          <div className="page-container">
            <Reveal className="feature-header"><h2>Built for both sides of<br className="hidden sm:block" /> the conversation</h2><div className="audience-toggle" role="group" aria-label="Choose audience"><Button variant="ghost" aria-pressed={audience === "patients"} className={audience === "patients" ? "audience-button active" : "audience-button"} onClick={() => setAudience("patients")}>For patients</Button><Button variant="ghost" aria-pressed={audience === "clinicians"} className={audience === "clinicians" ? "audience-button active" : "audience-button"} onClick={() => setAudience("clinicians")}>For clinicians</Button></div></Reveal>
            <div className="feature-content">
              <Reveal><div>{features.map(feature => <div className="feature-item" key={feature.title}><h3 className="text-xl font-medium text-ink">{feature.title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{feature.body}</p></div>)}</div>{audience === "patients" && <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Also included: daily check-ins, community experiences labeled as personal anecdotes, and a one-tap hand-off to your doctor.</p>}</Reveal>
              <Reveal delay={100}><div aria-live="polite">{audience === "patients" ? <PatientIllustration /> : <ClinicianIllustration />}</div></Reveal>
            </div>
          </div>
        </section>
        <section id="trust" className="trust-band page-section">
          <div className="page-container">
            <Reveal><h2>Careful by design</h2></Reveal>
            <div className="trust-grid">{[
              {title: "No diagnosis", body: "Nothing here diagnoses you. It is decision support for you and your clinician."},
              {title: "A name only when it is safe", body: 'You see a condition name only when confidence is well established, the evidence is real, and the case is benign. Otherwise you get urgency guidance, like “see a doctor today.”'},
              {title: "Community stays separate", body: "Forum experiences are labeled as personal anecdotes and kept apart from clinical evidence."},
            ].map((item, i) => <Reveal key={item.title} delay={i * 70}><h3>{item.title}</h3><p>{item.body}</p></Reveal>)}</div>
          </div>
        </section>
        <section id="get-started" className="page-section">
          <div className="page-container cta-grid">
            <Reveal><h2>Try it today</h2><p className="mt-5 max-w-sm text-lg leading-relaxed text-muted-foreground">Open the app now, or join the list for updates and early access.</p><div className="mt-8"><OpenAppButton size="lg" /></div></Reveal>
            <Reveal delay={100} className="signup-card"><SignupForm /></Reveal>
          </div>
        </section>
      </main>
      <footer className="landing-footer"><div className="page-container footer-content"><a href="#top" className="brand-logo"><Activity className="size-6" /><span>AI Health Companion</span></a><p>A decision-support tool. It does not replace professional medical care.</p></div></footer>
    </div>
  );
}
