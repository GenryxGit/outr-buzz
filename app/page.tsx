import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/sections/HomeHero";
import ClientLogos from "@/components/sections/ClientLogos";
import Projects from "@/components/sections/Projects";
import ServicesGrid from "@/components/sections/ServicesGrid";
import BentoGrid from "@/components/sections/BentoGrid";
import Stats from "@/components/sections/Stats";
import AboutTestimonials from "@/components/sections/AboutTestimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <ClientLogos />
        <Projects />
        <ServicesGrid />
        <BentoGrid />
        <Stats />

        <AboutTestimonials />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
