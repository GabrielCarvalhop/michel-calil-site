import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { links } from "@/lib/data";

export function Closing() {
  return (
    <section id="contato" className="relative isolate overflow-hidden py-20 border-t border-off-white/10">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="relative h-[300px] w-[300px] opacity-[0.065] md:h-[440px] md:w-[440px]">
          <Image src="/images/brand/symbol-mint.png" alt="" fill sizes="(min-width: 768px) 440px, 300px" className="object-contain" />
        </div>
      </div>
      <Container className="relative z-10 mx-auto max-w-[820px] text-center">
        <Reveal>
          <h2 className="font-heading font-medium text-off-white text-3xl md:text-[40px] leading-[1.15] tracking-tight">
            O próximo avanço da educação começa com as decisões que tomamos
            hoje.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-[520px] text-[15px] leading-relaxed text-muted">
            Liderar uma instituição de ensino é equilibrar pessoas,
            propósito, excelência acadêmica e resultado.
          </p>
        </Reveal>

        <Reveal delay={0.14} className="mt-9">
          <p className="font-heading font-medium text-off-white text-[17px]">
            Michel Calil Abrão Neto
          </p>
          <p className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-mint">
            Executivo acadêmico · Gestão estratégica no ensino superior
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-7 flex justify-center gap-8">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border-b border-off-white/30 pb-1 text-[13px] uppercase tracking-[0.08em] text-off-white transition-colors duration-300 hover:border-mint hover:text-mint"
          >
            LinkedIn
          </a>
          <a
            href={links.lattes}
            target="_blank"
            rel="noreferrer"
            className="border-b border-off-white/30 pb-1 text-[13px] uppercase tracking-[0.08em] text-off-white transition-colors duration-300 hover:border-mint hover:text-mint"
          >
            Currículo Lattes
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
