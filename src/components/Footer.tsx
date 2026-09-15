import { NavLink } from "react-router-dom";
import { useI18n } from "../i18n/LanguageContext";

const SOCIAL_NAME = "Instituto Canta Brazil Social";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/institutocantabrazil/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10a2.2 2.2 0 0 0 2.2-2.2V7A2.2 2.2 0 0 0 17 4.8zM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zm4.55-3.15a.95.95 0 1 1-.95.95.95.95 0 0 1 .95-.95z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1AN9qEy9PA/?mibextid=wwXIfr",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.5 8.5V6.8c0-.7.5-1.1 1.2-1.1h1.3V3h-2.3C12.4 3 11 4.5 11 6.8v1.7H9v2.7h2V21h3.2v-9.8h2.2l.4-2.7z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@institutocantabrazil",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23 12.2s0-3.2-.4-4.6a3 3 0 0 0-2.1-2.1C18.9 5 12 5 12 5s-6.9 0-8.5.5a3 3 0 0 0-2.1 2.1C1 9 1 12.2 1 12.2s0 3.2.4 4.6a3 3 0 0 0 2.1 2.1C5.1 19.4 12 19.4 12 19.4s6.9 0 8.5-.5a3 3 0 0 0 2.1-2.1c.4-1.4.4-4.6.4-4.6zM9.8 15.4V9l5.8 3.2z" />
      </svg>
    ),
  },
];

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="rodape">
      <div className="wrap rodape-grid">
        <div>
          <p className="rodape-nome" style={{ color: "#fff", fontWeight: 700, marginBottom: "0.6rem" }}>
            {t.meta.org}
          </p>
          <p>{t.footer.blurb}</p>
          <p className="social-nome">{SOCIAL_NAME}</p>
          <div className="social">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SOCIAL_NAME} — ${item.label}`}
                title={`${SOCIAL_NAME} — ${item.label}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <nav aria-label={t.footer.explore}>
          <h3>{t.footer.explore}</h3>
          <NavLink to="/about">{t.nav.about}</NavLink>
          <NavLink to="/courses">{t.nav.courses}</NavLink>
          <NavLink to="/scholarships">{t.nav.scholarships}</NavLink>
          <NavLink to="/contact">{t.nav.contact}</NavLink>
          <NavLink to="/sponsor">{t.nav.sponsor}</NavLink>
          <NavLink to="/checkout">{t.checkout.title}</NavLink>
        </nav>
        <nav aria-label={t.footer.legal}>
          <h3>{t.footer.legal}</h3>
          <NavLink to="/cookie-policy">{t.footer.cookies}</NavLink>
        </nav>
        <div>
          <h3>{t.nav.contact}</h3>
          <a href="mailto:contato.icb@institutocantabrazil.com.br">contato.icb@institutocantabrazil.com.br</a>
        </div>
      </div>
      <p className="rodape-fim">{t.footer.rights}</p>
    </footer>
  );
}
