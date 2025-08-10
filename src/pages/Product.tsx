import { Cpu, Shield, Zap, BarChart3, Cloud, Lock, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Feature = ({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) => (
  <div className="border border-[#EAEAEA] rounded-lg p-6 bg-white transition-all hover:shadow-md hover:-translate-y-1">
    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
    </div>
    <div className="text-lg font-semibold mb-1">{title}</div>
    <div className="text-[#555555]">{text}</div>
  </div>
);

const Product = () => {
  const features: Array<{ icon: LucideIcon; title: string; text: string }> = [
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      text: 'Stream and analyze tick-to-trade data with millisecond latency.',
    },
    {
      icon: Shield,
      title: 'Model Governance',
      text: 'Versioning, approvals, and drift monitoring built-in.',
    },
    {
      icon: Lock,
      title: 'Secure API Integration',
      text: 'SOC2-ready APIs with fine-grained permissions.',
    },
    {
      icon: Cloud,
      title: 'Scalable Cloud',
      text: 'Elastically scale compute to meet market volatility.',
    },
    {
      icon: Cpu,
      title: 'On-Prem Ready',
      text: 'Deploy into private VPCs and on-prem clusters.',
    },
    {
      icon: Zap,
      title: 'Automation',
      text: 'Trigger workflows and alerts from KPIs and thresholds.',
    },
  ];
  return (
    <main className="min-h-screen">
      <section className="pt-24 pb-14 bg-section-bg text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-foreground mb-2 font-serifhead">ByteCube Nexus™</h1>
          <p className="text-[#555555]">The Central Nervous System for Your Financial Operations.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon, title, text }) => (
            <Feature key={title} icon={icon} title={title} text={text} />
          ))}
        </div>
      </section>

      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4 text-[#333333]">
            <div className="text-center">
              <div className="font-semibold">1. Integrate Data</div>
            </div>
            <ChevronRight aria-hidden="true" />
            <div className="text-center">
              <div className="font-semibold">2. Process with AI</div>
            </div>
            <ChevronRight aria-hidden="true" />
            <div className="text-center">
              <div className="font-semibold">3. Visualize Insights</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Finances?</h2>
          <Button className="px-8 py-6 text-base font-semibold">Request a Demo</Button>
        </div>
      </section>
    </main>
  );
};

export default Product;


