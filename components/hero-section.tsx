"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowDown, Github, Linkedin, Code2, Sparkles } from "lucide-react"
import { personalInfo } from "@/config/data"
import { Logo } from "@/components/logo"
import { useState, useEffect } from "react"

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 100, -50, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-600/8 rounded-full blur-3xl"
        />
      </div>

      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(148, 163, 184, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(148, 163, 184, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div
        className="absolute w-[600px] h-[600px] pointer-events-none"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 150 }}
      >
        <div className="w-full h-full bg-gradient-radial from-slate-400/5 via-transparent to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        className="fixed top-6 left-6 z-50"
      >
        <Logo />
      </motion.div>

      <motion.div style={{ opacity }} className="container mx-auto px-6 text-left relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center gap-2 text-sm text-slate-400 font-mono tracking-widest uppercase"
            >
              <Sparkles className="w-4 h-4" />
              <span>Welcome to my portfolio</span>
            </motion.div>

            {/* Main heading with improved gradient */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                  <span className="inline-block bg-gradient-to-r from-white via-emerald-100 to-emerald-50 bg-clip-text text-transparent">
                    {personalInfo.name.split(" ")[0]}
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="inline-block bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent">
                    {personalInfo.name.split(" ").slice(1).join(" ")}
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight">
                  <span className="inline-block bg-gradient-to-r from-slate-400 to-slate-600 bg-clip-text text-transparent">
                    {personalInfo.title}
                  </span>
                </h3>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-2xl space-y-8"
          >
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light border-l-2 border-slate-600 pl-6">
              "Passionate about technology, fitness, travel, and exploring new things — I build, learn, and grow every
              day."
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {[
                {
                  href: personalInfo.github,
                  icon: Github,
                  label: "GitHub",
                  color: "hover:bg-white/5 hover:border-white",
                },
                {
                  href: personalInfo.linkedin,
                  icon: Linkedin,
                  label: "LinkedIn",
                  color: "hover:bg-blue-500/10 hover:border-blue-500",
                },
                {
                  href: personalInfo.leetcode,
                  icon: Code2,
                  label: "LeetCode",
                  color: "hover:bg-orange-500/10 hover:border-orange-500",
                },
                {
                  href: personalInfo.codeforces,
                  icon: () => (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5S3 20.328 3 19.5V9c0-.828.672-1.5 1.5-1.5zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5S12 20.328 12 19.5v-15c0-.828.672-1.5 1.5-1.5zm-4.5 9c.828 0 1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5S7.5 20.328 7.5 19.5v-6c0-.828.672-1.5 1.5-1.5zm9-7.5c.828 0 1.5.672 1.5 1.5v13.5c0 .828-.672 1.5-1.5 1.5S16.5 20.328 16.5 19.5V6c0-.828.672-1.5 1.5-1.5z" />
                    </svg>
                  ),
                  label: "Codeforces",
                  color: "hover:bg-blue-600/10 hover:border-blue-600",
                },
                {
                  href: personalInfo.codechef,
                  icon: () => (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.257.004c-.37.01-.735.043-1.097.099-.736.119-1.453.33-2.136.627C5.49 1.723 3.21 3.671 1.8 6.18c-.785 1.394-1.291 2.945-1.472 4.548-.091.804-.09 1.617-.003 2.422.181 1.67.731 3.264 1.598 4.656.866 1.391 2.05 2.565 3.444 3.417 1.393.852 2.977 1.37 4.61 1.503.822.067 1.65.052 2.468-.046 1.616-.194 3.178-.743 4.56-1.596 1.382-.853 2.573-2.026 3.47-3.411.896-1.385 1.485-2.967 1.712-4.605.113-.822.135-1.654.066-2.48-.138-1.644-.652-3.238-1.495-4.652-.843-1.413-1.998-2.632-3.36-3.555-1.362-.924-2.922-1.54-4.549-1.795-.542-.085-1.09-.13-1.64-.127l-.252.001-.25.004zm-.257 2.005c.37-.003.738.022 1.104.074 1.375.196 2.698.725 3.847 1.537 1.148.812 2.119 1.896 2.824 3.15.706 1.254 1.138 2.659 1.256 4.104.06.722.044 1.45-.045 2.168-.176 1.426-.681 2.802-1.469 4.003-.788 1.202-1.844 2.215-3.072 2.95-1.227.735-2.61 1.183-4.03 1.301-.71.059-1.425.046-2.13-.039-1.404-.171-2.76-.665-3.95-1.436-1.19-.771-2.201-1.807-2.946-3.016-.746-1.209-1.216-2.575-1.368-3.99-.076-.707-.07-1.421.016-2.124.171-1.401.665-2.753 1.436-3.939.77-1.187 1.806-2.196 3.013-2.939 1.207-.743 2.571-1.21 3.983-1.36.354-.038.71-.056 1.065-.059l.233-.002.233.017z" />
                    </svg>
                  ),
                  label: "CodeChef",
                  color: "hover:bg-amber-600/10 hover:border-amber-600",
                },
                {
                  href: personalInfo.twitter,
                  icon: () => (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  label: "Twitter/X",
                  color: "hover:bg-white/5 hover:border-white",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative p-3 rounded-lg bg-slate-800/40 backdrop-blur-sm text-slate-400 hover:text-white hover:bg-slate-700/60 hover:border-slate-500 transition-all duration-300 border border-slate-700/50`}
                  title={social.label}
                >
                  <social.icon />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pt-4"
          >
            <Button
              variant="ghost"
              size="lg"
              className="group relative text-white border-2 border-slate-600 hover:border-slate-400 bg-slate-800/30 hover:bg-slate-700/50 px-8 py-6 transition-all duration-300 overflow-hidden rounded-lg"
              onClick={scrollToContact}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600/0 via-slate-400/10 to-slate-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <Download className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-base font-semibold">Get In Touch</span>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-emerald-400 transition-colors duration-300"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
