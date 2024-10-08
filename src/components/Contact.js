import React from "react";

import icons from '../assets/icons'
import profile from '../assets/profile.webp'

const Contact = () => {

    return (
        <section className="flex flex-col justify-center items-center max-w-[100%] lg:max-w-[80%] min-h-[100vh] m-auto"
            id="contacto">

            <style jsx>{`
                .outline-text {
                -webkit-text-stroke: 2px #c5bac4;
                -webkit-text-fill-color: transparent;
                }
            `}</style>
            <h1 className="sticky text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[200px] opacity-20 -z-10 font-extrabold outline-text">
                About me.
            </h1>

            <div className="relative flex md:flex-row flex-col p-3 my-10 justify-evenly items-center overflow-hidden max-w-[90%] md:max-w-[80%] md:min-h-full min-h-[700px] gap-5 bg-glassmorph backdrop-blur-md rounded-2xl shadow-[rgba(0,0,0,0.2)]">

                <article className="flex flex-col md:w-1/4 min-h-80 items-center justify-center md:justify-between ">
                    <img className="md:w-[100%] md:h-[100%] w-[40%] h-[40%] my-2 rounded-[50%] hover:scale-[1.025] ease-in duration-200 border-2 border-mid shadow-xl"
                        src={profile}
                        alt="yo" />
                    <p className="text-l font-thin text-center my-5">
                        @joelwaiman
                        <br />
                        <span className="font-bold text-xl bg-gradient-to-br from-primary to-secondary text-transparent bg-clip-text">
                            Frontend Developer
                        </span>
                    </p>
                </article>

                <article className="flex flex-col justify-between min-h-80 md:w-1/2 w-[95%]">
                    <p className="bg-dark font-bold p-2 my-5 rounded-xl text-xl">
                        Sobre mi
                    </p>
                    <p className="px-2 rounded-xl font-light text-xl">
                        Busco oportunidades como Frontend Developer para aprender y crecer en el ámbito del desarrollo web. Me considero una persona proactiva, con capacidad de aprendizaje y trabajo en equipo.-
                    </p>
                    <p className="bg-dark font-bold p-2 my-5 rounded-xl text-xl">
                        Hablemos
                    </p>

                    <div className="flex gap-5 justify-between md:justify-start">
                        {icons.map((icon) => {
                            return <div className="flex justify-center items-center px-2"
                                key={icon}>
                                <a className="text-primary hover:text-secondary text-6xl hover:scale-105 ease-out duration-200"
                                    href={icon.route}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    {icon.name}
                                </a>
                            </div>
                        })}
                    </div>

                </article>
            </div>
        </section>

    )
}

export default Contact;