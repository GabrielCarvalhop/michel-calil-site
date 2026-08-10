"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { pillars } from "@/lib/data";

export function Leadership() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gestao" className="relative py-28 md:py-40 border-t border-off-white/10">
      <Container className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Reveal>
            <SectionLabel>Liderança &amp; Gestão</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-heading font-medium text-off-white mt-5 text-3xl md:text-[40px] leading-tight tracking-tight max-w-[420px]">
              Instituições fortes são construídas por pessoas, estratégia e
              propósito.
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="md:col-span-7 divide-y divide-off-white/10 border-y border-off-white/10">
          {pillars.map((p, i) => {
            const open = openIndex === i;
            return (
              <RevealItem key={p.number} className="group">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-baseline gap-6 py-6 text-left md:cursor-default"
                >
                  <span className="font-heading text-sm text-mint">
                    {p.number}
                  </span>
                  <span className="font-heading text-xl md:text-2xl text-off-white transition-colors duration-300 group-hover:text-mint">
                    {p.title}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden md:hidden"
                    >
                      <p className="pb-6 pl-11 pr-4 text-sm leading-relaxed text-muted max-w-[420px]">
                        {p.description}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <div className="hidden md:block overflow-hidden pl-11">
                  <p className="max-h-0 pb-0 opacity-0 group-hover:max-h-24 group-hover:pb-6 group-hover:opacity-100 text-sm leading-relaxed text-muted max-w-[420px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {p.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
