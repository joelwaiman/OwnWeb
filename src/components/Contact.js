import React from "react";
import './Contact.css';
import icons from "../assets/icons";

const Contact = () => {

    return (
        <section className="contact-container">
            <div className="card-container-contact" id="Contacto">
                {icons.map((icon) => {
                    return <div
                        className="cardIcons"
                        key={icon.id}
                        to={icon.route}>
                        <a className="icon"
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