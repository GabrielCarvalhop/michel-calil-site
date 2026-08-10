import { Container } from "@/components/ui/Container";
import { BrandMark } from "@/components/ui/BrandMark";
import { links } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-off-white/10 py-10">
      <Container className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
        <p className="font-heading text-sm tracking-[0.08em] text-off-white">
          MICHEL CALIL ABRÃO NETO
        </p>

        <nav className="flex gap-8 text-xs uppercase tracking-[0.1em] text-muted">
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

        <div className="flex items-center gap-4">
          <p className="text-xs text-muted">© {year} Michel Calil Abrão Neto</p>
          <BrandMark className="h-5 w-6 text-mint/60" />
        </div>
      </Container>
    </footer>
  );
}
