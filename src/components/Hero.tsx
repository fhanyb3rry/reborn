import Image from "next/image";
import { FlameIcon } from "./FlameIcon";
import { article } from "@/content/article";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-hairline bg-paper px-6 pb-20 pt-16 sm:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--reborn-ink) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <Image
          src="/logo.jpeg"
          alt="REBORN"
          width={220}
          height={165}
          className="mb-8 h-auto w-40 sm:w-48"
          priority
        />

        <span className="mb-6 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.35em] text-red">
          <FlameIcon className="h-3.5 w-3.5" />
          Revista REBORN
          <FlameIcon className="h-3.5 w-3.5" />
        </span>

        <h1 className="font-display text-4xl font-black leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
          {article.titleEs}
        </h1>

        <p className="mt-5 max-w-2xl font-serif text-lg italic leading-relaxed text-ink-soft sm:text-xl">
          {article.titleEn}
        </p>

        <div className="mt-10 flex items-center gap-4">
          <span className="h-px w-16 bg-hairline sm:w-24" />
          <FlameIcon className="h-6 w-6 text-red" />
          <span className="h-px w-16 bg-hairline sm:w-24" />
        </div>
      </div>
    </section>
  );
}
