import React from 'react'

import styles from './Header.module.css'

import { FaHome } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";

import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    const location = useLocation();

    const menu = [
        { id: 0, name: 'HOME', route: "#Home", icon: <FaHome /> },
        { id: 1, name: 'PROYECTOS', route: "#Proyectos", icon: <AiFillProject /> },
        { id: 2, name: 'CONTACTO', route: "#Contacto", icon: <MdPermContactCalendar /> }
    ]

    return (
        <>
            <div className={styles.menu}>
                <nav className={styles.nav}>{menu.map((accs) => {
                    return <HashLink smooth
                        key={accs.id}
                        className={location.hash === accs.route ? styles.navLinkActive : styles.navLink}
                        to={accs.route}>
                        {accs.name}
                    </HashLink>
                })}</nav>
            </div>
            <div className={styles.lateralBar}>
                <nav>{menu.map((circ) => {
                    return <HashLink smooth
                        className={styles.menuNav}
                        to={circ.route}
                        key={circ.id}>
                        <div className={location.hash === circ.route ? styles.scriptActive : styles.script} />
                        <p className={location.hash === circ.route? styles.iconActive : styles.icon}>{circ.icon}</p>

                    </HashLink>
                })}
                </nav>
            </div>
        </>
    )
}

export default Header;