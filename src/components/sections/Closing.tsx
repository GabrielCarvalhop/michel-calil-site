import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { links } from "@/lib/data";

export function Closing() {
  return (
    <section
      id="contato"
      className="relative py-40 md:py-56 border-t border-off-white/10 overflow-hidden"
    >
      <Container className="relative text-center">
        <div className="relative mx-auto max-w-[880px]">
          {/* the mark cuts across the statement itself — a real optical
              interaction, not a faded watermark sitting behind it */}
          <Image
            src="/images/brand/symbol-mint.png"
            alt=""
            aria-hidden
            width={520}
            height={470}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[460px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-40 mix-blend-overlay md:h-[520px] md:w-[560px]"
          />

          <Reveal>
            <h2 className="relative font-heading font-medium text-off-white text-5xl md:text-[80px] leading-[0.98] tracking-tight">
              O próximo avanço da educação começa com as decisões que
              tomamos hoje.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-10 max-w-[560px] text-[16px] md:text-[18px] leading-relaxed text-muted">
            Liderar uma instituição de ensino é equilibrar pessoas,
            propósito, excelência acadêmica e resultado. É criar as
            condições para que estudantes, professores e organizações
            possam evoluir juntos.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-16">
          <p className="font-heading font-medium text-xl text-off-white">
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
