"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar } from "lucide-react"
import { achievements } from "@/data/portfolio"

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-300 via-pink-300 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
            Achievements
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Recognition and accomplishments throughout my journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="p-6 h-full shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm bg-white/80 dark:bg-black/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                          <Trophy className="h-6 w-6 text-purple-400" />
                        </motion.div>
                        <div>
                          <CardTitle className="text-lg text-purple-600">
                            {achievement.title}
                          </CardTitle>
                        </div>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800">{achievement.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-purple-700/80 mb-3 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-purple-600/80">
                      <Calendar className="h-4 w-4" />
                      <span>{achievement.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
