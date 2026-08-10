import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { AnimatedLine } from "@/components/ui/AnimatedLine";
import { scienceStats, featuredPublication } from "@/lib/data";

export function Science() {
  return (
    <section id="ciencia" className="relative py-28 md:py-40 border-t border-off-white/10">
      <Container>
        <Reveal>
          <SectionLabel>Ciência &amp; Conhecimento</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-heading font-medium text-off-white mt-5 text-3xl md:text-[44px] leading-tight tracking-tight max-w-[640px]">
            Conhecimento que se constrói, se compartilha e deixa legado.
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 md:mt-20 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-x-10">
          {scienceStats.map((s) => (
            <RevealItem key={s.label}>
              <div className="font-heading font-medium text-off-white text-5xl md:text-6xl tracking-tight">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-off-white/70">
                {s.label}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-16 md:mt-20">
          <AnimatedLine />
        </Reveal>

        <Reveal delay={0.16} className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.16em] text-mint">
              Publicação em destaque · {featuredPublication.year}
            </p>
            <p className="mt-4 font-heading text-xl md:text-2xl text-off-white leading-snug max-w-[640px]">
              {featuredPublication.title}
            </p>
            <p className="mt-2 text-sm text-muted">
              {featuredPublication.journal}
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-off-white border-b border-off-white/30 pb-1 hover:border-mint hover:text-mint transition-colors duration-300"
            >
              Ver produção acadêmica completa
              <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-16 md:mt-20 border-t border-off-white/10 pt-10">
          <p className="text-xs uppercase tracking-[0.16em] text-mint">
            Pesquisa &amp; Inovação
          </p>
          <p className="mt-4 font-heading text-2xl md:text-3xl text-off-white">
            02 patentes
          </p>
          <p className="mt-3 text-sm text-muted">
            Pesquisa aplicada · Educação · Tecnologia · Odontologia
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
