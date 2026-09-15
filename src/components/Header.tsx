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
  const langRef = useRef<HTMLDivElement>(null);
  const current = languages.find((item) => item.id === lang) ?? languages[0];

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

  useEffect(() => {
    if (!langOpen) return;
    const onPointer = (event: MouseEvent) => {
      if (!langRef.current?.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLangOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  return (
    <header className={scrolled ? "topo topo--scrolled" : "topo"}>
      <div className="topo-interno">
        <NavLink className="marca" to="/" aria-label={t.meta.org}>
          <span className="marca-fundo">
            <img src="/logos/logo-horizontal.png" alt={t.meta.org} width={1024} height={280} />
          </span>
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
          <div className="lang" ref={langRef}>
            <button
              className="lang-btn"
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-expanded={langOpen}
              aria-label={t.nav.language}
            >
              <span>{current.flag}</span>
              <span>{current.label}</span>
              <span className="seta">▾</span>
            </button>
            {langOpen ? (
              <ul className="lang-menu">
                {languages.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      aria-current={item.id === lang ? "true" : undefined}
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
            <div className="bloco idiomas-movel">
              <p className="titulo">{t.nav.language}</p>
              {languages.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="lang-btn"
                  aria-current={item.id === lang ? "true" : undefined}
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
