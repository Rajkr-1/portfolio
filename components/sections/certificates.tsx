"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Award, Calendar, ExternalLink } from 'lucide-react'
import { certificates } from '@/data/portfolio'

export function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl 
                        bg-gradient-to-r from-purple-300 via-pink-300 to-pink-400 
                        bg-clip-text text-transparent drop-shadow-sm">
            Certificates
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {certificates.map((certificate) => (
              <Card 
                key={certificate.id} 
                className="p-6 shadow-md hover:shadow-lg transition-shadow 
                           backdrop-blur-sm bg-white/80 dark:bg-black/50"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-purple-400" />
                    <div>
                      <CardTitle className="text-lg text-purple-600">
                        {certificate.title}
                      </CardTitle>
                      <p className="text-purple-700/80 font-semibold">
                        {certificate.issuer}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-purple-600/80">
                      <Calendar className="h-4 w-4" />
                      <span>{certificate.date}</span>
                    </div>
                    {certificate.url && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild 
                        className="border-purple-300 text-purple-600 hover:bg-purple-100"
                      >
                        <a href={certificate.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
