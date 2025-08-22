"use client";

import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide scroll indicator when user scrolls past the hero section
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      setIsVisible(scrollY < heroHeight * 0.8); // Hide when 80% through hero section
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToProjects}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce hover:scale-110 transition-all duration-200 cursor-pointer group"
      aria-label="Scroll to projects section"
    >
      <div className="flex flex-col items-center gap-1">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center group-hover:border-primary transition-colors">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse group-hover:bg-primary transition-colors"></div>
        </div>
        <ArrowDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </button>
  );
}
