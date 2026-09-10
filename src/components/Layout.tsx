import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Atmosphere } from "./Atmosphere";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useI18n } from "../i18n/LanguageContext";

export function Layout() {
  const { t } = useI18n();
  const { pathname, hash } = useLocation();
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  useEffect(() => {
    setShowCookies(localStorage.getItem("cbso-cookies") !== "ok");
  }, []);

  return (
    <div className="app">
      <Atmosphere />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <div className="cookies" hidden={!showCookies} id="aviso-cookies">
        <p>
          {t.cookies.text} <a href="/cookie-policy">{t.footer.cookies}</a>{" "}
        </p>
        <button
          type="button"
          className="btn"
          style={{ marginTop: "0.8rem" }}
          onClick={() => {
            localStorage.setItem("cbso-cookies", "ok");
            setShowCookies(false);
          }}
        >
          {t.cookies.ok}
        </button>
      </div>
    </div>
  );
}
