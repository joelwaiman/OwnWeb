import React from "react";

import tw from '../assets/tw.jpg';
import meli from '../assets/meli.jpg';
import chonkee from '../assets/chonkees.jpg'
import midubooks from '../assets/midubooks.jpg'
import smash from '../assets/smash.png'

const Projects = () => {
  const project = [
    { id: 0, name: 'Símil MeLi', img: meli, link: 'https://me-li-clon.vercel.app/', description: 'Simil de conocido E-commerce. Ruteo y filtrado, tanto de categoria, como producto individual. Consumiendo API de FakeStore.' },
    { id: 1, name: 'E-Commerce', img: chonkee, link: 'https://ecommerce-react-ten-phi.vercel.app/', description: 'Proyecto de fin de curso, E-commerce completo creado con ReactJS. Uso de Hooks, States, Context y mas. Firebase como base de datos.' },
    { id: 2, name: 'Clon Twitter', img: tw, link: 'https://twitter-clone-lime.vercel.app', description: 'Proyecto hecho en ReactJS, con el objeto de crear una UI lo mas asemejada posible a la original. Control de estados, localStorage.' },
    { id: 3, name: 'Midubooks', img: midubooks, link: 'https://midubooks.vercel.app/', description: 'Proyecto hecho en NextJS, simple organizador de libros, con filtrado por categorias y con la opción de poder agregar libros a favoritos.' },
    { id: 4, name: 'Smash Burguers', img: smash, link: 'https://burguers.vercel.app/', description: 'Hamburguesería en proceso de creación para cliente local, con el fin de mostrar su trabajo y productos disponibles.' },

  ]


  return (
    <section className="flex flex-col items-center m-auto w-[80%]" id="proyectos">
      {project.map((card) => {
        return <a key={card.id}  className="no-underline w-[90%]" href={card.link} target="_blank" rel="noopener noreferrer">
          <div class="flex items-center bg-[#03001C] border-[#301e67] w-full h-60 rounded-xl my-6 opacity-70 transition-all duration-300 ease-out hover:shadow-cardshadow hover:opacity-100 hover:scale-105">
            <img
              className="w-[40%] h-[90%] rounded-xl mx-3"
              alt="Page Preview"
              src={card.img} />
            <div className="flex flex-col justify-evenly text-white w-3/6 min-h-[80%] px-5">
              <h1 className="bg-gradient-to-r from-[#301E67] to-[#03001C] p-2 rounded-xl">{card.name}</h1>
              <p className="p-2">{card.description}</p>
            </div>
          </div>
        </a>
      })}
    </section>
  )
}

export default Projects;