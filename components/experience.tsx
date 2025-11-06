'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const ExperienceData = [
    {
        Role: "Frontend Developer Intern",
        Company: "Natplus",
        Period: "June 2025 - Present",
        Summaries: [
            `Developed and optimized web applications using Next.js, TypeScript, Tailwind CSS, and PostgreSQL, ensuring high performance and scalability.`,
            `Implemented an interactive map feature to visualize company data, improved responsiveness across devices, and resolved major UI issues and functional errors.`
        ]
    }
,
    {
        Role: "Full Stack Developer Intern",
        Company: "LoremateAi",
        Period: "Jan 2025 - March 2025 ● 3months",
        Summaries: [
            `Developed and optimized full-stack applications using MERN Stack (MongoDB ,Expressjs ,React,Node.js).
scalable UI components and enhanced frontend performance using Typescript ,Tailwind CSS and Shadcn.`
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
            <div className="container mx-auto  relative z-10">

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

                        <div className="bg-gray-800 h-full rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold">{ item.Role}</h3>
                                    <p className="text-purple-600 dark:text-purple-400 font-medium">{ item.Company}</p>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{ item.Period}</p>
                            </div>
                            <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                                {
                                    item.Summaries.map((i,x) => (
                                        <li>
                                            {i}

                                        </li>
                                    ))
                               }
                            </ul>
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