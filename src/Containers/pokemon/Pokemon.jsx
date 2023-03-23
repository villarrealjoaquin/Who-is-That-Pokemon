import React, { useState, useEffect } from 'react'
import JSConfetti from 'js-confetti'
import '../../styles/Pokemon.css'
import { BarraDeVida } from '../../components/HealthBar/BarraDeVida'
import { Options } from '../../components/Options/Options'
import { ListPokemons } from '../../components/ListPokemons/ListPokemons';
import { Link } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner';
import { pokemons } from '../../pokemonsOptions/pokemonOptions'

export const Pokemon = () => {
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [puntuaction, setPuntuaction] = useState(0);
    const [options, setOptions] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isDisable, setIsDisable] = useState(false);
    const [life, setLife] = useState(100);
    const [pokemonName, setPokemonName] = useState(true);
    const [showTime, setShowTime] = useState(false);
    const [nextPokemonTime, setNextPokemonTime] = useState(2);
    const [isStarted, setIsStarted] = useState(false);
    const [selectedPokemonNames, setSelectedPokemonNames] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getPokemons = async () => {
        const numPokemon = Math.floor(Math.random() * 151) + 1;
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${numPokemon}`);
        const data = await request.json();

        if (selectedPokemonNames.includes(data.name)) {
            setLife(0)
        } else {
            setCurrentPokemon(data)
            setOptions([
                data?.name,
                pokemons[Math.floor(Math.random() * pokemons.length)],
                pokemons[Math.floor(Math.random() * pokemons.length)],
                pokemons[Math.floor(Math.random() * pokemons.length)]
            ].sort(() => Math.random() - 0.5))
            setNextPokemonTime(2)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getPokemons()
    }, [])

    const jsConfetti = new JSConfetti()

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
            setLife(life - 30)
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
                        <div className='spinner'>
                            {isLoading && <ColorRing colors={['']} />}
                            {isLoading && <h2>Cargando...</h2>}
                        </div>
                        {options.length > 0 && <BarraDeVida life={life} />}
                        <ListPokemons options={options}
                            handleClick={handleClick}
                            isCorrect={isCorrect}
                            isDisable={isDisable}
                            currentPokemon={currentPokemon}
                            nextPokemonTime={nextPokemonTime}
                            showTime={showTime}
                            pokemonName={pokemonName}
                        />
                        {options.length > 0 && <Link to="/"><button className='btn-pokemon-home'>Volver</button></Link>}
                    </>)
                    : (<Options puntuaction={puntuaction} />)}
            </div>
        </>
    )
}