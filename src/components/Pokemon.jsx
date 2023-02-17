import React, { useState, useEffect } from 'react'

export const Pokemon = () => {

    const [currentPokemon, setCurrentPokemon] = useState(null)
    const [options, setOptions] = useState([])
    const [isCorrect, setIsCorrect] = useState(false);

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
        console.log(options);
    }

    useEffect(() => {
        getPokemons()
    }, [isCorrect])


    const handleClick = (option, e) => {
        setTimeout(()=> {
            if(option === currentPokemon.name){
                e.target.classList.add("valid")
                setIsCorrect(true)
            } else{
                e.target.classList.add("invalid")
            }
            
        },1000)
        e.target.classList.remove()
    }

    return (
        <>
            <div className='container-pokemons'>
                {options.map((option, i) => (
                    <button key={i} onClick={(e)=> handleClick(option, e)}>{option}</button>
                ))}
            </div>
            <img style={{"imageRendering": "pixelated", 'filter': isCorrect ? 'brightness(1)' :'brightness(0)' }} src={currentPokemon?.sprites.front_default} alt={currentPokemon?.name} />
        </>
    )
}
