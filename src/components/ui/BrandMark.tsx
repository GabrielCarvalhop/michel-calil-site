/**
 * Placeholder angular monogram, built to match the geometry of the
 * approved identity (thin strokes, ~14deg cuts). Swap the <path> data
 * below with the real exported logo SVG when available.
 */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 4 L20 20 L20 44 L14 52 M14 52 L14 30 L6 20 L6 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M58 4 L44 20 L44 44 L50 52 M50 52 L50 30 L58 20 L58 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M20 20 L32 34 L44 20"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M32 34 L32 52"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
