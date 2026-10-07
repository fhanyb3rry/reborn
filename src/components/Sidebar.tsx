"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkle } from "./Sparkle";

const links = [
  {
    href: "/",
    label: "Inicio",
    icon: <path d="M3 11.5 12 4l9 7.5M5.5 10v10h13V10M10 20v-6h4v6" />,
  },
  {
    href: "/acerca",
    label: "Acerca de",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v6M12 7.5v.5" />
      </>
    ),
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-line bg-sidebar lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:flex lg:w-64 lg:flex-col lg:border-b-0 lg:border-r">
      <div className="flex items-center justify-between px-5 py-4 lg:flex-col lg:px-6 lg:pb-2 lg:pt-8">
        <Link href="/" className="flex flex-col items-center">
          <Image
            src="/logo-dark.png"
            alt="REBORN"
            width={200}
            height={150}
            className="logo-for-dark h-auto w-16 sm:w-24 lg:w-44"
            priority
            unoptimized
          />
          <Image
            src="/logo-light.png"
            alt="REBORN"
            width={200}
            height={150}
            className="logo-for-light h-auto w-16 sm:w-24 lg:w-44"
            priority
            unoptimized
          />
          <span className="mt-1 hidden items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-red-text lg:flex">
            <Sparkle className="h-2 w-2" />
            La revista
            <Sparkle className="h-2 w-2" delay={0.8} />
          </span>
        </Link>

        <nav className="flex gap-1 sm:gap-2 lg:mt-10 lg:w-full lg:flex-col">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 font-sans text-sm sm:gap-3 sm:px-4 sm:py-2.5 font-medium transition-colors lg:py-3.5 ${
                  active
                    ? "bg-red text-white shadow-[0_0_24px_-6px_var(--red)]"
                    : "text-fg hover:bg-line/60"
                }`}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {link.icon}
                </svg>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto hidden px-8 pb-10 lg:block">
        <Sparkle motion="float" className="h-5 w-5 text-red-text" />
        <div className="mb-4 mt-3 h-px w-8 bg-red" />
        <p className="font-display text-xl italic leading-snug text-muted">
          Lecturas que inspiran cambios.
        </p>
      </div>
    </aside>
  );
}
