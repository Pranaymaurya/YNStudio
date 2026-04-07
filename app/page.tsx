import { Contact } from "@/app/components/contact";
import { CtaBanner } from "@/app/components/cta-banner";
import { Footer } from "@/app/components/footer";
import { Hero } from "@/app/components/hero";
import { Navbar } from "@/app/components/navbar";
import { Portfolio } from "@/app/components/portfolio";
import { Process } from "@/app/components/process";
import { Services } from "@/app/components/services";
import { Stats } from "@/app/components/stats";
import { Team } from "@/app/components/team";
import { Testimonials } from "@/app/components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex-1">
        <Hero />
        <Services />
        <Stats />
        <Portfolio />
        <Process />
        <Testimonials />
        <Team />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
