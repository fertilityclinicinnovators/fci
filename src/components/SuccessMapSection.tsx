import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, TrendingUp } from "lucide-react";

const SuccessMapSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Assess & Align",
      description: "Comprehensive evaluation of your current operations and strategic alignment with your clinic's goals and vision."
    },
    {
      icon: Users,
      title: "Collaborate & Create",
      description: "Work together to develop customized solutions and innovative strategies tailored to your clinic's unique needs."
    },
    {
      icon: TrendingUp,
      title: "Transform and Track Progress",
      description: "Implement changes systematically while monitoring progress and adjusting strategies for optimal results."
    }
  ];

  return (
    <section id="success-map" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">The A.C.T. Success Map</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            To build a streamlined and profitable fertility clinic, our approach follows three essential steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative group hover:shadow-medium transition-all duration-300 border-0 bg-background">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-healthcare-gradient rounded-full flex items-center justify-center shadow-soft">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                <CardHeader className="pt-12 text-center">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-primary/30"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessMapSection;