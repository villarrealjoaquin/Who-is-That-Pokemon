import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/img/images'
import '../../styles/Menu.css'

export const MainMenu = () => {
    const [showModal, setShowModal] = useState(true)

    const closeModal = () => {
        setShowModal(!showModal)
        toggleDarkMode()
    }

    return (
        <>
            {showModal ?
                (<div className='main-menu'>
                    <img className='img-menu' src={images.img1} alt="logo pokemon" />
                    <h1 className='h1-menu'>Who Is That Pokemon?</h1>
                    <Link to='/pokemon'><button className='option-menu'>Nueva partida</button></Link>
                    <button className='option-menu'>Cargar partida</button>
                    <button className='option-menu'>Opciones</button>
                    <button className='option-menu' onClick={closeModal}>Salir del juego</button>
                </div>) :
                (
                    <div className="modal-container">
                        <div className="modal">
                            <button className='close' onClick={closeModal}>X</button>
                            <div className="modal-content">
                                <h2>Deseas salir del juego?</h2>
                                <button className="btn-close" onClick={closeModal}>Volver al juego</button>
                                <Link to='/sadPokemon'><button className="btn-close">Cerrar el juego</button></Link>
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}
