import { Link } from 'react-router-dom'

export const Personalizada = () => (
  <div className='custom'>
    <h2>Proximamente...</h2>
    <Link to='/'>
      <button className='btn-inline'>Regresar</button>
    </Link>
  </div>
)  
