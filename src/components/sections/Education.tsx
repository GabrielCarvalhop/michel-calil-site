import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section className="relative py-24 md:py-32 border-t border-off-white/10">
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Reveal>
            <SectionLabel>Formação</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-heading font-medium text-off-white mt-5 text-2xl md:text-3xl leading-tight tracking-tight max-w-[320px]">
              Uma trajetória construída entre ciência, prática e gestão.
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="md:col-span-8 divide-y divide-off-white/10 border-t border-off-white/10">
          {education.map((e) => (
            <RevealItem
              key={e.degree}
              className="flex flex-col gap-1 py-5 md:flex-row md:items-baseline md:justify-between md:gap-6"
            >
              <span className="text-[15px] text-off-white">{e.degree}</span>
              <span className="text-[13px] uppercase tracking-[0.06em] text-muted md:text-right">
                {e.institution}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
