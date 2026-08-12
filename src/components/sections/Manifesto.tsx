import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Highlighter } from "@/components/ui/Highlighter";

const themes = [
  "Qualidade acadêmica",
  "Eficiência",
  "Inovação",
  "Desenvolvimento humano",
];

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-32 md:py-44">
      <Container className="grid grid-cols-1 gap-12 md:grid-cols-12">
        {/* text — left-aligned, plain dark background, no photo
            competing behind it */}
        <div className="md:col-span-6">
          <Reveal y={0}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-mint mb-6">
              Visão
            </p>
            <h2 className="font-heading font-medium text-off-white text-4xl md:text-[52px] leading-[1.08] tracking-tight">
              Educação de{" "}
              <Highlighter
                action="highlight"
                color="rgba(113,208,181,0.32)"
                padding={4}
                isView
              >
                excelência
              </Highlighter>{" "}
              exige{" "}
              <Highlighter
                action="underline"
                color="#71d0b5"
                strokeWidth={2}
                isView
              >
                visão
              </Highlighter>{" "}
              além da sala de aula.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-off-white/90">
              A experiência clínica foi o ponto de partida. A docência
              ampliou a perspectiva. A gestão transformou essa trajetória em
              uma visão mais abrangente sobre educação, pessoas e
              instituições.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-muted">
              Ao longo dos anos, Michel passou pela prática da Cirurgia e
              Traumatologia Bucomaxilofacial, pela formação de novos
              profissionais, pela coordenação de cursos de graduação e
              pós-graduação e pela gestão nacional de operações acadêmicas
              em Odontologia.
            </p>
          </Reveal>

          {/* mobile — photo as a normal-flow card between the text and
              the theme list */}
          <Reveal
            delay={0.24}
            className="relative mt-8 h-[42vh] w-full overflow-hidden rounded-2xl border border-off-white/[0.08] md:hidden"
          >
            <Image
              src="/images/palestras-orlando-optimized.webp"
              alt=""
              fill
              unoptimized
              className="object-cover grayscale -scale-x-100"
              style={{ objectPosition: "50% 12%", filter: "brightness(0.75)" }}
            />
            <div className="absolute inset-0 bg-near-black/25" />
          </Reveal>

          <RevealGroup className="mt-12 flex flex-col gap-3">
            {themes.map((t, i) => (
              <RevealItem
                key={t}
                className="flex items-baseline gap-4 text-off-white/70"
              >
                <span className="font-heading text-[11px] text-mint/70">
                  0{i + 1}
                </span>
                <span className="text-[13px] uppercase tracking-[0.12em]">
                  {t}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* desktop — photo as its own card, not a full-bleed background */}
        <Reveal
          delay={0.15}
          className="relative hidden overflow-hidden rounded-2xl border border-off-white/[0.08] md:col-span-5 md:col-start-8 md:block"
        >
          <Image
            src="/images/palestras-orlando-optimized.webp"
            alt=""
            fill
            unoptimized
            className="object-cover grayscale -scale-x-100"
            style={{ objectPosition: "50% 12%", filter: "brightness(0.7)" }}
          />
          <div className="absolute inset-0 bg-near-black/20" />
        </Reveal>
      </Container>
    </section>
  );
}
