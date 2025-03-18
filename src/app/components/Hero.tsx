"use client"

import { motion } from "framer-motion"
import SocialIcons from "./SocialIcons"
import TechIcons from "./TechIcons"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col gap-10 sm:gap-16 lg:gap-20 items-center justify-center text-center w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] m-auto relative px-4 lg:px-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col relative w-full justify-center"
      >
        {/* Social icons - hidden on small screens, visible from sm up */}
        <div className="hidden xl:block absolute left-0 lg:left-0">
          <SocialIcons horizontal={false} />
        </div>

        <div className="relative flex h-fit flex-col items-center">
          <h2 className="absolute -top-4 left-1/2 sm:left-1/3 transform -translate-x-1/2 sm:-translate-x-0 font-ubuntu italic font-medium text-tertiary text-xl sm:text-2xl md:text-4xl">
            Joel Waiman
          </h2>
          <h1 className="text-[40px] xs:text-[50px] sm:text-[65px] md:text-[80px] lg:text-[150px] font-bevan text-primary leading-none">
            Frontend
            <br />
            Developer
          </h1>
        </div>
      </motion.div>

      {/* Tech icons with responsive container */}
      <div className="w-full max-w-4xl">
        <TechIcons />
      </div>

      {/* Social icons for mobile - only visible on smallest screens */}
      <div className="xl:hidden w-full flex justify-center mt-2">
        <SocialIcons horizontal={true} />
      </div>

      <motion.a
        href="/CV_WAIMAN_JOEL.pdf"
        download="CV_WAIMAN_JOEL.pdf"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-tertiary font-hind text-light px-4 sm:px-6 py-2 rounded-md mt-4 sm:mt-6 hover:scale-105 hover:brightness-110 hover:cursor-pointer transition-all duration-150"
      >
        Descargar CV
      </motion.a>
    </section>
  )
}