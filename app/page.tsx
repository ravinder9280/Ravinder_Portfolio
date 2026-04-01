import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Experience from "@/components/experience"

export const metadata: Metadata = {
  title: "Ravinder9280 | Full Stack Developer Portfolio",
  description:
    "Ravinder9280 (Ravinder Kumar) - Full Stack Developer specializing in Next.js, React, Node.js, and AI-powered applications. Explore projects, experience, and contact details.",
  keywords: [
    "Ravinder9280",
    "Ravinder Kumar",
    "ravinder9280 github",
    "Ravinder developer",
    "full stack developer ravinder",
  ],
}
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />


        <TechStack />

        <Experience />
        <Projects />

        <Contact />
      </main>
      <Footer />
    </div>
  )
}

