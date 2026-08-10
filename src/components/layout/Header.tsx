"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/ui/BrandMark";
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
          <BrandMark className="h-7 w-8 text-mint" />
          <span className="font-heading text-sm tracking-[0.08em] hidden sm:inline">
            MICHEL CALIL
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] uppercase tracking-[0.1em] text-off-white/80 hover:text-mint transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-[13px] uppercase tracking-[0.1em] text-muted hover:text-mint transition-colors duration-300"
          >
            LinkedIn <ArrowUpRight size={13} />
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-near-black md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <BrandMark className="h-7 w-8 text-mint" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="text-off-white"
              >
                <X size={26} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-6 px-8">
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
