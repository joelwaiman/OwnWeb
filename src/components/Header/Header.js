import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const menu = [
        { id: 0, name: 'HOME', route: "/" },
        { id: 1, name: 'PROYECTOS', route: "/Proyectos" },
        { id: 2, name: 'CONTACTO', route: "/Contacto" }
    ]

    return (
        <>
            <div>
                <nav className='menu'>{menu.map((accs) => {
                    return <NavLink className='navLink' to={accs.route}>{accs.name}</NavLink>
                })}</nav>
            </div>
                <nav className='menuCircles'>{menu.map((circ) => {
                    return <NavLink className='circles' to={circ.route} key={circ.id}><div className='circle'/></NavLink>
                })}</nav>
        </>
    )
}

export default Header;