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
import { Speaking } from "@/components/sections/Speaking";
import { Awards } from "@/components/sections/Awards";
import { Closing } from "@/components/sections/Closing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Metrics />
        <Career />
        <Leadership />
        <Science />
        <Education />
        <Projects />
        <Speaking />
        <Awards />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
