import { NavLink, useLocation } from "react-router-dom";
import { useI18n } from "../i18n/LanguageContext";
import { languages } from "../i18n/copy";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const mobileRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (mobileRef.current) mobileRef.current.open = false;
    setLangOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "topo topo--scrolled" : "topo"}>
      <div className="topo-interno">
        <NavLink className="marca" to="/" aria-label={t.meta.org}>
          <img src="/logos/logo-horizontal.png" alt={t.meta.org} width={1024} height={280} />
        </NavLink>

        <nav className="nav-principal" aria-label="Menu">
          <ul>
            <li className="grupo">
              <button type="button">
                {t.nav.about} <span className="seta">▾</span>
              </button>
              <ul className="submenu">
                <li><NavLink to="/about">{t.nav.story}</NavLink></li>
                <li><NavLink to="/experience">{t.nav.experience}</NavLink></li>
              </ul>
            </li>
            <li className="grupo">
              <button type="button">
                {t.nav.what} <span className="seta">▾</span>
              </button>
              <ul className="submenu">
                <li><NavLink to="/courses">{t.nav.courses}</NavLink></li>
                <li><NavLink to="/student-creation">{t.nav.creation}</NavLink></li>
                <li><NavLink to="/heritage">{t.nav.heritage}</NavLink></li>
              </ul>
            </li>
            <li className="grupo">
              <button type="button">
                {t.nav.join} <span className="seta">▾</span>
              </button>
              <ul className="submenu">
                <li><NavLink to="/scholarships">{t.nav.scholarships}</NavLink></li>
                <li><NavLink to="/sponsor">{t.nav.sponsor}</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to="/contact">{t.nav.contact}</NavLink>
            </li>
          </ul>
        </nav>

        <div className="acoes">
          <div className="lang">
            <button className="lang-btn" type="button" onClick={() => setLangOpen((v) => !v)} aria-expanded={langOpen}>
              <span>{languages.find((l) => l.id === lang)?.flag}</span>
              <span>{languages.find((l) => l.id === lang)?.label}</span>
              <span className="seta">▾</span>
            </button>
            {langOpen ? (
              <ul className="lang-menu">
                {languages.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      aria-current={item.id === lang}
                      onClick={() => {
                        setLang(item.id);
                        setLangOpen(false);
                      }}
                    >
                      <span>{item.flag}</span>
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <NavLink className="btn" to="/sponsor">
            {t.nav.sponsor}
          </NavLink>
        </div>

        <details className="menu-movel" ref={mobileRef}>
          <summary aria-label={t.nav.menu}>☰</summary>
          <nav className="drawer" aria-label={t.nav.menu}>
            <div className="bloco">
              <p className="titulo">{t.nav.about}</p>
              <ul>
                <li><NavLink to="/about">{t.nav.story}</NavLink></li>
                <li><NavLink to="/experience">{t.nav.experience}</NavLink></li>
              </ul>
            </div>
            <div className="bloco">
              <p className="titulo">{t.nav.what}</p>
              <ul>
                <li><NavLink to="/courses">{t.nav.courses}</NavLink></li>
                <li><NavLink to="/student-creation">{t.nav.creation}</NavLink></li>
                <li><NavLink to="/heritage">{t.nav.heritage}</NavLink></li>
              </ul>
            </div>
            <div className="bloco">
              <p className="titulo">{t.nav.join}</p>
              <ul>
                <li><NavLink to="/scholarships">{t.nav.scholarships}</NavLink></li>
                <li><NavLink to="/sponsor">{t.nav.sponsor}</NavLink></li>
              </ul>
            </div>
            <div className="bloco">
              <NavLink className="titulo" to="/contact">{t.nav.contact}</NavLink>
            </div>
            <NavLink className="btn" to="/sponsor">{t.nav.sponsor}</NavLink>
            <div className="bloco" style={{ marginTop: "1rem" }}>
              {languages.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="lang-btn"
                  style={{ marginRight: "0.5rem", marginTop: "0.4rem" }}
                  aria-current={item.id === lang}
                  onClick={() => setLang(item.id)}
                >
                  {item.flag} {item.label}
                </button>
              ))}
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
