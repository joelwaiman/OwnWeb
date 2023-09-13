import React from "react";
import './Home.css'
import image from '../assets/avatar.png'
import icons from '../assets/icons'

const Home = () => {
    return (
        <section className="homeSide">
            <div className="avatar">
                <img
                    className="img"
                    src={image}
                    alt="Chico con gafas sonriendo" />
            </div>
            <div className="titleHead">
                <p className="title-1">Hola, soy
                    <strong className="textHome"> Joel
                        <br /> Front End Developer <br />
                    </strong> Es un placer que estés aqui.</p>
                <p>Mi enfoque en el desarrollo front-end se centra en la creación de buenas experiencias visuales. Trabajo activamente en la mejora de la estética y la usabilidad del sitio.</p>
                <p className="textContact">
                    Contactame
                    {icons.map((icon) => {
                        return <a
                            key={icon.id}
                            className="iconsHome"
                            href={icon.route}
                            target="_blank"
                            rel="noopener noreferrer">
                            {icon.name}
                        </a>
                    })}
                </p>
            </div>
        </section>
    )
}

export default Home;