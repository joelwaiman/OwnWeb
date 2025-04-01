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
      className="bg-light w-full lg:w-[48%] p-6 rounded-md shadow-md relative overflow-hidden group z-0"
    >
      {/* Círculo que se expande en hover */}
      <div className="absolute h-[5em] w-[5em] -bottom-[2.5em] -left-[2.5em] rounded-full bg-primary group-hover:scale-[2000%] duration-500 z-[1]"></div>

      <Link
        className="flex flex-col h-full justify-between gap-4 items-start xl:items-center mb-4 relative z-10"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-wrap justify-between items-center gap-4 w-full">
          <h3 className="text-4xl xl:text-6xl text-tertiary font-bevan group-hover:text-light duration-500">
            {project.title}
          </h3>
          <span className="text-tertiary text-3xl md:text-5xl font-bevan group-hover:text-light duration-500">
            {project.year}
          </span>
        </div>
        <p className="text-dark font-hind text-lg md:text-2xl mb-4 group-hover:text-light duration-500">
          {project.description}
        </p>
        <div className="flex flex-wrap w-full gap-2 md:justify-end">
          {project.techs.map((btn, i) => (
            <motion.button
              key={i}
              className="bg-tertiary text-light px-3 py-2 rounded-md text-sm md:text-md group-hover:bg-dark group-hover:text-light duration-500"
            >
              {btn}
            </motion.button>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}