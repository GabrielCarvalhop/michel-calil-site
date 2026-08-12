"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { career } from "@/lib/data";

export function Career() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const lastIndex = career.length - 1;

  return (
    <section
      id="trajetoria"
      className="relative py-32 md:py-48 border-t border-off-white/10 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(7,56,56,0.28) 100%)",
        }}
      />

      <Container className="relative">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.2em] text-mint mb-6">
            Trajetória
          </p>
          <h2 className="font-heading font-medium text-off-white text-3xl md:text-[44px] leading-tight tracking-tight max-w-[640px]">
            Da Odontologia à liderança acadêmica nacional.
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 flex flex-col gap-4 max-w-[680px]">
          {career.map((item, i) => {
            const isCurrent = i === lastIndex;
            const open = openIndex === i;
            const panelId = `career-panel-${i}`;

            return (
              <Reveal key={item.range} delay={i * 0.05}>
                <div
                  className={`rounded-2xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open
                      ? "border-mint/50 bg-mint/[0.06]"
                      : "border-mint/[0.18] bg-off-white/[0.02] hover:border-mint/35"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-7 md:py-6"
                  >
                    <span
                      className={`font-heading font-medium tracking-tight text-2xl md:text-[32px] ${
                        isCurrent ? "text-mint" : "text-off-white"
                      }`}
                    >
                      {item.range}
                    </span>
                    <span
                      className={`shrink-0 text-mint/70 transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 md:px-7 md:pb-7">
                          <p className="text-[15px] md:text-[16px] leading-snug text-off-white/90">
                            {item.role}
                          </p>
                          <p className="mt-2 text-[13px] uppercase tracking-[0.08em] text-muted">
                            {item.org}
                          </p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
