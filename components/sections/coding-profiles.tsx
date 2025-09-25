import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Code, Trophy, Github, Star } from 'lucide-react'
import { codingProfiles } from '@/data/portfolio'

const iconMap = {
  Code,
  Trophy,
  Github,
  Star,
}

const platformColors: Record<string, string> = {
  LeetCode: 'text-yellow-400',
  Codeforces: 'text-blue-400',
  HackerRank: 'text-green-400',
  GitHub: 'text-gray-600',
  CodeChef: 'text-orange-400',
  Others: 'text-pink-400',
}

export function CodingProfiles() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-300 via-pink-300 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
            Coding Profiles
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            Check out my coding journey across different platforms
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {codingProfiles.map((profile) => {
              const Icon = iconMap[profile.icon as keyof typeof iconMap] || Code
              const colorClass = platformColors[profile.platform] || platformColors['Others']
              return (
                <Card
                  key={profile.platform}
                  className="text-center p-6 backdrop-blur-sm bg-white/80 dark:bg-black/50 shadow-md hover:shadow-lg transition-shadow hover:scale-105"
                >
                  <CardHeader className="pb-4">
                    <Icon className={`h-8 w-8 mx-auto mb-2 ${colorClass}`} />
                    <CardTitle className={`text-lg font-semibold ${colorClass}`}>
                      {profile.platform}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-2">@{profile.username}</p>

                    <p className="text-sm font-semibold mb-4 bg-gradient-to-r from-purple-400 via-pink-300 to-pink-400 bg-clip-text text-transparent">
                      {profile.rating}
                    </p>

                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full border-purple-300 text-purple-600 hover:bg-purple-200 hover:text-purple-800 transition-colors"
                    >
                      <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Visit
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
