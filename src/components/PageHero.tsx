type Props = {
  title: string;
  subtitle?: string;
  image: string;
};

export function PageHero({ title, subtitle, image }: Props) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: `url(${image})` }} />
      <div className="page-hero-copy">
        <h1>{title}</h1>
        {subtitle ? <p className="hero-texto" style={{ marginBottom: 0 }}>{subtitle}</p> : null}
      </div>
    </section>
  );
}
