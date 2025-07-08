import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import aboutProfessional from "@/assets/about-professional.jpg";

const AboutSection = () => {
  const expertisePoints = [
    "Decades of hands-on clinical experience",
    "Business expertise in fertility clinic management",
    "Innovative leadership strategies"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Expert Consulting for Fertility Clinics
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We specialize in helping fertility clinics thrive in a competitive and 
                ever-evolving healthcare landscape. Whether you're launching a new clinic or seeking to 
                streamline operations and maximize growth, we bring a unique combination of:
              </p>
            </div>

            <div className="space-y-4">
              {expertisePoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              We believe in collaborative, patient-focused approaches that drive efficiency, improve 
              patient care, and position your clinic for long-term success.
            </p>

            <Card className="bg-healthcare-gradient border-0 text-white">
              <CardContent className="p-8">
                <blockquote className="text-lg font-medium italic leading-relaxed">
                  "If you could get all the people in your organization rowing in the same direction, 
                  you could dominate any industry, in any market, against any competition, at any time."
                </blockquote>
                <cite className="block mt-4 text-healthcare-warm font-semibold">
                  Patrick Lencioni - The 5 Dysfunctions of a Team
                </cite>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutProfessional} 
                alt="Healthcare professional" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;