import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 flex flex-col items-center gap-6">

        {/* Made with Love centered */}
        <div className="flex items-center gap-2 text-center">
          <span className="text-gray-600">Made with</span>
          <Heart className="h-4 w-4 text-red-500 fill-current" />
          <span className="text-gray-600">by Raj</span>
        </div>

        {/* Social Links centered */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Rajkr-1"
            className="bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-2 rounded-full text-white shadow-md hover:scale-125 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/rajk-2004r"
            className="bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-2 rounded-full text-white shadow-md hover:scale-125 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:mailrajk321@gmail.com"
            className="bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-2 rounded-full text-white shadow-md hover:scale-125 transition-transform"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Raj Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
