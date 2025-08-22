"use client";

import { Button } from "@/components/ui/button";
import { Motion } from "@/components/ui/motion";
import { portfolioConfig } from "@/config/portfolio";
import { ArrowDown, Mail, MapPin } from "lucide-react";

export function Hero() {
  const { personal } = portfolioConfig;

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[90vh] md:min-h-screen flex items-center justify-center relative overflow-hidden py-12 md:py-20">
      {/* Animated background elements - hidden on small screens */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-accent animate-bounce delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-secondary animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-10">
          {/* Avatar */}
          <Motion delay={0}>
            <div className="relative w-24 h-24 md:w-40 md:h-40 mx-auto mb-6 md:mb-12">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                    <span className="text-xl md:text-3xl font-bold">
                      {personal.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Motion>

          {/* Main heading */}
          <Motion delay={200}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">{personal.name}</span>
              <span className="block text-primary">{personal.title}</span>
            </h1>
          </Motion>

          {/* Subtitle */}
          <Motion delay={400}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-2xl mx-auto">
              {personal.subtitle}
            </p>
          </Motion>

          {/* Description */}
          <Motion delay={600}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
              {personal.description}
            </p>
          </Motion>

          {/* Location and contact info */}
          <Motion delay={800}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-muted-foreground text-sm sm:text-base md:text-lg">
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

          {/* CTA Buttons */}
          <Motion delay={1000}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 pt-4 md:pt-8">
              <Button
                size="lg"
                className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                onClick={scrollToProjects}
              >
                View My Work
                <ArrowDown className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold border-2 hover:bg-muted transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}
