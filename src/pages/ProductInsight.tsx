import { Button } from "@/components/ui/button";
import { BarChart3, Search } from "lucide-react";

const ProductInsight = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-14 bg-section-bg text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-foreground mb-2">ByteCube Insight™</h1>
          <p className="text-[#555555] max-w-2xl mx-auto">
            A comprehensive risk management platform delivering explainable AI-driven analytics for investment banks.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-[#EAEAEA] rounded-lg p-6 bg-white">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-accent" aria-hidden="true" />
            </div>
            <div className="text-lg font-semibold mb-1">Stress Testing</div>
            <div className="text-[#555555]">Scenario analysis with fast Monte Carlo simulation and factor modeling.</div>
          </div>
          <div className="border border-[#EAEAEA] rounded-lg p-6 bg-white">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-accent" aria-hidden="true" />
            </div>
            <div className="text-lg font-semibold mb-1">Explainable Insights</div>
            <div className="text-[#555555]">Feature attributions and audit trails for every model decision.</div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">See Insight™ in action</h2>
          <Button className="px-8 py-6 text-base font-semibold">Request a Demo</Button>
        </div>
      </section>
    </div>
  );
};

export default ProductInsight;


