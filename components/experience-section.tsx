"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Calendar } from "lucide-react"
import { personalInfo } from "@/config/data"

export const ExperienceSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cardRef0 = useRef(null)
  const cardRef1 = useRef(null)
  const cardRef2 = useRef(null)
  const cardRef3 = useRef(null)
  const cardRef4 = useRef(null)

  const cardInView0 = useInView(cardRef0, { once: true, margin: "-50px" })
  const cardInView1 = useInView(cardRef1, { once: true, margin: "-50px" })
  const cardInView2 = useInView(cardRef2, { once: true, margin: "-50px" })
  const cardInView3 = useInView(cardRef3, { once: true, margin: "-50px" })
  const cardInView4 = useInView(cardRef4, { once: true, margin: "-50px" })

  const cardRefs = [cardRef0, cardRef1, cardRef2, cardRef3, cardRef4]
  const cardInViews = [cardInView0, cardInView1, cardInView2, cardInView3, cardInView4]

  return (
    <section id="experience" className="py-20 bg-muted/30">
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
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Experience
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>

            <div className="space-y-16">
              {personalInfo.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  ref={cardRefs[index]}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }}
                  animate={
                    cardInViews[index]
                      ? { opacity: 1, x: 0, y: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }
                  }
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  className={`relative flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                  <div className={`w-full max-w-md ${index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"}`}>
                    <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-background/80 backdrop-blur-sm border-2 border-primary/20">
                      <CardHeader className="text-center">
                        <div className="flex flex-col items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-full">
                            <Building className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl font-bold">{exp.company}</CardTitle>
                          <p className="text-lg font-semibold text-primary">{exp.role}</p>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">{exp.duration}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-muted-foreground leading-relaxed">{exp.details}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
