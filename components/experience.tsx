'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const ExperienceData = [
    {
        Role: "Frontend Developer Intern",
        Company: "Natplus",
        Period: "June 2025 - Nov 2025",
        Summaries: [
            `Developed and optimized web applications using Next.js, TypeScript, Tailwind CSS, and PostgreSQL Supabase, ensuring high performance and scalability.`,
            `Implemented an interactive map feature to visualize company data, improved responsiveness across devices, and resolved major UI issues and functional errors.`,
            `Deployed 2 Open Source Applications On AWS`
        ],
        Technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
            "Supabase",
            "AWS",
            'Docker',
        ]
    }
,
    {
        Role: "Full Stack Developer Intern",
        Company: "LoremateAi",
        Period: "Jan 2025 - March 2025",
        Summaries: [
            `Developed and optimized full-stack applications using MERN Stack (MongoDB ,Expressjs ,React,Node.js).
scalable UI components and enhanced frontend performance using Typescript ,Tailwind CSS and Shadcn.`,
`Create New Components and API Routes for the Application by Ensuring Responsiveness and Performance`,

`Optimize the Application for Performance and Scalability`,
`Implement New Features and Enhancements to the Application`,

        ],
        Technologies: [
            "ReactJS",
            "Node.js",
            "Expressjs",
            "MongoDB",
            "Postman",
            
            "GitHub",
        ]
    },
]
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}
const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </motion.div>

               
                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">

                    {ExperienceData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            variants={fadeIn}
                        >

                        <div className="rounded-lg p-6 border bg-card flex flex-col justify-between gap-4 text-card-foreground shadow-sm   h-full transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
                            <div>

                            <div className="flex flex-col md:flex-row  justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold">{ item.Role}</h3>
                                    <p className="text-primary/80 dark:text-primary font-medium">{ item.Company}</p>
                                </div>
                                <p className="text-muted-foreground mt-2 md:mt-0">{ item.Period}</p>
                            </div>
                            <ul className="space-y-2 list-disc pl-5 leading-relaxed text-card-foreground/90">
                                {
                                    item.Summaries.map((i,x) => (
                                        <li className=''>
                                            {i}

                                        </li>
                                    ))
                                }
                            </ul>
                                </div>
                            <div className="flex flex-wrap gap-2">
                                {item.Technologies.map((tech) => (
                                    <span key={tech} className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium  ring-1 ring-inset ring-primary/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            </div > 
                        </motion.div>

                        


                    ))

                        
                        
                        
    }
            </div>
                </div>
        </section>
       )
}

export default Experience