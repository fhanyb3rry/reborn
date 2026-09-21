import { article } from "@/content/article";
import { SectionLabel } from "./SectionLabel";

export function References() {
  return (
    <section
      id="referencias"
      className="border-t border-hairline bg-cream/40 px-6 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-3xl">
        <SectionLabel label="Referencias" />

        <ol className="mt-8 space-y-5">
          {article.references.map((reference, index) => {
            const match = reference.match(/https?:\/\/\S+/);
            const url = match?.[0];
            const text = url ? reference.replace(url, "").trim() : reference;

            return (
              <li key={index} className="flex gap-4">
                <span className="font-display text-sm font-bold text-red">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-sans text-sm leading-relaxed text-ink-soft">
                  {text}{" "}
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all text-red underline decoration-red/30 underline-offset-2 hover:decoration-red"
                    >
                      {url}
                    </a>
                  )}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
