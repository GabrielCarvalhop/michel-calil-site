import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { awards } from "@/lib/data";

export function Awards() {
  const [headline, ...rest] = awards;

  return (
    <section className="relative py-16 border-t border-off-white/10">
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-mint mb-3.5">
            Reconhecimentos
          </p>
          <h2 className="font-heading font-medium text-off-white text-[22px] leading-snug max-w-[280px]">
            Consequência de uma trajetória consistente.
          </h2>
        </Reveal>

        <div className="md:col-span-7 md:col-start-6">
          <Reveal delay={0.08} className="flex items-baseline gap-6 pb-5 border-b border-off-white/10">
            <span className="font-heading font-semibold text-mint text-[22px]">
              {headline.year}
            </span>
            <span className="text-[16px] text-off-white">{headline.title}</span>
          </Reveal>

          <RevealGroup>
            {rest.map((a, i) => (
              <RevealItem
                key={`${a.year}-${i}`}
                className={`flex items-baseline gap-6 py-3.5 ${
                  i < rest.length - 1 ? "border-b border-off-white/[0.08]" : ""
                }`}
              >
                <span className="w-10 shrink-0 text-sm text-off-white/60">
                  {a.year}
                </span>
                <span className="text-sm text-off-white/75">{a.title}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
