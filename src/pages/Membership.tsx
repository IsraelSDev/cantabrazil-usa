import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function Membership() {
  const { t } = useI18n();
  const c = t.scholarship;

  return (
    <>
      <PageHero title={c.title} image="/images/community.webp" />
      <article className="conteudo">
        <p>{c.p1}</p>
        <p>{c.p2}</p>
        <p>{c.p3}</p>
        <p style={{ marginTop: "2rem" }}>
          <Link className="btn" to="/sponsor">{c.cta}</Link>
        </p>
      </article>
    </>
  );
}
