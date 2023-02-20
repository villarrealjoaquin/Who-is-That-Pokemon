import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/Options.css'

export const Options = ({ puntuaction }) => {
    return (
        <>
            <div className="container-options">
                <h2>Muchas gracias por jugar!</h2>
                <h2>Felicitaciones tu puntuacion fue de: {puntuaction} </h2>
                <div className='questions-user'>
                    <h2>Que deseas hacer?</h2>
                </div>
                <div className='btn-options'>
                    <button className="btn-option" onClick={()=> window.location.href= "/pokemon"}>Volver a Jugar</button>
                    <Link to="/"><button className="btn-option">Volver al Menu Principal</button></Link>
                </div>
            </div>
        </>
    )
}
