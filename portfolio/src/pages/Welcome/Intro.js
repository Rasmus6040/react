import React from 'react'
import FrontImage from '../../images/FrontImage.jpg';
import '../../App.css';
import Zoom from 'react-reveal/Zoom';


function Intro() {
    return (
      <section className="intro-section">
        <Zoom>
        <div className="intro" id="intro">
          <h1 className="section__title section__title--intro"> 
            Hej jeg er <strong>Rasmus Pedersen</strong>
          </h1>
          <p className="section__subtitle section__subtitle--intro">Datalogi studerende</p>
          <img className="intro__img" src={FrontImage} alt="Rasmus Pedersen"></img>
        </div>
        <div className="sub-intro">
          <h2 className="section__title center"> Webdesigner, React og Java </h2>
        </div>
        </Zoom>
      </section>
    );
}

export default Intro
