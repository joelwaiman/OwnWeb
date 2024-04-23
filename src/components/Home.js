import React from "react";


import image from '../assets/avatar.png'
import icons from '../assets/icons'

import iconsStack from '../assets/iconsStack'

const Home = () => {
    return (
        <section className="flex items-center w-[80%] m-auto h-screen" id="home">
            <div className="flex justify-center w-[45%]">
                <img className="animate-fade-down animate-delay-200 max-w-[70%] gradient-mask"
                    src={image}
                    alt="Chico con gafas sonriendo" />
            </div>
            <div className="animate-fade-left animate-delay-700 flex flex-col w-[50%] text-xl text-slate-100">
                <p className="text-3xl">Hola, soy
                    <strong className="bg-gradient-to-tr from-[#B6EADA] to-[#5B8FB9] text-transparent bg-clip-text"> Joel
                        <br /> Front End Developer <br />
                    </strong> Es un placer que estés aqui.</p>
                <div
                    className="flex justify-between text-3xl text-[#B6EADA] py-5 animate-fade">
                    {iconsStack.map((icns) => {
                        return <p className="hover:scale-110 transition-all duration-300"
                            key={icns.id}
                            title={icns.title}>
                            {icns.name}
                        </p>
                    })}
                </div>
                <p>Mi enfoque en el desarrollo front-end se centra en la creación de buenas experiencias visuales. Trabajo activamente en la mejora de la estética y la usabilidad del sitio.</p>
                <div className="flex justify-between items-stretch w-1/2 py-5">
                    Contactame:
                    {icons.map((icon) => {
                        return <a
                            key={icon.id}
                            className="text-3xl text-[#B6EADA] hover:scale-110 transition-all duration-300"
                            href={icon.route}
                            target="_blank"
                            rel="noopener noreferrer">
                            {icon.name}
                        </a>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Home;