"use client";

import Image from "next/image";
import { FlameIcon } from "./FlameIcon";
import { Sparkle } from "./Sparkle";
import { useSearch } from "./SearchProvider";
import { documents } from "@/content/documents";

const normalize = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export function DocumentsSection() {
  const { query } = useSearch();
  const q = normalize(query.trim());

  // Se conserva el número original (01, 02, 03) aunque se filtre
  const results = documents
    .map((doc, i) => ({ doc, number: i + 1 }))
    .filter(({ doc }) => normalize(doc.title).includes(q));

  if (results.length === 0) {
    return (
      <div className="rounded-xl border border-line bg-surface px-6 py-16 text-center">
        <Sparkle className="mx-auto h-6 w-6 text-red-text" />
        <p className="mt-4 font-display text-2xl italic">Sin resultados</p>
        <p className="mt-2 font-sans text-sm text-muted">
          No encontramos ninguna edición con &ldquo;{query}&rdquo;.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {results.map(({ doc, number }, i) => (
        <a
          key={doc.href}
          href={doc.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ animationDelay: `${0.15 + i * 0.12}s` }}
          className="fade-up group relative grid min-h-[21rem] grid-cols-[1fr_44%] overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-red/60 hover:shadow-[0_18px_40px_-18px_var(--red)]"
        >
          <div className="relative flex flex-col p-6">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-muted">
              Edición digital
            </span>
            <span className="mt-3 font-display text-7xl font-black leading-none text-red-text">
              {String(number).padStart(2, "0")}
            </span>
            <div className="mt-4 h-px w-10 bg-red" />
            <h3 className="mt-4 font-display text-xl font-bold leading-snug text-fg">
              {doc.title}
            </h3>
            <span className="mt-auto pt-6 font-serif text-sm tracking-[0.12em] text-muted transition-colors group-hover:text-fg">
              Leer edición
            </span>

            <div className="pointer-events-none absolute right-3 top-[34%] flex flex-col items-center gap-3">
              <span className="h-12 w-px bg-line" />
              <Sparkle className="h-3 w-3 text-red-text" delay={i * 0.7} />
            </div>
          </div>

          <div className="relative m-3 ml-0 overflow-hidden rounded-lg bg-gradient-to-br from-red/40 via-red/10 to-transparent">
            {doc.image ? (
              <Image
                src={doc.image}
                alt=""
                fill
                sizes="(min-width: 1280px) 20vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <FlameIcon className="h-16 w-16 text-red-text/40" />
              </div>
            )}
            <span className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-full border border-red bg-bg/80 text-red-text backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:bg-red group-hover:text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
