export function PullQuote({ children }: { children: string }) {
  return (
    <blockquote className="my-10 border-y border-hairline py-8">
      <p className="font-display text-2xl font-bold italic leading-snug text-ink sm:text-3xl">
        <span className="text-red">&ldquo;</span>
        {children}
        <span className="text-red">&rdquo;</span>
      </p>
    </blockquote>
  );
}
