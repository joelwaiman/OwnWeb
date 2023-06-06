import React from "react";
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faEnvelope, faGithub, faLinkedin)

const Contact = () => {

    return (
        <div className="icons">
            <button className="typeIcons">
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
            </button>
            <button className="typeIcons">
            <FontAwesomeIcon icon={['fab', 'github']} />
            </button>
            <button className="typeIcons">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </button>
        </div>
    )
}

export default Contact;