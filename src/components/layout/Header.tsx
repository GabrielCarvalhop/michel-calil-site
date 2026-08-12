"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, links } from "@/lib/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-near-black/80 backdrop-blur-sm border-b border-off-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className="flex items-center gap-2 text-off-white"
          aria-label="Michel Calil Abrão Neto — início"
        >
          <Image
            src="/images/brand/symbol-mint.png"
            alt=""
            width={32}
            height={32}
            className="h-7 w-7 object-contain"
          />
          <span className="font-heading text-sm tracking-[0.08em] hidden sm:inline">
            MICHEL CALIL
          </span>
        </a>

        <nav className="hidden items-center gap-5 md:flex xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[12px] uppercase tracking-[0.1em] text-off-white/80 transition-colors duration-300 hover:text-mint xl:text-[13px]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-[12px] uppercase tracking-[0.1em] text-muted transition-colors duration-300 hover:text-mint xl:text-[13px]"
          >
            LinkedIn <ArrowUpRight size={13} />
          </a>
          <a
            href={links.lattes}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-[12px] uppercase tracking-[0.1em] text-muted transition-colors duration-300 hover:text-mint xl:text-[13px]"
          >
            Lattes <ArrowUpRight size={13} />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden text-off-white"
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-near-black md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Image
            src="/images/brand/symbol-mint.png"
            alt=""
            width={32}
            height={32}
            className="h-7 w-7 object-contain"
          />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="text-off-white"
              >
                <X size={26} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-5 px-8 py-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                  className="font-heading text-3xl text-off-white"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-mint"
              >
                LinkedIn <ArrowUpRight size={16} />
              </a>
              <a
                href={links.lattes}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-mint"
              >
                Currículo Lattes <ArrowUpRight size={16} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
