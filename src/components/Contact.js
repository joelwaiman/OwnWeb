import React from "react";
import './Contact.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faEnvelope, faGithub, faLinkedin)

const Contact = () => {

    return (
        <div className="icons-container">
            <Link to="mailto:waimanjoel@gmail.com">
                <button className="typeIcons">
                    <FontAwesomeIcon className="icon" icon="fa-solid fa-envelope" />
                </button>
            </Link>

            <Link to="https://github.com/joelwaiman">
                <button className="typeIcons">
                    <FontAwesomeIcon className="icon" icon={['fab', 'github']} />
                </button></Link>

            <Link to="https://www.linkedin.com/in/joel-waiman97/">
                <button className="typeIcons">
                    <FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} />
                </button></Link>

        </div>
    )
}

export default Contact;