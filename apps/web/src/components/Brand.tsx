export function Bee({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="42"
      height="42"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <ellipse cx="24" cy="29" rx="7" ry="11" />
      <path d="M18 25h12M17 30h14M19 35h10M21 19l-3-5m9 5 3-5M24 40v4" />
      <path d="M18 28C3 29 4 10 13 14c5 2 7 10 7 10M30 28c15 1 14-18 5-14-5 2-7 10-7 10" />
      <circle cx="24" cy="16" r="3" />
    </svg>
  );
}
export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
