"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    link: string
    year: string
    description: string
    techs: string[]
  }
  index: number
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
      className="bg-light flex justify-between flex-col w-full lg:w-[48%] p-6 rounded-md shadow-md"
    >
      <Link 
        className="flex flex-col xl:flex-row justify-between gap-4 items-start xl:items-center mb-4"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="text-4xl xl:text-6xl text-tertiary font-bevan">{project.title}</h3>
        <span className="text-tertiary text-3xl md:text-5xl font-bevan">{project.year}</span>
      </Link>
      <p className="text-dark font-hind text-lg md:text-2xl mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 justify-start md:justify-end">
        {project.techs.map((btn, i) => (
          <motion.button
            key={i}
              className="bg-tertiary text-light px-3 py-2 rounded-md text-sm md:text-md"
          >
            {btn}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}