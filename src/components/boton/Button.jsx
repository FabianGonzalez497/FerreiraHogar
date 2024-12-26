import React from 'react'
import './Button.css'

export const Button = ({ texto, color, funcion }) => {
    return (
        <button className={color} onClick={funcion}>
            {texto}
        </button>
    )
}