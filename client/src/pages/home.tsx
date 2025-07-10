import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Projects from "@/components/sections/projects";
import Equipment from "@/components/sections/equipment";
import Team from "@/components/sections/team";
import Contact from "@/components/sections/contact";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import SeoHead from "@/components/ui/seo-head";

export default function Home() {
  return (
    <>
      <SeoHead />
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Equipment />
        <Team />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
