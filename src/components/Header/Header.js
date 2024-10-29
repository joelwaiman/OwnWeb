//Header.js

import React from 'react';
import { FaHome } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";
import { HashLink } from 'react-router-hash-link';

export const Header = ({ activeSection }) => {
  const menu = [
    { id: 0, name: 'HOME', route: "#home", icon: <FaHome /> },
    { id: 1, name: 'PROYECTOS', route: "#proyectos", icon: <AiFillProject /> },
    { id: 2, name: 'CONTACTO', route: "#contacto", icon: <MdPermContactCalendar /> }
  ];

  return (
    <header className='hidden fixed lg:flex flex-col justify-center border-r-2 border-[rgba(52,56,52,0.5)] items-center h-[100vh]'>
      <nav className='flex flex-col gap-10 px-5 text-secondary'>
        {menu.map((circ) => {
          return (
            <HashLink
              smooth
              to={circ.route}
              key={circ.id}
              className='relative w-full'
            >
              {activeSection === circ.route.substring(1) && (
                <div className='absolute top-3 -right-3 w-10 h-10 bg-primary rounded-xl animate-fade-right'
                  style={{ zIndex: -1 }} />
              )}
              <div
                className={
                  activeSection === circ.route.substring(1)
                    ? 'flex items-center gap-3 bg-glassmorph backdrop-blur-[20px] p-5 rounded-xl transition-all duration-500 ease-in-out relative'
                    : 'flex items-center gap-3 p-5 transition-all duration-500 ease-in-out rounded-[25%] relative'
                }
              >
                <p className={activeSection === circ.route.substring(1)
                    ? 'text-primary'
                    : ''}>{circ.icon}</p>
                <p>{circ.name}</p>
              </div>
            </HashLink>
          );
        })}
      </nav>
    </header>
  );
};
