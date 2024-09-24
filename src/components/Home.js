import React from "react";

import image from '../assets/avatar.webp'
import icons from '../assets/icons'

import iconsStack from '../assets/iconsStack'

const Home = () => {

    return (
        <section className="animate-fade animate-delay-700 flex flex-col justify-center items-center min-h-screen m-auto lg:w-[80%] max-w-[95%] text-text gap-10"
            id="home">

            <div className="xl:absolute top-[10%] left-[30%] h-[30%] w-[30%] bg-primary opacity-30 rounded-full blur-[90px] animate-pulse animate-infinite animate-duration-[7000ms]" />
            <div className="xl:absolute top-[40%] right-[30%] h-[30%] w-[20%] bg-primary opacity-40 rounded-full blur-[90px] animate-pulse animate-infinite animate-duration-[5000ms]" />

            {/* TEXTO BACKGROUND */}

            <style jsx>{`
                .outline-text {
                -webkit-text-stroke: 2px #c5bac4;
                -webkit-text-fill-color: transparent;
                }
            `}</style>
            <h1 className="absolute top-[15%] text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[200px] opacity-20 font-extrabold outline-text -z-50">
                WELCOME
            </h1>

            <div className="px-4 md:px-6 max-w-[80%]">
                <div className="flex flex-col lg:flex-row lg:z-50 items-center gap-6 md:gap-12">
                    <div className="flex justify-center w-full md:w-3/4">
                        <img
                            alt="Me"
                            className="w-1/2 lg:w-4/5 aspect-square overflow-hidden rounded-xl object-cover object-center border-4 border-gray-400/20 lg:rotate-3 lg:hover:rotate-0 transition-all duration-500 lg:hover:border-secondary"
                            height="600"
                            src={image}
                            width="600"
                        />
                    </div>
                    <article className="animate-fade-left animate-delay-700 flex flex-col text-text items-center lg:items-start lg:text-start bg-glassmorph backdrop-blur-[20px] rounded-2xl p-5 text-center w-full lg:w-3/4">
                        <p className="text-3xl font-medium">Hola, soy
                            <strong className="bg-gradient-to-tr font-bold from-primary to-secondary text-transparent bg-clip-text text-5xl"> Joel
                                <br /> Front End Developer <br />
                            </strong> Es un placer que estés aqui.
                        </p>
                        <div
                            className="flex flex-wrap w-full justify-center lg:justify-start gap-4 md:w-3/4 text-3xl py-5 animate-fade">
                            {iconsStack.map((icns) => {
                                return <div className="flex flex-col items-center min-w-fit hover:scale-[1.1] transition-all duration-200"
                                    key={icns.id}>
                                    <span className=""
                                        title={icns.title}>
                                        {icns.name}
                                    </span>
                                    <p className="text-sm">{icns.title}</p>
                                </div>
                            })}
                        </div>
                        <p className="text-xl">Mi enfoque en el desarrollo front-end se centra en la creación de buenas experiencias visuales. Trabajo activamente en la mejora de la estética y la usabilidad del sitio.</p>
                        <div className="flex gap-4 items-stretch md:w-1/2 w-3/4 py-5 text-xl">
                            Contactame:
                            {icons.map((icon) => {
                                return <a
                                    key={icon.id}
                                    className="text-3xl text-secondary lg:text-dark hover:scale-110 transition-all duration-300"
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