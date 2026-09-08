import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function Arts() {
  const { t } = useI18n();
  const c = t.arts;

  return (
    <>
      <PageHero title={c.title} image="/images/banner-arts.webp" />
      <article className="conteudo">
        <div className="foto-dupla">
          <img src="/images/drums.webp" alt="" />
          <img src="/images/painting.webp" alt="" />
        </div>
        <p>{c.p1}</p>
        <p>{c.p2}</p>
        <h2>{c.h2}</h2>
        <ul className="lista">
          {c.list.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p>{c.close}</p>
      </article>
    </>
  );
}
