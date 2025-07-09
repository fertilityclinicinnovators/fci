const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/Images/Fertility Clinic Innovators.png" 
                alt="Fertility Clinic Innovators" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/80">
              Supporting fertility clinic leaders in building purposeful growth strategies
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-background/80 hover:text-background transition-colors">About Us</a>
              <a href="#services" className="text-background/80 hover:text-background transition-colors">Services</a>
              <a href="#success-map" className="text-background/80 hover:text-background transition-colors">Success Map</a>
              <a href="#podcast" className="text-background/80 hover:text-background transition-colors">Podcast</a>
              <a href="#experience" className="text-background/80 hover:text-background transition-colors">Experience</a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get Started</h4>
            <p className="text-background/80">
              Ready to transform your fertility clinic? Book your free consultation today.
            </p>
            <button 
              onClick={() => window.open('https://calendly.com/kellyjgonda/30min', '_blank')}
              className="text-healthcare-warm hover:text-healthcare-warm/80 font-semibold transition-colors"
            >
              Schedule Free Consultation →
            </button>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2025 Fertility Clinic Innovators. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;