"use client";

import {
  X,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

interface Project {
  id: string;
  title: string;
  description: string;
  categories: string[];
  image: string;
  tags: string[];
  featured: boolean;
  link?: string;
  github?: string;
}

interface SimpleModalProps {
  project: Project | null;
  allProjects: Project[];
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (project: Project) => void;
}

export function SimpleModal({
  project,
  allProjects,
  isOpen,
  onClose,
  onNavigate,
}: SimpleModalProps) {
  const router = useRouter();
  // Find current project index
  const currentIndex = project
    ? allProjects.findIndex((p) => p.id === project.id)
    : -1;
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < allProjects.length - 1;

  const handlePrevious = useCallback(() => {
    if (hasPrevious && currentIndex > 0) {
      onNavigate(allProjects[currentIndex - 1]);
    }
  }, [hasPrevious, currentIndex, allProjects, onNavigate]);

  const handleNext = useCallback(() => {
    if (hasNext && currentIndex >= 0 && currentIndex < allProjects.length - 1) {
      onNavigate(allProjects[currentIndex + 1]);
    }
  }, [hasNext, currentIndex, allProjects, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen || !project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && hasPrevious) {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === "ArrowRight" && hasNext) {
        e.preventDefault();
        handleNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    isOpen,
    hasPrevious,
    hasNext,
    handlePrevious,
    handleNext,
    onClose,
    project,
  ]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-8"
            onClick={onClose}
          >
            {/* Navigation buttons - Positioned outside modal on desktop, on parent container */}
            {hasPrevious && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-pink-200 transition-colors" />
              </button>
            )}

            {hasNext && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="hidden md:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-pink-200 transition-colors" />
              </button>
            )}

            <div
              className="relative w-full max-w-4xl h-[85vh] bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-pink-500/5 pointer-events-none" />

              {/* Close button - Top right, highest z-index */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 group"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-white group-hover:text-pink-200 transition-colors" />
              </button>

              {/* Fixed Title with integrated navigation controls */}
              <motion.div
                key={`title-${project.id}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="relative p-6 pb-0 flex-shrink-0 z-10"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-3xl font-bold text-white flex-1 pr-4">
                    {project.title}
                  </h2>
                  {/* Project counter and navigation controls - compact header version */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {/* Compact navigation buttons - visible on mobile, hidden on desktop (where side buttons show) */}
                    <div className="flex md:hidden items-center gap-1 pr-10 ">
                      {hasPrevious && (
                        <button
                          onClick={handlePrevious}
                          className="p-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 group"
                          aria-label="Previous project"
                        >
                          <ChevronLeft className="w-4 h-4 text-white group-hover:text-pink-200 transition-colors" />
                        </button>
                      )}
                      {hasNext && (
                        <button
                          onClick={handleNext}
                          className="p-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 group"
                          aria-label="Next project"
                        >
                          <ChevronRight className="w-4 h-4 text-white group-hover:text-pink-200 transition-colors" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Scrollable Content */}
              <div
                className="relative px-6 pb-6 flex-1 overflow-y-auto"
                data-modal-content
              >
                <motion.div
                  key={`content-${project.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Description and Categories */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.categories.map((category) => (
                        <span
                          key={category}
                          className="px-3 py-1 rounded-full text-sm font-medium bg-pink-500/20 text-pink-200 border border-pink-500/30 backdrop-blur-sm"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  {/* Project Image Placeholder */}
                  <div className="flex-1 mb-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center min-h-[200px]">
                    <div className="text-center text-white/70">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">
                        <span className="text-4xl">🎨</span>
                      </div>
                      <p className="text-lg font-medium">Project Preview</p>
                      <p className="text-sm opacity-60">
                        Image would be displayed here
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-lg text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      {project.featured && (
                        <button
                          className="flex-1 px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 flex items-center justify-center bg-pink-500/30 hover:bg-pink-500/40 border border-pink-500/40 backdrop-blur-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                            router.push(`/projects/${project.id}`);
                          }}
                        >
                          <ArrowRight className="w-4 h-4 mr-2" />
                          View Full Project
                        </button>
                      )}
                      {project.link && (
                        <button
                          className="flex-1 px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 flex items-center justify-center bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/30 backdrop-blur-sm"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </button>
                      )}
                      {project.github && (
                        <button
                          className="flex-1 px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </button>
                      )}
                    </div>

                    {/* Navigation hint */}
                    <div className="flex items-center justify-center gap-4 pt-2 text-xs text-white/30">
                      {hasPrevious && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrevious();
                          }}
                          className="flex items-center gap-1"
                        >
                          <span className="flex items-center gap-1">
                            <kbd className="px-2 py-1 rounded bg-white/5 border border-white/10">
                              ←
                            </kbd>
                            <span>Previous</span>
                          </span>
                        </button>
                      )}
                      {hasNext && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                          }}
                          className="flex items-center gap-1"
                        >
                          <span className="flex items-center gap-1">
                            <span>Next</span>
                            <kbd className="px-2 py-1 rounded bg-white/5 border border-white/10">
                              →
                            </kbd>
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
