"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { links } from "@/lib/data";

const easing = [0.16, 1, 0.3, 1] as const;

const ctaBase =
  "rounded-2xl px-6 py-4 text-sm uppercase tracking-[0.1em] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]";
const ctaPrimary = `${ctaBase} border border-mint/40 bg-mint/[0.08] text-off-white hover:bg-mint/[0.14] hover:border-mint/70 hover:shadow-[0_0_24px_-4px_rgba(113,208,181,0.4)]`;
const ctaSecondary = `${ctaBase} border border-off-white/[0.14] bg-near-black/40 text-muted backdrop-blur-sm hover:border-mint/30 hover:text-mint`;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden pt-28"
    >
      {/* photo — desktop only: capped width, fused into the background
          via a soft edge mask instead of a hard gradient box. On
          mobile the same photo reappears below as a normal-flow card. */}
      <div className="absolute inset-y-0 right-0 hidden w-[68%] max-w-[1200px] md:block">
        <div
          className="relative h-full w-full"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 22%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 22%)",
          }}
        >
          <Image
            src="/images/hero-portrait.jpg"
            alt="Michel Calil Abrão Neto"
            fill
            priority
            sizes="1200px"
            className="object-cover object-[62%_18%] scale-105"
          />
          <div className="absolute inset-0 bg-near-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/15 to-transparent" />
        </div>
      </div>

      <Container className="relative w-full pb-16 md:pb-24">
        <div className="max-w-[560px]">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing }}
            className="block text-xs md:text-[13px] uppercase tracking-[0.22em] text-mint font-medium"
          >
            Executivo acadêmico · Gestão estratégica · Ensino superior
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: easing }}
            className="font-heading font-medium text-off-white mt-6 leading-[1.02] tracking-tight text-[11vw] sm:text-[42px] md:text-[52px] lg:text-[60px]"
          >
            Estratégia, liderança e inovação para transformar a educação.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: easing }}
            className="mt-8 max-w-[520px] text-[17px] md:text-[19px] leading-relaxed text-off-white/80"
          >
            Michel Calil Abrão Neto construiu sua trajetória entre a
            Odontologia, a docência e a gestão educacional, com experiência
            na liderança de operações acadêmicas, desenvolvimento
            institucional, gestão de pessoas e projetos de inovação no
            ensino superior.
          </motion.p>

          {/* mobile — photo as a normal-flow card right after the copy,
              instead of the absolute right-side panel used on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: easing }}
            className="relative mt-8 h-[46vh] w-full overflow-hidden rounded-2xl border border-off-white/[0.08] md:hidden"
          >
            <Image
              src="/images/hero-portrait.jpg"
              alt="Michel Calil Abrão Neto"
              fill
              sizes="100vw"
              className="object-cover object-[62%_15%]"
            />
            <div className="absolute inset-0 bg-near-black/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-near-black/60 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: easing }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a href="#trajetoria" className={ctaPrimary}>
              Conheça minha trajetória
            </a>
            <a
              href={links.lattes}
              target="_blank"
              rel="noreferrer"
              className={ctaSecondary}
            >
              Currículo Lattes
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
