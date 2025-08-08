import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import TrustedBy from "@/sections/TrustedBy";
import WhyChooseUs from "@/sections/WhyChooseUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <HeroSection />
      <TrustedBy />
      <ServicesSection />
      <WhyChooseUs />
      <ProductsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
