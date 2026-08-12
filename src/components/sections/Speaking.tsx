import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ClipReveal } from "@/components/ui/ClipReveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { speakingHighlight, speakingOthers, speakingStats } from "@/lib/data";

export function Speaking() {
  return (
    <section id="palestras" className="relative border-t border-off-white/10">
      {/* the second heroic moment — true full-bleed, no container, the
          photograph fills the frame the way the Hero does */}
      <ClipReveal delay={0.05}>
        <div
          className="relative h-[100svh] min-h-[560px] w-full"
          style={{ clipPath: "polygon(0 4%, 100% 0, 100% 100%, 0 100%)" }}
        >
          <Image
            src="/images/palestras-orlando.jpg"
            alt="Maxillofacial Anatomic Training — Orlando, USA"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/15 to-near-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-near-black/55 via-transparent to-transparent" />

          <div className="absolute inset-x-0 top-0 pt-28 md:pt-32">
            <Container>
              <span className="text-xs uppercase tracking-[0.2em] text-mint">
                Palestras &amp; Experiências
              </span>
              <p className="mt-4 max-w-[440px] text-[15px] text-off-white/70">
                Conhecimento ganha valor quando é compartilhado.
              </p>
            </Container>
          </div>

          <div className="absolute inset-x-0 bottom-0">
            <Container>
              <span className="text-xs uppercase tracking-[0.2em] text-mint">
                Destaque internacional
              </span>
              <div className="mt-4 flex flex-wrap items-baseline gap-x-4">
                <span className="font-heading font-medium text-off-white tracking-tight text-[16vw] leading-[0.85] sm:text-7xl md:text-[clamp(90px,12vw,170px)]">
                  {speakingHighlight.place}
                </span>
                <span className="text-xl md:text-3xl text-mint font-heading">
                  {speakingHighlight.country}
                </span>
              </div>
              <p className="mt-5 max-w-[520px] text-[16px] md:text-[19px] text-off-white/95">
                {speakingHighlight.event}
              </p>
              <p className="mt-2 max-w-[520px] text-sm text-off-white/60">
                {speakingHighlight.description}
              </p>

              {/* reach — a caption strip on the photograph itself, like
                  a photo credit line, not a separate stats section */}
              <div className="mt-10 md:mt-14 grid grid-cols-3 border-t border-off-white/[0.16] py-5">
                {speakingStats.map((s, i) => (
                  <div key={s.label} className={i > 0 ? "border-l border-off-white/[0.16] pl-4 md:pl-6" : ""}>
                    <span
                      className={`font-heading font-medium tracking-tight text-2xl md:text-4xl ${
                        i === 0 ? "text-mint" : "text-off-white"
                      }`}
                    >
                      {s.value}
                    </span>
                    <span className="mt-1 block text-[10px] md:text-xs uppercase tracking-[0.1em] text-off-white/60 max-w-[160px]">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </div>
      </ClipReveal>

      {/* other engagements — quiet, secondary, never competing with the photograph above */}
      <Container className="py-20 md:py-28">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.16em] text-muted">
            Outros destaques
          </span>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {speakingOthers.map((o) => (
              <div
                key={o.event}
                className="group relative aspect-[4/3] overflow-hidden border border-off-white/[0.08] transition-colors duration-300 hover:border-mint/30"
              >
                <PhotoPlaceholder className="h-full w-full" label={`${o.place} — substituir`} />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="text-[17px] text-off-white">{o.place}</div>
                  <div className="mt-1 text-sm text-muted">{o.event}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
