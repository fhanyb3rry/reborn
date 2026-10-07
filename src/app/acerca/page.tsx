import { authors, affiliation } from "@/content/authors";

export const metadata = { title: "Acerca de — REBORN" };

export default function Acerca() {
  return (
    <>
      <header>
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-muted">
          Revista REBORN
        </p>
        <h1 className="mt-3 font-display text-5xl font-black italic leading-tight tracking-tight sm:text-6xl">
          Acerca <span className="text-red-text">de</span>
        </h1>
        <div className="mt-4 h-[3px] w-14 bg-red" />
        <p className="mt-5 font-serif text-base tracking-[0.1em] text-muted">
          {affiliation}
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {authors.map((author) => (
          <div
            key={author.orcid}
            className="rounded-xl border border-line bg-surface p-6 transition-all hover:border-red/60 hover:shadow-[0_18px_40px_-22px_var(--red)]"
          >
            <p className="font-display text-xl font-bold leading-snug">{author.name}</p>
            <div className="my-4 h-px w-10 bg-red" />
            <a
              href={`https://orcid.org/${author.orcid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs tracking-wide text-muted transition-colors hover:text-red-text"
            >
              ORCID <span className="font-semibold text-red-text">{author.orcid}</span>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
