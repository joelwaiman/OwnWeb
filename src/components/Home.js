import React from "react";

import styles from './Image.module.css'


import image from '../assets/avatar.png'
import icons from '../assets/icons'

import iconsStack from '../assets/iconsStack'

const Home = () => {

    return (
        <section className="animate-fade animate-delay-700 flex flex-col-reverse justify-center md:w-[80%] w-full m-auto min-h-screen"
            id="home"
        >
            <div className="flex items-center justify-center w-[90%] md:w-[90%] mx-auto py-12 md:order-1 order-1">
                <h1 className="text-6xl text-[#EEEEEE] font-bold inline-block">Bienvenidos</h1>
                <hr className="hidden md:flex md:flex-grow md:ml-4 md:bg-[#EEEEEE] md:border-0 md:h-[1px]" />
            </div>
            <div className="flex flex-col md:flex-row md:justify-center justify-evenly items-center" >
                <div className="flex justify-center md:w-[45%] w-1/2">
                    <img className={styles.image}
                        src={image}
                        alt="Chico con gafas sonriendo" />
                </div>
                <div className="animate-fade-left animate-delay-700 flex flex-col items-center bg-[rgba(255,255,255,0.06)] backdrop-blur-[20px] rounded-2xl shadow-[rgba(0,0,0,0.2)] p-5 md:items-start text-center md:text-start w-[90%] md:w-1/2 text-xl text-slate-100">
                    <p className="text-3xl">Hola, soy
                        <strong className="bg-gradient-to-tr from-[#76ABAE] to-[#EEEEEE] text-transparent bg-clip-text"> Joel
                            <br /> Front End Developer <br />
                        </strong> Es un placer que estés aqui.</p>
                    <div
                        className="flex justify-between w-3/4 text-3xl text-[#76ABAE] py-5 animate-fade">
                        {iconsStack.map((icns) => {
                            return <p className="hover:scale-110 transition-all duration-300"
                                key={icns.id}
                                title={icns.title}>
                                {icns.name}
                            </p>
                        })}
                    </div>
                    <p>Mi enfoque en el desarrollo front-end se centra en la creación de buenas experiencias visuales. Trabajo activamente en la mejora de la estética y la usabilidad del sitio.</p>
                    <div className="flex justify-between items-stretch md:w-1/2 w-3/4 py-5">
                        Contactame:
                        {icons.map((icon) => {
                            return <a
                                key={icon.id}
                                className="text-3xl text-[#76ABAE] hover:scale-110 transition-all duration-300"
                                href={icon.route}
                                target="_blank"
                                rel="noopener noreferrer">
                                {icon.name}
                            </a>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;