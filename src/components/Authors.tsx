import { article } from "@/content/article";
import { SectionLabel } from "./SectionLabel";

export function Authors() {
  return (
    <section id="autores" className="border-b border-hairline bg-paper px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionLabel label="Autores" />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {article.authors.map((author) => (
            <div
              key={author.email}
              className="group rounded-sm border border-hairline bg-white/40 p-5 transition-all hover:border-red/40 hover:shadow-[0_4px_0_0_var(--reborn-red)]"
            >
              <p className="font-display text-base font-bold leading-snug text-ink">
                {author.name}
              </p>
              <p className="mt-1.5 font-sans text-xs leading-relaxed text-ink-soft">
                {author.affiliation}
              </p>
              <a
                href={`mailto:${author.email}`}
                className="mt-3 block truncate font-sans text-xs font-medium text-red hover:underline"
              >
                {author.email}
              </a>
              <p className="mt-1 font-sans text-[11px] tracking-wide text-ink-soft/70">
                ORCID {author.orcid}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
