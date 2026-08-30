"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { personalInfo } from "@/config/data"
import { SectionHeading } from "@/components/section-heading"

const skillCategories = [
  {
    title: "Frontend",
    names: ["React", "Next.js", "TypeScript", "State Management (Redux, Recoil, Zustand)"],
  },
  {
    title: "Backend",
    names: ["Node.js", "Express", "Hono", "FastAPI"],
  },
  {
    title: "Data & Delivery",
    names: ["PostgreSQL", "Prisma", "MongoDB", "Redis", "Firebase", "Git", "DevOps (Docker, CI/CD, AWS)"],
  },
  {
    title: "AI",
    names: ["GENAI", "LangChain", "LangGraph"],
  },
  {
    title: "Languages",
    names: ["C++", "Python", "JavaScript"],
  },
]

export const SkillsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="skills" className="section-pad border-y border-border">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="page-shell"
      >
        <SectionHeading
          eyebrow="Toolkit"
          title="Modern tools, chosen for the job."
          description="My stack spans product interfaces, backend systems, data, testing, deployment, and applied AI workflows."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="bg-card p-6 sm:p-8"
            >
              <p className="font-mono text-xs text-muted-foreground">0{index + 1}</p>
              <h3 className="mt-6 font-serif text-2xl">{category.title}</h3>
              <ul className="mt-6 space-y-3">
                {personalInfo.skills
                  .filter((skill) => category.names.includes(skill))
                  .map((skill) => (
                    <li key={skill} className="flex items-start gap-3 text-sm leading-5 text-muted-foreground">
                      <span className="mt-2 size-1 rounded-full bg-brand" />
                      {skill}
                    </li>
                  ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
