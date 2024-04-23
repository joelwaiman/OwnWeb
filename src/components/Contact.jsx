import React from "react";

import icons from '../assets/icons'

const Contact = () => {

    return (
        <section className="flex justify-center items-center max-w-[80%] min-h-[100vh] m-auto"
            id="contacto">
            <div className="flex justify-center gap-5 flex-wrap" >
                {icons.map((icon) => {
                    return <div
                        className="flex justify-center items-center w-80 h-80">
                        <a className="text-[#301E67] text-9xl "
                            href={icon.route}
                            target="_blank"
                            rel="noopener noreferrer">
                            {icon.name}
                        </a>
                    </div>
                })}

            </div>
        </section>

    )
}

export default Contact;