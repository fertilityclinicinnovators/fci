import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Briefcase, Check, Diamond } from "lucide-react";

const ExperienceSection = () => {
  const credentials = [
    "Doctor of Pharmacy (PharmD)",
    "Family Nurse Practitioner (FNP)",
    "Certified Fertility Nurse (RN, CFN)",
    "Licensed Pharmacist",
    "Master's in Business Administration (MBA)",
    "AI in Healthcare & Startup Strategy - Stanford University"
  ];

  const experience = [
    "20+ years transforming fertility clinic operations",
    "10+ years in healthcare provider education & development",
    "Expertise in fertility clinics & biotech startup strategy",
    "Certified in regulatory affairs & pharmacovigilance",
    "Certified in innovative & humanistic leadership methodologies"
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Credentials & Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Extensive expertise combining clinical practice, business acumen, and innovative leadership
          </p>
        </div>

        <div className="relative bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 lg:p-16 mb-16 overflow-hidden">
          <div className="relative z-10">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's explore initiatives that enhance teamwork and contribute to lasting nurse retention within your organization.
              </h3>
              <Button 
                variant="warm" 
                size="lg"
                className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                onClick={() => window.open('https://calendly.com/kellyjgonda/30min', '_blank')}
              >
                Book a Free 30 Minute Strategy Call
              </Button>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 h-full w-auto max-w-[50%]">
            <img 
              src="/Images/fertility clinic Innovators Kelly Gonda.png" 
              alt="Kelly Gonda - Fertility Innovator"
              className="h-full w-auto object-cover object-bottom"
              style={{
                clipPath: 'polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)',
              }}
            />
          </div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border border-border/50 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-20 h-20 bg-healthcare-gradient rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Award className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Credentials
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <ul className="space-y-4">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground">{credential}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-border/50 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Briefcase className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <ul className="space-y-4">
                {experience.map((exp, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <Diamond className="h-4 w-4 text-primary mt-1" />
                    </div>
                    <span className="text-foreground">{exp}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>


      </div>
    </section>
  );
};

export default ExperienceSection;