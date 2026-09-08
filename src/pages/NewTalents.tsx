import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function NewTalents() {
  const { t } = useI18n();
  const c = t.talents;

  return (
    <>
      <PageHero title={c.title} image="/images/banner-talents.webp" />
      <article className="conteudo">
        <img className="foto-pagina" src="/images/piano.webp" alt="" style={{ height: "22rem", borderRadius: "1.1rem", marginBottom: "2rem" }} />
        <p>{c.p1}</p>
        <p>{c.p2}</p>
        <h2>{c.h2}</h2>
        <ul className="lista">
          {c.list.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p>{c.belief}</p>
        <h2>{c.h3}</h2>
        <p>
          {c.p3.split("novostalentos.icb@institutocantabrazil.com.br").map((part, index) =>
            index === 0 ? (
              <span key="a">{part}</span>
            ) : (
              <span key="b">
                <a className="link-forte" href="mailto:novostalentos.icb@institutocantabrazil.com.br">
                  novostalentos.icb@institutocantabrazil.com.br
                </a>
                {part}
              </span>
            ),
          )}
        </p>
      </article>
    </>
  );
}
