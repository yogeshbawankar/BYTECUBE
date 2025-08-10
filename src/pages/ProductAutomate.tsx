import { Button } from "@/components/ui/button";
import { CheckSquare, Workflow } from "lucide-react";

const ProductAutomate = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-14 bg-section-bg text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-foreground mb-2">ByteCube Automate™</h1>
          <p className="text-[#555555] max-w-2xl mx-auto">
            An AI agent for automating compliance checks, report generation, and workflow orchestration.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-[#EAEAEA] rounded-lg p-6 bg-white">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <CheckSquare className="w-6 h-6 text-accent" aria-hidden="true" />
            </div>
            <div className="text-lg font-semibold mb-1">Automated Evidence</div>
            <div className="text-[#555555]">Collects artifacts and assembles audit-ready reports.</div>
          </div>
          <div className="border border-[#EAEAEA] rounded-lg p-6 bg-white">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Workflow className="w-6 h-6 text-accent" aria-hidden="true" />
            </div>
            <div className="text-lg font-semibold mb-1">Workflow Orchestration</div>
            <div className="text-[#555555]">Trigger actions, approvals, and notifications from policy rules.</div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Put Automate™ to work</h2>
          <Button className="px-8 py-6 text-base font-semibold">Request a Demo</Button>
        </div>
      </section>
    </div>
  );
};

export default ProductAutomate;


