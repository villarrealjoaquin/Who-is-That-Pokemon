import React, { useState, useEffect } from 'react'
import JSConfetti from 'js-confetti'
import '../../styles/Pokemon.css'
import { BarraDeVida } from '../../components/HealthBar/BarraDeVida'
import { Options } from '../../components/Options/Options'
import { ListPokemons } from '../../components/ListPokemons/ListPokemons'

export const Pokemon = () => {
    const [currentPokemon, setCurrentPokemon] = useState(null)
    const [puntuaction, setPuntuaction] = useState(0)
    const [options, setOptions] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)
    const [isDisable, setIsDisable] = useState(false)
    const [life, setLife] = useState(100)
    const [pokemonName, setPokemonName] = useState(true)
    const [showTime, setShowTime] = useState(false)
    const [nextPokemonTime, setNextPokemonTime] = useState(2)
    const [isStarted, setIsStarted] = useState(false)
    const [selectedPokemonNames, setSelectedPokemonNames] = useState([]);

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
        const newResults = results.filter(pokemon => !selectedPokemonNames.includes(pokemon.name))
        setCurrentPokemon(current)
        setOptions([
            current?.name,
            newResults[Math.floor(Math.random() * results.length)].name,
            newResults[Math.floor(Math.random() * results.length)].name,
            newResults[Math.floor(Math.random() * results.length)].name
        ].sort(() => Math.random() - 0.5))
        setNextPokemonTime(2)
    }

    const jsConfetti = new JSConfetti()

    useEffect(() => {
        getPokemons()
    }, [])

    useEffect(() => {
        if (nextPokemonTime > 0 && isStarted) {
            const interval = setInterval(() => {
                setNextPokemonTime(nextPokemonTime - 1)
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [nextPokemonTime, isStarted])

    const handleClick = (option, e) => {
        setSelectedPokemonNames([...selectedPokemonNames, currentPokemon.name])
        setShowTime(true)
        if (option === currentPokemon.name) {
            e.target.classList.add("valid")
            setIsCorrect(true)
            setIsDisable(true)
            setPuntuaction(puntuaction + 1)
            jsConfetti.addConfetti()
        } else {
            e.target.classList.add("invalid")
            setIsCorrect(true)
            setIsDisable(true)
            setLife(life - 20)
            setPokemonName(false)
        }
        setIsStarted(true)
        nextPokemon(e)
    }

    const nextPokemon = (e) => {
        setTimeout(() => {
            e.target.classList.remove("valid", "invalid")
            setIsCorrect(false)
            setIsDisable(false)
            setPokemonName(true)
            setShowTime(false)
            setIsStarted(false)
            getPokemons()
        }, 3000)
    }

    return (
        <>
            <div className="container-pokemon-game">
            {life > 0 ?
                (<>
                    <BarraDeVida life={life} />
                    <ListPokemons options={options}
                        handleClick={handleClick}
                        isCorrect={isCorrect}
                        isDisable={isDisable}
                        currentPokemon={currentPokemon}
                    />
                    {!pokemonName && <p className='name-pokemon'>Es {currentPokemon?.name}</p>}
                    {showTime && <p className='name-pokemon'>Proximo pokemon en: {nextPokemonTime}</p>}
                </>)
                : (<Options puntuaction={puntuaction} />)}
                {/* <button className='go-to-home'>Volver</button> */}
            </div>
            
        </>
    )
}
