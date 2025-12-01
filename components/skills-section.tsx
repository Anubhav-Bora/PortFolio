"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { personalInfo } from "@/config/data"

export const SkillsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Skills & Technologies
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {personalInfo.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-default"
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
            {/* Add LangChain, LangGraph, and GEN AI visually if not present in skills array */}
            {!personalInfo.skills.includes("LangChain") && (
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors">LangChain</Badge>
            )}
            {!personalInfo.skills.includes("LangGraph") && (
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors">LangGraph</Badge>
            )}
            {!personalInfo.skills.includes("GEN AI") && (
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors">GEN AI</Badge>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
