import { ShieldCheck, LineChart, FileCheck2, Database } from 'lucide-react';

const ServiceBlock = ({ icon: Icon, title, text }: { icon: any; title: string; text: string }) => (
  <div className="border border-[#EAEAEA] rounded-lg p-6 bg-white">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-[#555555] leading-relaxed">{text}</p>
  </div>
);

const Services = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-14 bg-section-bg">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-3">Our Services</h1>
          <p className="text-[#555555] max-w-2xl mx-auto">AI-powered solutions tailored for the financial industry.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceBlock icon={LineChart} title="Algorithmic Trading Platforms" text="Deploy low-latency trading systems enhanced with reinforcement learning and robust risk limits for consistent execution quality." />
          <ServiceBlock icon={ShieldCheck} title="Fraud Detection & Prevention" text="Detect anomalous activity in real time with graph-based features and streaming models to reduce chargebacks and losses." />
          <ServiceBlock icon={FileCheck2} title="Automated Compliance Reporting" text="Automatically generate regulatory reports with full audit trails and explainability to satisfy evolving requirements." />
          <ServiceBlock icon={Database} title="Data Integration & Governance" text="Ingest, normalize, and govern data across desks and systems with lineage, quality checks, and role-based access controls." />
        </div>
      </section>
    </div>
  );
};

export default Services;


