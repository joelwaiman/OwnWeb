import React from "react";

import icons from '../assets/icons'
import profile from '../assets/profile.webp'

const Contact = () => {

    return (
        <section className="flex flex-col-reverse justify-center items-center max-w-[90%] md:max-w-[80%] min-h-[100vh] m-auto"
            id="contacto">
            <div className="flex items-center w-[90%] md:w-[90%] mx-auto py-12 md:order-1 order-1">
                <h1 className="text-6xl text-[#EEEEEE] font-bold inline-block">Sobre mi</h1>
                <hr className="flex-grow ml-4 bg-[#EEEEEE] border-0 h-[1px]" />
            </div>

            <div className="relative flex md:flex-row flex-col p-3 my-10 justify-evenly items-center overflow-hidden max-w-[90%] md:max-w-[80%] md:min-h-full min-h-[700px] gap-5 bg-[rgba(255,255,255,0.06)] backdrop-blur-[20px] rounded-2xl shadow-[rgba(0,0,0,0.2)]">

                <article className="flex flex-col md:w-1/4 min-h-80 items-center md:justify-between ">
                    <img className="md:w-[100%] md:h-[100%] w-[40%] h-[40%] my-2 rounded-[50%] hover:scale-[1.025] ease-in duration-200 border-2 border-slate-200/75 shadow-xl"
                        src={profile}
                        alt="yo" />
                    <p className="text-l text-[#EEEEEE] font-thin text-center my-5">
                        @joelwaiman
                        <br />
                        <span className="font-bold text-xl bg-gradient-to-br from-[#76ABAE] to-[#EEEEEE] text-transparent bg-clip-text">
                            Frontend Developer
                        </span>
                    </p>
                </article>

                <article className="flex flex-col text-[#EEEEEE] justify-between min-h-80 md:w-1/2 w-[95%]">
                    <p className="bg-[#222831] font-bold p-2 rounded-xl text-xl">
                        Sobre mi
                    </p>
                    <p className="px-2 rounded-xl font-light text-xl">
                        Con 1 año de experiencia freelance, busco oportunidades como Frontend Developer trainee/junior para aprender y crecer en el ámbito del desarrollo web. Me considero una persona proactiva, con capacidad de aprendizaje y trabajo en equipo.-
                    </p>
                    <p className="bg-[#222831] font-bold p-2 rounded-xl text-xl">
                        Hablemos
                    </p>

                    <div className="flex gap-5 justify-between md:justify-start">
                        {icons.map((icon) => {
                            return <div className="flex justify-center items-center px-2">
                                <a className="text-[#76ABAE] text-6xl hover:scale-105 ease-out duration-200"
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