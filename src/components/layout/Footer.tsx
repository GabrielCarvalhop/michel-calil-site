import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { links } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-off-white/10 py-14">
      {/* terminus of the page's spine */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-6 top-0 hidden h-2 w-2 -translate-y-1/2 rotate-45 bg-mint/50 md:left-10 md:block"
      />

      <Container className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/brand/symbol-mint.png"
            alt=""
            width={24}
            height={22}
            className="h-5 w-5 object-contain opacity-80"
          />
          <p className="font-heading text-sm tracking-[0.08em] text-off-white">
            MICHEL CALIL ABRÃO NETO
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs uppercase tracking-[0.1em] text-muted">
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-mint transition-colors duration-300">
            LinkedIn
          </a>
          <a href={links.lattes} target="_blank" rel="noreferrer" className="hover:text-mint transition-colors duration-300">
            Lattes
          </a>
          <a href={links.email} className="hover:text-mint transition-colors duration-300">
            E-mail
          </a>
        </nav>

        <p className="text-xs text-muted">© {year} Michel Calil Abrão Neto</p>
      </Container>
    </footer>
  );
}
