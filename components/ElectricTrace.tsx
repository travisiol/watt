export function ElectricTrace({
  d,
  viewBox,
  duration = 3.5,
  delay = 0,
  className = "",
}: {
  d: string;
  viewBox: string;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <svg viewBox={viewBox} fill="none" className={className} aria-hidden="true">
      <path d={d} stroke="rgba(255,217,0,0.18)" strokeWidth="1" />
      <circle
        r="2.5"
        fill="var(--watt-yellow)"
        className="pulse-dot"
        style={{
          offsetPath: `path('${d}')`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    </svg>
  );
}
