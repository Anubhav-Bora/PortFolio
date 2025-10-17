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

      <div className="container mx-auto px-6 text-left relative z-10 max-w-6xl">
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
            className="max-w-2xl space-y-6"
          >
            <p className="text-lg text-slate-400 leading-relaxed italic">
              "Passionate about technology, fitness, travel, and exploring new things — I build, learn, and grow every day."
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-400 hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-slate-600"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-lg bg-slate-800/50 hover:bg-blue-500/10 text-slate-400 hover:text-blue-400 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-lg bg-slate-800/50 hover:bg-orange-500/10 text-slate-400 hover:text-orange-400 transition-all duration-300 border border-slate-700/50 hover:border-orange-500/50"
                title="LeetCode"
              >
                <Code2 className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={personalInfo.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-lg bg-slate-800/50 hover:bg-blue-500/10 text-slate-400 hover:text-blue-500 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50"
                title="Codeforces"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5S3 20.328 3 19.5V9c0-.828.672-1.5 1.5-1.5zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5S12 20.328 12 19.5v-15c0-.828.672-1.5 1.5-1.5zm-4.5 9c.828 0 1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5S7.5 20.328 7.5 19.5v-6c0-.828.672-1.5 1.5-1.5zm9-7.5c.828 0 1.5.672 1.5 1.5v13.5c0 .828-.672 1.5-1.5 1.5S16.5 20.328 16.5 19.5V6c0-.828.672-1.5 1.5-1.5z"/>
                </svg>
              </motion.a>
              <motion.a
                href={personalInfo.codechef}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-lg bg-slate-800/50 hover:bg-amber-500/10 text-slate-400 hover:text-amber-600 transition-all duration-300 border border-slate-700/50 hover:border-amber-600/50"
                title="CodeChef"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.257.004c-.37.01-.735.043-1.097.099-.736.119-1.453.33-2.136.627C5.49 1.723 3.21 3.671 1.8 6.18c-.785 1.394-1.291 2.945-1.472 4.548-.091.804-.09 1.617-.003 2.422.181 1.67.731 3.264 1.598 4.656.866 1.391 2.05 2.565 3.444 3.417 1.393.852 2.977 1.37 4.61 1.503.822.067 1.65.052 2.468-.046 1.616-.194 3.178-.743 4.56-1.596 1.382-.853 2.573-2.026 3.47-3.411.896-1.385 1.485-2.967 1.712-4.605.113-.822.135-1.654.066-2.48-.138-1.644-.652-3.238-1.495-4.652-.843-1.413-1.998-2.632-3.36-3.555-1.362-.924-2.922-1.54-4.549-1.795-.542-.085-1.09-.13-1.64-.127l-.252.001-.25.004zm-.257 2.005c.37-.003.738.022 1.104.074 1.375.196 2.698.725 3.847 1.537 1.148.812 2.119 1.896 2.824 3.15.706 1.254 1.138 2.659 1.256 4.104.06.722.044 1.45-.045 2.168-.176 1.426-.681 2.802-1.469 4.003-.788 1.202-1.844 2.215-3.072 2.95-1.227.735-2.61 1.183-4.03 1.301-.71.059-1.425.046-2.13-.039-1.404-.171-2.76-.665-3.95-1.436-1.19-.771-2.201-1.807-2.946-3.016-.746-1.209-1.216-2.575-1.368-3.99-.076-.707-.07-1.421.016-2.124.171-1.401.665-2.753 1.436-3.939.77-1.187 1.806-2.196 3.013-2.939 1.207-.743 2.571-1.21 3.983-1.36.354-.038.71-.056 1.065-.059l.233-.002.233.017z"/>
                </svg>
              </motion.a>
              <motion.a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-400 hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-slate-600"
                title="Twitter/X"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
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
