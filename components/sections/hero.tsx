"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { FloatingElement, PulseElement } from "@/components/animations/floating-elements"
import { MagneticButton } from "@/components/animations/magnetic-button"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) return null

  const socialLinks = [
    { href: "https://github.com/rajkr-1", icon: Github, gradient: "from-purple-500 via-pink-500 to-blue-500" },
    { href: "https://linkedin.com/in/rajk-2004r", icon: Linkedin, gradient: "from-purple-500 via-pink-500 to-blue-500" },
    { href: "mailto:mailrajk321@gmail.com", icon: Mail, gradient: "from-purple-500 via-pink-500 to-blue-500" },
  ]

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background to-muted/30 overflow-hidden"
    >
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement delay={0} duration={6} className="absolute top-20 left-10 opacity-25">
          <motion.div className="w-32 h-32 bg-primary/10 rounded-full blur-2xl" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} />
        </FloatingElement>
        <FloatingElement delay={1} duration={5} className="absolute top-40 right-20 opacity-20">
          <motion.div className="w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} />
        </FloatingElement>
        <FloatingElement delay={2} duration={4} className="absolute bottom-20 left-1/4 opacity-25">
          <motion.div className="w-44 h-44 bg-purple-500/10 rounded-full blur-3xl" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 50, ease: "linear" }} />
        </FloatingElement>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-32 sm:py-40 lg:px-8 text-center">
        {/* Profile Photo with gradient ring */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="flex justify-center mb-8 relative"
        >
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1" style={{ background: "conic-gradient(from 0deg, #ff0080, #7928ca, #00f5d4, #ff0080)" }}>
            <div className="w-full h-full rounded-full bg-background overflow-hidden ring-0 shadow-xl">
              <Image
                src="/myphoto.jpg"
                alt="Raj Kumar"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Floating Scroll Down Arrow */}
        <motion.div
          onClick={scrollToAbout}
          className="absolute bottom-12 cursor-pointer"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-8 w-8 text-purple-500 animate-bounce" />
        </motion.div>

        {/* Intro Text */}
        <motion.h1
          className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-textShimmer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm Raj Kumar
        </motion.h1>

        <motion.p
          className="mt-2 text-lg sm:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full Stack Developer & Computer Science Student at Techno India University
        </motion.p>

        <motion.p
          className="mt-2 text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Passionate about building innovative web apps and solving real-world problems 🚀
        </motion.p>

        {/* Buttons */}
        <motion.div className="mt-10 flex flex-wrap items-center justify-center gap-4" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
          <MagneticButton>
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="backdrop-blur-sm bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white shadow-md hover:scale-105 transition-transform flex items-center gap-2"
            >
              View My Work
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </Button>
          </MagneticButton>

          <MagneticButton>
            <Button
              size="lg"
              asChild
              className="backdrop-blur-sm border border-purple-600/60 text-purple-600 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 hover:text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </MagneticButton>

          <MagneticButton>
            <a
              href="/mycv.pdf"
               rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded shadow-md hover:scale-105 transition-transform"
            >
              Download CV / Hire Me
            </a>
          </MagneticButton>
        </motion.div>

        {/* Social Icons */}
        <motion.div className="mt-10 flex items-center justify-center gap-x-6" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}>
          {socialLinks.map(({ href, icon: Icon, gradient }) => (
            <motion.a
              key={href}
              href={href}
              target={href.includes("mailto") ? undefined : "_blank"}
              rel={href.includes("mailto") ? undefined : "noopener noreferrer"}
              className={`bg-gradient-to-br ${gradient} p-3 rounded-full text-white shadow-lg hover:scale-125 transition-transform`}
              whileHover={{ rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <PulseElement>
                <Icon className="h-6 w-6" />
              </PulseElement>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
