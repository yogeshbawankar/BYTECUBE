export type Founder = {
  name: string;
  role: string;
  linkedin: string;
  image: string;
  bio?: string;
};

export const founders = [
  {
    name: "Founder Name 1",
    role: "CEO & Co-Founder",
    linkedin: "https://linkedin.com/in/founder1",
    image: "/placeholder-founder1.jpg",
    bio: "Expert in financial technology with over 15 years of experience in building scalable fintech solutions.",
  },
  {
    name: "Founder Name 2",
    role: "CTO & Co-Founder",
    linkedin: "https://linkedin.com/in/founder2",
    image: "/placeholder-founder2.jpg",
    bio: "Machine learning specialist with deep expertise in AI-driven financial modeling and algorithmic trading.",
  },
  {
    name: "Founder Name 3",
    role: "Head of AI",
    linkedin: "https://linkedin.com/in/founder3",
    image: "/placeholder-founder3.jpg",
    bio: "Leading AI research and development with focus on explainable AI and ethical machine learning.",
  },
] as const satisfies Founder[];


