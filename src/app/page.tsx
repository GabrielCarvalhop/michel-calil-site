import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Metrics } from "@/components/sections/Metrics";
import { Career } from "@/components/sections/Career";
import { Leadership } from "@/components/sections/Leadership";
import { Science } from "@/components/sections/Science";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Awards } from "@/components/sections/Awards";
import { Closing } from "@/components/sections/Closing";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        {/* the spine — one continuous structural line running the length
            of the page, derived from the brand's cut angle. sections
            attach to it, cross it, or deliberately break from it. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-6 hidden w-px bg-gradient-to-b from-transparent via-mint/[0.14] to-transparent md:left-10 md:block"
        />
        <Hero />
        <Manifesto />
        <Metrics />
        <Career />
        <Leadership />
        <Science />
        <Education />
        <Projects />
        <Awards />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
