import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function Certifications() {
  const { t } = useI18n();
  const c = t.certifications;

  return (
    <>
      <PageHero title={c.title} image="/images/valores.jpg" />
      <article className="conteudo">
        <p>{c.lede}</p>
        <ul className="lista">
          {c.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </article>
    </>
  );
}
