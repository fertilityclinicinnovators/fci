import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Settings, Check } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Education & Leadership Development",
      description: "Empowering new employees and leadership teams with specialized training in reproductive endocrinology and fertility clinic management.",
      benefits: [
        "Customized training programs",
        "Leadership development",
        "Specialized REI education",
        "Team building workshops"
      ]
    },
    {
      icon: Users,
      title: "Teaming & Collaboration",
      description: "Fostering strong interdisciplinary teamwork to ensure seamless communication, shared responsibility, and adaptability in patient care.",
      benefits: [
        "Interdisciplinary collaboration",
        "Communication strategies",
        "Team dynamics optimization",
        "Conflict resolution"
      ]
    },
    {
      icon: Settings,
      title: "Operational Excellence",
      description: "Improving clinic workflows, efficiency, and resource allocation to enhance patient experience and profitability.",
      benefits: [
        "Process optimization",
        "Resource management",
        "Efficiency improvements",
        "Patient flow analysis"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Premium Consulting Services</h2>
          <p className="text-xl text-muted-foreground">
            Tailored solutions designed to elevate your fertility clinic's performance and patient care
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group p-8 hover:shadow-xl transition-all duration-300 border-2 border-primary/10 bg-background/95 backdrop-blur-sm hover:border-primary/30 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary relative z-10">
                  <IconComponent className="h-6 w-6" />
                </div>
                
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0 space-y-4">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mt-6">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-foreground/90">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;