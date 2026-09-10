import { Link } from "react-router-dom";
import { useI18n } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

export function Home() {
  const { t } = useI18n();
  const marquee = [...t.home.values.map((v) => v.title), t.meta.tagline];

  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <picture>
            <source media="(max-width: 700px)" srcSet="/images/hero-home-mobile.png" />
            <img src="/images/hero-home.png" alt="" />
          </picture>
        </div>
        <div className="hero-copy">
          <p className="eyebrow hero-in">{t.home.eyebrow}</p>
          <h1 className="hero-in hero-in-2">{t.home.title}</h1>
          <p className="hero-texto hero-in hero-in-3">{t.home.text}</p>
          <p className="hero-acoes hero-in hero-in-4">
            <Link className="btn" to="/courses">{t.home.cta}</Link>
            <Link className="btn btn-ghost" to="/about">{t.home.story}</Link>
          </p>
        </div>
        <div className="scroll-hint" aria-hidden="true">
          <span />
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee, ...marquee].map((word, i) => (
            <span key={`${word}-${i}`}>{word}</span>
          ))}
        </div>
      </div>

      <Reveal>
        <p className="aviso">
          <span>{t.home.notice}</span>
          <Link to="/about#entities">{t.home.noticeLink}</Link>
        </p>
      </Reveal>

      <section className="secao">
        <div className="wrap narrativa">
          <Reveal className="narrativa-bloco">
            <div className="narrativa-foto">
              <img src="/images/community.webp" alt="" />
            </div>
            <div className="narrativa-texto">
              <p className="kicker">{t.home.whoTitle}</p>
              <h2 className="titulo-secao">{t.home.whoTitle}</h2>
              <p className="lede">{t.home.who}</p>
              <p className="muted" style={{ marginTop: "1rem" }}>{t.home.whoMore}</p>
              <p style={{ marginTop: "1.4rem" }}>
                <Link className="link-forte" to="/about">{t.home.story} →</Link>
              </p>
            </div>
          </Reveal>
          <Reveal className="narrativa-bloco narrativa-bloco--inv" delay={80}>
            <div className="narrativa-foto">
              <img src="/images/missao.jpg" alt="" />
            </div>
            <div className="narrativa-texto">
              <p className="kicker">{t.home.missionTitle}</p>
              <h2 className="titulo-secao">{t.home.missionKicker}</h2>
              <p className="lede">{t.home.mission}</p>
            </div>
          </Reveal>
          <Reveal className="narrativa-bloco" delay={80}>
            <div className="narrativa-foto">
              <img src="/images/visao.jpg" alt="" />
            </div>
            <div className="narrativa-texto">
              <p className="kicker">{t.home.visionTitle}</p>
              <h2 className="titulo-secao">{t.home.visionKicker}</h2>
              <p className="lede">{t.home.vision}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="secao secao-suave">
        <div className="wrap">
          <Reveal>
            <p className="kicker">{t.home.valuesKicker}</p>
            <h2 className="titulo-secao">{t.home.valuesTitle}</h2>
          </Reveal>
          <div className="valores-grid">
            {t.home.values.map((value, i) => (
              <Reveal key={value.title} delay={i * 60}>
                <article className="valor">
                  <img src={value.icon} alt="" />
                  <h3>{value.title}</h3>
                  <p className="muted">{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="wrap">
          <Reveal>
            <p className="kicker">{t.nav.what}</p>
            <h2 className="titulo-secao">{t.home.explore}</h2>
            <p className="lede">{t.home.exploreLede}</p>
          </Reveal>
          <div className="mosaico">
            {t.home.cards.map((card, i) => (
              <Reveal key={card.href} delay={i * 80}>
                <Link className="mosaico-card" to={card.href}>
                  <img src={card.img} alt="" />
                  <span>
                    <strong>{card.title}</strong>
                    <em>{card.text}</em>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="secao secao-creme">
        <div className="wrap">
          <Reveal>
            <div className="cta-final" style={{ backgroundImage: "url(/images/hands.jpg)" }}>
              <div>
                <p className="kicker">{t.nav.sponsor}</p>
                <h2 className="titulo-secao">{t.home.ctaTitle}</h2>
                <p className="lede">{t.home.ctaText}</p>
              </div>
              <Link className="btn" to="/sponsor">{t.home.ctaBtn}</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
