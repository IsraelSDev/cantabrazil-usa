import { FormEvent, useState } from "react";
import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Canta Brazil — ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${c.mail}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <PageHero title={c.title} subtitle={c.lede} image="/images/community.webp" />
      <article className="conteudo conteudo-largo">
        <div className="sponsor-layout">
          <form className="formulario" onSubmit={onSubmit}>
            <div className="campo">
              <label htmlFor="name">{c.name}</label>
              <input id="name" name="name" required autoComplete="name" />
            </div>
            <div className="campo">
              <label htmlFor="email">{c.email}</label>
              <input id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="campo">
              <label htmlFor="message">{c.message}</label>
              <textarea id="message" name="message" rows={6} required />
            </div>
            <button className="btn" type="submit">{c.send}</button>
            {sent ? <p className="retorno">{c.sent}</p> : null}
          </form>
          <aside className="sponsor-box">
            <h2>{c.asideTitle}</h2>
            <p className="muted">{c.aside}</p>
            <p style={{ marginTop: "1rem" }}>
              <a className="link-forte" href={`mailto:${c.mail}`}>{c.mail}</a>
            </p>
          </aside>
        </div>
      </article>
    </>
  );
}
