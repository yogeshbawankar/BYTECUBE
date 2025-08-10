import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { founders as foundersData } from '@/data/company';

const About = () => {
  const founders = foundersData;

  const milestones = [
    { year: '2023', title: 'Company founded', description: 'BYTECUBE started with a focus on safe, reliable AI for finance.' },
    { year: '2024', title: 'First product launch', description: 'Introduced our assisted analysis platform for financial teams.' },
    { year: '2024', title: 'Series A', description: 'Raised funding to deepen research and scale customer impact.' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-16 border-b border-border bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="eyebrow">About BYTECUBE</p>
            <h1 className="mt-2 font-serifhead text-4xl md:text-6xl leading-tight text-primary">
              AI that assists people and respects institutions
            </h1>
            <p className="lede mt-6">
              We build systems that are transparent by default, grounded in real data, and designed to
              support expert judgment—so your team can move faster with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl">
            <div>
              <h2 className="font-serifhead text-3xl md:text-4xl text-primary">Our mission</h2>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                Expand access to advanced financial intelligence by creating AI that is useful, reliable,
                and understandable. We favor clarity over complexity and long-term trust over short-term
                wins.
              </p>
              <div className="mt-6">
                <a href="#principles" className="inline-flex items-center gap-2">
                  Read our principles
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
            <div className="quiet-card p-6 md:p-8">
              <h3 className="text-xl font-semibold text-primary">Our approach</h3>
              <ul className="mt-4 space-y-3 text-foreground/80">
                <li>• Start with people and their workflows</li>
                <li>• Prefer transparent, explainable methods</li>
                <li>• Align incentives with customer outcomes</li>
                <li>• Ship carefully; measure and iterate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="eyebrow">Principles</p>
            <h2 className="mt-2 font-serifhead text-3xl md:text-4xl text-primary">What guides our work</h2>
            <ol className="mt-8 space-y-6">
              <li>
                <div className="font-semibold text-primary">1. Safety and reliability</div>
                <p className="text-foreground/80">We design for robustness and predictable behavior in real environments.</p>
              </li>
              <li>
                <div className="font-semibold text-primary">2. Transparency</div>
                <p className="text-foreground/80">Every recommendation should come with context you can understand.</p>
              </li>
              <li>
                <div className="font-semibold text-primary">3. Human-centered</div>
                <p className="text-foreground/80">AI augments experts, respects constraints, and keeps humans in control.</p>
              </li>
              <li>
                <div className="font-semibold text-primary">4. Long-term alignment</div>
                <p className="text-foreground/80">We optimize for durable value and institutional trust.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl">
            <h2 className="font-serifhead text-3xl md:text-4xl text-primary mb-8">Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {founders.map((founder) => (
                <div key={`${founder.name}-${founder.role}`} className="quiet-card p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-muted-foreground">👤</div>
                    <div>
                      <div className="font-semibold text-primary">{founder.name}</div>
                      <div className="text-sm text-foreground/70">{founder.role}</div>
                    </div>
                  </div>
                  {founder.bio && (
                    <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{founder.bio}</p>
                  )}
                  <div className="mt-4">
                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground/90">
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="font-serifhead text-3xl md:text-4xl text-primary">Our journey</h2>
            <div className="mt-8 space-y-6">
              {milestones.map((m) => (
                <div key={`${m.year}-${m.title}`} className="grid grid-cols-[5rem_1fr] gap-4 items-start">
                  <div className="text-primary font-semibold">{m.year}</div>
                  <div>
                    <div className="text-primary font-medium">{m.title}</div>
                    <p className="text-foreground/80">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-section-bg border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="font-serifhead text-3xl md:text-4xl text-primary">Work with us</h2>
            <p className="mt-4 text-foreground/80">
              Explore how BYTECUBE can support your team with trustworthy AI.
            </p>
            <div className="mt-6">
              <Link to="/#contact" className="inline-flex items-center gap-2">
                Get in touch
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;