import { FormEvent, useState } from "react";
import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

const CONTACT_EMAIL = "contato.icb@institutocantabrazil.com.br";

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company") || "")) {
      setStatus("sent");
      return;
    }

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _replyto: email,
          _subject: `Canta Brazil Social — ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("send-failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero title={c.title} subtitle={c.lede} image="/images/community.webp" />
      <article className="conteudo conteudo-largo">
        <div className="sponsor-layout">
          <form className="formulario" onSubmit={onSubmit}>
            <input
              className="campo-honey"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
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
            <button className="btn" type="submit" disabled={status === "sending"}>
              {status === "sending" ? c.sending : c.send}
            </button>
            {status === "sent" ? <p className="retorno">{c.sent}</p> : null}
            {status === "error" ? <p className="retorno retorno-erro">{c.error}</p> : null}
          </form>
          <aside className="sponsor-box">
            <h2>{c.asideTitle}</h2>
            <p className="muted">{c.aside}</p>
            <p style={{ marginTop: "1rem" }}>
              <a className="link-forte" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </aside>
        </div>
      </article>
    </>
  );
}
