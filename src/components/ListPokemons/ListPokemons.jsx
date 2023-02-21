import React from 'react'
import { ButtonsOptions } from '../ButtonsOptions/ButtonsOptions'

export const ListPokemons = ({ options, handleClick, isCorrect, currentPokemon, isDisable, nextPokemonTime, pokemonName, showTime }) => {
    return (
        <>
            <div className='pokemon'>
                <div className='container-pokemons'>
                    {options.map((option, i) => (
                        <ButtonsOptions key={i} option={option} handleClick={handleClick} isDisable={isDisable} />
                    ))}
                </div>
                <div className='pokemones'>
                    <img style={{ "imageRendering": "pixelated", 'filter': isCorrect ? 'brightness(1)' : 'brightness(0)' }} src={currentPokemon?.sprites.front_default} alt={currentPokemon?.name} />
                </div>
            </div>
            {!pokemonName && <p className='name-pokemon'>Es {currentPokemon?.name}</p>}
            {showTime && <p className='name-pokemon'>Proximo pokemon en: {nextPokemonTime}</p>}
        </>
    )
}
