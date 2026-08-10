"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BrandMark } from "@/components/ui/BrandMark";
import { links } from "@/lib/data";

const easing = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90svh] md:min-h-[95svh] items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      {/* background brand fragment, off-center, bleeding out of viewport */}
      <BrandMark
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-16 h-[420px] w-[480px] text-mint/[0.08] md:h-[560px] md:w-[640px]"
      />

      <Container className="relative grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
        {/* Text — always first in DOM/mobile order */}
        <div className="order-1 md:col-span-7 md:pr-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing }}
            className="block text-xs md:text-[13px] uppercase tracking-[0.22em] text-mint font-medium"
          >
            Executivo acadêmico · Gestão estratégica · Ensino superior
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: easing }}
            className="font-heading font-medium text-off-white mt-5 leading-[1.05] tracking-tight text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px]"
          >
            Estratégia, liderança e inovação para transformar a educação.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: easing }}
            className="mt-7 max-w-[560px] text-[17px] md:text-[19px] leading-relaxed text-muted"
          >
            Michel Calil Abrão Neto construiu sua trajetória entre a
            Odontologia, a docência e a gestão educacional, com experiência
            na liderança de operações acadêmicas, desenvolvimento
            institucional, gestão de pessoas e projetos de inovação no
            ensino superior.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: easing }}
            className="mt-10 flex flex-wrap items-center gap-8"
          >
            <a
              href="#trajetoria"
              className="group flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-off-white border-b border-off-white/30 pb-1 hover:border-mint hover:text-mint transition-colors duration-300"
            >
              Conheça minha trajetória
              <ArrowDown
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href={links.lattes}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-muted hover:text-mint transition-colors duration-300"
            >
              Currículo Lattes
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>

        {/* Photo — bleeds to the right edge, angular mask, never a card */}
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
          transition={{ duration: 0.95, delay: 0.2, ease: easing }}
          className="order-2 relative md:col-span-5 md:absolute md:right-0 md:top-0 md:h-full md:w-[44%]"
        >
          <div
            className="relative h-[52vh] w-full md:h-full"
            style={{
              clipPath:
                "polygon(14% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <Image
              src="/images/hero-portrait.jpg"
              alt="Michel Calil Abrão Neto"
              fill
              priority
              sizes="(min-width: 768px) 44vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-near-black/70 md:to-near-black/50" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
