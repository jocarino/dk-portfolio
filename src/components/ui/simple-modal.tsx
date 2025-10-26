"use client";

import { X, ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  isOpen: boolean;
  onClose: () => void;
}

export function SimpleModal({ project, isOpen, onClose }: SimpleModalProps) {
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
            className="fixed inset-0 z-50 flex items-center justify-center p-2"
            onClick={onClose}
          >
            <div
              className="relative w-full max-w-4xl h-[85vh] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-pink-500/5 pointer-events-none" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 group"
              >
                <X className="w-5 h-5 text-white group-hover:text-pink-200 transition-colors" />
              </button>

              {/* Fixed Title */}
              <div className="relative p-6 pb-0 flex-shrink-0">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {project.title}
                </h2>
              </div>

              {/* Scrollable Content */}
              <div className="relative px-6 pb-6 flex-1 overflow-y-auto">
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
                  <div className="flex gap-3">
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
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
