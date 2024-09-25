import React from "react";

import image from '../assets/avatar.webp'
import icons from '../assets/icons'

import iconsStack from '../assets/iconsStack'

const Home = () => {

    return (
        <section
            className="relative flex flex-col justify-center items-center min-h-screen m-auto lg:w-[80%] max-w-[95%] text-text gap-10 overflow-hidden animate-fade-up"
            id="home"
        >
            <div className="lg:absolute top-[10%] left-[30%] h-[30%] w-[30%] bg-primary opacity-30 -z-10 rounded-full blur-[90px] animate-pulse animate-infinite animate-duration-[7000ms]" />
            <div className="lg:absolute top-[40%] right-[30%] h-[30%] w-[20%] bg-primary opacity-40 -z-10 rounded-full blur-[90px] animate-pulse animate-infinite animate-duration-[5000ms]" />

            <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 2px #c5bac4;
          -webkit-text-fill-color: transparent;
        }
        .blur-background {
          filter: blur(5px);
        }
        .content-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          backdrop-filter: blur(0);
        }
      `}</style>

            <h1
                className="sticky text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[200px] opacity-20 font-extrabold outline-text"
            >
                Welcome
            </h1>

            <div className="relative px-4 md:px-6 z-10 max-w-full lg:max-w-[85%]">
                <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12 relative">
                    <div className="flex justify-center w-full md:w-3/4">
                        <img
                            alt="Me"
                            className="w-1/2 lg:w-4/5 aspect-square overflow-hidden rounded-xl object-cover object-center border-4 border-gray-400/20 lg:rotate-3 lg:hover:rotate-0 transition-all duration-500 lg:hover:border-secondary lg:hover:shadow-[0_0_30px_0_rgba(197,186,196,0.3)]"
                            height="600"
                            src={image}
                            width="600"
                        />
                    </div>

                    <div
                        className=" relative flex flex-col text-text items-center lg:items-start lg:text-start rounded-2xl shadow-[0_0_30px_0_rgba(0,0,0,0.3)] backdrop-blur-md backdrop-filter p-5 text-center w-full lg:w-3/4"
                    >
                        <p className="text-3xl font-medium">Hola, soy
                            <strong className="bg-gradient-to-tr font-bold from-primary to-secondary text-transparent bg-clip-text text-5xl"> Joel
                                <br /> Front End Developer <br />
                            </strong> Es un placer que estés aqui.
                        </p>
                        {iconsStack.length > 0 && (
                            <div className="flex flex-wrap justify-center lg:justify-start w-full gap-4 text-3xl text-secondary py-5">
                                {iconsStack.map((icns) => (
                                    <div
                                        className="flex flex-col items-center min-w-fit hover:scale-110 transition-all duration-200"
                                        key={icns.id}
                                    >
                                        <span title={icns.title}>{icns.name}</span>
                                        <p className="text-sm">{icns.title}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        <p className="text-xl">Mi enfoque en el desarrollo front-end se centra en la creación de buenas experiencias visuales. Trabajo activamente en la mejora de la estética y la usabilidad del sitio.</p>
                        {icons.length > 0 && (
                            <div className="flex justify-center items-stretch gap-4 py-5">
                                Contactame:
                                {icons.map((icon) => (
                                    <a
                                        key={icon.id}
                                        className="text-3xl text-primary hover:scale-110 transition-all duration-300"
                                        href={icon.route}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {icon.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Home;