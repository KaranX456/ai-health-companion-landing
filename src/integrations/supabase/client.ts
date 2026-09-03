import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://hmrdsqgbyoysmfdhmlkw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtcmRzcWdieW95c21mZGhtbGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5MzY1NzcsImV4cCI6MjEwMjUxMjU3N30.5zmw0C3wd6vgqYvxydf75ywjvS7X_6VnQFOv2Pk_ouc";

export type LandingPageSignup = {
  email: string;
  full_name: string | null;
  interest: "patient" | "clinician" | "other";
};

export type Database = {
  public: {
    Tables: {
      landing_page_signups: {
        Row: LandingPageSignup;
        Insert: LandingPageSignup;
        Update: Partial<LandingPageSignup>;
      };
    };
  };
};

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});
