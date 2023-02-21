import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MainMenu } from '../src/Containers/dashboard/MainMenu'
import { Pokemon } from '../src/Containers/pokemon/Pokemon'
import { SadPokemon } from './components/SadPokemon/SadPokemon'
import { PokemonProvider } from './Context/PokemonProvider'
import { NickName } from './components/NickName/NickName'
import { Personalizada } from './components/Personalizada/Personalizada'

function App() {
  return (
    <PokemonProvider>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/pokemon' element={<Pokemon />} />
        <Route path='/sadPokemon' element={<SadPokemon />} />
        <Route path="nick" element={<NickName />} />
        <Route path='/personalizada' element={<Personalizada />}/>
      </Routes>
    </PokemonProvider>
  )
}

export default App
