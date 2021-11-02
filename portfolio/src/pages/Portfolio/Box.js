import React from 'react'
import { Link } from 'react-router-dom'

function Box({text, image, link, info}) {
    return (
        <a className="box tooltip" target="_blank" href={link}>
            <img className="box__image" src={image}/>
            <p className="box__text">{text}</p>
            <div className="top">
                <p className="port">{info}</p>
                <i></i>
            </div>
        </a>
    )
}

export default Box
