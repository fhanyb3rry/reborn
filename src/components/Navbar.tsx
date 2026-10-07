import Image from "next/image";
import Link from "next/link";

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
      </div>
    </header>
  );
}
