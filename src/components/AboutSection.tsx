const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
            About BYTECUBE
          </h2>
          
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Founded by experts in finance and machine learning, BYTECUBE is on a mission to 
            revolutionize the financial industry. We believe in building transparent, reliable, 
            and powerful AI that acts as a true partner to financial professionals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;