import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MainMenuPokemon } from './components/MainMenuPokemon'
import { Pokemon } from './components/Pokemon'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainMenuPokemon />}/>
      <Route path='/pokemon' element={<Pokemon />}/>
    </Routes>
  )
}

export default App
