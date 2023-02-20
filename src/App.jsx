import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MainMenu } from '../src/Containers/dashboard/MainMenu'
import {Pokemon} from '../src/Containers/pokemon/Pokemon'
import { SadPokemon } from './components/SadPokemon/SadPokemon'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainMenu />}/>
      <Route path='/pokemon' element={<Pokemon />}/>
      <Route path='/sadPokemon' element={<SadPokemon />} />
    </Routes>
  )
}

export default App
