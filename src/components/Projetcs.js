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
                return <div class="card">
                    <div class="card2">
                    </div>
                </div>
            })}
        </section>
    )
}

export default Projects;