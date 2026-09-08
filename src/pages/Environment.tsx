import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function Environment() {
  const { t } = useI18n();
  const c = t.environment;

  return (
    <>
      <PageHero title={c.title} image="/images/banner-environment.webp" />
      <article className="conteudo">
        <img className="foto-pagina" src="/images/environment-kids.webp" alt="" style={{ height: "22rem", borderRadius: "1.1rem", marginBottom: "2rem" }} />
        <p>{c.p1}</p>
        <h2>{c.h2}</h2>
        <ul className="lista">
          {c.list1.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <h2>{c.h3}</h2>
        <ul className="lista">
          {c.list2.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p>{c.close}</p>
      </article>
    </>
  );
}
