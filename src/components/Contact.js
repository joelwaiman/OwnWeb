import React from "react";
import './Contact.css';
import icons from "../assets/icons";

const Contact = () => {

    return (
        <div className="icons-container" id="Contacto">
            {icons.map((icon) => {
                return <button
                className="typeIcons" 
                key={icon.id} 
                to={icon.route}>
                    <a className="icon" 
                    href={icon.route} 
                    target="_blank" 
                    rel="noopener noreferrer">
                        {icon.name}
                    </a>
                </button>
            })}
        </div>
    )
}

export default Contact;