import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function CookiePolicy() {
  const { t } = useI18n();

  return (
    <>
      <PageHero title={t.cookiesPage.title} image="/images/bg-2.webp" />
      <article className="conteudo">
        <p>{t.cookiesPage.p1}</p>
      </article>
    </>
  );
}
