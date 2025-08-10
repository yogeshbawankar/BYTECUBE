import { Linkedin, ArrowLeft, Mail, Phone, MapPin, Globe, Users, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { founders as foundersData } from '@/data/company';

const About = () => {
  const founders = foundersData;

  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description: "BYTECUBE was established with a vision to revolutionize financial AI."
    },
    {
      year: "2024",
      title: "First Product Launch",
      description: "Successfully launched our flagship AI-powered financial analysis platform."
    },
    {
      year: "2024",
      title: "Series A Funding",
      description: "Secured significant funding to accelerate product development and market expansion."
    }
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Team Members" },
    { icon: Target, value: "100+", label: "Clients Served" },
    { icon: Award, value: "99.9%", label: "Uptime" },
    { icon: Globe, value: "25+", label: "Countries" }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              About BYTECUBE
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Revolutionizing the financial industry through transparent, reliable, and powerful AI that acts as a true partner to financial professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  To democratize access to advanced financial intelligence by building AI systems that are not just powerful, but also transparent, explainable, and trustworthy.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  We believe that the future of finance lies in the seamless integration of human expertise and artificial intelligence, where AI enhances rather than replaces human decision-making.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-foreground/80 leading-relaxed">
                  To become the world's most trusted AI partner for financial institutions, enabling them to make better decisions, reduce risks, and unlock new opportunities through intelligent automation and predictive analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              BYTECUBE by the Numbers
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {value}
                  </div>
                  <div className="text-foreground/80">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Meet Our Leadership Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {founders.map((founder) => (
                <div key={`${founder.name}-${founder.role}`} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  {/* Founder Image Placeholder */}
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center">
                    <div className="text-primary/60 text-center">
                      <div className="text-4xl mb-2">👤</div>
                      <div className="text-sm">Add Photo</div>
                    </div>
                  </div>
                  
                  {/* Founder Info */}
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-primary mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-primary/80 font-medium mb-4">
                      {founder.role}
                    </p>
                    
                    <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                      {founder.bio}
                    </p>
                    
                    {/* LinkedIn Link */}
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 group/link"
                    >
                      <Linkedin className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-200" />
                      <span className="text-sm">Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Our Core Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Transparency</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We believe in open, honest communication and clear AI decision-making processes. Every recommendation comes with explainable reasoning.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Innovation</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Pushing the boundaries of what's possible in financial technology and AI, while maintaining the highest standards of reliability and security.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Partnership</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Working closely with financial professionals to create solutions that truly serve their needs and enhance their capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Our Journey
            </h2>
            
            <div className="space-y-8">
              {milestones.map((milestone) => (
                <div key={`${milestone.year}-${milestone.title}`} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-foreground/80">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Let's discuss how BYTECUBE can help you leverage the power of AI in your financial workflows.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 