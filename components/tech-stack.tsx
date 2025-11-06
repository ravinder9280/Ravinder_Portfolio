'use client'
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"


const technologies = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "MaterialUI",'ShadcnUI'],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python","FastAPI", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "CI/CD","Kubernetes", "Git", "Linux", "Nginx"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Postman", "Figma", "Jest", "GitHub", "Vercel"],
  },
]

export default function TechStack() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
              <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center "
        >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        Tech Stack
      </h2>
          </motion.div>
    <div id="tech-stack" className="grid gap-6 md:grid-cols-2">

      {technologies.map((tech) => (
    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            key={tech.category}
          >
        <Card  className="p-6">
          <h3 className="text-lg text-primary font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
              key={skill}
              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium  ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
              
          </div>
        </Card>
      </motion.div>
      ))}
    </div>
      
    </div>

    </section>
  )
}

