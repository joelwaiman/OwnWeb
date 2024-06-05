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
      description: 'Proyecto de fin de curso, E-commerce completo creado con ReactJS. Uso de Hooks, States, Context y mas. Firebase como base de datos.',
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
      description: 'Challenge para empresa. Reproduce el audio de la llamada y permite al usuario hacer clic en cualquier parte de la transcripción para saltar a esa parte del audio.',
      year: '2024',
      techs: ['Javascript', 'NextJS', 'Typescript', 'Tailwind']
    },
  ]


  return (
    <section className="flex flex-col items-center m-auto md:w-[80%] w-[95%]" id="proyectos">
        <div className="flex items-center justify-center w-[90%] my-12">
            <h1 className="text-6xl text-[#EEEEEE] font-bold inline-block">Proyectos</h1>
            <hr className="hidden md:flex md:flex-grow md:ml-4 md:bg-[#EEEEEE] md:border-0 md:h-[1px]" />
        </div>
        <div className="flex flex-col-reverse md:w-[80%] w-[100%]">
            {project.map((card) => {
                return (
                    <a key={card.id} className="no-underline" href={card.link} target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start bg-[#31363F] border border-[rgba(238,238,238,0.5)] w-full md:h-fit rounded-xl my-6 opacity-70 transition-all duration-300 ease-out hover:shadow-cardshadow hover:opacity-100 hover:scale-[1.025]">
                            <img
                                className="w-[95%] md:w-[40%] rounded-xl m-3"
                                alt="Page Preview"
                                src={card.img}
                            />
                            <div className="flex flex-col justify-between text-[#EEEEEE] w-full md:w-3/6 gap-5 min-h-full md:px-5">
                                <header className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start p-2 m-2 md:m-0 rounded-xl">
                                    <h1 className="text-4xl font-bold text-[#76ABAE]">{card.name}</h1>
                                    <h4 className="mx-5 p-2 bg-[#222831] rounded-xl">{card.year}</h4>
                                </header>
                                <p className="font-light px-2 text-center md:text-start">{card.description}</p>
                                <div className="flex justify-center md:flex-wrap md:justify-start gap-4 pb-5">
                                    {card.techs.map((tech) => {
                                        return (
                                            <span className="p-2 bg-[#222831] rounded-xl" key={tech}>
                                                {tech}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </a>
                );
            })}
        </div>
    </section>
);

}

export default Projects;