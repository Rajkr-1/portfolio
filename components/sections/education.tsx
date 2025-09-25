import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { education } from '@/data/portfolio'

export function Education() {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-300 via-pink-300 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
            Education
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            My academic journey and educational background
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.id} className="p-6 shadow-md hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-6 w-6 text-purple-300" />
                      <div>
                        <CardTitle className="text-xl font-semibold text-purple-300">{edu.degree}</CardTitle>
                        <p className="text-lg font-semibold bg-gradient-to-r from-purple-300 via-pink-300 to-pink-400 bg-clip-text text-transparent mt-1 drop-shadow-sm">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    {edu.grade && (
                      <Badge className="ml-4 bg-purple-100 text-purple-700">
                        {edu.grade}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-purple-300" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-purple-300" />
                      <span>{edu.startDate} - {edu.endDate}</span>
                    </div>
                  </div>
                  {edu.description && (
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
