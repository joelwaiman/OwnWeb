import React from "react";

import tw from '../assets/tw.jpg';
import meli from '../assets/meli.jpg';
import chonkee from '../assets/chonkees.jpg'
import midubooks from '../assets/midubooks.jpg'
import smash from '../assets/smash.png'
import dezure from '../assets/dezure.png'

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
      description: 'Hamburguesería en proceso de creación para cliente local, con el fin de mostrar su trabajo y productos disponibles.',
      year: '2024',
      techs: ['Javascript', 'NextJS']
    },
    {
      id: 5,
      name: 'Dezure Challenge',
      img: dezure,
      link: 'https://dezure-challenge.vercel.app/',
      description: 'Reproduce el audio de la llamada y permite al usuario hacer clic en cualquier parte de la transcripción para saltar a esa parte del audio.',
      year: '2024',
      techs: ['Javascript', 'NextJS', 'Typescript', 'Tailwind']
    },
  ]


  return (
    <section className="flex flex-col items-center min-h-full m-auto md:w-[80%] w-[95%]" id="proyectos">
      <div className="flex items-center justify-center w-[90%] my-12">
        <h1 className="text-6xl font-bold inline-block">Proyectos</h1>
        <hr className="hidden md:flex md:flex-grow md:ml-4 md:bg-text md:border-0 md:h-[1px]" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center md:w-[80%] max-w-full min-h-full flex-wrap">
        {project
          .sort((a, b) => b.year - a.year)
          .map((card) => {
            return (
              <div key={card.id}
                className="h-80 w-fit border-2 border-primary rounded-[1.5em] bg-gradient-to-br from-primary to-secondary/10 text-text p-[1em] flex justify-between items-left flex-col gap-[0.75em] backdrop-blur-[12px]"
              >
                <div>
                  <h1 className="text-[2em] font-medium">{card.name}</h1>
                  <p className="text-[0.85em]">
                    {card.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {card.techs.map((tech) => {
                    return <span key={tech}
                      className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] border-mid rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden">
                      {tech}
                    </span>
                  })}
                </div>

                <span className="h-fit w-fit px-[1em] py-[0.25em] bg-dark rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden">{card.year}</span>

                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
                >
                  <p>App</p>
                  <svg
                    className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                    stroke="currentColor"
                    stroke-width="1"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
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