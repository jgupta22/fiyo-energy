import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Mandate from "@/components/site/Mandate";
import Role from "@/components/site/Role";
import Offerings from "@/components/site/Offerings";
import WhyFiyo from "@/components/site/WhyFiyo";
import About from "@/components/site/About";
import ProblemApproach from "@/components/site/ProblemApproach";
import Industries from "@/components/site/Industries";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Mandate />
        <Role />
        <Offerings />
        <WhyFiyo />
        <About />
        <ProblemApproach />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
