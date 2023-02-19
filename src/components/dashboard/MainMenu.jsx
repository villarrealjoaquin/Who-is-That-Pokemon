import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/img/images'
import '../../styles/Menu.css'

export const MainMenu = () => {
    return (
        <>  
            <div className='main-menu'>
                <img className='img-menu' src={images.img1} alt="" />
                <h1 className='h1-menu'>Who Is That Pokemon?</h1>
                <Link to='/pokemon'><button className='option-menu'>Nueva partida</button></Link>
                <button className='option-menu'>Cargar partida</button>
                <button className='option-menu'>Opciones</button>
                <button className='option-menu'>Salir del juego</button>
            </div>
        </>
    )
}
