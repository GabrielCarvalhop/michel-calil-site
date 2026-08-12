import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section className="relative py-16 border-t border-off-white/10">
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-mint mb-3.5">
            Formação
          </p>
          <h2 className="font-heading font-medium text-off-white text-[22px] leading-snug max-w-[280px]">
            Uma trajetória construída entre ciência, prática e gestão.
          </h2>
        </Reveal>

        <RevealGroup className="md:col-span-7 md:col-start-6 border-t border-off-white/[0.08]">
          {education.map((e, i) => (
            <RevealItem
              key={e.degree}
              className={`flex flex-col items-start gap-1 py-4 md:flex-row md:items-center md:justify-between md:gap-5 ${
                i < education.length - 1 ? "border-b border-off-white/[0.07]" : ""
              }`}
            >
              <span className="text-[15px] text-off-white/90">{e.degree}</span>
              <span className="max-w-full text-left text-xs uppercase tracking-[0.06em] text-muted break-words md:shrink-0 md:text-right md:whitespace-nowrap">
                {e.institution}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
