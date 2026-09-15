import { FormEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";
import { GatewayNotConfiguredError, processCheckout, type PaymentMethod } from "../payments/gateway";

const PRESETS = [50, 100, 250, 500, 1000];

function formatUsd(amount: number, locale: string) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function Checkout() {
  const { t, lang } = useI18n();
  const c = t.checkout;
  const locale = lang === "pt" ? "pt-BR" : lang === "es" ? "es" : lang === "fr" ? "fr" : lang === "ar" ? "ar" : "en-US";

  const [preset, setPreset] = useState<number | "custom">(100);
  const [custom, setCustom] = useState("");
  const [purpose, setPurpose] = useState(c.purposes[0]?.id ?? "scholarships");
  const [method, setMethod] = useState<PaymentMethod>("card");
  const [status, setStatus] = useState<"idle" | "paying" | "pending">("idle");

  const amount = useMemo(() => {
    if (preset === "custom") {
      const parsed = Number(custom.replace(",", "."));
      return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
    }
    return preset;
  }, [custom, preset]);

  const purposeLabel = c.purposes.find((item) => item.id === purpose)?.label ?? purpose;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (amount <= 0) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("paying");

    try {
      await processCheckout({
        amountCents: Math.round(amount * 100),
        currency: "USD",
        name: String(data.get("name") || "").trim(),
        email: String(data.get("email") || "").trim(),
        organization: String(data.get("organization") || "").trim(),
        purpose,
        message: String(data.get("note") || "").trim(),
        method,
      });
    } catch (error) {
      if (error instanceof GatewayNotConfiguredError) {
        setStatus("pending");
        return;
      }
      setStatus("idle");
    }
  }

  return (
    <>
      <PageHero title={c.title} subtitle={c.lede} image="/images/hands.jpg" />
      <article className="conteudo conteudo-largo">
        <ol className="checkout-steps">
          <li>{c.stepAmount}</li>
          <li>{c.stepDetails}</li>
          <li>{c.stepPayment}</li>
        </ol>

        <form className="checkout-layout" onSubmit={onSubmit}>
          <div className="checkout-main">
            <section className="checkout-card">
              <h2>{c.amountLabel}</h2>
              <div className="checkout-amounts">
                {PRESETS.map((value) => (
                  <button
                    key={value}
                    type="button"
                    className={preset === value ? "checkout-chip checkout-chip--on" : "checkout-chip"}
                    onClick={() => setPreset(value)}
                  >
                    {formatUsd(value, locale)}
                  </button>
                ))}
                <button
                  type="button"
                  className={preset === "custom" ? "checkout-chip checkout-chip--on" : "checkout-chip"}
                  onClick={() => setPreset("custom")}
                >
                  {c.customAmount}
                </button>
              </div>
              {preset === "custom" ? (
                <div className="campo" style={{ marginTop: "1rem" }}>
                  <label htmlFor="custom-amount">{c.customPlaceholder}</label>
                  <input
                    id="custom-amount"
                    inputMode="decimal"
                    value={custom}
                    onChange={(event) => setCustom(event.target.value)}
                    placeholder="250"
                    required
                  />
                </div>
              ) : null}

              <div className="campo" style={{ marginTop: "1.4rem" }}>
                <label htmlFor="purpose">{c.purposeLabel}</label>
                <select id="purpose" value={purpose} onChange={(event) => setPurpose(event.target.value)}>
                  {c.purposes.map((item) => (
                    <option key={item.id} value={item.id}>{item.label}</option>
                  ))}
                </select>
              </div>
            </section>

            <section className="checkout-card">
              <h2>{c.stepDetails}</h2>
              <div className="checkout-grid">
                <div className="campo">
                  <label htmlFor="checkout-name">{c.name}</label>
                  <input id="checkout-name" name="name" required autoComplete="name" />
                </div>
                <div className="campo">
                  <label htmlFor="checkout-email">{c.email}</label>
                  <input id="checkout-email" name="email" type="email" required autoComplete="email" />
                </div>
              </div>
              <div className="campo">
                <label htmlFor="checkout-org">
                  {c.organization} <span className="muted">({c.organizationHint})</span>
                </label>
                <input id="checkout-org" name="organization" autoComplete="organization" />
              </div>
              <div className="campo">
                <label htmlFor="checkout-note">
                  {c.message} <span className="muted">({c.messageHint})</span>
                </label>
                <textarea id="checkout-note" name="note" rows={3} />
              </div>
            </section>

            <section className="checkout-card">
              <h2>{c.paymentLabel}</h2>
              <div className="checkout-methods">
                <button
                  type="button"
                  className={method === "card" ? "checkout-method checkout-method--on" : "checkout-method"}
                  onClick={() => setMethod("card")}
                >
                  <span aria-hidden="true">💳</span>
                  {c.card}
                </button>
                <button
                  type="button"
                  className={method === "paypal" ? "checkout-method checkout-method--on" : "checkout-method"}
                  onClick={() => setMethod("paypal")}
                >
                  <span aria-hidden="true">🅿️</span>
                  {c.paypal}
                </button>
              </div>

              {method === "card" ? (
                <div className="checkout-card-panel">
                  <div className="campo">
                    <label htmlFor="card-number">{c.cardNumber}</label>
                    <input id="card-number" inputMode="numeric" autoComplete="cc-number" placeholder="•••• •••• •••• ••••" />
                  </div>
                  <div className="campo">
                    <label htmlFor="card-name">{c.cardName}</label>
                    <input id="card-name" autoComplete="cc-name" />
                  </div>
                  <div className="checkout-grid">
                    <div className="campo">
                      <label htmlFor="card-expiry">{c.expiry}</label>
                      <input id="card-expiry" autoComplete="cc-exp" placeholder="MM/AA" />
                    </div>
                    <div className="campo">
                      <label htmlFor="card-cvc">{c.cvc}</label>
                      <input id="card-cvc" inputMode="numeric" autoComplete="cc-csc" placeholder="123" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="checkout-paypal">
                  <p className="muted">{c.paypal}</p>
                </div>
              )}

              <p className="checkout-note">{c.gatewayNote}</p>
            </section>
          </div>

          <aside className="checkout-summary">
            <h2>{c.summaryTitle}</h2>
            <dl>
              <div>
                <dt>{c.summaryAmount}</dt>
                <dd>{amount > 0 ? formatUsd(amount, locale) : "—"}</dd>
              </div>
              <div>
                <dt>{c.summaryPurpose}</dt>
                <dd>{purposeLabel}</dd>
              </div>
              <div className="checkout-total">
                <dt>{c.summaryTotal}</dt>
                <dd>{amount > 0 ? formatUsd(amount, locale) : "—"}</dd>
              </div>
            </dl>
            <p className="checkout-secure">{c.secure}</p>
            <button className="btn" type="submit" disabled={status === "paying" || amount <= 0}>
              {status === "paying" ? c.paying : c.pay}
            </button>
            {status === "pending" ? <p className="retorno">{c.pending}</p> : null}
            <p className="muted checkout-terms">{c.terms}</p>
            <Link className="link-forte" to="/sponsor">{c.back}</Link>
          </aside>
        </form>
      </article>
    </>
  );
}
