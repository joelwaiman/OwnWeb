"use client"

import Link from "next/link"
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa"

interface SocialIconsProps {
  horizontal?: boolean
}

export default function SocialIcons({ horizontal = false }: SocialIconsProps) {
  return (
    <div className={`relative z-10 flex ${horizontal ? "flex-row gap-8" : "flex-col gap-16"}`}>
      <Link
        href="https://www.linkedin.com/in/joel-waiman97/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:scale-110"
      >
        <FaLinkedin className="text-secondary text-5xl hover:text-tertiary" />
      </Link>
      <Link href="mailto:waimanjoel@gmail.com" className="cursor-pointer transition-all duration-150 hover:scale-110">
        <FaEnvelope className="text-secondary text-5xl hover:text-tertiary transition-all duration-150" />
      </Link>
      <Link
        href="https://github.com/joelwaiman"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer transition-all duration-150 hover:scale-110"
      >
        <FaGithub className="text-secondary text-5xl hover:text-tertiary transition-all duration-150" />
      </Link>
    </div>
  )
}