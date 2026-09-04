# AI Health Companion Landing

Build a visually striking marketing/description landing page for "AI Health Companion" — a React + TypeScript + Vite + Tailwind CSS site (shadcn/ui on top of Tailwind is fine). This is a standalone public-facing site, separate from the actual patient/doctor apps, whose job is to explain the product and drive visitors into the real app.

CONNECT TO THIS EXISTING SUPABASE PROJECT (same backend as the rest of the product):
- Project URL: https://hmrdsqgbyoysmfdhmlkw.supabase.co
- Publishable/anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtcmRzcWdieW95c21mZGhtbGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5MzY1NzcsImV4cCI6MjEwMjUxMjU3N30.5zmw0C3wd6vgqYvxydf75ywjvS7X_6VnQFOv2Pk_ouc
Install @supabase/supabase-js and wire up a typed client. There is exactly one table this site touches: `landing_page_signups` (columns: email text, full_name text nullable, interest text default 'patient' check in ('patient','clinician','other')). RLS only permits INSERT for the anon role — no reads are possible or needed from this site, so never attempt to query/select from this table, only insert.

PRIMARY CTA: A prominent "Open the app" button that links directly (same tab, standard <a> navigation) to https://carepath-patient.lovable.app — this must appear in the hero section AND in a sticky/repeated location (nav bar and/or final CTA section) so it's always reachable while scrolling.

CONTENT — build a full single-page scrolling site with these sections, using the real product substance below (don't invent unrelated features):

1. NAV: Logo/wordmark "AI Health Companion" on the left, "Open the app" button on the right, sticky on scroll.

2. HERO: Headline conveying the core idea — patients get organized symptom tracking plus AI-assisted, evidence-backed guidance, always reviewed by real clinicians before anything is treated as a finding. Subheadline clarifies it's not a replacement for a doctor — non-diagnostic guidance that helps patients and doctors communicate better. Primary CTA "Open the app" + a secondary lighter-weight CTA that scrolls down to "See how it works". Visually: NO stock photography — use abstract gradient shapes, soft blurred color blobs (teal/blue palette), and/or subtle geometric line-art illustrating a pulse/heartbeat motif. Should feel premium and calm, like a modern health-tech product (think Linear/Stripe-style polish, not a generic template).

3. THE PROBLEM (short section): 2-3 sentences on the gap this fills — people turn to random internet searches when something feels off, get either overwhelming anxiety or dismissive "it's probably nothing," and don't have a good way to organize what they're experiencing before a doctor's visit.

4. HOW IT WORKS: a 3-step visual flow (numbered or connected-node style diagram, built with SVG/CSS, not an image):
   Step 1 — "Track & share": Patient logs symptoms, medications, and photos; can optionally browse relevant community experiences from health forums, always clearly labeled as personal anecdotes, never medical evidence.
   Step 2 — "Evidence-based scoring": A structured clinical engine cross-references medical history, drug-safety databases, and medical literature to build a ranked list of possibilities — never a single flat diagnosis, always shown with its supporting evidence and a confidence level (well-established / moderate / rare-or-contested).
   Step 3 — "Doctor reviews & confirms": A linked physician reviews the evidence trail, confirms or adjusts the assessment, and only then are treatment options and next steps shared — always doctor-mediated, never automatic.

5. FEATURES GRID — two columns, "For Patients" and "For Clinicians":
   Patients: Symptom Organizer & pre-visit summaries · Medication reminders with one-tap confirmation (no login needed to confirm) · Photo-based triage guidance (never names a condition, only "worth a doctor's look" vs "common, monitor") · Daily wellbeing check-ins with supportive crisis resources · Community experiences, clearly labeled · One-tap secure doctor hand-off.
   Clinicians: Consolidated patient dossier · Ranked differential diagnosis with a full, expandable evidence trail (must review evidence before acting — non-diagnostic-by-default UI) · Drug interaction & allergy safety flags · AI-drafted SOAP notes clinicians edit and finalize · Assembled treatment options shown only after confirming a diagnosis.
   Use icons from lucide-react for each item, in cards with subtle hover motion.

6. TRUST & SAFETY section: calm, reassuring tone. Key points: this is guidance, not a diagnosis; a disclosure gate means patients only ever see a named condition when confidence is well-established AND backed by real evidence AND it's a benign/monitorable case — otherwise they only see urgency guidance ("see a doctor today" etc.), never a name. All community content is clearly separated from clinical evidence. All findings are doctor-mediated before any treatment step.

7. EMAIL CAPTURE / FINAL CTA section: headline like "Get started" or "Try it today", a simple form (email required, name optional, a small toggle/select for "I'm a — Patient / Clinician / Just curious" mapping to the `interest` column) that inserts into `landing_page_signups` on submit, with a success toast/state ("Thanks — we'll be in touch") and graceful error handling (e.g. duplicate email should show a friendly "You're already on the list" rather than a raw error). Right next to or below this form, still include the big "Open the app" button for anyone who wants to skip the form and go straight in.

8. FOOTER: wordmark, short tagline, and a small note: "AI Health Companion is a decision-support tool and does not replace professional medical care."

DESIGN: This needs to look genuinely impressive and modern — smooth scroll-reveal animations on each section (simple CSS/Intersection Observer based, no heavy animation libraries needed), consistent teal/blue calming healthcare palette with good contrast, strong typography hierarchy (large confident headline type), generous whitespace, fully responsive mobile-first. This is the first impression of the whole product, so prioritize visual polish and a coherent design system over cramming in extra content. Zero console errors, zero broken links, genuinely deployable when done.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/79802934-8be6-4005-bb80-a0692fa83c54).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
