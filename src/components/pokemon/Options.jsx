import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/Options.css'

export const Options = () => {

    const handleHistory = () => {
        history.push('/pokemon')
    }

    return (
        <>
            <div className="container-options">
                <h2>Felicitaciones tu puntuacion fue de: </h2>
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
