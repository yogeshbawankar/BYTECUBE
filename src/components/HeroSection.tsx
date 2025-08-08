import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroGraphic from "@/assets/hero-graphic.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Intelligent Finance, Powered by AI
            </h1>
            
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-2xl">
              BYTECUBE delivers cutting-edge AI solutions that empower financial institutions 
              to optimize operations, manage risk, and drive growth.
            </p>
            
            <Link to="/services">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-lg px-8 py-6"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>

          {/* Right Column - Abstract Graphic */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={heroGraphic}
                alt="Abstract AI network visualization"
                className="max-w-full h-auto"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;