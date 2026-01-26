"use client";

import { Button } from "@/components/ui/button";
import { portfolioConfig } from "@/config/portfolio";
import { Menu, X } from "lucide-react";
import { useEffect, useState, ReactNode } from "react";

interface NavigationProps {
  customLogo?: ReactNode;
}

export function Navigation(
  { customLogo }: NavigationProps = {} as NavigationProps
) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { personal } = portfolioConfig;

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#skills" },
    // { label: "About", href: "#about" },
    // { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-lg shadow-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo or Custom Element */}
            {customLogo ? (
              <div className="-ml-6 sm:-ml-8">{customLogo}</div>
            ) : (
              <div
                className="font-bold text-xl cursor-pointer text-primary sm:text-foreground hover:text-primary transition-colors"
                onClick={() => scrollToSection("#")}
              >
                {personal.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            )}

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection("#contact")}
              >
                Get In Touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-16 left-0 right-0 bg-background shadow-lg border-b border-border">
            <div className="p-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection("#contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
