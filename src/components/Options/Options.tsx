import { Link } from 'react-router-dom'
import { usePokemonContext } from '../../Context/PokemonProvider'

import '../../styles/Options.css'

interface PropsOptions {
  puntuaction: number
  resetGame: () => void
}

export const Options = ({ puntuaction, resetGame }: PropsOptions) => {
  const { nick } = usePokemonContext()

  return (
    <section className="container-options">
      <h2>Muchas gracias por jugar {nick}!</h2>
      <h2>Felicitaciones tu puntuacion fue de: {puntuaction} </h2>
      <div className='questions-user'>
        <h2>Que deseas hacer?</h2>
      </div>
      <div className='btn-options'>
        <button className="btn-option" onClick={resetGame}>Volver a Jugar</button>
        <Link to="/"><button className="btn-option">Volver al Menu Principal</button></Link>
      </div>
    </section>
  )
}
