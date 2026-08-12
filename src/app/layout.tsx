import type { Metadata } from "next";
import { Sora, Instrument_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://michelcalilabraoneto.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Michel Calil Abrão Neto | Executivo Acadêmico e Gestão no Ensino Superior",
  description:
    "Michel Calil Abrão Neto — executivo acadêmico e gestor estratégico no ensino superior, com trajetória em liderança institucional, docência, ciência e inovação educacional.",
  openGraph: {
    title:
      "Michel Calil Abrão Neto | Executivo Acadêmico e Gestão no Ensino Superior",
    description:
      "Estratégia, liderança e inovação para transformar a educação.",
    url: siteUrl,
    siteName: "Michel Calil Abrão Neto",
    locale: "pt_BR",
    type: "profile",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-near-black text-off-white">
        {children}
      </body>
    </html>
  );
}
