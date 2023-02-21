import React, { createContext, useContext, useState } from 'react'

const PokemonContext = createContext()

export const usePokemonContext = () => useContext(PokemonContext)

export const PokemonProvider = ({children}) => {

  const [nick, setNick] = useState('player 1');

  const newNick = (event) => {
    setNick(event.target.value)
  }

  return (
    <PokemonContext.Provider value={{ nick, newNick }}>
      {children}
    </PokemonContext.Provider>
  )
}
