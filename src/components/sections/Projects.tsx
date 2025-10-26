"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Motion, Stagger } from "@/components/ui/motion";
import { GlassModal } from "@/components/ui/glass-modal";
import { portfolioConfig, PortfolioConfig } from "@/config/portfolio";
import { useState } from "react";

type Project = PortfolioConfig["projects"][0];

export function Projects() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { projects } = portfolioConfig;

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const toggleCategory = (category: string) => {
    if (category === "all") {
      setSelectedCategories([]);
    } else {
      setSelectedCategories((prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category)
          : [...prev, category]
      );
    }
  };

  const categories = [
    "all",
    ...Array.from(new Set(projects.flatMap((p) => p.categories))),
  ];
  const filteredProjects =
    selectedCategories.length === 0
      ? projects
      : projects.filter((p) =>
          selectedCategories.some((category) => p.categories.includes(category))
        );

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
                <Card
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => openModal(project)}
                >
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
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-background/10 border-background/20 text-background hover:bg-background/20"
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(project);
                          }}
                        >
                          <span className="mr-2">👁️</span>
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 pt-2 space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {project.categories.map((category) => (
                        <Badge
                          key={category}
                          variant="default"
                          className="text-xs whitespace-nowrap px-3 py-1"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground line-clamp-2 mt-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs whitespace-nowrap px-3 py-1 bg-accent/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs whitespace-nowrap px-3 py-1 bg-accent/10"
                        >
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
                  variant={
                    selectedCategories.includes(category) ||
                    (category === "all" && selectedCategories.length === 0)
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  onClick={() => toggleCategory(category)}
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
            <Motion
              key={`${selectedCategories.join("-")}-${project.id}`}
              delay={index * 50}
            >
              <Card
                className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 bg-background rounded-lg flex items-center justify-center">
                        <span className="text-lg">📱</span>
                      </div>
                      <p className="text-xs">{project.categories[0]}</p>
                      {project.categories.length > 1 && (
                        <p className="text-xs opacity-60">
                          +{project.categories.length - 1} more
                        </p>
                      )}
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

      {/* Project Modal */}
      <GlassModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
        // Glass surface customization with pink hint
        blur={20}
        opacity={0.85}
        saturation={1.5}
      />
    </section>
  );
}
