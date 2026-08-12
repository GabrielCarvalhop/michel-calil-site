import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { metrics } from "@/lib/data";

export function Metrics() {
  return (
    <section className="relative py-16 border-t border-off-white/10">
      <Container>
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.2em] text-mint mb-7">
            Gestão em números
          </p>
        </Reveal>

        <Reveal
          delay={0.08}
          className="grid grid-cols-2 border-y border-off-white/10 md:grid-cols-5"
        >
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="border-off-white/[0.08] px-5 py-6 [&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-r-0 md:border-r"
            >
              <div
                className={`font-heading font-semibold text-[34px] leading-none ${
                  i === 0 ? "text-mint" : "text-off-white"
                }`}
              >
                <CountUpNumber value={m.value} />
              </div>
              <div className="mt-1.5 text-xs text-off-white/75">{m.label}</div>
              <div className="mt-0.5 text-[11px] text-muted">{m.detail}</div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
