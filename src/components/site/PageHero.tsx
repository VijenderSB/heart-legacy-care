export function PageHero({
  eyebrow,
  heading,
  subheading,
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
}) {
  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-20">
      <div className="container-page max-w-3xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
        )}
        <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{heading}</h1>
        {subheading && (
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            {subheading}
          </p>
        )}
      </div>
    </section>
  );
}
