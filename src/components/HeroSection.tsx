import { Button } from "@/components/ui/button";
import type React from "react";
import { Link } from "react-router-dom";
import heroGraphic from "@/assets/hero-graphic.jpg";

const HeroSection = () => {
  // Option B: Set your video source here, or leave as undefined/null if not available
  const videoSrc = undefined; // e.g., '/path/to/hero-video.mp4'
  return (
    <section id="home" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#191919] leading-tight tracking-tight font-serifhead">
              Intelligent Finance, <span className="text-[#D97E6A]">Thoughtfully</span> Applied
            </h1>
            
            <p className="text-lg md:text-xl text-[#191919]/90 leading-relaxed max-w-2xl">
              BYTECUBE delivers cutting-edge AI solutions that empower financial institutions 
              to optimize operations, manage risk, and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" size="lg" className="font-manrope font-semibold text-base px-8 py-6">
                <Link to="/services" className="no-underline text-[#191919] visited:text-[#191919]">Explore Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Abstract Graphic */}
          <div className="flex justify-center lg:justify-end">
            {/* Reserve space to avoid CLS using a fixed aspect ratio */}
            <div className="relative w-full aspect-[16/9] max-w-3xl overflow-hidden rounded-xl border border-[#EAEAEA]">
              {videoSrc ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={heroGraphic}
                >
                  <source src={videoSrc} type="video/mp4" />
                  {/* Fallback text for browsers that do not support the video tag */}
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={heroGraphic}
                  alt=""
                  role="presentation"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority={"high" as unknown as React.ImgHTMLAttributes<HTMLImageElement>["fetchPriority"]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;