import React from 'react'

import { FaHome } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";

import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    const location = useLocation();

    const menu = [
        { id: 0, name: 'HOME', route: "#home", icon: <FaHome /> },
        { id: 1, name: 'PROYECTOS', route: "#proyectos", icon: <AiFillProject /> },
        { id: 2, name: 'CONTACTO', route: "#contacto", icon: <MdPermContactCalendar /> }
    ]

    return (
        <>
            <div className='fixed flex flex-col justify-center items-center shadow-[0px 0px 10px 2px #03001C] border-r-[#03001c] h-[100vh] w-[7%]'>
                <nav>{menu.map((circ) => {
                    return <HashLink smooth
                        className='flex justify-center m-7'
                        to={circ.route}
                        key={circ.id}>
                        <div className={location.hash === circ.route ? 'absolute bg-gradient-to-tr from-[rgb(182,234,218,0.8)] to-[#5b8eb91a] to-60% w-12 h-12 rounded-[25%] rotate-45' : 'transition-all duration-300 ease-in-out'} />
                        <p className={location.hash === circ.route? 'flex text-3xl p-3 text-[#e7e7e7] transition-all duration-300 ease-in-out' 
                        : 
                        'flex text-xl text-[#5B8FB9] transition-all duration-300 ease-in-out hover:text-[#e7e7e7] rounded-[25%]'}>{circ.icon}</p>
                    </HashLink>
                })}
                </nav>
            </div>
        </>
    )
}

export default Header;