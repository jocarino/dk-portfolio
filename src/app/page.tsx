import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { ScrollIndicator } from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2025 Damola Kevwe. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
}
