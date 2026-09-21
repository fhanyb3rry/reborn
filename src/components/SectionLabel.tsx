import { FlameIcon } from "./FlameIcon";

export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <FlameIcon className="h-4 w-4 text-red" />
      <h2 className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-red">
        {label}
      </h2>
      <span className="h-px flex-1 bg-hairline" />
    </div>
  );
}
