import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import TrustedBy from "@/sections/TrustedBy";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Features from "@/sections/Features";
import HowToUse from "@/sections/HowToUse";
import ProductFeature from "@/sections/ProductFeature";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <HeroSection />
      <TrustedBy />
      <Features />
      <HowToUse />
      <ProductFeature />
      <ServicesSection />
      <WhyChooseUs />
      <ProductsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
