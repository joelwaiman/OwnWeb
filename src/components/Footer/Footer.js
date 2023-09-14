import React from "react";
import styles from "./footer.module.css";

import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const iconsTech = [
    {id: 0, name: <FaHtml5/>, title: 'HTML5'},
    {id: 1, name: <FaCss3Alt/>, title: 'CCS3'},
    {id: 2, name: <FaJs/>, title: 'JavaScript'},
    {id: 3, name: <FaReact/>, title: 'ReactJS'},
    {id: 4, name: <FaGitAlt/>, title: 'Git'},
    {id: 5, name: <SiNextdotjs/>, title: 'NextJS'},
]

const Footer = () => {
    
    return(
        <div className={styles.container}>
            {iconsTech.map((icons)=>{
                return <p 
                key={icons.id}
                className={styles.icons}
                title={icons.title}>
                    {icons.name}
                </p>
            })}
        </div>
    )
}

export default Footer;