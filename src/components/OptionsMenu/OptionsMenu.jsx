import React from 'react'
import images from '../../assets/img/images'
import { Link } from 'react-router-dom'

export const OptionsMenu = ({ closeModal }) => {
    return (
        <>
            <div className='main-menu'>
                <img className='img-menu' src={images.img1} alt="logo pokemon" />
                <h1 className='h1-menu'>Who Is That Pokemon?</h1>
                    <Link to='/pokemon'><button className='option-menu'>Nueva partida</button></Link>
                    <Link to= '/personalizada'><button className='option-menu'>Personalizada</button></Link>
                    <Link to='/nick'><button className='option-menu'>Opciones</button></Link>      
                    <button className='option-menu' onClick={closeModal}>Salir del juego</button>
            </div>
        </>
    )
}
