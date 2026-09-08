import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function About() {
  const { t } = useI18n();
  const c = t.about;

  return (
    <>
      <PageHero title={c.title} subtitle={c.subtitle} image="/images/banner-story.webp" />
      <article className="conteudo">
        <div className="foto-dupla">
          <img src="/images/kids-outdoors.webp" alt="" />
          <img src="/images/community.webp" alt="" />
        </div>
        <h2>{c.h1}</h2>
        <p>{c.p1}</p>
        <p>{c.p2}</p>
        <p>{c.p3}</p>
        <h2>{c.h2}</h2>
        <p>{c.p4}</p>
        <p>{c.p5}</p>
        <p>{c.p6}</p>
        <h2>{c.h3}</h2>
        <p>{c.p7}</p>
        <p style={{ marginTop: "2rem" }}>
          <Link className="btn" to="/sponsor">{t.home.cta}</Link>
        </p>
      </article>
    </>
  );
}
