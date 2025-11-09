"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Motion } from "@/components/ui/motion";
import { PortfolioConfig } from "@/config/portfolio";
import { ExternalLink, Github } from "lucide-react";
import { useRouter } from "next/navigation";

type Project = PortfolioConfig["projects"][0];

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const router = useRouter();

  return (
    <section className="py-12 px-4 min-h-screen pt-24">
      <div className="container mx-auto max-w-5xl">
        {/* Hero Section */}
        <Motion delay={100}>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              {project.title}
            </h1>
          </div>
        </Motion>

        {/* Project Image */}
        <Motion delay={200}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted mb-12 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20"></div>
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-background rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-5xl">🎨</span>
                </div>
                <p className="text-lg font-medium">Project Image</p>
                <p className="text-sm opacity-60 mt-1">
                  {project.image || "Image placeholder"}
                </p>
              </div>
            </div>
          </div>
        </Motion>

        {/* Description */}
        <Motion delay={300}>
          <h2 className="text-2xl font-bold mb-6 text-foreground">Overview</h2>
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-md md:text-lg text-muted-foreground leading-relaxed text-justify">
              {project.description}
            </p>
          </div>
        </Motion>

        {/* Tags Section */}
        <Motion delay={400}>
          <div className="mb-12 space-y-6">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Categories
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.categories.map((category) => (
                <Badge
                  key={category}
                  variant="default"
                  className="text-sm px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Technologies & Skills
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-sm px-4 py-2 bg-accent/10 hover:bg-accent/20 transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </Motion>

        {/* Action Buttons */}
        <Motion delay={500}>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            {project.link && (
              <Button
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90"
                onClick={() => window.open(project.link, "_blank")}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Live Project
              </Button>
            )}
            {project.github && (
              <Button
                size="lg"
                variant="outline"
                className="flex-1"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="w-5 h-5 mr-2" />
                View Source Code
              </Button>
            )}
            {!project.link && !project.github && (
              <div className="text-center text-muted-foreground py-4">
                <p>No external links available for this project</p>
              </div>
            )}
          </div>
        </Motion>

        {/* Related Projects CTA */}
        <Motion delay={600}>
          <div className="text-center py-12 border-t border-border">
            <p className="text-muted-foreground mb-6 text-lg">
              Interested in seeing more work?
            </p>
            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push("/#projects")}
            >
              View All Projects
            </Button>
          </div>
        </Motion>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4 mt-16">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2025 Damola Kevwe. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
