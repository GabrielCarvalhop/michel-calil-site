import { BrandMark } from "./BrandMark";

/**
 * Elegant placeholder for real photography. Swap for <Image> pointing
 * at the actual asset in /public/images once files are provided.
 */
export function PhotoPlaceholder({
  className = "",
  label = "Foto — substituir",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-teal via-deep-teal to-near-black ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, currentColor 0, currentColor 1px, transparent 1px, transparent 64px)",
          color: "var(--color-mint)",
        }}
      />
      <BrandMark className="w-16 h-14 text-mint/25" />
      <span className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.18em] text-muted/70">
        {label}
      </span>
    </div>
  );
}
