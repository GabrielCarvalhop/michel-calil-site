import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { awards } from "@/lib/data";

export function Awards() {
  const [headline, ...rest] = awards;

  return (
    <section className="relative py-28 md:py-40 border-t border-off-white/10">
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-mint mb-5">
            Reconhecimentos
          </p>
          <h2 className="font-heading font-medium text-off-white text-2xl md:text-[28px] leading-tight tracking-tight max-w-[300px]">
            Reconhecimento como consequência de uma trajetória consistente.
          </h2>
        </Reveal>

        <div className="md:col-span-8">
          {/* the headline award — set apart, not just first-in-a-list */}
          <Reveal delay={0.08} className="border-b border-off-white/[0.1] pb-8">
            <span className="font-heading font-medium text-mint text-3xl md:text-4xl tabular-nums">
              {headline.year}
            </span>
            <p className="mt-3 font-heading text-xl md:text-2xl text-off-white leading-snug max-w-[520px]">
              {headline.title}
            </p>
          </Reveal>

          <RevealGroup className="divide-y divide-off-white/[0.08]">
            {rest.map((a, i) => (
              <RevealItem
                key={`${a.year}-${i}`}
                className="group flex flex-col gap-1.5 py-5 md:flex-row md:items-baseline md:gap-10"
              >
                <span className="font-heading text-off-white/60 text-base w-16 shrink-0 tabular-nums">
                  {a.year}
                </span>
                <span className="text-[15px] text-off-white/75 leading-snug transition-colors duration-300 group-hover:text-off-white">
                  {a.title}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
