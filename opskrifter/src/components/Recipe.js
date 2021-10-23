import React from 'react'
import uuid from 'react-uuid'
import style from '../recipe.module.css'


function Recipe({title, calories, img, ingre}) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingre.map(item => (
                    <li key={uuid()}>{item.text}</li>
                ))}
            </ul>
            <p>{Math.floor(calories)} calories</p>
            <img className={style.image} src={img} alt=""/>
        </div>
    )
}

export default Recipe
