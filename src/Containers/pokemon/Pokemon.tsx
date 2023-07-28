import { useState, useEffect } from 'react'
import { Options, ListPokemons, HealthBar } from '../../components'
import { Link } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'
import { pokemons } from '../../assets/pokemonsOptions/pokemonOptions'
import { PokemonType } from 'src/types/types'
import JSConfetti from 'js-confetti'

import '../../styles/Pokemon.css'

const jsConfetti = new JSConfetti()

const Pokemon = () => {
  const [currentPokemon, setCurrentPokemon] = useState<PokemonType | null>(null);
  const [options, setOptions] = useState<Array<string>>([]);
  const [puntuaction, setPuntuaction] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [life, setLife] = useState(100);
  const [pokemonName, setPokemonName] = useState(true);
  const [showTime, setShowTime] = useState(false);
  const [nextPokemonTime, setNextPokemonTime] = useState(3);
  const [isStarted, setIsStarted] = useState<Boolean>(false);
  const [selectedPokemonNames, setSelectedPokemonNames] = useState<Array<string>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const getPokemons = async () => {
    const numPokemon = Math.floor(Math.random() * 503) + 1;
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

  useEffect(() => {
    if (nextPokemonTime > 0 && isStarted) {
      const interval = setInterval(() => {
        setNextPokemonTime(nextPokemonTime - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [nextPokemonTime, isStarted])

  const handleClick = (option: String, e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPokemonNames([...selectedPokemonNames, currentPokemon?.name ?? ""])
    setShowTime(true)
    if (currentPokemon && option === currentPokemon.name) {
      e.target.classList.add("valid")
      setIsCorrect(true)
      setIsDisable(true)
      setPuntuaction(puntuaction + 1)
      jsConfetti.addConfetti()
    } else {
      e.target.classList.add("invalid")
      setIsCorrect(true)
      setIsDisable(true)
      setLife(life - 25)
      setPokemonName(false)
    }
    setIsStarted(true)
    nextPokemon(e)
  }

  const nextPokemon = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const resetGame = () => {
    setCurrentPokemon(null)
    setPuntuaction(0)
    setOptions([])
    setIsCorrect(false)
    setIsDisable(false)
    setLife(100)
    setPokemonName(true)
    setShowTime(false)
    setNextPokemonTime(3)
    setIsStarted(false)
    setSelectedPokemonNames([])
    setIsLoading(true)
  }

  return (
    <main className="container-pokemon-game">
      {life > 0 ?
        <>
          <div className='spinner'>
            {isLoading && <ColorRing colors={['#a90dec', '#a90dec', '#a90dec', '#a90dec', '#a90dec']} />}
            {isLoading && <h2>Cargando...</h2>}
          </div>
          {options.length > 0 && <HealthBar life={life} />}
          <ListPokemons
            options={options}
            handleClick={handleClick}
            isCorrect={isCorrect}
            isDisable={isDisable}
            currentPokemon={currentPokemon ?? { name: "", sprites: { front_default: "" } }}
            nextPokemonTime={nextPokemonTime}
            showTime={showTime}
            pokemonName={pokemonName}
          />
          {options.length > 0 &&
            <Link to='/'>
              <button className='btn-pokemon-home'>
                Volver
              </button>
            </Link>}
        </>
        : <Options puntuaction={puntuaction} resetGame={resetGame} />}
    </main>
  )
}

export default Pokemon