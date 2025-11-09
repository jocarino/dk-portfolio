"use client";

import { portfolioConfig } from "@/config/portfolio";
import { use } from "react";
import { ProjectDetail } from "@/components/sections/ProjectDetail";
import { Navigation } from "@/components/Navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const project = portfolioConfig.projects.find((p) => p.id === id);

  useEffect(() => {
    if (!project) {
      router.push("/#projects");
    }
  }, [project, router]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Project not found</p>
          <button
            onClick={() => router.push("/#projects")}
            className="text-primary hover:underline"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation
        customLogo={
          <Button
            variant="ghost"
            onClick={() => router.push("/#projects")}
            className="group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Button>
        }
      />
      <ProjectDetail project={project} />
    </div>
  );
}

