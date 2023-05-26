import { ButtonsOptions } from '../ButtonsOptions/ButtonsOptions'

export const ListPokemons = (props) => (
  <>
    <div className='pokemon'>
      <div className='container-pokemons'>
        {props.options.map((option, i) => (
          <ButtonsOptions key={i} option={option} handleClick={props.handleClick} isDisable={props.isDisable} />
        ))}
      </div>
      <div className='pokemones'>
        <img style={{ "imageRendering": "pixelated", 'filter': props.isCorrect ? 'brightness(1)' : 'brightness(0)' }} src={props.currentPokemon?.sprites.front_default} alt={props.currentPokemon?.name} />
      </div>
    </div>
    {!props.pokemonName && <p className='name-pokemon'>Es {props.currentPokemon?.name}</p>}
    {props.showTime && <p className='name-pokemon'>Proximo pokemon en: {props.nextPokemonTime}</p>}
  </>
)
