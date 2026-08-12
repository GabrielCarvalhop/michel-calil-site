import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

const [bancoDeDentes, informaOdonto] = projects;

export function Projects() {
  return (
    <section className="relative py-32 md:py-48 border-t border-off-white/10">
      <Container>
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.2em] text-mint mb-6">
            Extensão &amp; Impacto
          </p>
          <h2 className="font-heading font-medium text-off-white text-3xl md:text-[44px] leading-tight tracking-tight max-w-[640px]">
            A universidade também transforma além de seus próprios limites.
          </h2>
        </Reveal>
      </Container>

      {/* Case 01 — archival / ledger treatment: a specimen entry, not a
          hero panel with a giant numeral */}
      <Reveal delay={0.14} className="relative mt-20 md:mt-28 bg-deep-teal/[0.22] py-16 md:py-20">
        <Container className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-mint">
              <span className="h-px w-6 bg-mint/60" />
              Projeto de extensão
            </div>
          </div>
          <div className="md:col-span-8">
            <h3 className="font-heading font-medium text-off-white text-4xl md:text-5xl tracking-tight leading-[1.05]">
              {bancoDeDentes.title}
            </h3>
            <p className="mt-6 max-w-[480px] text-[15px] md:text-[16px] leading-relaxed text-off-white/80">
              {bancoDeDentes.description}
            </p>
          </div>
        </Container>
      </Reveal>

      {/* Case 02 — campaign-poster treatment: full-width kinetic
          headline, caption runs underneath in a narrow column */}
      <Reveal delay={0.2}>
        <Container className="mt-24 md:mt-32">
          <div className="text-xs uppercase tracking-[0.14em] text-mint mb-6">
            Educação &amp; saúde pública
          </div>
          <h3 className="font-heading font-medium text-off-white tracking-tight leading-[0.95] text-[13vw] sm:text-6xl md:text-[96px]">
            {informaOdonto.title}
          </h3>
          <p className="mt-8 max-w-[480px] text-[15px] md:text-[16px] leading-relaxed text-muted md:ml-auto">
            {informaOdonto.description}
          </p>
        </Container>
      </Reveal>
    </section>
  );
}
