import { article } from "@/content/article";
import { SectionLabel } from "./SectionLabel";

export function AbstractSection() {
  const { resumen, abstract } = article;

  return (
    <section id="resumen" className="border-b border-hairline bg-cream/40 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionLabel label="Resumen &amp; Abstract" />

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="border-l-4 border-red bg-paper/80 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-ink">
              {resumen.heading}
            </h3>
            <p className="mt-4 font-serif text-[15px] leading-relaxed text-ink-soft">
              {resumen.body}
            </p>
            <p className="mt-5 font-sans text-xs text-ink">
              <span className="font-bold uppercase tracking-wide text-red">
                {resumen.keywordsLabel}:
              </span>{" "}
              <span className="italic text-ink-soft">{resumen.keywords}</span>
            </p>
          </div>

          <div className="border-l-4 border-ink bg-paper/80 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-ink">
              {abstract.heading}
            </h3>
            <p className="mt-4 font-serif text-[15px] italic leading-relaxed text-ink-soft">
              {abstract.body}
            </p>
            <p className="mt-5 font-sans text-xs text-ink">
              <span className="font-bold uppercase tracking-wide text-red">
                {abstract.keywordsLabel}:
              </span>{" "}
              <span className="italic text-ink-soft">{abstract.keywords}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
