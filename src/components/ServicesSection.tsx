import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Settings } from "lucide-react";
import educationService from "@/assets/education-service.jpg";
import collaborationService from "@/assets/collaboration-service.jpg";
import optimizationService from "@/assets/optimization-service.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Education & Leadership Development",
      description: "Empowering new employees and leadership teams with specialized training in reproductive endocrinology and fertility clinic management.",
      image: educationService
    },
    {
      icon: Users,
      title: "Teaming & Collaboration",
      description: "Fostering strong interdisciplinary teamwork to ensure seamless communication, shared responsibility, and adaptability in patient care.",
      image: collaborationService
    },
    {
      icon: Settings,
      title: "Operational Optimization",
      description: "Improving clinic workflows, efficiency, and resource allocation to enhance patient experience and profitability.",
      image: optimizationService
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Consulting Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions tailored to transform your fertility clinic operations and enhance patient outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-healthcare-gradient/80 flex items-center justify-center">
                    <IconComponent className="h-12 w-12 text-white" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
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