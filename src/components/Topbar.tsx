"use client";

import { usePathname, useRouter } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { useSearch } from "./SearchProvider";

export function Topbar() {
  const { query, setQuery } = useSearch();
  const pathname = usePathname();
  const router = useRouter();

  function onChange(value: string) {
    setQuery(value);
    // Los resultados se muestran en Inicio
    if (value && pathname !== "/") router.push("/");
  }

  return (
    <div className="sticky top-0 z-30 flex h-16 items-center justify-end gap-4 border-b border-line bg-bg/80 px-6 backdrop-blur lg:px-10">
      <label className="flex h-10 w-full max-w-sm items-center gap-3 rounded-full border border-line bg-surface px-4 transition-colors focus-within:border-red">
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-muted" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar..."
          aria-label="Buscar en las ediciones"
          className="w-full bg-transparent font-sans text-sm text-fg outline-none placeholder:text-muted"
        />
      </label>
      <span className="h-6 w-px bg-line" />
      <ThemeToggle />
    </div>
  );
}
