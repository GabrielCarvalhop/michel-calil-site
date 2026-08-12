"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { scienceStats, featuredPublication, links } from "@/lib/data";

// visual weight proportional to the quantity itself — 8 articles reads
// wider than 2 patents, not an equal 4-up grid.
const flexWeights = [8, 3, 6, 2];

const titleLines = [
  "Conhecimento que se constrói,",
  "se compartilha e deixa legado.",
];

function PatentsSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  return (
    <Reveal
      delay={0.22}
      className="md:col-span-4 relative border-t border-mint/30 pt-8"
    >
      <div
        ref={ref}
        onMouseMove={(e) => {
          const rect = ref.current?.getBoundingClientRect();
          if (!rect) return;
          setPos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
          });
        }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className="group relative overflow-hidden border border-off-white/[0.08] px-2 py-2 transition-colors duration-300 hover:border-mint/25"
      >
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: active ? 1 : 0,
            background: `radial-gradient(280px circle at ${pos.x}% ${pos.y}%, rgba(113,208,181,0.08), transparent 70%)`,
          }}
        />
        <div className="relative px-4 py-4">
          <p className="text-xs uppercase tracking-[0.16em] text-mint">
            Pesquisa &amp; Inovação
          </p>
          <p className="mt-6 font-heading font-medium text-7xl text-off-white leading-none transition-transform duration-300 ease-out group-hover:translate-x-1">
            <CountUpNumber value="02" />
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.1em] text-off-white/80">
            Patentes
          </p>
          <p className="mt-5 max-w-[240px] text-xs leading-relaxed text-muted">
            Pesquisa aplicada · Educação · Tecnologia · Odontologia
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export function Science() {
  return (
    <section id="ciencia" className="relative py-32 md:py-48 border-t border-off-white/10 overflow-hidden">
      {/* technical grid pattern, barely there, faded via radial mask */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-off-white) 1px, transparent 1px), linear-gradient(90deg, var(--color-off-white) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(70% 60% at 30% 20%, black, transparent)",
          WebkitMaskImage: "radial-gradient(70% 60% at 30% 20%, black, transparent)",
        }}
      />
      {/* abstract angular trace, derived from the brand's cut, linking
          the stats → publication → patent moments down the section */}
      <svg
        aria-hidden
        viewBox="0 0 100 600"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]"
      >
        <path
          d="M8 40 L34 90 L34 260 L70 320 L70 520 L92 560"
          fill="none"
          stroke="var(--color-mint)"
          strokeWidth="0.4"
        />
      </svg>

      <Container className="relative">
        <p className="text-[11px] uppercase tracking-[0.2em] text-mint mb-6">
          <Reveal as="span">Ciência &amp; Conhecimento</Reveal>
        </p>
        <h2 className="font-heading font-medium text-off-white text-3xl md:text-[44px] leading-tight tracking-tight max-w-[640px]">
          {titleLines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.7,
                  delay: 0.08 * i,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h2>

        <RevealGroup className="mt-16 md:mt-24 flex flex-col gap-10 md:flex-row md:items-end md:gap-0 md:border-t md:border-off-white/[0.08] md:pt-10">
          {scienceStats.map((s, i) => (
            <RevealItem
              key={s.label}
              className="md:border-l md:border-off-white/[0.08] md:pl-6"
              style={{ flexGrow: flexWeights[i], flexBasis: 0 }}
            >
              <div className="font-heading font-medium text-off-white text-8xl md:text-9xl tracking-tight leading-none">
                <CountUpNumber value={s.value} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.16em] text-off-white/70">
                {s.label}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-20 md:mt-28 grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* featured publication — editorial feature, not a card */}
          <Reveal delay={0.1} className="md:col-span-8 relative pl-8 md:pl-12">
            <span
              aria-hidden
              className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-mint/60 via-mint/20 to-transparent"
            />
            <div className="flex items-baseline gap-4 text-xs uppercase tracking-[0.16em] text-mint">
              <span>{featuredPublication.year}</span>
              <span className="h-px w-4 bg-mint/40" />
              <span className="text-off-white/50">{featuredPublication.journal}</span>
            </div>
            <a
              href={featuredPublication.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 block font-heading font-medium text-2xl md:text-[36px] text-off-white leading-[1.18] max-w-[640px] tracking-tight transition-colors duration-300 hover:text-mint"
            >
              {featuredPublication.title}
            </a>
            <a
              href={links.lattes}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-off-white/80 transition-colors duration-300 hover:text-mint"
            >
              Ver produção acadêmica completa
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>

          <PatentsSpotlight />
        </div>
      </Container>
    </section>
  );
}
