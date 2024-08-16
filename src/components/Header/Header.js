import React from 'react'

import { FaHome } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";

import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Header = () => {

    const location = useLocation();

    const menu = [
        { id: 0, name: 'HOME', route: "#home", icon: <FaHome /> },
        { id: 1, name: 'PROYECTOS', route: "#proyectos", icon: <AiFillProject /> },
        { id: 2, name: 'CONTACTO', route: "#contacto", icon: <MdPermContactCalendar /> }
    ]

    return (
        <header className='hidden fixed md:flex flex-col justify-center border-r-2 border-[rgba(33,34,38,0.5)] items-center h-[100vh] w-[12%]'>
            <nav className='flex flex-col gap-10'>
                {menu.map((circ) => {
                    return (
                        <HashLink
                            smooth
                            to={circ.route}
                            key={circ.id}
                            className='relative w-full'
                        >
                            {location.hash === circ.route && (
                                <div className='absolute top-3 -right-3 w-10 h-10 bg-[#76ABAE] rounded-xl transition-transform duration-1000 ease-in-out'
                                    style={{ zIndex: -1 }} />
                            )}
                            <div
                                className={
                                    location.hash === circ.route
                                        ? 'flex items-center gap-3 bg-[rgba(34,40,49,0.7)] backdrop-blur-[20px] p-5 rounded-xl text-[#e7e7e7] transition-all duration-500 ease-in-out relative'
                                        : 'flex items-center gap-3 text-[#76ABAE] p-5 transition-all duration-500 ease-in-out hover:text-[#e7e7e7] rounded-[25%] relative'
                                }
                            >
                                <p>{circ.icon}</p>
                                <p>{circ.name}</p>
                            </div>
                        </HashLink>
                    );
                })}
            </nav>
        </header>
    );
}