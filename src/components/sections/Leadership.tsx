"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { pillars } from "@/lib/data";

export function Leadership() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gestao" className="relative py-32 md:py-48 border-t border-off-white/10 overflow-hidden">
      <Image
        src="/images/leadership-bg.png"
        alt=""
        aria-hidden
        fill
        className="object-cover opacity-25"
      />

      <Container className="relative grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.2em] text-mint mb-6">
              Liderança &amp; Gestão
            </p>
            <h2 className="font-heading font-medium text-off-white text-3xl md:text-[42px] leading-tight tracking-tight max-w-[420px]">
              Instituições fortes são construídas por pessoas, estratégia e
              propósito.
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="md:col-span-7 md:col-start-6 divide-y divide-off-white/[0.08]">
          {pillars.map((p, i) => {
            const open = openIndex === i;
            const panelId = `pillar-panel-${p.number}`;
            return (
              <RevealItem key={p.number} className="group">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-baseline gap-6 py-7 text-left"
                >
                  <span
                    className={`font-heading text-sm transition-colors duration-300 ${
                      open ? "text-mint" : "text-mint/80 group-hover:text-mint"
                    }`}
                  >
                    {p.number}
                  </span>
                  <span
                    className={`font-heading font-medium text-xl md:text-[26px] tracking-tight transition-all duration-300 ${
                      open
                        ? "text-off-white translate-x-1"
                        : "text-off-white/90 group-hover:text-off-white group-hover:translate-x-1"
                    }`}
                  >
                    {p.title}
                  </span>
                  <span
                    className={`ml-auto hidden h-px bg-off-white/20 transition-all duration-300 md:block ${
                      open ? "w-14 bg-mint" : "w-8 group-hover:w-14 group-hover:bg-mint"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pl-11 pr-4 text-sm leading-relaxed text-muted max-w-[420px]">
                        {p.description}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
