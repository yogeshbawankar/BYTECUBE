import { Cpu, Shield, Zap, BarChart3, Cloud, Lock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Feature = ({ icon: Icon, title, text }: { icon: any; title: string; text: string }) => (
  <div className="border border-[#EAEAEA] rounded-lg p-6 bg-white">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <div className="text-lg font-semibold mb-1">{title}</div>
    <div className="text-[#555555]">{text}</div>
  </div>
);

const Product = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-14 bg-section-bg text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-foreground mb-2">ByteCube Nexus™</h1>
          <p className="text-[#555555]">The Central Nervous System for Your Financial Operations.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature icon={BarChart3} title="Real-time Analytics" text="Stream and analyze tick-to-trade data with millisecond latency." />
          <Feature icon={Shield} title="Model Governance" text="Versioning, approvals, and drift monitoring built-in." />
          <Feature icon={Lock} title="Secure API Integration" text="SOC2-ready APIs with fine-grained permissions." />
          <Feature icon={Cloud} title="Scalable Cloud" text="Elastically scale compute to meet market volatility." />
          <Feature icon={Cpu} title="On-Prem Ready" text="Deploy into private VPCs and on-prem clusters." />
          <Feature icon={Zap} title="Automation" text="Trigger workflows and alerts from KPIs and thresholds." />
        </div>
      </section>

      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4 text-[#333333]">
            <div className="text-center">
              <div className="font-semibold">1. Integrate Data</div>
            </div>
            <ChevronRight />
            <div className="text-center">
              <div className="font-semibold">2. Process with AI</div>
            </div>
            <ChevronRight />
            <div className="text-center">
              <div className="font-semibold">3. Visualize Insights</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Finances?</h2>
          <Button className="px-8 py-6 text-base">Request a Demo</Button>
        </div>
      </section>
    </div>
  );
};

export default Product;


