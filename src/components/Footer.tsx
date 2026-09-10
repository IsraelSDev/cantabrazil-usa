import { NavLink } from "react-router-dom";
import { useI18n } from "../i18n/LanguageContext";

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
          <div className="social">
            <a href="https://www.instagram.com/institutocantabrazil/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/share/1AN9qEy9PA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.youtube.com/@institutocantabrazil" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
        <nav aria-label={t.footer.explore}>
          <h3>{t.footer.explore}</h3>
          <NavLink to="/about">{t.nav.about}</NavLink>
          <NavLink to="/courses">{t.nav.courses}</NavLink>
          <NavLink to="/scholarships">{t.nav.scholarships}</NavLink>
          <NavLink to="/contact">{t.nav.contact}</NavLink>
          <NavLink to="/sponsor">{t.nav.sponsor}</NavLink>
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
