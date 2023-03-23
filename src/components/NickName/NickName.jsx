import React from 'react'
import '../../styles/NickName.css'
import { usePokemonContext } from '../../Context/PokemonProvider'
import { Link } from 'react-router-dom'

export const NickName = () => {

    const { nick, newNick } = usePokemonContext();

    const handleSubmit = () => {
        e.preventDefault()
    }

    return (
        <>
            <div className="container-nick-name">
                <h2 style={{ fontSize: "2rem" }}>Escribe tu Nombre!</h2>
                <form onSubmit={handleSubmit} className='submit-form'>
                    <input type="text" className='input-nick' value={nick} onChange={newNick} />
                    <Link to='/'><button className='btn-inline'>Confirmar</button></Link>
                </form>
            </div>
        </>
    )
}
