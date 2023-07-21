import React from "react";
import './Projects.css';
import { Link } from "react-router-dom";

const Projects = () => {
  const project = [
    { id: 0, name: 'Clon MeLi', link: 'https://me-li-clon.vercel.app/', description:'Clon de conocido E-commerce. Ruteo y filtrado, tanto de categoria, como producto individual. Consumiendo API de FakeStore' },
    { id: 1, name: 'E-Commerce', link:'https://fantastic-snickerdoodle-df7706.netlify.app/', description: 'Proyecto de fin de curso, E-commerce completo creado con ReactJS. Uso de Hooks, States, Context y mas. Firebase como base de datos'},
    { id: 2, name: 'Clon Twitter', link:'https://twitter-clone-lime.vercel.app', description: 'Proyecto hecho en React, con el objeto de crear una UI lo mas asemejada posible a la original. Control de estados, localStorage'}
  ]


  return (
    <section className="projectCard">
      {project.map((card) => {
        return <div class="card-container">
          <Link className="link" to={card.link}>
          <div class="card">
            <div class="front-content">
              <p>{card.name}</p>
            </div>
              <div class="content">
                <p class="heading">{card.name}</p>
                <p class="bodyCard">
                  {card.description}
                </p>
              </div>
          </div>
          </Link>
        </div>
      })}
    </section>
  )
}

export default Projects;