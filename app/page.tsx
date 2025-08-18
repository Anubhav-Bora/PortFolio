"use client"

import { useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificatesSection } from "@/components/certificates-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    document.documentElement.style.scrollPaddingTop = "2rem"

    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      section.style.scrollSnapAlign = "start"
    })

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
      document.documentElement.style.scrollPaddingTop = "0"
    }
  }, [])

  return (
    <main className="min-h-screen scroll-smooth">
      <div className="scroll-snap-y scroll-snap-mandatory">
        <HeroSection />
        <SkillsSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <CertificatesSection />
        <Footer />
      </div>
    </main>
  )
}
