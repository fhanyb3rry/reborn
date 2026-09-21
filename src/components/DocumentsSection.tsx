import { SectionLabel } from "./SectionLabel";

const documents = [
  { title: "Aviso de privacidad", href: "/docs/aviso-de-privacidad.pdf" },
  {
    title: "Propuesta de mejora: Mi Comunidad",
    href: "/docs/propuesta-mejora-mi-comunidad.pdf",
  },
  {
    title: "Capítulo: Ética Bonafont",
    href: "/docs/capitulo-etica-bonafont.docx",
  },
  {
    title: "Capítulo: Ética Bonafont (PDF)",
    href: "/docs/capitulo-etica-bonafont.pdf",
  },
];

export function DocumentsSection() {
  return (
    <section id="documentos" className="border-t border-hairline bg-paper px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <SectionLabel label="Documentos" />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {documents.map((doc) => {
            const ext = doc.href.split(".").pop()?.toUpperCase();
            return (
              <a
                key={doc.href}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border border-hairline bg-white/40 p-5 transition-all hover:border-red/40 hover:shadow-[0_4px_0_0_var(--reborn-red)]"
              >
                <span className="font-display text-base font-bold leading-snug text-ink">
                  {doc.title}
                </span>
                <span className="whitespace-nowrap font-sans text-xs font-bold uppercase tracking-wide text-red">
                  Abrir {ext} →
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
