"use client";

import { Button } from "@/components/ui/button";
import { Motion } from "@/components/ui/motion";
import { portfolioConfig } from "@/config/portfolio";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const { personal } = portfolioConfig;

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-dvh flex flex-col relative overflow-hidden pt-12 md:pt-20">
      {/* Animated background elements - hidden on small screens */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-accent animate-bounce delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-secondary animate-pulse delay-700"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col">
        <div className="max-w-4xl mx-auto text-center flex-1 flex flex-col justify-center space-y-6 md:space-y-10 ">
          {/* Avatar */}
          <Motion delay={0}>
            <div className="relative w-24 h-24 md:w-40 md:h-40 mx-auto mb-6 md:mb-12">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <Image
                    src="/damola-profile.PNG"
                    alt={`${personal.name} - ${personal.title}`}
                    width={128}
                    height={128}
                    className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover object-center"
                    style={{
                      transform: "scale(1.2)",
                    }}
                    priority
                    quality={90}
                    sizes="(max-width: 768px) 96px, 128px"
                  />
                </div>
              </div>
            </div>
          </Motion>

          {/* Main heading */}
          <Motion delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">{personal.name}</span>
              <span className="block text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl  max-w-2xl mx-auto">
                {personal.title}
              </span>
            </h1>
          </Motion>

          {/* Subtitle */}
          <Motion delay={200}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-2xl mx-auto">
              {personal.subtitle}
            </p>
          </Motion>

          {/* Description */}
          <Motion delay={300}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
              {personal.description}
            </p>
          </Motion>

          {/* Location and contact info */}
          <Motion delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-muted-foreground text-sm sm:text-base md:text-lg mb-4 md:mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span>{personal.email}</span>
              </div>
            </div>
          </Motion>
        </div>

        {/* CTA Buttons - Fixed at bottom */}
        <Motion delay={600}>
          <div className="w-full max-w-md mx-auto px-8 pb-8 md:pb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="px-6 py-2.5 text-sm font-semibold bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 w-full sm:w-auto sm:min-w-[120px]"
                onClick={scrollToProjects}
              >
                View My Work
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-6 py-2.5 text-sm font-semibold border-2 hover:bg-muted transform hover:scale-105 transition-all duration-200 w-full sm:w-auto sm:min-w-[120px]"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
