import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="eyebrow">About</p>
          <h2 className="mt-2 font-serifhead text-4xl md:text-5xl text-primary leading-tight">
            We build AI that assists people
          </h2>
          <p className="lede mt-6">
            Founded by experts in finance and machine learning, BYTECUBE develops transparent, reliable
            systems that augment human judgment and make complex work feel simple.
          </p>
          <div className="mt-8">
            <Link to="/about" className="inline-flex items-center gap-2">
              <span>Read about our mission</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;