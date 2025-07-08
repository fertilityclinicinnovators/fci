import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, ExternalLink } from "lucide-react";

const PodcastSection = () => {
  return (
    <section id="podcast" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Featured Podcast</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Listen to Dr. Kelly Gonda discuss the critical role of pharmacists in IVF care and fertility treatments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-healthcare-gradient text-white shadow-medium">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Headphones className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold mb-4">
                Fertility, Pharmacy, and the Future: A Pharmacist's Role in IVF Care
              </CardTitle>
              <p className="text-white/90 text-lg">
                with Dr. Kelly Gonda | MaternalRx
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white/80 mb-8 text-lg leading-relaxed">
                Discover how pharmacists are revolutionizing fertility care through specialized medication management, 
                patient education, and collaborative care approaches that improve IVF success rates.
              </p>
              <Button 
                variant="warm" 
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => window.open('https://pharmacypodcastnetwork.podbean.com/e/fertility-pharmacy-and-the-future-a-pharmacist-s-role-in-ivf-care-with-dr-kelly-gonda-maternalrx/', '_blank')}
              >
                <Headphones className="mr-2 h-5 w-5" />
                Listen to Podcast
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;