import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/Images/Fertility Clinic Innovators.png" alt="Fertility Clinic Innovators" className="h-12 w-auto" />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#success-map" className="text-foreground hover:text-primary transition-colors">Success Map</a>
          <a href="#podcast" className="text-foreground hover:text-primary transition-colors">Podcast</a>
          <a href="#experience" className="text-foreground hover:text-primary transition-colors">Experience</a>
        </nav>

        <div className="hidden md:block">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://calendly.com/kellyjgonda/30min', '_blank')}
          >
            Book Now
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#success-map" className="text-foreground hover:text-primary transition-colors">Success Map</a>
            <a href="#podcast" className="text-foreground hover:text-primary transition-colors">Podcast</a>
            <a href="#experience" className="text-foreground hover:text-primary transition-colors">Experience</a>
            <Button 
              variant="hero" 
              className="w-full"
              onClick={() => window.open('https://calendly.com/kellyjgonda/30min', '_blank')}
            >
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;