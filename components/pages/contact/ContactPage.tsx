import Navbar from "@/components/layout/Navbar";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import ContactHero from "./ContactHero";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
