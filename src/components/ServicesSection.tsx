import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, LineChart, FileCheck2, type LucideIcon } from 'lucide-react'

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const ServicesSection = () => {
  const services: Service[] = [
    {
      title: "AI-Powered Risk Analysis",
      description: "Proactively identify and mitigate financial risks with our predictive analytics models.",
      icon: ShieldCheck
    },
    {
      title: "Algorithmic Trading Solutions", 
      description: "Leverage AI to execute high-frequency trades with precision and speed.",
      icon: LineChart
    },
    {
      title: "Automated Compliance",
      description: "Streamline regulatory reporting and ensure compliance with our intelligent automation platforms.",
      icon: FileCheck2
    }
  ];

  return (
    <section id="services" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-serifhead">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-card border-0 shadow-sm hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
            >
              <CardHeader className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <service.icon aria-hidden="true" className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;