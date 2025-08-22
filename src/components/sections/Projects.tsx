"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Motion, Stagger } from "@/components/ui/motion";
import { portfolioConfig } from "@/config/portfolio";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const { projects } = portfolioConfig;

  const categories = [
    "all",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <Motion>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my design philosophy and
              technical expertise
            </p>
          </div>
        </Motion>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Stagger>
            {featuredProjects.map((project, index) => (
              <Motion key={project.id} delay={index * 100}>
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 bg-background rounded-lg flex items-center justify-center">
                          <span className="text-2xl">🎨</span>
                        </div>
                        <p className="text-sm">Project Image</p>
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-3">
                        {project.link && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-background/10 border-background/20 text-background hover:bg-background/20"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        )}
                        {project.github && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-background/10 border-background/20 text-background hover:bg-background/20"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Motion>
            ))}
          </Stagger>
        </div>

        {/* All Projects Section */}
        <Motion delay={600}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              All Projects
            </h3>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </Motion>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Motion key={`${filter}-${project.id}`} delay={index * 50}>
              <Card className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 bg-background rounded-lg flex items-center justify-center">
                        <span className="text-lg">📱</span>
                      </div>
                      <p className="text-xs">{project.category}</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Motion>
          ))}
        </div>

        {/* CTA */}
        <Motion delay={800}>
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Interested in working together?
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let&apos;s Talk
            </Button>
          </div>
        </Motion>
      </div>
    </section>
  );
}
