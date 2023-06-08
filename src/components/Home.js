import React from "react";
import './Home.css'
import image from '../assets/avatar.png'

const Home = () => {
    return (
        <section className="homeSide">
            <div className="avatar">
                <img className="img" src={image} alt="Chico con gafas sonriendo"/>
            </div>
            <div className="titleHead">
                <h1>Hi, I'm <strong className="textHome"> Joel <br /> Front End Developer <br /> </strong> It's nice you're here</h1>
            </div>
        </section>
    )
}

export default Home;