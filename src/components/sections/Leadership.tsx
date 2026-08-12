import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { pillars } from "@/lib/data";

export function Leadership() {
  return (
    <section id="gestao" className="relative py-20 border-t border-off-white/10">
      <Container>
        <Reveal className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-mint mb-4">
            Liderança &amp; Gestão
          </p>
          <h2 className="font-heading font-medium text-off-white text-[28px] md:text-[32px] leading-tight tracking-tight max-w-[520px]">
            Instituições fortes são construídas por pessoas, estratégia e
            propósito.
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {pillars.map((p) => (
            <RevealItem
              key={p.number}
              className="group rounded-2xl border border-off-white/[0.08] bg-off-white/[0.025] p-7 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] hover:border-mint/25 hover:shadow-[0_0_28px_-14px_rgba(113,208,181,0.5)]"
            >
              <span className="font-heading text-xs text-mint transition-colors duration-300 group-hover:text-mint">
                {p.number}
              </span>
              <h3 className="font-heading font-medium text-off-white text-[17px] mt-2.5 mb-2">
                {p.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted">
                {p.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
