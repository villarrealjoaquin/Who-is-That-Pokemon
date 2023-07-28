import React from 'react';
import { usePokemonContext } from '../../Context/PokemonProvider'
import { Link } from 'react-router-dom'

import '../../styles/NickName.css'

const NickName = () => {
  const { nick, newNick } = usePokemonContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="container-nick-name">
      <h2 style={{ fontSize: "2rem" }}>Escribe tu Nombre!</h2>
      <form onSubmit={handleSubmit} className='submit-form'>
        <input type="text" className='input-nick' value={nick} onChange={newNick} />
        <Link to='/'><button className='btn-inline'>Confirmar</button></Link>
      </form>
    </div>
  )
}

export default NickName