"use client";

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { skills } from '@/data/portfolio'
import { RevealAnimation } from '@/components/animations/reveal-animation'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealAnimation>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-300 via-pink-300 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
              Skills
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>
        </RevealAnimation>

        <div className="mx-auto mt-16 max-w-4xl">
          <StaggerContainer className="grid gap-6 md:grid-cols-2" staggerDelay={0.15}>
            {skills.map((skillCategory) => (
              <StaggerItem key={skillCategory.category}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 h-full backdrop-blur-sm bg-white/80 dark:bg-black/50 shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg text-purple-400">
                        {skillCategory.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2">
                        {skillCategory.items.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.1,
                              rotate: [0, -3, 3, 0],
                              transition: { duration: 0.3 }
                            }}
                          >
                            <Badge 
                              variant="outline" 
                              className="bg-gradient-to-r from-purple-100 via-pink-100 to-pink-200 text-purple-700 hover:bg-purple-300 hover:text-white transition-all duration-300 cursor-pointer"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
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
  )
}
