import React from "react";

import tw from '../assets/tw.jpg';
import meli from '../assets/meli.jpg';
import chonkee from '../assets/chonkees.jpg'
import midubooks from '../assets/midubooks.jpg'
import smash from '../assets/smash.png'
import dezure from '../assets/dezure.png'
import hexaguess from '../assets/hexaguess.webp'

const Projects = () => {
  const project = [
    {
      id: 0,
      name: 'Símil MeLi',
      img: meli,
      link: 'https://me-li-clon.vercel.app/',
      description: 'Simil de conocido E-commerce. Ruteo y filtrado, tanto de categoria, como producto individual. Consumiendo API de FakeStore.',
      year: '2022',
      techs: ['Javascript', 'ReactJS']
    },
    {
      id: 1,
      name: 'E-Commerce',
      img: chonkee,
      link: 'https://ecommerce-react-ten-phi.vercel.app/',
      description: 'E-commerce completo creado con ReactJS. Uso de Hooks, States, Context y mas. Firebase como base de datos.',
      year: '2022',
      techs: ['Javascript', 'ReactJS', 'Firestore']
    },
    {
      id: 2,
      name: 'Clon Twitter',
      img: tw,
      link: 'https://twitter-clone-lime.vercel.app',
      description: 'Proyecto hecho en ReactJS, con el objeto de crear una UI lo mas asemejada posible a la original. Control de estados, localStorage.',
      year: '2023',
      techs: ['Javascript', 'ReactJS']
    },
    {
      id: 3,
      name: 'Midubooks',
      img: midubooks,
      link: 'https://midubooks.vercel.app/',
      description: 'Proyecto hecho en NextJS, simple organizador de libros, con filtrado por categorias y con la opción de poder agregar libros a favoritos.',
      year: '2023',
      techs: ['Javascript', 'NextJS']
    },
    {
      id: 4,
      name: 'Smash Burguers',
      img: smash,
      link: 'https://burguers.vercel.app/',
      description: 'Hamburguesería para cliente local, con el fin de mostrar su trabajo y productos disponibles.',
      year: '2024',
      techs: ['Javascript', 'NextJS']
    },
    {
      id: 5,
      name: 'Dezure Challenge',
      img: hexaguess,
      link: 'https://dezure-challenge.vercel.app/',
      description: 'Reproduce el audio de la llamada y permite al usuario hacer clic en cualquier parte de la transcripción para saltar a esa parte del audio.',
      year: '2024',
      techs: ['Javascript', 'NextJS', 'Typescript', 'Tailwind']
    },
    {
      id: 6,
      name: 'Hexaguess',
      img: dezure,
      link: 'https://hexa-guess.vercel.app/',
      description: 'Mini juego. Con una tematica similar a "Wordle", tienes 5 oportunidades para acertar el color hexadecimal.',
      year: '2024',
      techs: ['Javascript', 'NextJS', 'Typescript', 'Tailwind']
    },
  ]


  return (
    <section className="flex flex-col items-center min-h-screen m-auto lg:w-[80%] max-w-[95%] text-text gap-10" id="proyectos">
      {/* TEXTO BACKGROUND */}

      <style jsx>{`
                .outline-text {
                -webkit-text-stroke: 2px #c5bac4;
                -webkit-text-fill-color: transparent;
                }
            `}</style>
      <h1 className="sticky mb-10 text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[200px] opacity-20 -z-10 font-extrabold outline-text">
        Projects.
      </h1>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[80%] min-h-full">
        {project
          .sort((a, b) => b.id - a.id)
          .map((card) => {
            return (
              <div key={card.id}
                className="w-full border-2 border-primary bg-glassmorph backdrop-blur-md backdrop-opacity-80 rounded-2xl shadow-[rgba(0,0,0,0.2)] text-text p-6 flex flex-col justify-between gap-4 transition-transform duration-200"
              >
                <div className="flex items-center gap-4 text-center">
                  <h1 className="text-2xl font-semibold">{card.name}</h1>
                  <p className="px-3 py-1 bg-dark rounded-full w-fit text-xs md:text-sm">
                    {card.year}
                  </p>
                </div>
                  <p className="text-sm md:text-base mt-2">
                    {card.description}
                  </p>

                <div className="flex flex-wrap gap-2">
                  {card.techs.map((tech) => (
                    <span key={tech}
                      className="px-3 py-1 text-xs md:text-sm border border-mid rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 border rounded-full flex items-center justify-center gap-2 bg-transparent lg:hover:shadow-[0_0_10px_0_rgba(197,186,196,0.3)] hover:border-primary text-text transition-all duration-200">
                  <span>Ver Proyecto</span>
                  <svg
                    className="w-5 h-5"
                    stroke="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            );
          })}
      </div>
    </section>


  );
}

export default Projects;