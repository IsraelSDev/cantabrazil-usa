import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function Sponsor() {
  const { t } = useI18n();
  const c = t.sponsor;

  return (
    <>
      <PageHero title={c.title} subtitle={c.lede} image="/images/hands.jpg" />
      <article className="conteudo conteudo-largo">
        <div className="sponsor-layout">
          <div>
            <p>{c.p1}</p>
            <h2>{c.h2}</h2>
            <ul className="lista">
              {c.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="foto-dupla">
              <img src="/images/guitar.webp" alt="" />
              <img src="/images/piano.webp" alt="" />
            </div>
          </div>
          <aside className="sponsor-box">
            <h2>{c.boxTitle}</h2>
            <p className="muted">{c.box}</p>
            <p style={{ margin: "1.2rem 0" }}>
              <Link className="btn" to="/contact">{c.boxCta}</Link>
            </p>
            <h2>{c.brazilTitle}</h2>
            <p className="muted">{c.brazil}</p>
            <p style={{ marginTop: "1rem" }}>
              <a className="btn btn-navy" href="https://www.institutocantabrazil.com.br/doar" target="_blank" rel="noopener noreferrer">
                {c.brazilBtn} ↗
              </a>
            </p>
          </aside>
        </div>
      </article>
    </>
  );
}
