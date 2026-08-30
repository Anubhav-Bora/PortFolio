"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { personalInfo } from "@/config/data"
import { SectionHeading } from "@/components/section-heading"

export const CertificatesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="certificates" className="section-pad bg-card">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="page-shell"
      >
        <SectionHeading
          eyebrow="Credentials"
          title="Continually sharpening the craft."
          description="Selected certifications and competitive milestones across development, AI, and modern data systems."
        />

        <div className="mt-16 border-t border-border">
          {personalInfo.certificates.map((certificate, index) => (
            <a
              key={`${certificate.title}-${certificate.date}`}
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
              className="group grid gap-4 border-b border-border py-6 transition-colors hover:bg-background/70 sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:px-4"
            >
              <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-serif text-xl leading-snug transition-colors group-hover:text-brand">{certificate.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {certificate.issuer} <span aria-hidden="true">·</span> {certificate.date}
                </p>
                {certificate.description && (
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">{certificate.description}</p>
                )}
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
