import React from 'react'

import ImgPersonal from '../images/yo.png'

const AboutMe = () => {
    return (
        <div className="about__container">
            <div className="about__aboutcontainer" >
                <h4 className="mb-5 about__h4">About Me</h4>
                <img alt="imagenperosnal" src={ImgPersonal}></img>
            </div>
            <div className="about__containerp">
                <p className="ml-5">Hi, I am @GianfrancoLofeudo, welcome! I am 27 years old and I am from Buenos Aires, Argentina. I am studying to be a programmer at UTN - Universidad Tecnológica Nacional. On the other hand I am also self studying Web Development with the MERN Stack.🌱 I’m currently learning React.js, Node.js and C# (.NET). I am searching for the opportunity to collaborate in a entry level position in software development.</p>
            </div>
        </div>
    )
}

export default AboutMe
