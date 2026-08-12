import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { metrics } from "@/lib/data";

const cardBase =
  "rounded-2xl border border-off-white/[0.08] bg-off-white/[0.025] p-6 md:p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] hover:border-mint/25 hover:shadow-[0_0_28px_-14px_rgba(113,208,181,0.5)]";

export function Metrics() {
  const [primary, unidades, rematricula, captacao, nps] = metrics;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-off-white/10">
      <Container className="relative">
        <Reveal className="flex items-baseline justify-between">
          <p className="text-[11px] uppercase tracking-[0.2em] text-mint">
            Gestão em números
          </p>
          <p className="hidden text-sm text-muted md:block">
            Estratégia traduzida em resultados.
          </p>
        </Reveal>

        <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-center md:gap-12">
          {/* the dominant event of the section — bleeds past the
              left edge, no container, no card */}
          <Reveal delay={0.1} className="md:shrink-0 md:-ml-[2vw] lg:-ml-[4vw]">
            <div className="font-heading font-medium text-off-white tracking-tight leading-[0.78] text-[26vw] sm:text-[20vw] md:text-[clamp(120px,14vw,220px)]">
              <CountUpNumber value={primary.value} />
            </div>
            <div className="-mt-1 md:-mt-2 pl-1">
              <div className="text-sm md:text-[15px] uppercase tracking-[0.14em] text-off-white/85">
                {primary.label}
              </div>
              <div className="mt-1 text-sm text-muted">{primary.detail}</div>
            </div>
          </Reveal>

          {/* secondary indicators — compact, styled cards, filling
              whatever width remains next to the dominant number */}
          <div className="mt-10 md:mt-0 grid grid-cols-2 gap-4 md:flex-1 md:gap-6">
            <Reveal delay={0.18} className={cardBase}>
              <div className="font-heading font-medium text-off-white text-3xl md:text-5xl tracking-tight">
                <CountUpNumber value={unidades.value} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.12em] text-off-white/70">
                {unidades.label}
              </div>
              <div className="mt-1 text-xs text-muted">{unidades.detail}</div>
            </Reveal>

            <Reveal delay={0.24} className={cardBase}>
              <div className="font-heading font-medium text-off-white text-3xl md:text-5xl tracking-tight">
                <CountUpNumber value={rematricula.value} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.12em] text-off-white/70">
                {rematricula.label}
              </div>
              <div className="mt-1 text-xs text-muted">{rematricula.detail}</div>
            </Reveal>

            <Reveal delay={0.3} className={cardBase}>
              <div className="font-heading font-medium text-off-white text-3xl md:text-5xl tracking-tight">
                <CountUpNumber value={captacao.value} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.12em] text-off-white/70">
                {captacao.label}
              </div>
              <div className="mt-1 text-xs text-muted">{captacao.detail}</div>
            </Reveal>

            <Reveal
              delay={0.36}
              className={`${cardBase} border-mint/20 bg-mint/[0.04]`}
            >
              <div className="font-heading font-medium text-mint text-3xl md:text-5xl tracking-tight">
                <CountUpNumber value={nps.value} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.12em] text-off-white/70">
                {nps.label}
              </div>
              <div className="mt-1 text-xs text-muted">{nps.detail}</div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
