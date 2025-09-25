"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { User, MapPin, GraduationCap, Calendar, Briefcase } from "lucide-react";
import { RevealAnimation } from "@/components/animations/reveal-animation";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <RevealAnimation>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-gray-100">
              About Me
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
              Get to know more about my{" "}
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-pink-400 bg-clip-text text-transparent font-semibold drop-shadow-sm">
                journey
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-pink-400 bg-clip-text text-transparent font-semibold drop-shadow-sm">
                interests
              </span>
              , and{" "}
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-pink-400 bg-clip-text text-transparent font-semibold drop-shadow-sm">
                what drives me
              </span>{" "}
              as a developer
            </p>
          </div>
        </RevealAnimation>

        {/* Personal Info + Story */}
        <div className="mx-auto mt-16 max-w-4xl">
          <StaggerContainer className="grid gap-8 lg:grid-cols-2">
            {/* My Story */}
            <StaggerItem className="order-1 lg:order-1">
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="p-6 h-full shadow-md hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-gray-100">
                      My Story
                    </h3>
                    <motion.p
                      className="text-gray-700 dark:text-gray-300 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      I'm{" "}
                      <span className="font-semibold bg-gradient-to-r from-purple-300 via-pink-300 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
                        Raj Kumar
                      </span>
                      , a passionate{" "}
                      <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-pink-400 bg-clip-text text-transparent font-semibold drop-shadow-sm">
                        Full Stack Developer
                      </span>{" "}
                      and Computer Science student at Techno India University.
                      My journey in tech began with a fascination for{" "}
                      <span className="font-semibold text-primary">
                        problem-solving
                      </span>{" "}
                      and building things from scratch. Over the years, I've
                      honed my skills in{" "}
                      <span className="font-semibold text-primary">frontend</span>{" "}
                      and{" "}
                      <span className="font-semibold text-primary">backend</span>{" "}
                      development, working with technologies like{" "}
                      <span className="font-semibold">React</span>,{" "}
                      <span className="font-semibold">Next.js</span>,{" "}
                      <span className="font-semibold">Node.js</span>, and more.
                      When I'm not coding, I enjoy exploring new technologies,
                      contributing to{" "}
                      <span className="font-semibold text-primary">
                        open-source projects
                      </span>
                      , and engaging with the developer community.
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>

            {/* Personal Info */}
            <StaggerItem className="order-2 lg:order-2">
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="p-6 h-full shadow-md hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="p-2 rounded-full bg-primary/10"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      >
                        <User className="h-5 w-5 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-gray-100">
                        Personal Info
                      </h3>
                    </div>
                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      {[
                        { icon: MapPin, text: "Kolkata, West Bengal, India" },
                        { icon: GraduationCap, text: "BTech Computer Science Student" },
                        { icon: Calendar, text: "Graduating July 2026" },
                      ].map(({ icon: Icon, text }, index) => (
                        <motion.div
                          key={text}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Icon className="h-4 w-4 text-primary" />
                          <span>{text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>

          {/* What I Do */}
          <RevealAnimation delay={0.4}>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Card className="mt-8 p-6 shadow-md hover:shadow-2xl transition-shadow backdrop-blur-sm bg-white/80 dark:bg-black/50">
                <CardContent className="p-0">
                  <h3 className="text-xl text-center font-semibold mb-6 text-gray-900 dark:text-gray-100">
                    What I Do
                  </h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    {[
                      {
                        title: "Frontend Development",
                        description:
                          "Crafting responsive and engaging UIs with React, Next.js, TailwindCSS, and modern CSS frameworks.",
                        icon: "💻",
                      },
                      {
                        title: "Backend Development",
                        description:
                          "Building secure, scalable APIs and managing databases with Node.js, Express, and MongoDB.",
                        icon: "🛠️",
                      },
                      {
                        title: "Problem Solving",
                        description:
                          "Passionate about algorithms, data structures, and tackling competitive programming challenges.",
                        icon: "🧠",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0px 10px 25px rgba(59,130,246,0.2)",
                        }}
                        className="rounded-lg p-5 bg-muted/50 dark:bg-muted/20 border border-border transition-transform flex flex-col items-start gap-3"
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <h4 className="font-semibold text-purple-300 text-lg">{item.title}</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </RevealAnimation>

          {/* Timeline */}
          <RevealAnimation delay={0.6}>
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Timeline</h3>
              <div className="relative border-l-2 border-muted-foreground/20 ml-4">
                {[
                  {
                    year: "2025",
                    title: "Software Engineering Intern",
                    description:
                      "Completed internship where I implemented the Round Robin CPU scheduling algorithm and worked on industry-level projects.",
                    icon: Briefcase,
                  },
                  {
                    year: "2024",
                    title: "Open Source Contributions",
                    description:
                      "Started contributing to open-source projects and collaborating with the global developer community.",
                    icon: Briefcase,
                  },
                  {
                    year: "2022",
                    title: "BTech Computer Science",
                    description:
                      "Started my undergraduate journey at Techno India University, focusing on software engineering and full-stack development.",
                    icon: GraduationCap,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="mb-10 ml-6"
                  >
                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-purple-300 text-white">
                      <item.icon className="w-4 h-4" />
                    </span>
                    <h4 className="font-semibold text-purple-300">{item.year}</h4>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.title}</h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
