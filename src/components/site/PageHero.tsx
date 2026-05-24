interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  height?: "full" | "tall" | "short";
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  height = "tall",
}: PageHeroProps) {
  const h =
    height === "full"
      ? "min-h-screen"
      : height === "tall"
        ? "min-h-[78vh]"
        : "min-h-[56vh]";
  return (
    <section className={`relative ${h} flex items-end overflow-hidden`}>
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
      <div className="container-x relative pb-16 md:pb-24 pt-32 w-full">
        {eyebrow && (
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 fade-up">
            {eyebrow}
          </div>
        )}
        <h1 className="text-display text-hero max-w-5xl fade-up">{title}</h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-base md:text-lg text-foreground/75 fade-up">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
