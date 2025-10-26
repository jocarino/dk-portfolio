"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Motion } from "@/components/ui/motion";
import { portfolioConfig } from "@/config/portfolio";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Skills() {
  const { skills, experience } = portfolioConfig;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Calculate items per view based on screen size
  const itemsPerView = useMemo(() => {
    if (windowWidth >= 1024) return 3; // lg: 3 items
    if (windowWidth >= 768) return 2; // md: 2 items
    return 1; // mobile: 1 item
  }, [windowWidth]);

  // Calculate max index based on current items per view
  const maxIndex = useMemo(() => {
    return Math.max(0, skills.length - itemsPerView);
  }, [skills.length, itemsPerView]);

  // Reset current index when items per view changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerView]);

  // Add resize listener with debouncing
  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 100);
    };

    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Calculate visible skills based on current index and items per view
  const visibleSkills = useMemo(() => {
    return skills.slice(currentIndex, currentIndex + itemsPerView);
  }, [skills, currentIndex, itemsPerView]);

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < maxIndex) {
      nextSlide();
    }
    if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        {/* Skills Section */}
        <Motion>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>
        </Motion>

        {/* Skills Carousel */}
        <div className="relative mb-20">
          {/* Carousel Container */}
          <div
            className="overflow-hidden rounded-lg"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="flex gap-6 transition-transform duration-300 ease-in-out">
              {visibleSkills.map((skillCategory, index) => (
                <Motion
                  key={skillCategory.category}
                  delay={index * 100}
                  className={cn(
                    "flex-shrink-0",
                    itemsPerView === 1 && "w-full",
                    itemsPerView === 2 && "w-[calc(50%-0.75rem)]",
                    itemsPerView === 3 && "w-[calc(33.333%-1rem)]"
                  )}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-bold text-foreground">
                        {skillCategory.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillCategory.items.map((skill) => (
                          <Badge
                            key={skill}
                            variant="default"
                            className="text-xs transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Motion>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={cn(
                "p-2 rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm transition-all duration-200 hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed",
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-105"
              )}
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={cn(
                "p-2 rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm transition-all duration-200 hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed",
                currentIndex >= maxIndex
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-105"
              )}
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-200",
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-primary/30 hover:bg-primary/50"
                )}
              />
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <Motion delay={400}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Experience
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key accomplishments
            </p>
          </div>
        </Motion>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Motion
                  key={`${exp.company}-${exp.position}`}
                  delay={index * 150}
                >
                  <div className="relative flex items-start">
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background ${
                        exp.current
                          ? "bg-accent shadow-lg shadow-accent/50"
                          : "bg-primary"
                      }`}
                    ></div>

                    {/* Content */}
                    <div className="ml-20 w-full">
                      <Card
                        className={cn(
                          "border-0 shadow-md hover:shadow-lg transition-all duration-300",
                          exp.current ? "bg-accent/10" : ""
                        )}
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                            <div>
                              <h4 className="text-xl font-bold text-foreground">
                                {exp.position}
                              </h4>
                              <p className="text-lg text-primary font-semibold">
                                {exp.company}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 mt-2 md:mt-0">
                              <Badge variant="default">{exp.period}</Badge>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </Motion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
