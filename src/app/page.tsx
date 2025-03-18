"use client"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProjectsSection from "./components/ProjectsSection"
import Footer from "./components/AboutMe"

export default function Home() {
  return (
    <div className="flex w-full bg-light flex-col min-h-screen">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <Footer />
    </div>
  )
}
