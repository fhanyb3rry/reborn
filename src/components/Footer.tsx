import Image from "next/image";
import { FlameIcon } from "./FlameIcon";

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-12 text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <Image
          src="/logo.jpeg"
          alt="REBORN"
          width={72}
          height={54}
          className="h-auto w-16 opacity-95"
        />
        <div className="flex items-center gap-3">
          <FlameIcon className="h-3.5 w-3.5 text-red" />
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-cream/80">
            Revista REBORN
          </span>
          <FlameIcon className="h-3.5 w-3.5 text-red" />
        </div>
        <a
          href="#top"
          className="font-sans text-xs font-medium uppercase tracking-widest text-cream/50 transition-colors hover:text-red"
        >
          Volver arriba
        </a>
      </div>
    </footer>
  );
}
