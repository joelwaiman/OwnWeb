"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SocialIcons from "./SocialIcons"

export default function Footer() {
  return (
    <footer id="contacto" className="bg-dark text-light py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <div className="flex flex-col w-[90%] sm:w-[85%] md:w-4/5 lg:w-3/4 mx-auto items-center">
        <div className="flex w-full flex-col items-center lg:flex-row gap-8 md:gap-10">
          {/* Text content with improved responsive design */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 mb-6 md:mb-8 lg:mb-0 text-center lg:text-left text-light"
          >
            <h3 className="font-ubuntu italic text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4">
              Soy Joel{" "}
                <br />
              Y es un placer que estés aquí -
            </h3>
            <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light leading-tight sm:leading-snug md:leading-normal">
              Mi enfoque en el desarrollo Front-end se centra en la creación de buenas experiencias visuales. Trabajo
              activamente en la mejora de la estética y la usabilidad del sitio -
            </p>
          </motion.div>

          {/* Image with responsive sizing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center w-full lg:w-1/2"
          >
            <div className="relative w-[200px] h-[200px] xs:w-[250px] xs:h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
              <Image
                src="/illustration-me.png"
                alt="Joel Waiman Avatar"
                fill
                sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
                className="rounded-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Contact section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 sm:gap-4 items-center mt-8 sm:mt-10"
        >
          <h4 className="font-ubuntu text-2xl sm:text-3xl md:text-4xl">Contáctame</h4>
          <SocialIcons horizontal={true} />
        </motion.div>
      </div>
    </footer>
  )
}