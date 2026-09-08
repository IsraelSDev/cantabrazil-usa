import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function Supporters() {
  const { t } = useI18n();
  const c = t.supporters;

  return (
    <>
      <PageHero title={c.title} image="/images/valores.jpg" />
      <article className="conteudo">
        <p>{c.p1}</p>
        <h2>{c.h2}</h2>
        <p>{c.p2}</p>
        <p>
          <Link className="link-forte" to="/membership">{t.nav.membership} →</Link>
        </p>
        <h2>{c.h3}</h2>
        <p>{c.p3}</p>
        <p style={{ marginTop: "1.5rem" }}>
          <Link className="btn" to="/sponsor">{t.home.cta}</Link>
        </p>
      </article>
    </>
  );
}
