import React, {useState} from 'react';
import CurrentImage from './currentImage';
import Quvang from '../../images/Quvang.jpg';
import Klinik from '../../images/Klinik.jpg';
import Flispudser from '../../images/Flisepudser.jpg';
import Brodal from '../../images/Brodal.jpg';

function AboutMe() {
    const [index, setIndex] = useState(1);
    
    // Next/previous controls
    function plusSlides(n) {
        if(n === "next"){
            if(index < 4){
                setIndex(index + 1);
            }else{
                setIndex(1);
            }
        }else if(n === "prev"){
            if(index > 1){
                setIndex(index-1)
            }else{
                setIndex(4)
            }
        }
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
        setIndex(n)
    }

    return (
        <section className="about-me-section" id="about-me">
            <h1 className="section__title center"> Tidligere projekter </h1>
            <h2 className="section__subtitle center italics">Følgende slideshow viser nogle af de hjemmesider jeg har lavet førhen</h2>
            <div className="container">
                <CurrentImage index={index}/>
                <p className="prev" onClick={() => plusSlides("prev")}>&#10094; </p>
                <p className="next" onClick={() => plusSlides("next")} href="#">&#10095;</p>
                <div className="row">
                    <div className="column">
                        <img className="demo cursor" src={Quvang} onClick={() => currentSlide(1)} alt="Quvangs Driving School"/> 
                    </div>
                    <div className="column">
                        <img className="demo cursor" src={Brodal} onClick={() => currentSlide(2)} alt="Bed and breakfast"/>
                    </div>
                    <div className="column">
                        <img className="demo cursor" src={Klinik} onClick={() => currentSlide(3)} alt="Brodal klinik"/>
                    </div>
                    <div className="column">
                        <img className="demo cursor" src={Flispudser} onClick={() => currentSlide(4)} alt="Flisepudser lauget"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
