import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function Courses() {
  const { t } = useI18n();
  const c = t.courses;

  return (
    <>
      <PageHero title={c.title} image="/images/guitar.webp" />
      <article className="conteudo">
        <div className="foto-dupla">
          <img src="/images/piano.webp" alt="" />
          <img src="/images/painting.webp" alt="" />
        </div>
        <p>{c.p1}</p>
        <h2>{c.h2}</h2>
        <ul className="lista">
          {c.list.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <h2>{c.h3}</h2>
        <p>{c.p2}</p>
        <p>{c.p3}</p>
        <h2>{c.h4}</h2>
        <p>{c.p4}</p>
        <p style={{ marginTop: "2rem" }}>
          <Link className="btn" to="/sponsor">{t.home.cta}</Link>
        </p>
      </article>
    </>
  );
}
