import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section className="relative py-28 md:py-40 border-t border-off-white/10">
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-mint mb-5">
            Formação
          </p>
          <h2 className="font-heading font-medium text-off-white text-2xl md:text-[28px] leading-tight tracking-tight max-w-[300px]">
            Uma trajetória construída entre ciência, prática e gestão.
          </h2>
        </Reveal>

        <RevealGroup className="md:col-span-7 md:col-start-6 divide-y divide-off-white/[0.07]">
          {education.map((e) => (
            <RevealItem key={e.degree} className="group relative py-7 first:pt-0">
              <div className="flex items-start gap-5 pl-5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                {/* brand-derived tick, not a diploma icon */}
                <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rotate-45 border border-mint/40 transition-colors duration-300 group-hover:border-mint group-hover:bg-mint/20" />

                <div>
                  <p className="font-heading text-[17px] md:text-[19px] font-medium text-off-white/90 leading-snug tracking-tight transition-colors duration-300 group-hover:text-mint">
                    {e.degree}
                  </p>
                  <p className="mt-1.5 text-[13px] uppercase tracking-[0.1em] text-muted">
                    {e.institution}
                  </p>
                </div>
              </div>

              {/* lateral line, grows on hover instead of a static rule */}
              <span className="absolute left-0 top-0 h-full w-px bg-off-white/[0.06]">
                <span className="absolute inset-x-0 top-0 h-0 bg-mint/50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:h-full" />
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
