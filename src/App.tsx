import { Route, Routes } from 'react-router-dom'
import { Pokemon, MainMenu } from './Containers'
import { SadPokemon, NickName, Personalizada } from './components'
import { PokemonProvider } from './Context/PokemonProvider'

import './App.css'

function App() {
  return (
    <PokemonProvider>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/pokemon' element={<Pokemon />} />
        <Route path='/sadPokemon' element={<SadPokemon />} />
        <Route path="nick" element={<NickName />} />
        <Route path='/personalizada' element={<Personalizada />} />
      </Routes>
    </PokemonProvider>
  )
}

export default App
