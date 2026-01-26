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

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden pt-16 md:pt-20">
      {/* Animated background elements with gradients - responsive for all screen sizes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient orb - top left - Purple to Pink */}
        <div className="absolute -top-10 -left-10 md:top-20 md:left-20 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-15 md:opacity-15">
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-violet-500 to-pink-500 blur-3xl"
            style={{
              animation: "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          ></div>
          <div
            className="absolute inset-4 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-600 blur-2xl"
            style={{
              animation: "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          ></div>
        </div>

        {/* Medium gradient orb - bottom right - Pink to Red */}
        <div className="absolute -bottom-10 -right-10 md:bottom-32 md:right-32 w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 opacity-15 md:opacity-15">
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 via-rose-500 to-red-500 blur-3xl"
            style={{
              animation: "bounce 4s ease-in-out infinite",
              animationDelay: "300ms",
            }}
          ></div>
          <div
            className="absolute inset-3 rounded-full bg-gradient-to-tr from-fuchsia-400 to-rose-600 blur-2xl"
            style={{
              animation: "bounce 4s ease-in-out infinite",
              animationDelay: "300ms",
            }}
          ></div>
        </div>

        {/* Small gradient orb - center left - Blueish Purple */}
        <div className="absolute top-1/3 -left-16 md:top-1/2 md:left-1/4 w-40 h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 opacity-12 md:opacity-12">
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-blue-500 blur-3xl"
            style={{
              animation: "pulse 7s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              animationDelay: "700ms",
            }}
          ></div>
          <div
            className="absolute inset-3 rounded-full bg-gradient-to-tr from-blue-400 to-violet-600 blur-2xl"
            style={{
              animation: "pulse 7s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              animationDelay: "700ms",
            }}
          ></div>
        </div>

        {/* Additional accent orb - top right - Purple to Fuchsia */}
        <div className="absolute top-32 -right-12 md:top-1/4 md:right-20 w-36 h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 opacity-12 md:opacity-12">
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-500 blur-3xl"
            style={{
              animation: "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              animationDelay: "1000ms",
            }}
          ></div>
        </div>

        {/* Small floating orb - bottom center - Red to Pink */}
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 md:bottom-1/3 md:left-16 md:translate-x-0 w-32 h-32 md:w-44 md:h-44 opacity-10 md:opacity-10">
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 via-pink-500 to-rose-500 blur-2xl"
            style={{
              animation: "bounce 5s ease-in-out infinite",
              animationDelay: "1500ms",
            }}
          ></div>
        </div>
      </div>

      {/* Main content container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center">
        {/* Content wrapper */}
        <div className="w-full flex flex-col items-center py-8 md:py-12">
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
            {/* Avatar */}
            <Motion delay={0}>
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 md:mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                    <Image
                      src="/damola-profile.PNG"
                      alt={`${personal.name} - ${personal.title}`}
                      width={192}
                      height={192}
                      className="w-full h-full rounded-full object-cover object-center"
                      style={{
                        transform: "scale(1.2)",
                      }}
                      priority
                      quality={90}
                      sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                    />
                  </div>
                </div>
              </div>
            </Motion>

            {/* Main heading */}
            <Motion delay={100}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-foreground mb-2">
                  {personal.name}
                </span>
                <span className="block text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-2xl mx-auto">
                  {personal.title}
                </span>
              </h1>
            </Motion>
            {/* 
            {/* Subtitle */}
            {/* <Motion delay={200}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
                {personal.subtitle}
              </p>
            </Motion>  */}

            {/* Description */}
            {/* <Motion delay={300}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 md:px-6">
                {personal.description}
              </p>
            </Motion> */}

            {/* Location and contact info */}
            <Motion delay={400}>
              <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg pt-2 px-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <a
                    href={`mailto:${personal.email}`}
                    className="hover:text-primary transition-colors underline-offset-4 hover:underline"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
            </Motion>
          </div>

          {/* CTA Buttons */}
          <Motion delay={600}>
            <div className="w-full max-w-md mx-auto mt-6 md:mt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                <Button
                  size="lg"
                  className="px-6 py-2.5 text-sm font-semibold bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 w-full sm:w-auto sm:min-w-[140px]"
                  onClick={scrollToProjects}
                >
                  View My Work
                  <ArrowDown className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 py-2.5 text-sm font-semibold border-2 hover:bg-muted transform hover:scale-105 transition-all duration-200 w-full sm:w-auto sm:min-w-[140px]"
                  onClick={scrollToContact}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}
