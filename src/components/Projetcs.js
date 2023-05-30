import React from "react";
import './Projects.css'

const Projects = () => {
    const project = [
        { id: 0, name: 'Clon Meli' },
        { id: 1, name: 'E-Commerce' },
        {id:2, name: 'Project 3' },
    ]
    return (
        <section className="projectCard">
            {project.map((card) => {
                return <div class="card-container">
                <div class="card">
                <div class="front-content">
                  <p>{card.name}</p>
                </div>
                <div class="content">
                  <p class="heading">Card Hover</p>
                  <p class="bodyCard">
                    Lorem ipsum dolor sit amet, consectetur adipii
                    voluptas ten mollitia pariatur odit, ab
                    minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                    necessitatibus dignissimos molestias.
                  </p>
                </div>
              </div>
              </div>
            })}
        </section>
    )
}

export default Projects;