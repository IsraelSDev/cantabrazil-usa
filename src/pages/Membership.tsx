import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function Membership() {
  const { t } = useI18n();
  const c = t.membership;

  return (
    <>
      <PageHero title={c.title} subtitle={c.subtitle} image="/images/community.webp" />
      <article className="conteudo">
        <p>{c.p1}</p>
        <h2>{c.h2}</h2>
        <p>{c.p2}</p>
        <h2>{c.h3}</h2>
        <ul className="lista">
          {c.list.map((item) => <li key={item}>{item}</li>)}
        </ul>
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
