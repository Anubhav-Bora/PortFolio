"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowDown, Github, Linkedin, Code2 } from "lucide-react"
import { personalInfo } from "@/config/data"
import { Logo } from "@/components/logo"

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-slate-800/20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="fixed top-6 left-6 z-50"
      >
        <Logo />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-6"
      >
        <motion.a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, x: 5 }}
          className="text-slate-500 hover:text-white transition-all duration-300"
        >
          <Github className="w-5 h-5" />
        </motion.a>
        <motion.a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, x: 5 }}
          className="text-slate-500 hover:text-blue-400 transition-all duration-300"
        >
          <Linkedin className="w-5 h-5" />
        </motion.a>
        <motion.a
          href={personalInfo.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, x: 5 }}
          className="text-slate-500 hover:text-orange-400 transition-all duration-300"
        >
          <Code2 className="w-5 h-5" />
        </motion.a>
        <motion.a
          href={personalInfo.twitter}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, x: 5 }}
          className="text-slate-500 hover:text-white transition-all duration-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </motion.a>
        <div className="w-px h-20 bg-slate-700 mx-auto"></div>
      </motion.div>

      <div className="container mx-auto px-6 text-left relative z-10 max-w-6xl ml-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="text-sm text-slate-500 font-mono tracking-wider">Hi, my name is</div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight">
              {personalInfo.name.split(" ")[0]}
            </h1>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-400 leading-none tracking-tight">
              {personalInfo.name.split(" ").slice(1).join(" ")}
            </h2>

            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-600 leading-none tracking-tight">
              {personalInfo.title.split(" ")[0]} the web, better.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-lg space-y-6"
          >
            <p className="text-lg text-slate-400 leading-relaxed">{personalInfo.about}</p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 bg-transparent"
                onClick={() => window.open(personalInfo.linkedin, "_blank")}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black transition-all duration-300 bg-transparent"
                onClick={() => window.open(personalInfo.leetcode, "_blank")}
              >
                <Code2 className="mr-2 h-4 w-4" />
                LeetCode Profile
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="pt-8"
          >
            <Button
              variant="ghost"
              size="lg"
              className="text-emerald-400 hover:text-emerald-300 border border-emerald-500/50 hover:border-emerald-400 bg-transparent hover:bg-emerald-500/10 px-8 py-3 transition-all duration-300"
              onClick={scrollToContact}
            >
              <Download className="mr-3 h-4 w-4" />
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 right-8 cursor-pointer"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
            className="text-slate-700 hover:text-slate-500 transition-colors duration-500"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
