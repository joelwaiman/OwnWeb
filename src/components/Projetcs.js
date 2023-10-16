import React from "react";
import './Projects.css';
import tw from '../assets/tw.jpg';
import meli from '../assets/meli.jpg';
import chonkee from '../assets/chonkees.jpg'

const Projects = () => {
  const project = [
    { id: 0, name: 'Símil MeLi', img: meli, link: 'https://me-li-clon.vercel.app/', description: 'Clon de conocido E-commerce. Ruteo y filtrado, tanto de categoria, como producto individual. Consumiendo API de FakeStore' },
    { id: 1, name: 'E-Commerce', img: chonkee, link: 'https://ecommerce-react-ten-phi.vercel.app/', description: 'Proyecto de fin de curso, E-commerce completo creado con ReactJS. Uso de Hooks, States, Context y mas. Firebase como base de datos' },
    { id: 2, name: 'Clon Twitter', img: tw, link: 'https://twitter-clone-lime.vercel.app', description: 'Proyecto hecho en React, con el objeto de crear una UI lo mas asemejada posible a la original. Control de estados, localStorage' }
  ]


  return (
    <section className="projectCard">
      {project.map((card) => {
        return <a key={card.id}  className="link" href={card.link} target="_blank" rel="noopener noreferrer">
          <div class="card-container">
            <img
              className="img"
              alt="Page Preview"
              src={card.img} />
            <div className="text-card">
              <h1>{card.name}</h1>
              <p>{card.description}</p>
            </div>
          </div>
        </a>
      })}
    </section>
  )
}

export default Projects;