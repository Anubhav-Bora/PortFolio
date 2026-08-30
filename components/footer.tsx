import { ArrowUp } from "lucide-react"
import { Logo } from "@/components/logo"
import { personalInfo } from "@/config/data"

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#10251e] text-[#f4f1e8]">
      <div className="page-shell py-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Logo className="size-9 border-white/20 bg-transparent text-[#f4f1e8]" />
            <div>
              <p className="text-sm font-semibold">{personalInfo.name}</p>
              <p className="text-xs text-white/45">Designed &amp; built with care.</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-white/55 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#home"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white/50 hover:text-white"
            aria-label="Back to top"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {personalInfo.name}</p>
          <p>Full Stack Developer · Cybersecurity Enthusiast</p>
        </div>
      </div>
    </footer>
  )
}
