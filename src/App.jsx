import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MainMenu } from './components/dashboard/MainMenu'
import { Pokemon } from './components/pokemon/Pokemon'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainMenu />}/>
      <Route path='/pokemon' element={<Pokemon />}/>
    </Routes>
  )
}

export default App
