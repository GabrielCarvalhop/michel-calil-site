export function SectionLabel({ children }: { children: string }) {
  return (
    <span className="block text-xs md:text-[13px] uppercase tracking-[0.22em] text-mint font-medium">
      {children}
    </span>
  );
}
