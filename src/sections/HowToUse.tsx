import { useState } from "react";

type UseCase = {
  id: string;
  title: string;
  description: string;
  visual: React.ReactNode;
};

const useCases: UseCase[] = [
  {
    id: "learning",
    title: "Learning",
    description: "Summarize, quiz, and guide with contextual understanding.",
    visual: (
      <div className="h-[240px] rounded-2xl bg-white/60 border border-black/5 flex items-center justify-center">
        <span className="text-sm text-muted-foreground">Learning preview</span>
      </div>
    ),
  },
  {
    id: "coding",
    title: "Coding",
    description: "Generate, refactor, and explain code with clarity.",
    visual: (
      <div className="h-[240px] rounded-2xl bg-white/60 border border-black/5 flex items-center justify-center">
        <span className="text-sm text-muted-foreground">Coding preview</span>
      </div>
    ),
  },
  {
    id: "researching",
    title: "Researching",
    description: "Extract insights and synthesize across sources.",
    visual: (
      <div className="h-[240px] rounded-2xl bg-white/60 border border-black/5 flex items-center justify-center">
        <span className="text-sm text-muted-foreground">Researching preview</span>
      </div>
    ),
  },
];

const HowToUse = () => {
  const [active, setActive] = useState<UseCase>(useCases[0]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="rounded-[28px] md:rounded-[32px] p-6 md:p-10 bg-card">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="space-y-2">
                {useCases.map((uc) => {
                  const isActive = uc.id === active.id;
                  return (
                    <button
                      key={uc.id}
                      onClick={() => setActive(uc)}
                      className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                        isActive ? "border-foreground/40 font-semibold" : "border-black/10 hover:border-foreground/30"
                      }`}
                      aria-expanded={isActive}
                    >
                      <div className="flex items-center justify-between">
                        <span>{uc.title}</span>
                        <span aria-hidden>{isActive ? "^" : "v"}</span>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{uc.description}</div>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="md:col-span-3">
              {active.visual}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;


