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
        {c.intro.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}

        <h2>{c.storyTitle}</h2>
        <p className="chip">{c.storyKicker}</p>
        {c.story.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}

        <h2>{c.brazilExpTitle}</h2>
        {c.brazilExp.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}
        <p className="frase">{c.brazilExpClose}</p>
      </article>

      <section className="secao secao-suave" id="entities">
        <div className="wrap">
          <h2 className="titulo-secao">{c.entitiesTitle}</h2>
          <div className="entidades">
            <article className="entidade">
              <p className="entidade-flag" aria-hidden="true">🇧🇷</p>
              <p className="chip">{c.brazilName}</p>
              <h3>{c.brazilOrg}</h3>
              <ul className="lista">
                {c.brazilItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="entidade">
              <p className="entidade-flag" aria-hidden="true">🇺🇸</p>
              <p className="chip">{c.usName}</p>
              <h3>{c.usOrg}</h3>
              <p className="muted" style={{ margin: "0.6rem 0 1rem" }}>{c.usBrand}</p>
              <ul className="lista">
                {c.usItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="lede" style={{ marginTop: "1.5rem" }}>{c.entitiesNote}</p>
        </div>
      </section>

      <article className="conteudo">
        <h2>{c.commitmentTitle}</h2>
        <p>{c.commitmentIntro}</p>
        <ul className="lista">
          {c.commitmentList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{c.commitmentClose}</p>
        <p style={{ marginTop: "2rem" }}>
          <Link className="btn" to="/courses">{t.home.cta}</Link>
        </p>
      </article>
    </>
  );
}
