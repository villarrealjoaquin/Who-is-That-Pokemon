import { Link } from 'react-router-dom'

interface PropsClose {
  closeModal: () => void
}

export const ExitGame = ({ closeModal }: PropsClose) => (
  <div className="modal-container">
    <div className="modal">
      <button className='close' onClick={closeModal}>X</button>
      <div className="modal-content">
        <h2>Deseas salir del juego?</h2>
        <button className="btn-close" onClick={closeModal}>Volver al juego</button>
        <Link to='/sadPokemon'><button className="btn-close">Cerrar el juego</button></Link>
      </div>
    </div>
  </div>
)
