"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BriefcaseBusiness } from "lucide-react"
import { personalInfo } from "@/config/data"
import { SectionHeading } from "@/components/section-heading"

export const ExperienceSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="experience" className="section-pad bg-card">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="page-shell"
      >
        <SectionHeading
          eyebrow="Experience"
          title="Learning by building in real environments."
          description="Hands-on roles across secure software, production web applications, real-time systems, and learning platforms."
        />

        <div className="mt-16 border-t border-border">
          {personalInfo.experience.map((experience, index) => {
            const isCurrent = experience.duration.includes("Present")

            return (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="grid gap-5 border-b border-border py-8 sm:grid-cols-[9rem_1fr] lg:grid-cols-[12rem_0.8fr_1.2fr] lg:gap-10 lg:py-10"
              >
                <div>
                  <p className="font-mono text-xs text-muted-foreground">{experience.duration}</p>
                  {isCurrent && (
                    <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground">
                      <span className="size-1.5 rounded-full bg-brand" />
                      Current
                    </span>
                  )}
                </div>

                <div>
                  <div className="mb-3 flex size-9 items-center justify-center rounded-full border border-border bg-background lg:hidden">
                    <BriefcaseBusiness className="size-4" />
                  </div>
                  <h3 className="font-serif text-2xl leading-tight">{experience.role}</h3>
                  <p className="mt-2 text-sm font-semibold text-brand">{experience.company}</p>
                </div>

                <p className="text-[15px] leading-7 text-muted-foreground sm:col-start-2 lg:col-start-auto">
                  {experience.details}
                </p>
              </motion.article>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
