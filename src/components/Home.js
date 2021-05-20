import React from 'react'
import ImgHome from '../images/image20.png'
import Github from '../images/github@2x.png'
import LinkedIn from '../images/linkedin@2x.png'
//import Circulo from '../images/circulo.png'
import Circulo2 from '../images/circulo2.png'


const Home = () => {
    return (
        <div className="home__main">
            <div className="home__links">
                <span className="mt-5 mb-5"><a target="blank" href="https://github.com/GianfrancoLofeudo"><img alt ="redsocial" src={Github}></img></a></span>
                <span className="mt-1 mb-5"><a target="blank" href="https://www.linkedin.com/in/gianfranco-lofeudo-b7306b8b/"><img alt ="redsocial" src={LinkedIn}></img></a></span>
            </div>
            <div>
                <h1 className="home__h1">Gianfranco</h1>
                <h2 className="home__h1">Lofeudo, </h2>
                <h4 className="home__h4">Web Developer</h4>
            </div>
            <div className="home__containerimg">
                
                <img alt="imghome" className="home__img ml-5" src={ImgHome}></img>
                <img className="home__circulo" alt="img" src={Circulo2} />
            </div>
                
        </div>
    )
}

export default Home
