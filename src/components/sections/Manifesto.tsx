import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const themes = [
  "Qualidade acadêmica",
  "Eficiência",
  "Inovação",
  "Desenvolvimento humano",
];

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-36 md:py-52 overflow-hidden">
      {/* the photograph — desktop only, full-bleed with local vignettes.
          On mobile the same photo reappears below as a normal-flow
          card instead, same treatment as the Hero. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
        <Image
          src="/images/palestras-orlando.jpg"
          alt=""
          fill
          className="object-cover grayscale -scale-x-100"
          style={{ objectPosition: "50% 12%", filter: "brightness(0.62)" }}
        />
        {/* general cinematic overlay — even, restrained, keeps the
            whole surface dark without flattening the scene */}
        <div className="absolute inset-0 bg-near-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-near-black/55 via-transparent to-near-black/55" />

        {/* local vignette behind the left title — fades out toward
            the center, no edge, no box */}
        <div
          className="absolute inset-y-0 left-0 w-[62%]"
          style={{
            background:
              "linear-gradient(to right, rgba(6,10,11,0.82) 0%, rgba(6,10,11,0.55) 45%, transparent 100%)",
          }}
        />
        {/* local vignette behind the right column — mirrored, fades
            toward the center */}
        <div
          className="absolute inset-y-0 right-0 w-[52%]"
          style={{
            background:
              "linear-gradient(to left, rgba(6,10,11,0.75) 0%, rgba(6,10,11,0.5) 40%, transparent 100%)",
          }}
        />
      </div>

      <Container className="relative grid grid-cols-1 gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-mint mb-6">
            Visão
          </p>
          <h2 className="font-heading font-medium text-off-white text-4xl md:text-[60px] leading-[1.05] tracking-tight">
            Educação de excelência exige visão além da sala de aula.
          </h2>
        </Reveal>

        {/* the right column begins lower — a deliberate diagonal
            reading path instead of a matched two-column grid */}
        <div className="md:col-span-5 md:col-start-8 md:pt-28">
          <Reveal delay={0.1}>
            <p
              className="text-[18px] md:text-[20px] leading-relaxed text-off-white"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.65)" }}
            >
              A experiência clínica foi o ponto de partida. A docência
              ampliou a perspectiva. A gestão transformou essa trajetória em
              uma visão mais abrangente sobre educação, pessoas e
              instituições.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p
              className="mt-6 text-[18px] md:text-[20px] leading-relaxed text-off-white/95"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.65)" }}
            >
              Ao longo dos anos, Michel passou pela prática da Cirurgia e
              Traumatologia Bucomaxilofacial, pela formação de novos
              profissionais, pela coordenação de cursos de graduação e
              pós-graduação e pela gestão nacional de operações acadêmicas
              em Odontologia.
            </p>
          </Reveal>

          {/* mobile — photo as a normal-flow card, same treatment as
              the Hero's mobile card */}
          <Reveal
            delay={0.24}
            className="relative mt-8 h-[42vh] w-full overflow-hidden rounded-2xl border border-off-white/[0.08] md:hidden"
          >
            <Image
              src="/images/palestras-orlando.jpg"
              alt=""
              fill
              className="object-cover grayscale -scale-x-100"
              style={{ objectPosition: "50% 12%", filter: "brightness(0.75)" }}
            />
            <div className="absolute inset-0 bg-near-black/25" />
          </Reveal>

          <RevealGroup className="mt-12 flex flex-col gap-3">
            {themes.map((t, i) => (
              <RevealItem
                key={t}
                className="flex items-baseline gap-4 text-off-white/90"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
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
      </Container>
    </section>
  );
}
