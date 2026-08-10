import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ClipReveal } from "@/components/ui/ClipReveal";
import { AnimatedLine } from "@/components/ui/AnimatedLine";
import {
  speakingHighlight,
  speakingOthers,
  speakingStats,
} from "@/lib/data";

export function Speaking() {
  return (
    <section id="palestras" className="relative py-28 md:py-40 border-t border-off-white/10">
      <Container>
        <Reveal>
          <SectionLabel>Palestras &amp; Experiências</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-heading font-medium text-off-white mt-5 text-3xl md:text-[44px] leading-tight tracking-tight max-w-[640px]">
            Conhecimento ganha valor quando é compartilhado.
          </h2>
        </Reveal>
      </Container>

      <ClipReveal delay={0.1} className="mt-14 md:mt-16">
        <div className="relative h-[70vh] min-h-[440px] w-full md:h-[85vh]">
          <Image
            src="/images/palestras-orlando.jpg"
            alt="Maxillofacial Anatomic Training — Orlando, USA"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-16 md:pb-14">
            <Container className="px-0! md:px-10!">
              <span className="font-heading text-4xl md:text-6xl text-off-white tracking-tight">
                {speakingHighlight.place}
              </span>
              <span className="ml-3 text-lg md:text-2xl text-mint font-heading">
                {speakingHighlight.country}
              </span>
              <p className="mt-4 max-w-[520px] text-[15px] md:text-[17px] text-off-white/90">
                {speakingHighlight.event}
              </p>
              <p className="mt-2 max-w-[520px] text-sm text-muted">
                {speakingHighlight.description}
              </p>
            </Container>
          </div>
        </div>
      </ClipReveal>

      <Container className="mt-12 md:mt-16">
        <Reveal className="flex flex-wrap gap-x-12 gap-y-3">
          {speakingOthers.map((o) => (
            <div key={o.event} className="text-sm">
              <span className="text-off-white">{o.place}</span>
              <span className="mx-2 text-muted">·</span>
              <span className="text-muted">{o.event}</span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-14 md:mt-16">
          <AnimatedLine />
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {speakingStats.map((s) => (
              <div key={s.label}>
                <div className="font-heading text-3xl md:text-4xl text-off-white tracking-tight">
                  {s.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.14em] text-muted max-w-[220px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
