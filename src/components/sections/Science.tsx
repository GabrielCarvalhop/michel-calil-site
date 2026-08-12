import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { scienceStats, featuredPublication, links } from "@/lib/data";

export function Science() {
  return (
    <section id="ciencia" className="relative py-20 border-t border-off-white/10">
      <Container>
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.2em] text-mint mb-4">
            Ciência &amp; Conhecimento
          </p>
          <h2 className="font-heading font-medium text-off-white text-[28px] md:text-[32px] leading-tight tracking-tight max-w-[560px] mb-8">
            Conhecimento que se constrói, se compartilha e deixa legado.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {scienceStats.map((s, i) => (
            <div
              key={s.label}
              className="group rounded-2xl border border-off-white/[0.08] bg-off-white/[0.025] px-6 py-5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] hover:border-mint/25 hover:shadow-[0_0_28px_-14px_rgba(113,208,181,0.5)]"
            >
              <div
                className={`font-heading font-semibold text-[28px] ${
                  i === scienceStats.length - 1 ? "text-mint" : "text-off-white"
                }`}
              >
                <CountUpNumber value={s.value} />
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.1em] text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.14} className="border-l-2 border-mint/50 pl-6">
          <div className="flex items-baseline gap-4 text-xs uppercase tracking-[0.1em] text-mint">
            <span>{featuredPublication.year}</span>
            <span className="text-muted">{featuredPublication.journal}</span>
          </div>
          <a
            href={featuredPublication.url}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block font-heading font-medium text-off-white text-xl md:text-[22px] leading-snug max-w-[620px] transition-colors duration-300 hover:text-mint"
          >
            {featuredPublication.title}
          </a>
          <a
            href={links.lattes}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block border-b border-off-white/30 pb-0.5 text-[13px] uppercase tracking-[0.08em] text-muted transition-colors duration-300 hover:border-mint hover:text-mint"
          >
            Ver produção acadêmica completa →
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
