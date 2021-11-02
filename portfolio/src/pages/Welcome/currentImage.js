import React from 'react'
import Quvang from '../../images/Quvang.jpg';
import Klinik from '../../images/Klinik.jpg';
import Flispudser from '../../images/Flisepudser.jpg';
import Brodal from '../../images/Brodal.jpg';

function currentImage({index}) {
    switch (index){
        case 1:
            return (
                <>
                <div className="my-slides"> 
                    <img src={Quvang} title="Quvang køreskole"/>
                </div>
                <div className="caption-container">
                    <p id="caption"><a href="https://www.quvangkoereskole.com/"> Quvangs køreskole </a></p>
                </div>
                </>
            )
        case 2:
            return (
                <>
                <div className="my-slides"> 
                    <img src={Brodal} title="Brodal Bed and Breakfast"/>
                </div>
                <div className="caption-container">
                <p id="caption"><a href="https://www.brodal-vejen.com/"> Brodal bed and breakfast </a></p>
                </div>
                </>
            )
        case 3:
            return (
                <>
                <div className="my-slides"> 
                    <img src={Klinik} title="Brodal klinikken"/>
                </div>
                <div className="caption-container">
                <p id="caption"><a href="https://www.brodal-klinikken.dk/"> Brodal klinikken </a></p>
                </div>
                </>
            )
        case 4: 
            return (
                <>
                <div className="my-slides"> 
                    <img src={Flispudser} title="Flispudser lauget"/>
                </div>
                <div className="caption-container">
                <p id="caption"><a href="https://flisepudser.dk/"> Quvangs køreskole </a></p>
                </div>
                </>
            )
        default: return <> </>

    }
}

export default currentImage
