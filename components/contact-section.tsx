"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Check, Github, Linkedin, LoaderCircle, Mail, Phone, Send } from "lucide-react"
import { personalInfo } from "@/config/data"

type FormState = "idle" | "submitting" | "success" | "error"

const initialForm = { name: "", email: "", subject: "", message: "" }

export const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [formData, setFormData] = useState(initialForm)
  const [formState, setFormState] = useState<FormState>("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormState("submitting")
    setStatusMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const result = await response.json()

      if (!response.ok) throw new Error(result.message || "Unable to send your message.")

      setFormState("success")
      setStatusMessage("Thanks—your message is on its way. I’ll get back to you soon.")
      setFormData(initialForm)
    } catch (error) {
      setFormState("error")
      setStatusMessage(
        error instanceof Error
          ? error.message
          : `Something went wrong. Please email me directly at ${personalInfo.email}.`,
      )
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }))
    if (formState === "error") setFormState("idle")
  }

  const fieldClassName =
    "mt-2 w-full rounded-lg border border-white/20 bg-white/[0.04] px-4 py-3 text-base text-[#f4f1e8] outline-none transition placeholder:text-white/35 focus:border-[#c6d88b] focus:ring-2 focus:ring-[#c6d88b]/20"

  return (
    <section id="contact" className="bg-[#19342a] py-20 text-[#f4f1e8] sm:py-24 lg:py-28">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="page-shell"
      >
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c6d88b]">Contact</p>
            <h2 className="mt-6 max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.05em] sm:text-6xl">
              Let&apos;s make something useful.
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-white/65">
              Have a role, project, or technical problem in mind? Tell me a little about it and I&apos;ll respond as soon
              as I can.
            </p>

            <div className="mt-10 space-y-4 border-t border-white/15 pt-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex w-fit items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail className="size-4 text-[#c6d88b]" />
                {personalInfo.email}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                className="flex w-fit items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Phone className="size-4 text-[#c6d88b]" />
                {personalInfo.phone}
              </a>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white/65 transition-colors hover:border-white/50 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="size-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white/65 transition-colors hover:border-white/50 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-white/15 bg-white/[0.035] p-5 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-white/75">
                Name
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  className={fieldClassName}
                />
              </label>
              <label className="text-sm font-medium text-white/75">
                Email
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className={fieldClassName}
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-medium text-white/75">
              Subject
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                required
                className={fieldClassName}
              />
            </label>

            <label className="mt-5 block text-sm font-medium text-white/75">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="A few details about your project or opportunity..."
                required
                rows={5}
                className={`${fieldClassName} resize-none`}
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p
                className={`text-sm ${formState === "error" ? "text-red-300" : "text-[#c6d88b]"}`}
                aria-live="polite"
              >
                {formState === "success" && <Check className="mr-2 inline size-4" />}
                {statusMessage}
              </p>
              <button
                type="submit"
                disabled={formState === "submitting"}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#c6d88b] px-5 py-3 text-sm font-semibold text-[#19342a] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {formState === "submitting" ? (
                  <LoaderCircle className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
                {formState === "submitting" ? "Sending" : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
