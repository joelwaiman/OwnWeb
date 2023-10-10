import React from 'react'
import styles from './Header.module.css'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {

    const location = useLocation();

    const menu = [
        { id: 0, name: 'HOME', route: "/" },
        { id: 1, name: 'PROYECTOS', route: "/Proyectos" },
        { id: 2, name: 'CONTACTO', route: "/Contacto" }
    ]

    return (
        <>
            <div className={styles.menu}>
                <nav className={styles.nav}>{menu.map((accs) => {
                    return <NavLink
                        key={accs.id}
                        className={location.pathname === accs.route ? styles.navLinkActive : styles.navLink}
                        to={accs.route}>
                        {accs.name}
                    </NavLink>
                })}</nav>
            </div>
            <div className={styles.lateralBar}>
                <nav className={styles.menuNav} >{menu.map((circ) => {
                    return <NavLink
                        to={circ.route}
                        key={circ.id}>
                        <div className={location.pathname === circ.route ? styles.scriptActive : styles.script} />
                    </NavLink>
                })}
                </nav>
            </div>
        </>
    )
}

export default Header;