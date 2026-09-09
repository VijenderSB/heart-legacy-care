/** Shared class recipes for the site's buttons and surfaces. */

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none";

export const btn = {
  primary: `${base} bg-primary px-6 py-3 text-primary-foreground shadow-[var(--shadow-elegant)] hover:bg-navy-soft hover:-translate-y-0.5`,
  accent: `${base} bg-accent px-6 py-3 text-accent-foreground hover:opacity-90 hover:-translate-y-0.5`,
  outline: `${base} border border-primary/25 bg-background px-6 py-3 text-primary hover:border-gold hover:bg-secondary`,
  ghost: `${base} px-4 py-2 text-primary hover:text-accent`,
  onDark: `${base} border border-primary-foreground/30 px-6 py-3 text-primary-foreground hover:border-gold hover:bg-primary-foreground/10`,
  gold: `${base} bg-gold px-6 py-3 text-primary hover:opacity-90 hover:-translate-y-0.5`,
};

export const card =
  "rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300";

export const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none";

export const labelClass = "mb-1.5 block text-sm font-medium text-foreground";
