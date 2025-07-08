import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const credentials = [
    "Family Nurse Practitioner",
    "Certified Fertility Nurse",
    "Doctorate of Pharmacy",
    "Licensed Pharmacist",
    "Master's in Business Administration",
    "AI in Healthcare and startup strategy - Stanford"
  ];

  const experience = [
    "20+ years in the Infertility Industry",
    "10+ years in Healthcare Provider Education & Development",
    "Expertise in Fertility Clinics & Biotech Startups",
    "Certified in Regulatory Affairs & Pharmacovigilance",
    "Certified in Innovative & Humanistic Leadership"
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Credentials & Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Extensive expertise combining clinical practice, business acumen, and innovative leadership
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-healthcare-gradient rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Credentials</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-primary font-bold">✅</span>
                    <span className="text-foreground">{credential}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {experience.map((exp, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-accent font-bold">🔹</span>
                    <span className="text-foreground">{exp}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-healthcare-gradient rounded-2xl p-12 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Let's explore initiatives that enhance teamwork and contribute to lasting nurse retention within your organization.
          </h3>
          <Button 
            variant="warm" 
            size="lg"
            className="text-lg px-8 py-6"
            onClick={() => window.open('https://calendly.com/kellyjgonda/30min', '_blank')}
          >
            Book a Free 30 Minute Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;