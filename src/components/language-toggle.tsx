import { useLang } from "@/i18n/language";
import type { Lang } from "@/i18n/texts";

const options: { code: Lang; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
];

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t.header.langAria}
      className="flex items-center rounded-md border border-border p-0.5"
    >
      {options.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLang(option.code)}
          aria-pressed={lang === option.code}
          className={`rounded px-2 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
            lang === option.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground transition-colors hover:text-foreground"
          }`}
        >
          {compact ? option.code : option.label}
        </button>
      ))}
    </div>
  );
}
