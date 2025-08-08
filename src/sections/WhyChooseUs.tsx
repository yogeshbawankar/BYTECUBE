import heroGraphic from "@/assets/hero-graphic.jpg";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img src={heroGraphic} alt="Team collaboration" className="rounded-lg border border-[#EAEAEA]" />
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Data-Driven Insights</h3>
            <p className="text-[#555555] leading-relaxed mb-4">
              We combine robust financial domain knowledge with cutting-edge AI research to deliver
              models that are explainable, auditable, and production-ready.
            </p>
            <p className="text-[#555555] leading-relaxed">
              From model governance to real-time analytics, our platform ensures your team can trust
              the numbers while moving faster than ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


