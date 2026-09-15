import { en, type Copy } from "./en";
import { pt } from "./pt";
import { es } from "./es";
import { fr } from "./fr";
import { ar } from "./ar";

export type Lang = "en" | "pt" | "es" | "fr" | "ar";
export type { Copy };

export const languages: { id: Lang; label: string; flag: string }[] = [
  { id: "en", label: "Inglês", flag: "🇺🇸" },
  { id: "pt", label: "Português", flag: "🇧🇷" },
  { id: "es", label: "Espanhol", flag: "🇪🇸" },
  { id: "fr", label: "Francês", flag: "🇫🇷" },
  { id: "ar", label: "Árabe", flag: "🇸🇦" },
];

export const langMeta: Record<Lang, { html: string; dir: "ltr" | "rtl" }> = {
  en: { html: "en", dir: "ltr" },
  pt: { html: "pt-BR", dir: "ltr" },
  es: { html: "es", dir: "ltr" },
  fr: { html: "fr", dir: "ltr" },
  ar: { html: "ar", dir: "rtl" },
};

export { en, pt, es, fr, ar };

export const dictionaries: Record<Lang, Copy> = { en, pt, es, fr, ar };

export function isLang(value: string | null): value is Lang {
  return value === "en" || value === "pt" || value === "es" || value === "fr" || value === "ar";
}
