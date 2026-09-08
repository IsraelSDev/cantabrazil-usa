import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function Education() {
  const { t } = useI18n();
  const c = t.education;

  return (
    <>
      <PageHero title={c.title} subtitle={c.subtitle} image="/images/banner-education.webp" />
      <article className="conteudo">
        <img className="foto-pagina" src="/images/visao.jpg" alt="" style={{ height: "22rem", borderRadius: "1.1rem", marginBottom: "2rem" }} />
        <p>{c.p1}</p>
        <p>{c.p2}</p>
        <h2>{c.h2}</h2>
        <p>{c.p3}</p>
        <h3>{c.h3}</h3>
        <ul className="lista">
          {c.list.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <h2>{c.h4}</h2>
        <div className="grupo-idades">
          {c.stages.map((stage) => (
            <article className="bloco-texto" key={stage.title}>
              <h3>{stage.title}</h3>
              <p className="muted">{stage.text}</p>
            </article>
          ))}
        </div>
        <h2>{c.whyTitle}</h2>
        <p>{c.why}</p>
      </article>
    </>
  );
}
