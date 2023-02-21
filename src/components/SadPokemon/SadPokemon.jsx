import React from 'react'
import images from '../../assets/img/images'

export const SadPokemon = () => {
    return (
        <>
            <div className="pokemon-sad">
                <h2>Vuelve pronto! 😢</h2>
                <img className='pokemon-sad-img' src={images.img2} alt="pokemon triste" />
            </div>
        </>
    )
}
