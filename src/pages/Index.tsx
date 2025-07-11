import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SuccessMapSection from "@/components/SuccessMapSection";
import PodcastSection from "@/components/PodcastSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SuccessMapSection />
      <PodcastSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
};

export default Index;
