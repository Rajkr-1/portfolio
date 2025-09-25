import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { experience } from '@/data/portfolio'

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-300 via-pink-300 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
            Experience
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            My professional journey and work experience
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-6">
            {experience.map((exp) => (
              <Card key={exp.id} className="p-6 shadow-md hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-6 w-6 text-purple-300" />
                      <div>
                        <CardTitle className="text-xl font-semibold text-purple-300">{exp.title}</CardTitle>
                        <p className="text-lg font-semibold bg-gradient-to-r from-purple-300 via-pink-300 to-pink-400 bg-clip-text text-transparent mt-1 drop-shadow-sm">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-purple-300" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-purple-300" />
                      <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    {exp.description.map((desc, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-purple-300 mt-2">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} className="bg-purple-100 text-purple-700">
                        {tech}
                      </Badge>
                    ))}
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
