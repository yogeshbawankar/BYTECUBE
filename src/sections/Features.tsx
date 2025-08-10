import type { ReactNode } from "react";

type Feature = {
  id: string;
  title: string;
  text: string;
  icon: ReactNode;
};

const features: readonly Feature[] = [
  { id: "thoughtful-by-design", title: "Thoughtful by Design", text: "Human-centric, transparent systems that inspire trust.", icon: (
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
        <path d="M8 6a4 4 0 0 1 8 0c0 2-1 3-1 3h-6s-1-1-1-3Z"/>
        <path d="M7 14h10"/>
        <path d="M9 18h6"/>
      </svg>
    ) },
  { id: "time-well-spent", title: "Time Well Spent", text: "Focus on outcomes. Let automation handle the toil.", icon: (
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ) },
  { id: "lightbulb-moments", title: "Lightbulb Moments", text: "Clarity at the right moment to move faster with confidence.", icon: (
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
        <path d="M9 18h6"/>
        <path d="M10 22h4"/>
        <path d="M12 2a7 7 0 0 0-4 13c.5.5 1 1.5 1 2h6c0-.5.5-1.5 1-2a7 7 0 0 0-4-13Z"/>
      </svg>
    ) }
];

const Features = () => {
  return (
    <section className="py-20" aria-labelledby="features-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold tracking-tight">Why ByteCube?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((f) => (
            <div key={f.id} className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center border border-black/5">
                {f.icon}
              </div>
              <div className="text-xl font-semibold">{f.title}</div>
              <p className="text-muted-foreground max-w-xs">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;


