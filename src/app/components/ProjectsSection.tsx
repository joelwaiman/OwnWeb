"use client"

import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce',
      link: 'https://ecommerce-react-ten-phi.vercel.app/',
      description: 'E-commerce completo creado con ReactJS. Uso de Hooks, States, Context y más. Firebase como base de datos.',
      year: '2022',
      techs: ['Javascript', 'ReactJS', 'Firestore']
    },
    {
      id: 2,
      title: 'Clon Twitter',
      link: 'https://twitter-clone-lime.vercel.app',
      description: 'Proyecto hecho en ReactJS, con el objeto de crear una UI lo más asemejada posible a la original. Control de estados, localStorage.',
      year: '2023',
      techs: ['Javascript', 'ReactJS']
    },
    {
      id: 3,
      title: 'Midubooks',
      link: 'https://midubooks.vercel.app/',
      description: 'Proyecto hecho en NextJS, simple organizador de libros, con filtrado por categorías y con la opción de poder agregar libros a favoritos.',
      year: '2023',
      techs: ['Javascript', 'NextJS']
    },
    {
      id: 4,
      title: 'Smash Burguers',
      link: 'https://burguers.vercel.app/',
      description: 'Hamburguesería para cliente local, con el fin de mostrar su trabajo y productos disponibles.',
      year: '2024',
      techs: ['Javascript', 'NextJS']
    },
    {
      id: 5,
      title: 'Dezure Challenge',
      link: 'https://dezure-challenge.vercel.app/',
      description: 'Reproduce el audio de la llamada y permite al usuario hacer clic en cualquier parte de la transcripción para saltar a esa parte del audio.',
      year: '2024',
      techs: ['Javascript', 'NextJS', 'Typescript', 'Tailwind']
    },
    {
      id: 6,
      title: 'Hexaguess',
      link: 'https://hexa-guess.vercel.app/',
      description: 'Mini juego. Con una temática similar a "Wordle", tienes 5 oportunidades para acertar el color hexadecimal.',
      year: '2024',
      techs: ['Javascript', 'NextJS', 'Typescript', 'Tailwind']
    },
    {
      id: 7,
      title: 'Wallbit-Challenge',
      link: 'https://wallbit-challenge-nine.vercel.app/',
      description: 'Challenge para empresa. Simulación de carrito de compras, consumiendo producto desde API según id',
      year: '2024',
      techs: ['Javascript', 'ReactJS', 'Vite', 'Typescript', 'Tailwind']
    },
    {
      id: 8,
      title: 'Foodly',
      link: 'https://terrand-challenge.vercel.app/',
      description: 'App de recetas. Permite creación y registro de usuarios. Creación, edición, y eliminación de recetas para usuarios autenticados. Manejo de rutas públicas y autenticadas',
      year: '2025',
      techs: ['Javascript', 'Nextjs', 'MongoDB', 'Typescript', 'Tailwind', 'Prisma']
    },
  ].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <section id="proyectos" className="bg-tertiary py-32 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full md:w-3/4 flex flex-col md:flex-row md:flex-wrap gap-6 justify-center"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  )
}