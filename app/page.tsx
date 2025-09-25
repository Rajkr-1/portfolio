import  Header  from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Education } from '@/components/sections/education'
import { Experience } from '@/components/sections/experience'
import Projects from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { Achievements } from '@/components/sections/achievements'
import { CodingProfiles } from '@/components/sections/coding-profiles'
import { Certificates } from '@/components/sections/certificates'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <CodingProfiles />
      <Achievements />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  )
}