export function LightningMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M13.2 2 4.5 13.6h5.1L9.8 22l9.7-12.6h-5.4L13.2 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WattWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-black tracking-tight select-none ${className}`}
      style={{ fontStretch: "condensed" }}
    >
      WATT
    </span>
  );
}
