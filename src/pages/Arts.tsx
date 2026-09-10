import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function Arts() {
  const { t } = useI18n();
  const c = t.heritage;

  return (
    <>
      <PageHero title={c.title} subtitle={c.subtitle} image="/images/banner-arts.webp" />
      <article className="conteudo">
        <div className="foto-dupla">
          <img src="/images/drums.webp" alt="" />
          <img src="/images/painting.webp" alt="" />
        </div>
        <p>{c.p1}</p>
        <p>{c.p2}</p>
        <p className="frase">{c.close}</p>
      </article>
    </>
  );
}
