"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingElement } from "@/components/animations/floating-elements";
import { RevealAnimation } from "@/components/animations/reveal-animation";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { projects } from "@/data/portfolio";

export default function Project() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealAnimation>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-300 via-pink-300 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
              Projects
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Some of my favorite work, with beautiful animations
            </p>
          </div>
        </RevealAnimation>

        <div className="mx-auto mt-16 max-w-5xl">
          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {projects.map((project, idx) => (
              <StaggerItem key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-black/50 shadow-md hover:shadow-xl transition-shadow">
                    {/* Project image */}
                    <div className="relative w-full h-48 shrink-0 overflow-hidden rounded-t-lg">
                      <FloatingElement duration={4 + idx}>
                        <motion.img
                          src={project.imageUrl}
                          alt={project.title}
                          className="object-cover w-full h-full"
                          whileHover={{
                            scale: 1.05,
                            rotate: [0, 2, -2, 0],
                          }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 2,
                          }}
                        />
                      </FloatingElement>
                    </div>

                    {/* Project content */}
                    <CardContent className="flex flex-col flex-1 p-6">
                      <h3 className="text-xl font-semibold mb-2 text-purple-400">
                        {project.title}
                      </h3>

                      {/* description */}
                      <p className="text-sm text-muted-foreground mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* links pinned at bottom */}
                      <div className="flex gap-4 mt-auto">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:underline font-medium"
                          >
                            GitHub
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:underline font-medium"
                          >
                            Live
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
