"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

// Define the type for a project
interface Project {
  id: number
  title: string
  shortDescription: string
  description: string
  image: string
  tags: string[]
  features: string[]
  liveLink?: string
  githubLink?: string
  demoLink?: string
  fullDescription: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "Professional AI Mentor (FanseMentor)",
      shortDescription: "Your AI Career Coach for Professional Success With features Like Real Time Industry Insights ,Resume Builder, Interview Prepration and more",
      description: "a Vercel Overview : Developed Fans-E-Mentor, an AI-powered platform connecting to professionals AI Mentors and Practice Interview Question and keep track of progress and Industry Trend. Utilized React, Next.js, TailwindCSS, PostgreSQL, and PrismaORM. Implemented AI-driven matching and deployed on Vercel. ",
      image: "/fansementor.png",
      tags: ["NextJS", "Javascript", "TailwindCSS", "ShadcnUI", "PostgreSQL", "PrsimaORM", "Clerk"],
      features: [
        "Real-time Industry Insights",
        "Interview Preparation",
        "AI Resume Builder",
        "Cover Letter Generator",
        "Progress tracking",
      ],
      liveLink: "https://fansementor.vercel.app/",
      githubLink: "https://github.com/ravinder9280/fansementor",
      fullDescription: "Developed Fans-E-Mentor, an AI-powered platform connecting to professionals AI Mentors and Practice Interview Question and keep track of progress and Industry Trend. Utilized React, Next.js, TailwindCSS, PostgreSQL, and PrismaORM. Implemented AI-driven matching and deployed on Vercel. ",
    },
    {
      id: 2,
      title: "Distributed Database System",
      shortDescription: "A distributed database system with high availability.",
      description: "A distributed database system with high availability and fault tolerance.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["C++", "Rust", "gRPC", "Redis"],
      features: ["Data replication", "Sharding", "Fault tolerance", "Load balancing", "Transaction management"],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This distributed database system provides high availability and fault tolerance for large-scale applications. Built with C++ and Rust for performance, it implements advanced features such as data replication, sharding, and automatic failover. The system includes comprehensive monitoring and management tools.",
    },
    {
      id: 3,
      title: "FanseStore",
      shortDescription: "A full-featured e-commerce platform with product management.",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/fansestore.png",
      tags: ["ReactJS", "TailwindCSS", "NodeJS", "ExpressJS", "Javascript", "MongoDB", "Cloudinary"],
      features: [
        "Inventory management system",
        "Real-time stock tracking",
        "Secure payment processing",
        "Order management dashboard",
        "Customer analytics",
      ],
      liveLink: "https://fansestore.netlify.app/",
      githubLink: "https://github.com/ravinder9280/fans-e-store",
      fullDescription:
        "This e-commerce platform provides businesses with a complete solution for selling products online. Built with ReactJS and Nodejs for high performance and cross-platform compatibility. Features include a responsive design With TailwindCSS, product catalog with filtering and search capabilities, shopping cart functionality, secure checkout integration, user authentication, and an admin dashboard for managing products, orders, and customers.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.liveLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Live 
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}