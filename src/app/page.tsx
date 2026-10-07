import Image from "next/image";
import { DocumentsSection } from "@/components/DocumentsSection";
import { Sparkle } from "@/components/Sparkle";

export default function Home() {
  return (
    <>
      <header className="relative flex flex-wrap items-end justify-between gap-6">
        <div className="hero-flower pointer-events-none absolute -right-6 -top-10 bottom-[-1.5rem] -z-10 w-[70%] lg:-right-10">
          <div className="hero-flower-fade absolute inset-0">
            <Image
              src="/hero-flower.webp"
              alt=""
              fill
              sizes="60vw"
              priority
              className="object-cover object-right"
            />
          </div>
        </div>
        <div className="fade-up">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-muted">
            Edición digital
          </p>
          <h1 className="mt-3 font-display text-5xl font-black italic leading-tight tracking-tight sm:text-6xl">
            En este <span className="text-red-text">número</span>
          </h1>
          <div className="mt-4 h-[3px] w-14 bg-red" />
          <p className="mt-5 font-serif text-base tracking-[0.1em] text-muted">
            Descubre nuestras ediciones digitales.
          </p>
        </div>

        <div
          className="fade-up relative flex items-center gap-3 rounded-full border border-red bg-surface/60 px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.25em] shadow-[0_0_30px_-10px_var(--red)]"
          style={{ animationDelay: "0.2s" }}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-red-text" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 6.5C10 5 7 4.5 3.5 5v12.5c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5ZM12 6.5V19" />
          </svg>
          Lectura en PDF
          <Sparkle motion="float" className="absolute -right-4 -top-5 h-5 w-5 text-red-text" delay={0.4} />
        </div>

        <div className="pointer-events-none absolute -top-2 right-0 hidden xl:block">
          <Sparkle motion="float" className="h-7 w-7 text-red-text" />
        </div>
        <div className="pointer-events-none absolute -bottom-6 right-2 hidden xl:block">
          <Sparkle className="h-3.5 w-3.5 text-red-text/80" delay={1.1} />
        </div>
      </header>

      <div className="mt-10">
        <DocumentsSection />
      </div>

      <section
        className="fade-up relative mt-8 overflow-hidden rounded-xl border border-line bg-gradient-to-r from-[#1a0204] to-[#3a0509] px-8 py-12 text-[#f4ece4] sm:px-12"
        style={{ animationDelay: "0.6s" }}
      >
        <Image
          src="/banner.webp"
          alt=""
          fill
          sizes="100vw"
          className="banner-drift object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0204] via-[#1a0204]/70 to-transparent" />
        <div className="relative max-w-xl">
          <div className="mb-4 h-px w-16 bg-white/70" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.4em]">
            Más que una revista,
          </p>
          <p className="mt-2 font-display text-4xl italic">una perspectiva.</p>
          <div className="mt-4 h-px w-16 bg-white/70" />
        </div>

        <div className="absolute right-8 top-6 hidden text-right sm:block">
          <Sparkle motion="float" className="ml-auto h-6 w-6 text-white" />
          <div className="mb-3 ml-auto mt-4 h-px w-24 bg-white/60" />
          <p className="font-sans text-[10px] font-semibold uppercase leading-relaxed tracking-[0.35em]">
            Ideas que
            <br />
            inspiran
            <br />
            cambios.
          </p>
          <div className="ml-auto mt-3 h-px w-20 bg-red" />
        </div>
      </section>
    </>
  );
}
