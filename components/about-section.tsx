"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { personalInfo } from "@/config/data"
import { SectionHeading } from "@/components/section-heading"

const workingStyle = [
  ["01", "Product-minded", "I start with the user and the problem, then choose the smallest dependable solution."],
  ["02", "Security-aware", "Authentication, access control, validation, and observability are part of the build—not an afterthought."],
  ["03", "End-to-end", "I work comfortably from interface details and APIs to data models, testing, and deployment."],
]

export const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const education = personalInfo.education[0]

  return (
    <section id="about" className="section-pad bg-card">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="page-shell"
      >
        <SectionHeading
          eyebrow="About"
          title="A practical engineer with an eye for the details."
          description="I care about how a product works, how it feels to use, and how safely it behaves in the real world."
        />

        <div className="mt-16 grid gap-12 border-t border-border pt-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <div>
            <p className="max-w-3xl text-xl leading-9 text-foreground/85 sm:text-2xl sm:leading-10">{personalInfo.about}</p>

            <div className="mt-12 divide-y divide-border border-y border-border">
              {workingStyle.map(([number, title, description]) => (
                <div key={number} className="grid gap-3 py-6 sm:grid-cols-[3rem_10rem_1fr] sm:gap-5">
                  <span className="font-mono text-xs text-muted-foreground">{number}</span>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-xl border border-border bg-background p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Education</p>
            <h3 className="mt-5 font-serif text-2xl leading-tight">{education.degree}</h3>
            <p className="mt-3 font-semibold">{education.institution}</p>
            <p className="mt-1 text-sm text-muted-foreground">{education.duration}</p>
            <p className="mt-6 border-t border-border pt-6 text-sm leading-6 text-muted-foreground">{education.details}</p>
            <a
              href="#experience"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              View experience
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </aside>
        </div>
      </motion.div>
    </section>
  )
}
