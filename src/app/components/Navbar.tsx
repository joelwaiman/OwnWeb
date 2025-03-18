"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll detection for better navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 px-4 py-6 sm:px-6 lg:px-12 transition-all duration-300 ${scrolled ? "py-4" : "py-6 sm:py-8 lg:py-10"}`}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Desktop Menu - hidden on screens below lg */}
        <nav className="hidden lg:flex justify-center bg-dark/40 w-fit mx-auto py-4 px-6 backdrop-blur-lg rounded-full gap-10 xl:gap-20 text-xl xl:text-3xl text-light">
          {["HOME", "PROYECTOS", "CONTACTO"].map((item, index) => (
            <motion.div key={index} className="group relative">
              <motion.a href={`#${item.toLowerCase()}`} whileTap={{ scale: 0.95 }}>
                {item}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-light transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </motion.a>
            </motion.div>
          ))}
        </nav>

        {/* Mobile & Tablet Menu (visible below lg breakpoint) */}
        <div className="lg:hidden mt-5 flex justify-between items-center">
          {/* Logo or brand could go here */}
          <div className="flex-1">
            <Image
              src="/illustration-me.png"
              alt="Joel Waiman Avatar"
              width={100}  // Tamaño en mobile
              height={100} // Tamaño en mobile
              className="rounded-full object-cover"
            />
          </div>

          {/* Mobile menu button with improved positioning */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-light bg-dark/40 backdrop-blur-lg p-2 rounded-full hover:bg-dark/60 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu dropdown - improved animation and styling */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 mx-auto w-[95%] sm:w-[80%] bg-dark/80 backdrop-blur-xl py-6 px-4 flex flex-col items-center space-y-6 text-light text-xl sm:text-2xl rounded-xl shadow-lg border border-light/10"
            >
              {["HOME", "PROYECTOS", "CONTACTO"].map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group py-2 px-4 w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-light transition-all duration-300 ease-in-out group-hover:w-1/2"></span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}