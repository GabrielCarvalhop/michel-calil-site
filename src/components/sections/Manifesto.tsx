import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedLine } from "@/components/ui/AnimatedLine";

const themes = ["Qualidade acadêmica", "Eficiência", "Inovação", "Desenvolvimento humano"];

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-32 md:py-48">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal>
            <SectionLabel>Visão</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-heading font-medium text-off-white mt-5 text-3xl md:text-[44px] leading-tight tracking-tight">
              Educação de excelência exige visão além da sala de aula.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-muted">
              A experiência clínica foi o ponto de partida. A docência
              ampliou a perspectiva. A gestão transformou essa trajetória em
              uma visão mais abrangente sobre educação, pessoas e
              instituições.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-muted">
              Ao longo dos anos, Michel passou pela prática da Cirurgia e
              Traumatologia Bucomaxilofacial, pela formação de novos
              profissionais, pela coordenação de cursos de graduação e
              pós-graduação e pela gestão nacional de operações acadêmicas
              em Odontologia.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mt-16 md:mt-20">
          <AnimatedLine className="max-w-[720px] mx-auto" />
          <div className="mx-auto mt-8 flex max-w-[720px] flex-wrap justify-center gap-x-10 gap-y-3">
            {themes.map((t) => (
              <span
                key={t}
                className="text-xs uppercase tracking-[0.16em] text-off-white/70"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
