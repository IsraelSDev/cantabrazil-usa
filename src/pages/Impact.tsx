import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function Impact() {
  const { t } = useI18n();

  return (
    <>
      <PageHero title={t.impact.title} image="/images/kids-outdoors.webp" />
      <article className="conteudo">
        <img className="foto-pagina" src="/images/friends.webp" alt="" style={{ height: "22rem", borderRadius: "1.1rem", marginBottom: "2rem" }} />
        <p>{t.impact.lede}</p>
      </article>
    </>
  );
}
