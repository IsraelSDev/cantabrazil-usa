import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function Courses() {
  const { t } = useI18n();
  const c = t.courses;

  return (
    <>
      <PageHero title={c.title} image="/images/guitar.webp" />
      <article className="conteudo conteudo-largo">
        <div className="foto-dupla">
          <img src="/images/piano.webp" alt="" />
          <img src="/images/painting.webp" alt="" />
        </div>
        <p>{c.p1}</p>
        <p>{c.p2}</p>

        {c.categories.map((category) => (
          <section key={category.id} id={category.id} className="categoria-cursos">
            <h2>{category.title}</h2>
            <div className="curso-grid">
              {category.courses.map((course) => (
                <article className="curso" key={course.title}>
                  <p className="chip">{course.ages}</p>
                  <h3>{course.title}</h3>
                  <p className="muted">{course.text}</p>
                  {course.goal ? <p className="muted"><strong>{course.goal}</strong></p> : null}
                  {course.list.length > 0 ? (
                    <ul className="lista">
                      {course.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ))}

        <p style={{ marginTop: "2rem" }}>
          <Link className="btn" to="/student-creation">{t.nav.creation}</Link>
        </p>
      </article>
    </>
  );
}
