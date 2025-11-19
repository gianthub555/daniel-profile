import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Skills from "@/components/Skills";
import SkillsSlider from "@/components/SkillsSlider";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Philosophy />
      <Skills />
      <SkillsSlider />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
