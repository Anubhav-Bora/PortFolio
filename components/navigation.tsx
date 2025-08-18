"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/config/data"
import { Logo } from "./logo"

export const Navigation = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-slate-800/50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="text-slate-400 hover:text-white transition-colors duration-300 text-sm font-light tracking-wider uppercase"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
        >
          <div className="w-full h-full rounded-full bg-black/20 flex items-center justify-center">
            <span className="text-xs font-bold text-black">
              {personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
