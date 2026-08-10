import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { career } from "@/lib/data";

export function Career() {
  return (
    <section id="trajetoria" className="relative py-28 md:py-40 border-t border-off-white/10">
      <Container>
        <Reveal>
          <SectionLabel>Trajetória</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-heading font-medium text-off-white mt-5 text-3xl md:text-[44px] leading-tight tracking-tight max-w-[640px]">
            Da Odontologia à liderança acadêmica nacional.
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 md:mt-20 grid grid-cols-1 divide-y divide-off-white/10 md:grid-cols-5 md:divide-y-0 md:divide-x">
          {career.map((item) => (
            <RevealItem key={item.range} className="group py-8 md:py-0 md:px-6 first:md:pl-0 last:md:pr-0">
              <div className="font-heading font-medium text-off-white/90 text-3xl md:text-[40px] leading-none tracking-tight transition-colors duration-300 group-hover:text-mint">
                {item.range}
              </div>
              <p className="mt-5 text-[15px] leading-snug text-off-white/90 max-w-[220px]">
                {item.role}
              </p>
              <p className="mt-2 text-[13px] uppercase tracking-[0.08em] text-muted">
                {item.org}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
