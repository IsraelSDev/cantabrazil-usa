import { PageHero } from "../components/PageHero";
import { useI18n } from "../i18n/LanguageContext";

const logos = [
  { src: "/logos/logo-tv-sucesso.webp", alt: "TV Sucesso" },
  { src: "/logos/logo-band.webp", alt: "Band" },
  { src: "/logos/logo-coca-cola.webp", alt: "Coca-Cola" },
  { src: "/logos/logo-sebrae.webp", alt: "Sebrae" },
  { src: "/logos/logo-fieg.webp", alt: "FIEG" },
  { src: "/logos/logo-fecomercio-go.webp", alt: "Fecomércio Goiás" },
  { src: "/logos/logo-imperador.webp", alt: "Imperador" },
  { src: "/logos/logo-agua-vida-1.webp", alt: "Água Vida" },
  { src: "/logos/logo-agl-acadena-goiana-de-letras.webp", alt: "Academia Goiana de Letras" },
  { src: "/logos/logo-assepi.webp", alt: "ASSEPI" },
];

export function Partners() {
  const { t } = useI18n();

  return (
    <>
      <PageHero title={t.partners.title} image="/images/community.webp" />
      <article className="conteudo conteudo-largo">
        <p>{t.partners.p1}</p>
        <p>{t.partners.p2}</p>
        <div className="parceiros-grid" style={{ marginTop: "2rem" }}>
          {logos.map((logo) => (
            <div className="parceiro" key={logo.src}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
