import React from "react";

import icons from '../assets/icons'
import profile from '../assets/profile.webp'

const Contact = () => {

    return (
        <section className="flex justify-center items-center max-w-[80%] min-h-[100vh] m-auto"
            id="contacto">
            <div className="relative flex p-3 justify-evenly items-center overflow-hidden max-w-[90%] min-h-96 gap-5 bg-[rgba(255,255,255,0.06)] backdrop-blur-[20px] rounded-2xl shadow-[rgba(0,0,0,0.2)]">

                <article className="flex flex-col w-1/4 min-h-80 items-center justify-between ">
                    <img className="w-[100%] h-[100%] my-2 rounded-[50%] hover:scale-[1.025] ease-in duration-200 border-2 border-slate-200/75 shadow-xl"
                        src={profile}
                        alt="yo" />
                    <p className="text-l font-thin text-center text-slate-200/90 my-5">
                        @joelwaiman
                        <br />
                        <span className="font-bold text-xl bg-gradient-to-br from-[#B6EADA] to-[#5B8FB9] text-transparent bg-clip-text">
                            Frontend Developer
                        </span>
                    </p>
                </article>

                <article className="flex flex-col justify-between min-h-80 w-1/2">
                    <p className="bg-gradient-to-r from-[rgb(48,30,103,0.3)] to-[#03001C] p-2 rounded-xl text-slate-200/90 text-xl">
                        Sobre mi
                    </p>
                    <p className="px-2 rounded-xl text-slate-200/90 text-l">
                        Con 1 año de experiencia freelance, busco oportunidades como Frontend Developer trainee/junior para aprender y crecer en el ámbito del desarrollo web. Me considero una persona proactiva, con capacidad de aprendizaje y trabajo en equipo.-
                    </p>
                    <p className="bg-gradient-to-r from-[rgb(48,30,103,0.3)] to-[#03001C] p-2 rounded-xl text-slate-200/90 text-xl">
                        Hablemos
                    </p>

                    <div className="flex gap-5">
                        {icons.map((icon) => {
                            return <div className="flex justify-center items-center px-2">
                                <a className="text-[#B6EADA] text-6xl hover:scale-105 ease-out duration-200"
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