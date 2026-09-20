"use client"

import { motion } from "framer-motion"
import { ArrowDownRight, ArrowUpRight, BookOpen, Code2, Github, Linkedin, Mail } from "lucide-react"
import { personalInfo } from "@/config/data"

const socialLinks = [
  { label: "GitHub", href: personalInfo.github, icon: Github },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: Linkedin },
  { label: "LeetCode", href: personalInfo.leetcode, icon: Code2 },
  { label: "Medium", href: personalInfo.medium, icon: BookOpen },
]

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[100svh] border-b border-border pt-18">
      <div className="fine-grid absolute inset-0 opacity-45 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div id="main-content" className="page-shell relative flex min-h-[calc(100svh-4.5rem)] items-center py-16 sm:py-20 lg:py-24">
        <div className="grid w-full items-end gap-14 lg:grid-cols-[minmax(0,1.45fr)_minmax(310px,0.65fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="size-2 rounded-full bg-brand" />
              Full stack development · Cybersecurity
            </div>

            <h1 className="font-serif text-[clamp(2.8rem,6.5vw,6rem)] leading-[0.9] tracking-[-0.055em]">
              Building for the web,
              <span className="block italic text-brand">with security in mind.</span>
            </h1>

            <div className="mt-9 grid max-w-4xl gap-8 border-t border-border pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                I&apos;m {personalInfo.name}, a full stack developer who turns complex product ideas into dependable,
                well-crafted digital experiences.
              </p>

              <a
                href="#projects"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Explore my work
                <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="size-4" />
                  {label}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4" />
                {personalInfo.email}
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="border-l border-border pl-6 sm:pl-8"
            aria-label="Current role and focus"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Currently</p>
            <p className="mt-4 font-serif text-2xl leading-tight">Cybersecurity &amp; Software Development Intern</p>
            <p className="mt-2 text-sm font-semibold text-brand">{personalInfo.experience[0].company}</p>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              Supporting secure software delivery, vulnerability assessment, monitoring, and access management.
            </p>

            <dl className="mt-8 overflow-hidden rounded-lg border border-border">
              <div className="bg-card p-4">
                <dt className="text-xs text-muted-foreground">Core focus</dt>
                <dd className="mt-1 font-serif text-2xl">Secure web</dd>
              </div>
            </dl>

          </motion.aside>
        </div>
      </div>
    </section>
  )
}
