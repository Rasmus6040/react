import React from 'react'
import Fade from 'react-reveal/Fade';
import {SocialIcon} from 'react-social-icons';

function Contact() {
    const [pressed, setPressed] = React.useState(false);



    function press(){
        setPressed(!pressed);
    }

    if(!pressed){
        return (
            <div className="contact__button" onClick={press}>
                <p>
                Kontakt mig
                </p>
            </div>
        )
    }
    return(
        <Fade right>
            <div className="contact__field" onMouseLeave={press}>
                <div className="cantact__info .no-margin-bottom">
                    <p className="contact__title no-margin-top "> Kontakt</p>
                    <div className="contact__text"> 
                        <div id="mail">
                            <p id="mail__text" className="contact__text">
                                E-mail: ri9@live.dk
                            </p> 
                            <a href="mailto:ri9@live.dk" id="mail__hover" className="contact__text">
                                ri9@live.dk
                            </a>
                        </div>
                        <div id="tel">
                        <p id="tel__text" className="contact__text"> Tlf: 30647514 </p>
                        <a href="tel:30647514" id="tel__hover" className="contact__text">30647514</a>
                        </div>
                        <SocialIcon url="https://www.linkedin.com/in/rasmus-graversgaard-pedersen-a83a921a8/" className="sicon"/>
                        <SocialIcon url="https://www.facebook.com/rasmus.g.pedersen.9" className="sicon"/>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Contact
