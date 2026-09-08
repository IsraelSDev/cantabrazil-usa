import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function MemberBenefits() {
  const { t } = useI18n();
  const c = t.benefits;

  return (
    <>
      <PageHero title={c.title} image="/images/hands.jpg" />
      <article className="conteudo">
        <p>{c.p1}</p>
        <h2>{c.h2}</h2>
        <p>{c.p2}</p>
        <ul className="lista">
          {c.list.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <h2>{c.h3}</h2>
        <ul className="lista">
          {c.list2.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <h2>{c.h4}</h2>
        <p>{c.p3}</p>
        <h2>{c.h5}</h2>
        <p>{c.p4}</p>
      </article>
    </>
  );
}
