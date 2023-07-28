import { Link } from 'react-router-dom'

const CustomPokemon = () => (
  <div className='custom'>
    <h2>Proximamente...</h2>
    <Link to='/'>
      <button className='btn-inline'>Regresar</button>
    </Link>
  </div>
)  

export default CustomPokemon