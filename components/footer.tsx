"use client"

import { Logo } from "./logo"
import { personalInfo } from "@/config/data"

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo and Name */}
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8 text-primary" />
            <span className="text-lg font-semibold">{personalInfo.name}</span>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Experience", href: "#experience" },
              { label: "Projects", href: "#projects" },
              { label: "Certificates", href: "#certificates" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="mt-1">Built with React, Next.js, and TailwindCSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
