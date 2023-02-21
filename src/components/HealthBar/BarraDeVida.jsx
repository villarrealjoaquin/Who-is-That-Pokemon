import React from 'react'
import '../../styles/BarraDeVida.css'
import { usePokemonContext } from '../../Context/PokemonProvider';

export const BarraDeVida = ({ life }) => {

    const {nick} = usePokemonContext();

    return (
        <>
            <div className="container-vida">
                <div className='life-bar'>
                    <p className='p-life'>{nick}</p>
                    <p className='p-life'>Nv30</p>
                </div>
                <div className='container-life-bar'>
                    <p className='ps'>PS</p>
                    <div className="life-bar-inner" style={{ width: `${life}%`, backgroundColor: life < 30 ? "red" : "green"  }} >
                    </div>
                </div>
            </div>
        </>
    )
}
