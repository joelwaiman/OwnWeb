"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { FaHtml5, FaCss3Alt, FaReact, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export default function TechIcons() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const technologies = [
    {
      name: 'HTML5',
      icon: <FaHtml5 />
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt />
    },{
      name: 'Javascript',
      icon: <IoLogoJavascript />
    },{
      name: 'React.js',
      icon: <FaReact />
    },{
      name: 'Next.js',
      icon: <RiNextjsFill />
    },{
      name: 'Typescript',
      icon: <SiTypescript />
    },{
      name: 'Node.js',
      icon: <FaNode />
    },
  ]

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      className="flex justify-center space-x-4 mb-8 gap-5 flex-wrap"
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          variants={item}
          whileHover={{ scale: 1.2 }}
          className="flex items-center justify-center"
          title={tech.name}
        >
          <span className="text-5xl text-primary">{tech.icon}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}