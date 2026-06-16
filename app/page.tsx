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
  title: "Outr Buzz | Design & Branding Studio — Lahore & Dubai",
  description:
    "Design & dev studio in Lahore and Dubai. We build brand identities, UI/UX, websites, and social media strategies that demand attention and deliver results.",
  keywords: [
    "web design agency Lahore", "branding agency Dubai", "UI/UX design Pakistan",
    "digital marketing Lahore", "brand identity design studio", "ecommerce development Lahore",
    "social media marketing Pakistan", "Next.js web development", "design studio Dubai",
    "logo design Pakistan", "mobile app development Lahore",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    siteName: "Outr Buzz",
    title: "Outr Buzz — Design. Build. Buzz.",
    description:
      "Brand identities, UI/UX, websites & digital marketing for brands that demand attention. Studio in Lahore & Dubai.",
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
