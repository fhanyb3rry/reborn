import { article } from "@/content/article";
import { PullQuote } from "./PullQuote";
import { FlameIcon } from "./FlameIcon";

const subsectionQuotes: Record<string, { after: number; text: string }> = {
  "Diez principios éticos relacionados con los empleados": {
    after: 1,
    text: "El respeto a la dignidad humana implica que todas las personas deben recibir un trato digno dentro de la organización, sin importar su puesto o nivel jerárquico.",
  },
  "Diez principios éticos relacionados con los usuarios y consumidores": {
    after: 2,
    text: "La seguridad del producto constituye un elemento fundamental dentro de la relación con los consumidores.",
  },
  "Diez principios éticos adicionales necesarios para Bonafont": {
    after: 3,
    text: "La transparencia exige que la organización comunique información relevante de manera clara, verificable y responsable ante sus grupos de interés.",
  },
};

export function ArticleBody() {
  let subsectionCount = 0;

  return (
    <section id="articulo" className="bg-paper px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        {article.sections.map((section) => {
          if (section.subsection) subsectionCount += 1;
          return (
            <ArticleSection
              key={section.heading}
              section={section}
              number={subsectionCount}
            />
          );
        })}
      </div>
    </section>
  );
}

function ArticleSection({
  section,
  number,
}: {
  section: (typeof article.sections)[number];
  number: number;
}) {
  if (section.isGroupHeading) {
    return (
      <div className="my-14 flex items-center justify-center gap-4">
        <span className="h-px flex-1 bg-hairline" />
        <h2 className="flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.3em] text-red">
          <FlameIcon className="h-4 w-4" />
          {section.heading}
          <FlameIcon className="h-4 w-4" />
        </h2>
        <span className="h-px flex-1 bg-hairline" />
      </div>
    );
  }

  if (section.subsection) {
    const numberLabel = String(number).padStart(2, "0");
    const quote = subsectionQuotes[section.heading];

    return (
      <div className="mb-14">
        <div className="mb-6 flex items-start gap-4 border-l-4 border-red pl-5">
          <span className="font-display text-3xl font-black leading-none text-red/30">
            {numberLabel}
          </span>
          <h3 className="font-display text-2xl font-bold leading-tight text-ink sm:text-[1.75rem]">
            {section.heading}
          </h3>
        </div>

        {section.paragraphs.map((paragraph, index) => (
          <div key={index}>
            <p className="mb-5 font-serif text-[17px] leading-[1.8] text-ink-soft">
              {paragraph}
            </p>
            {quote?.after === index && <PullQuote>{quote.text}</PullQuote>}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mb-14">
      <h2 className="mb-6 font-display text-3xl font-black tracking-tight text-ink sm:text-4xl">
        {section.heading}
      </h2>
      {section.paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`mb-5 font-serif text-[17px] leading-[1.8] text-ink-soft ${
            index === 0 && section.heading === "Introducción" ? "dropcap" : ""
          }`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
