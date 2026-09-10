import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function NewTalents() {
  const { t } = useI18n();
  const c = t.creation;

  return (
    <>
      <PageHero title={c.title} image="/images/banner-talents.webp" />
      <article className="conteudo">
        <img className="foto-pagina" src="/images/piano.webp" alt="" style={{ height: "22rem", borderRadius: "1.1rem", marginBottom: "2rem" }} />
        <p>{c.p1}</p>
        <h2>{c.listTitle}</h2>
        <ul className="lista">
          {c.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{c.close}</p>
        <h2>{c.powerTitle}</h2>
        <p>{c.powerIntro}</p>
        {c.lines.map((line) => (
          <p className="frase" key={line}>{line}</p>
        ))}
        <p>{c.powerClose}</p>
        <p style={{ marginTop: "2rem" }}>
          <Link className="btn" to="/courses">{t.nav.courses}</Link>
        </p>
      </article>
    </>
  );
}
