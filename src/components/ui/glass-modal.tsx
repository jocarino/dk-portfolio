"use client";

import { X } from "lucide-react";
import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GlassSurface from "./glass-surface";

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

interface GlassModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  // Glass surface customization props
  blur?: number;
  opacity?: number;
  saturation?: number;
}

export function GlassModal({
  project,
  isOpen,
  onClose,
  blur = 26,
  opacity = 0.93,
  saturation = 1.8,
}: GlassModalProps) {
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
            className="fixed inset-0 z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <GlassSurface
              width="90vw"
              height="90vh"
              borderRadius={14}
              blur={70}
              displace={4}
              opacity={opacity}
              saturation={saturation}
              distortionScale={-40}
              backgroundOpacity={0.8}
              brightness={60}
              mixBlendMode="soft-light"
              className="max-w-4xl max-h-[800px]"
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(236, 72, 153, 0.1) 0%, 
                    rgba(236, 72, 153, 0.05) 50%, 
                    rgba(236, 72, 153, 0.1) 100%
                  ),
                  linear-gradient(45deg, 
                    rgba(255, 255, 255, 0.25) 0%, 
                    rgba(255, 255, 255, 0.1) 50%, 
                    rgba(255, 255, 255, 0.05) 100%
                  )
                `,
                backdropFilter: `blur(${blur}px) saturate(${saturation})`,
                border: "1px solid rgba(236, 72, 153, 0.2)",
                boxShadow: `
                  0 8px 32px 0 rgba(236, 72, 153, 0.2),
                  0 0 0 1px rgba(236, 72, 153, 0.1) inset,
                  0 0 0 1px rgba(255, 255, 255, 0.1) inset
                `,
              }}
            >
              <div className="relative w-full h-full overflow-hidden">
                {/* Pink hint overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(circle at 30% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)
                    `,
                  }}
                />

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="cursor-pointer absolute top-4 right-4 z-10 p-3 rounded-full transition-all duration-200 group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
                >
                  <X className="w-5 h-5 text-white group-hover:text-pink-200 transition-colors" />
                </button>

                {/* Content */}
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                          {project.title}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                          {project.categories.map((category) => (
                            <span
                              key={category}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-500/20 text-pink-200 border border-pink-500/30 backdrop-blur-sm"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Image */}
                  <div className="flex-1 relative overflow-hidden rounded-xl m-4 bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
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
                  <div className="p-6 pt-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      {project.link && (
                        <button
                          className="cursor-pointer flex-1 px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 flex items-center justify-center bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/30 backdrop-blur-sm"
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
            </GlassSurface>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
