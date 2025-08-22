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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-accent animate-bounce delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-secondary animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Avatar */}
          <Motion delay={0}>
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                    <span className="text-2xl font-bold">
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
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-foreground">{personal.name}</span>
              <span className="block text-primary">{personal.title}</span>
            </h1>
          </Motion>

          {/* Subtitle */}
          <Motion delay={400}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              {personal.subtitle}
            </p>
          </Motion>

          {/* Description */}
          <Motion delay={600}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {personal.description}
            </p>
          </Motion>

          {/* Location and contact info */}
          <Motion delay={800}>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{personal.email}</span>
              </div>
            </div>
          </Motion>

          {/* CTA Buttons */}
          <Motion delay={1000}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="px-8 py-3 text-base font-semibold bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
                onClick={scrollToProjects}
              >
                View My Work
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-base font-semibold border-2 hover:bg-muted transform hover:scale-105 transition-all duration-200"
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
