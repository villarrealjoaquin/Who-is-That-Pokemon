import React, { useState, useEffect } from 'react'
import JSConfetti from 'js-confetti'

export const Pokemon = () => {
    const [currentPokemon, setCurrentPokemon] = useState(null)
    const [options, setOptions] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)
    const [isDisable, setIsDisable] = useState(false)

    const getPokemons = async () => {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
        const data = await request.json()

        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const results = await Promise.all(promises)
        const current = results[Math.floor(Math.random() * results.length)]
        setCurrentPokemon(current)
        setOptions([
            current?.name,
            results[Math.floor(Math.random() * results.length)].name,
            results[Math.floor(Math.random() * results.length)].name,
            results[Math.floor(Math.random() * results.length)].name
        ].sort(() => Math.random() - 0.5))
    }

    useEffect(() => {
        getPokemons()
    }, [])

    const handleClick = (option, e) => {

        const jsConfetti = new JSConfetti()

        if (option === currentPokemon.name) {
            e.target.classList.add("valid")
            setIsCorrect(true)
            setIsDisable(true)
            jsConfetti.addConfetti()
        } else {
            e.target.classList.add("invalid")
            setIsDisable(true)
        }

        setTimeout(() => {
            e.target.classList.remove("valid", "invalid")
            setIsCorrect(false)
            setIsDisable(false)
            getPokemons()
        }, 1500)
    }

    return (
        <>
            <div className='pokemon'>
                <div className='container-pokemons'>
                    {options.map((option, i) => (
                        <button key={i} disabled={isDisable} onClick={(e) => handleClick(option, e)}>{option}</button>
                    ))}
                </div>
                <div className='pokemones'>
                    <img style={{ "imageRendering": "pixelated", 'filter': isCorrect ? 'brightness(1)' : 'brightness(0)' }} src={currentPokemon?.sprites.front_default} alt={currentPokemon?.name} />
                </div>
            </div>
        </>

    )
}
