import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section className="relative py-28 md:py-40 border-t border-off-white/10">
      <Container>
        <Reveal>
          <SectionLabel>Extensão &amp; Impacto</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-heading font-medium text-off-white mt-5 text-3xl md:text-[44px] leading-tight tracking-tight max-w-[640px]">
            A universidade também transforma além de seus próprios limites.
          </h2>
        </Reveal>
      </Container>

      <div className="mt-16 md:mt-20 flex flex-col">
        {projects.map((p, i) => {
          const alt = i % 2 === 1;
          return (
            <Reveal key={p.number} delay={0.1 * i}>
              <div
                className={`relative py-14 md:py-20 ${
                  alt ? "bg-transparent" : "bg-deep-teal/40"
                }`}
              >
                <Container className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center">
                  <div
                    className={`md:col-span-3 ${alt ? "md:order-2 md:text-right" : ""}`}
                  >
                    <span className="font-heading text-6xl md:text-8xl text-mint/25">
                      {p.number}
                    </span>
                  </div>
                  <div
                    className={`md:col-span-9 ${alt ? "md:order-1" : ""} ${
                      alt ? "md:pr-16" : "md:pl-16"
                    }`}
                  >
                    <h3 className="font-heading text-2xl md:text-3xl text-off-white tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-4 max-w-[560px] text-[15px] md:text-[16px] leading-relaxed text-muted">
                      {p.description}
                    </p>
                  </div>
                </Container>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
