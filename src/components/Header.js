import React from 'react'
import './Header.css'

const Header = () => {

    const menu = [{id: 0, name:'HOME'}, {id: 1, name:'PROYECTOS'}, {id: 2, name:'CONTACTO'}]

    return(
        <div>
            <div className='menu'>{menu.map((accs)=>{
                return <p>{accs.name}</p>
            })}</div>
        </div>
    )
}

export default Header;