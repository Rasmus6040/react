import React from 'react'
import Box from './Box';
import ValT from '../../images/ValT.jpg'
import POW from '../../images/POW.jpg'
import Torden from '../../images/Torden.jpg'


function Portfolio() {
    return (  
        <section className="portfolio">
            <Box info={"Spillet er linket til Github hvor i kan se koden. Jeg har lavet spillet i en skibus på vej til Val Thorens i 3.G."} text="Ski spil" image={ValT} link={"https://github.com/Rasmus6040/Projects/tree/master/Val%20thorens"}/>
            <Box info={"Spillet er linket til Github hvor i kan se koden. Spillet er en remaster af et spil jeg lavede i 10. klasse."}text="POW" image={POW} link={"https://github.com/Rasmus6040/Projects/tree/master/Pow"}/>
            <Box info={"Hjemmeside der er lavet i 3.G til natklubben TordenSkiold i Kolding"}text="TordenSkiold" image={Torden} link={"https://github.com/Rasmus6040/Projects/tree/master/Torden"}/>
        </section>
    )

}

export default Portfolio
