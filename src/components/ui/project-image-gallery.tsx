import Image from "next/image";
import { PortfolioConfig } from "@/config/portfolio";

type Project = PortfolioConfig["projects"][0];

interface ProjectImageGalleryProps {
  project: Project;
  className?: string;
  imageClassName?: string;
  showPlaceholder?: boolean;
  placeholderClassName?: string;
  placeholderVariant?: "default" | "modal";
}

export function ProjectImageGallery({
  project,
  className = "",
  imageClassName = "",
  showPlaceholder = true,
  placeholderClassName = "",
  placeholderVariant = "default",
}: ProjectImageGalleryProps) {
  // Display image gallery if available
  if (project.imageGallery && project.imageGallery.length > 0) {
    return (
      <div className={`space-y-0 ${className}`}>
        {project.imageGallery.map((imageUrl, index) => (
          <div key={index} className={`relative w-full ${imageClassName}`}>
            <Image
              src={imageUrl}
              alt={`${project.title} - Image ${index + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    );
  }

  // Fallback to single image if available
  if (project.image) {
    return (
      <div className={className}>
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={800}
          className={`w-full h-auto ${imageClassName}`}
          sizes="100vw"
        />
      </div>
    );
  }

  // Show placeholder if enabled
  if (showPlaceholder) {
    if (placeholderVariant === "modal") {
      const modalPlaceholderClass =
        placeholderClassName ||
        "flex-1 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center min-h-[200px]";
      return (
        <div className={`${modalPlaceholderClass} ${className}`}>
          <div className="text-center text-white/70">
            <div className="w-24 h-24 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-4xl">🎨</span>
            </div>
            <p className="text-lg font-medium">Project Preview</p>
            <p className="text-sm opacity-60">Image would be displayed here</p>
          </div>
        </div>
      );
    }

    const defaultPlaceholderClass =
      placeholderClassName ||
      "relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted";
    return (
      <div className={`${defaultPlaceholderClass} ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20"></div>
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-background rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-5xl">🎨</span>
            </div>
            <p className="text-lg font-medium">Project Image</p>
            <p className="text-sm opacity-60 mt-1">Image placeholder</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
