import { PortfolioConfig } from "@/config/portfolio";

type Project = PortfolioConfig["projects"][0];

interface ProjectDescriptionProps {
  description: Project["description"];
  className?: string;
  paragraphClassName?: string;
}

export function ProjectDescription({
  description,
  className = "",
  paragraphClassName = "",
}: ProjectDescriptionProps) {
  // Handle array of paragraphs
  if (Array.isArray(description)) {
    return (
      <div className={className}>
        {description.map((paragraph, index) => (
          <p
            key={index}
            className={paragraphClassName || "mb-4 last:mb-0"}
          >
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  // Handle string description (backward compatibility)
  // Split by double newlines to create paragraphs if they exist
  const paragraphs = description.split(/\n\n+/).filter((p) => p.trim());
  
  if (paragraphs.length > 1) {
    return (
      <div className={className}>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={paragraphClassName || "mb-4 last:mb-0"}
          >
            {paragraph.trim()}
          </p>
        ))}
      </div>
    );
  }

  // Single paragraph
  return (
    <p className={`${className} ${paragraphClassName}`}>
      {description}
    </p>
  );
}
