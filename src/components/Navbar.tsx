import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#resumen", label: "Resumen" },
  { href: "#articulo", label: "Artículo" },
  { href: "#autores", label: "Autores" },
  { href: "#referencias", label: "Referencias" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline/80 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#top" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="REBORN"
            width={160}
            height={120}
            className="h-9 w-auto object-contain mix-blend-multiply"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-red"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
