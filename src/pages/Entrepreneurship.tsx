import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function Entrepreneurship() {
  const { t } = useI18n();
  const c = t.entrepreneurship;

  return (
    <>
      <PageHero title={c.title} image="/images/banner-entrepreneurship-m.webp" />
      <article className="conteudo">
        <img className="foto-pagina" src="/images/work.webp" alt="" style={{ height: "22rem", borderRadius: "1.1rem", marginBottom: "2rem" }} />
        <p>{c.p1}</p>
        <h2>{c.h2}</h2>
        <div className="grupo-idades">
          {c.groups.map((group) => (
            <article className="bloco-texto" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="lista">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p>{c.close}</p>
      </article>
    </>
  );
}
