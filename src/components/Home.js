import React from "react";

import image from '../assets/avatar.webp'
import icons from '../assets/icons'

import iconsStack from '../assets/iconsStack'

const Home = () => {

    return (
        <section className="animate-fade animate-delay-700 flex flex-col justify-center items-center min-h-screen m-auto lg:w-[80%] max-w-[95%] text-text gap-10"
            id="home">

            <div className="xl:absolute top-[10%] left-[30%] h-[30%] w-[30%] bg-primary opacity-30 -z-10 rounded-full blur-[90px]" />
            <div className="xl:absolute top-[40%] right-[30%] h-[30%] w-[20%] bg-primary opacity-40 -z-10 rounded-full blur-[90px] animate-pulse animate-infinite animate-duration-[5000ms]" />

            {/* TEXTO BACKGROUND */}

            <style jsx>{`
                .outline-text {
                -webkit-text-stroke: 2px #c5bac4;
                -webkit-text-fill-color: transparent;
                }
            `}</style>
            <h1 className="absolute top-[15%] text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[200px] opacity-20 -z-10 font-extrabold outline-text">
                WELCOME
            </h1>

            <div className="px-4 md:px-6 z-10 max-w-[80%]">
                <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12">
                    <div className="flex justify-center w-full md:w-3/4">
                        <img
                            alt="Portfolio image"
                            className="w-1/2 lg:w-4/5 aspect-square overflow-hidden rounded-xl object-cover object-center"
                            height="600"
                            src={image}
                            width="600"
                        />
                    </div>
                    <article className="animate-fade-left animate-delay-700 flex flex-col text-text items-center bg-glassmorph backdrop-blur-[20px] rounded-2xl shadow-[rgba(0,0,0,0.2)] p-5 text-center w-full lg:w-3/4">
                        <p className="text-4xl">Hola, soy
                            <strong className="bg-gradient-to-tr from-primary to-secondary text-transparent bg-clip-text text-5xl"> Joel
                                <br /> Front End Developer <br />
                            </strong> Es un placer que estés aqui.</p>
                        <div
                            className="flex w-full justify-between md:w-3/4 text-3xl text-secondary py-5 animate-fade">
                            {iconsStack.map((icns) => {
                                return <div className="min-w-fit">
                                    <span className=""
                                        key={icns.id}
                                        title={icns.title}>
                                        {icns.name}
                                    </span>
                                    <p className="hidden ">{icns.title}</p>
                                </div>
                            })}
                        </div>
                        <p>Mi enfoque en el desarrollo front-end se centra en la creación de buenas experiencias visuales. Trabajo activamente en la mejora de la estética y la usabilidad del sitio.</p>
                        <div className="flex justify-between items-stretch md:w-1/2 w-3/4 py-5">
                            Contactame:
                            {icons.map((icon) => {
                                return <a
                                    key={icon.id}
                                    className="text-3xl text-primary hover:scale-110 transition-all duration-300"
                                    href={icon.route}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    {icon.name}
                                </a>
                            })}
                        </div>
                    </article>
                </div>
            </div>

        </section>
    )
}

export default Home;