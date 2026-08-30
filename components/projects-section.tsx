"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Github, Minus, Plus } from "lucide-react"
import { personalInfo } from "@/config/data"
import { SectionHeading } from "@/components/section-heading"

const INITIAL_PROJECT_COUNT = 6

export const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [showAll, setShowAll] = useState(false)
  const projects = showAll ? personalInfo.projects : personalInfo.projects.slice(0, INITIAL_PROJECT_COUNT)

  return (
    <section id="projects" className="section-pad border-y border-border">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="page-shell"
      >
        <SectionHeading
          eyebrow="Selected work"
          title="Products built to solve real problems."
          description="A selection of full stack, security, real-time, and AI-enabled projects—from university platforms to developer tools."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex min-h-[390px] flex-col bg-card p-6 transition-colors hover:bg-background sm:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                {index === 0 && (
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground">
                    Latest addition
                  </span>
                )}
              </div>

              <h3 className="mt-10 font-serif text-3xl leading-tight tracking-[-0.035em]">{project.title}</h3>
              <p className="mt-5 line-clamp-4 text-[15px] leading-7 text-muted-foreground">{project.description}</p>

              <ul className="mt-7 flex flex-wrap gap-x-4 gap-y-2" aria-label={`${project.title} technologies`}>
                {project.tech?.slice(0, 6).map((tech) => (
                  <li key={tech} className="text-xs font-medium text-foreground/70">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center gap-5 border-t border-border pt-6">
                {project.live && project.live !== "Coming Soon" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    View project
                    <ArrowUpRight className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="size-4" />
                    Source
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {personalInfo.projects.length > INITIAL_PROJECT_COUNT && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-foreground/30"
              aria-expanded={showAll}
            >
              {showAll ? <Minus className="size-4" /> : <Plus className="size-4" />}
              {showAll ? "Show selected projects" : `View all ${personalInfo.projects.length} projects`}
            </button>
          </div>
        )}
      </motion.div>
    </section>
  )
}
