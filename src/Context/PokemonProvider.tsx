import React, { createContext, useContext, ReactNode } from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage'

interface PokemonContextProps {
  nick: string;
  newNick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PokemonContext = createContext<PokemonContextProps | undefined>(undefined)

export const usePokemonContext = (): PokemonContextProps => {
  const context = useContext(PokemonContext)
  if (!context) {
    throw new Error('usePokemonContext must be used within a PokemonProvider')
  }
  return context
}

interface PokemonProviderProps {
  children: ReactNode;
}

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [nick, setNick] = useLocalStorage('nick', 'player 1');

  const newNick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNick(event.target.value)
  }

  const contextValue: PokemonContextProps = {
    nick,
    newNick
  }

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  )
}