import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function Education() {
  const { t } = useI18n();
  const c = t.experience;

  return (
    <>
      <PageHero title={c.title} subtitle={c.subtitle} image="/images/banner-education.webp" />
      <article className="conteudo conteudo-largo">
        <img className="foto-pagina" src="/images/visao.jpg" alt="" style={{ height: "22rem", borderRadius: "1.1rem", marginBottom: "2rem" }} />
        <p>{c.p1}</p>
        <div className="grupo-idades">
          {c.areas.map((area) => (
            <article className="bloco-texto" key={area.title}>
              <h3>{area.title}</h3>
              <p className="muted">{area.text}</p>
            </article>
          ))}
        </div>
        <p style={{ marginTop: "2rem" }}>{c.close}</p>
        <h2 id="generations">{c.generationsTitle}</h2>
        <p>{c.generationsIntro}</p>
        <div className="grupo-idades">
          {c.generations.map((stage) => (
            <article className="bloco-texto" key={stage.title}>
              <h3>{stage.title}</h3>
              <p className="muted">{stage.text}</p>
            </article>
          ))}
        </div>
        <p>{c.generationsNote}</p>
      </article>
    </>
  );
}
