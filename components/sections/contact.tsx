"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = () => {
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400">
            Contact Me
          </h2>
          <p className="mt-6 text-lg leading-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            Let's connect and discuss opportunities or collaborations
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-purple-500">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-purple-500" />
                    <span className="text-purple-600">mailrajk321@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-purple-500" />
                    <span className="text-purple-600">+91 62066 98870</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-purple-500" />
                    <span className="text-purple-600">Kolkata, West Bengal, India</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400">
                    Follow Me
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Rajkr-1"
                      className="hover:text-pink-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-6 w-6 text-purple-500" />
                    </a>
                    <a
                      href="https://linkedin.com/in/rajk-2004r"
                      className="hover:text-pink-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-6 w-6 text-purple-500" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Formspree Form */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400">
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  action="https://formspree.io/f/mblzlrzy"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="text-purple-700 placeholder:text-purple-400"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="text-purple-700 placeholder:text-purple-400"
                    />
                  </div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="text-purple-700 placeholder:text-purple-400"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="text-purple-700 placeholder:text-purple-400"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-400 text-white border-none hover:from-pink-400 hover:to-purple-500 transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 text-white" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
