import React from "react";
import './Projects.css';
import { Link } from "react-router-dom";

const Projects = () => {
  const project = [
    { id: 0, name: 'Clon MeLi', link: 'https://me-li-clon.vercel.app/' },
    { id: 1, name: 'E-Commerce'},
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
                  Lorem ipsum dolor sit amet, consectetur adipii
                  voluptas ten mollitia pariatur odit
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