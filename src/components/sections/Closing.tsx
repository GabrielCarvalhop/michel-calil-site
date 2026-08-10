import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { links } from "@/lib/data";

export function Closing() {
  return (
    <section id="contato" className="relative py-32 md:py-48 border-t border-off-white/10">
      <Container className="text-center">
        <Reveal>
          <h2 className="font-heading font-medium text-off-white mx-auto max-w-[780px] text-3xl md:text-[48px] leading-tight tracking-tight">
            O próximo avanço da educação começa com as decisões que tomamos
            hoje.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-[560px] text-[16px] md:text-[18px] leading-relaxed text-muted">
            Liderar uma instituição de ensino é equilibrar pessoas,
            propósito, excelência acadêmica e resultado. É criar as
            condições para que estudantes, professores e organizações
            possam evoluir juntos.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-14">
          <p className="font-heading text-xl text-off-white">
            Michel Calil Abrão Neto
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-mint">
            Executivo acadêmico · Gestão estratégica no ensino superior
          </p>
        </Reveal>

        <Reveal delay={0.28} className="mt-10 flex justify-center gap-10">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-off-white border-b border-off-white/30 pb-1 hover:border-mint hover:text-mint transition-colors duration-300"
          >
            LinkedIn <ArrowUpRight size={15} />
          </a>
          <a
            href={links.lattes}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-off-white border-b border-off-white/30 pb-1 hover:border-mint hover:text-mint transition-colors duration-300"
          >
            Currículo Lattes <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
