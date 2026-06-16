import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
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

export const metadata: Metadata = {
  title: "Outr Buzz — Design, Branding & Web Development Studio | Lahore & Dubai",
  description:
    "Outr Buzz is a design and development studio based in Lahore and Dubai. We build brand identities, UI/UX experiences, websites, and social media strategies that demand attention and deliver results.",
  keywords: [
    "web design agency Lahore", "branding agency Dubai", "UI/UX design Pakistan",
    "digital marketing Lahore", "brand identity design studio", "ecommerce development Lahore",
    "social media marketing Pakistan", "Next.js web development", "design studio Dubai",
    "logo design Pakistan", "mobile app development Lahore",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: "Outr Buzz — Design, Branding & Web Development Studio | Lahore & Dubai",
    description:
      "Brand identities, UI/UX design, websites, and digital marketing for brands that demand attention. Based in Lahore and Dubai.",
  },
};

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
