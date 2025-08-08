import { Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { founders } from '@/data/company';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main About Content */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
              About BYTECUBE
            </h2>
            
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-4xl mx-auto">
              Founded by experts in finance and machine learning, BYTECUBE is on a mission to 
              revolutionize the financial industry. We believe in building transparent, reliable, 
              and powerful AI that acts as a true partner to financial professionals.
            </p>
          </div>

          {/* Founders Section */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              Meet Our Founders
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {founders.map((founder, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  {/* Founder Image Placeholder */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center">
                    <div className="text-primary/60 text-sm text-center">
                      <div className="text-2xl mb-2">👤</div>
                      <div>Add Photo</div>
                    </div>
                  </div>
                  
                  {/* Founder Info */}
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-primary mb-2">
                      {founder.name}
                    </h4>
                    <p className="text-foreground/80 mb-4">
                      {founder.role}
                    </p>
                    
                    {/* LinkedIn Link */}
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 group/link"
                    >
                      <Linkedin className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-200" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Values */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              Our Values
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3">Transparency</h4>
                <p className="text-foreground/80">
                  We believe in open, honest communication and clear AI decision-making processes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3">Innovation</h4>
                <p className="text-foreground/80">
                  Pushing the boundaries of what's possible in financial technology and AI.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3">Partnership</h4>
                <p className="text-foreground/80">
                  Working closely with financial professionals to create solutions that truly serve their needs.
                </p>
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-[8px] hover:bg-primary/90 transition-colors duration-200 font-semibold group"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;