import { Button } from "@/components/ui/button";
import heroDoctors from "@/assets/hero-doctors.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Supporting fertility clinic leaders in building 
            <span className="text-healthcare-warm"> purposeful growth strategies</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Transform your fertility clinic with building interprofessional teams, education and strategies for patient retention
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              variant="warm" 
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => window.open('https://calendly.com/kellyjgonda/30min', '_blank')}
            >
              Book a Free 30 Minute Strategy Call
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 text-white border-white/30 hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={heroDoctors} 
              alt="Professional medical team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-healthcare-warm rounded-full blur-xl opacity-60"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;