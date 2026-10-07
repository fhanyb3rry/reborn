type Props = {
  className?: string;
  /** Segundos de retraso para que las estrellas no parpadeen todas a la vez */
  delay?: number;
  /** "twinkle" parpadea y gira suave; "float" además sube y baja */
  motion?: "twinkle" | "float";
};

export function Sparkle({ className = "", delay = 0, motion = "twinkle" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`${motion === "float" ? "sparkle-float" : "sparkle-twinkle"} ${className}`}
      style={{ animationDelay: `${delay}s` }}
      fill="currentColor"
    >
      <path d="M12 0C12.7 7.3 16.7 11.3 24 12 16.7 12.7 12.7 16.7 12 24 11.3 16.7 7.3 12.7 0 12 7.3 11.3 11.3 7.3 12 0Z" />
    </svg>
  );
}
