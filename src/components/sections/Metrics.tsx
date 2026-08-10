import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Metric } from "@/components/ui/Metric";
import { AnimatedLine } from "@/components/ui/AnimatedLine";
import { metrics } from "@/lib/data";

export function Metrics() {
  const [primary, ...rest] = metrics;

  return (
    <section className="relative py-28 md:py-40 border-t border-off-white/10">
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <SectionLabel>Gestão em números</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-heading font-medium text-off-white mt-5 text-3xl md:text-[44px] leading-tight tracking-tight max-w-[560px]">
                Estratégia traduzida em resultados.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Metric
              value={primary.value}
              label={primary.label}
              detail={primary.detail}
              valueClassName="text-7xl md:text-8xl"
            />
          </div>

          <div className="md:col-span-7">
            <AnimatedLine className="mb-10 hidden md:block" />
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:gap-y-12">
              {rest.map((m) => (
                <Metric
                  key={m.label}
                  value={m.value}
                  label={m.label}
                  detail={m.detail}
                  valueClassName="text-4xl md:text-5xl"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
