import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PokemonProvider } from './Context/PokemonProvider'

const MainMenu = lazy(() => import('./Containers/dashboard/MainMenu'))
const Pokemon = lazy(() => import('./Containers/pokemon/Pokemon'))
const SadPokemon = lazy(() => import('./components/SadPokemon/SadPokemon'))
const NickName = lazy(() => import('./components/NickName/NickName'))
const CustomPokemon = lazy(() => import('./components/CustomPokemon/CustomPokemon'))

import './App.css'

function App() {
  return (
    <PokemonProvider>
      <Suspense>
        <Routes>
          <Route path='/' element={<MainMenu />} />
          <Route path='/pokemon' element={<Pokemon />} />
          <Route path='/sadPokemon' element={<SadPokemon />} />
          <Route path="/nick" element={<NickName />} />
          <Route path='/personalizada' element={<CustomPokemon />} />
        </Routes>
      </Suspense>
    </PokemonProvider>
  )
}

export default App
