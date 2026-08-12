import Image from "next/image";

/**
 * Elegant placeholder for real photography. Swap `src` for the real
 * asset in /public/images once the file is provided — everything else
 * (mask, overlay) can stay as-is. Purely decorative: no visible copy is
 * rendered to visitors, only a data attribute for grepping later.
 */
export function PhotoPlaceholder({
  className = "",
  label = "pending photography",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      aria-hidden
      data-placeholder={label}
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
      <Image
        src="/images/brand/symbol-mint.png"
        alt=""
        width={64}
        height={58}
        className="h-14 w-16 object-contain opacity-[0.18]"
      />
    </div>
  );
}
