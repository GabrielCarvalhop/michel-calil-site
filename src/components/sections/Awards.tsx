import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { awards } from "@/lib/data";

export function Awards() {
  return (
    <section className="relative py-28 md:py-40 border-t border-off-white/10">
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Reveal>
            <SectionLabel>Reconhecimentos</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-heading font-medium text-off-white mt-5 text-2xl md:text-3xl leading-tight tracking-tight max-w-[320px]">
              Reconhecimento como consequência de uma trajetória consistente.
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="md:col-span-8 divide-y divide-off-white/10 border-t border-off-white/10">
          {awards.map((a, i) => (
            <RevealItem
              key={`${a.year}-${i}`}
              className="flex flex-col gap-1 py-5 md:flex-row md:items-baseline md:gap-8"
            >
              <span className="font-heading text-mint text-lg w-16 shrink-0">
                {a.year}
              </span>
              <span className="text-[15px] text-off-white/90">{a.title}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
