import React from 'react'
import Proyecto1 from '../images/foto3.png'
// import Proyecto2 from '../images/foto2.png'
// import Proyecto3 from '../images/foto4.png'
// import Proyecto4 from '../images/foto5.png'
// import Proyecto5 from '../images/foto6.png'





const Portfolio = () => {


    return (
        <div className="bg-azul-oscuro portfolio__container-port">
            <div>
                <h4 className="h4 blanco-perla">Portfolio</h4>
            </div>
            <div className="portfolio__grid-container">
                <div className="portfolio__grid-item pointer">
                <img className="portfolio__img" alt="imgproyecto"
                 src={Proyecto1} />
                </div>
                <div className="portfolio__grid-item pointer">
                <img className="portfolio__img" alt="imgproyecto"
                 src={Proyecto1} />
                </div>
                <div className="portfolio__grid-item pointer">
                <img className="portfolio__img" alt="imgproyecto"
                 src={Proyecto1} />
                    </div>
                <div className="portfolio__grid-item pointer">
                <img className="portfolio__img" alt="imgproyecto"
                 src={Proyecto1} />
                </div>
                <div className="portfolio__grid-item pointer">
                <img className="portfolio__img" alt="imgproyecto"
                 src={Proyecto1} />
                </div>
                <div className="portfolio__grid-item pointer">
                <img className="portfolio__img" alt="imgproyecto"
                 src={Proyecto1} />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
