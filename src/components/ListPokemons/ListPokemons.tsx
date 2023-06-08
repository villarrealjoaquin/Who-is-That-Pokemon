import { PropsList } from 'src/types/types'
import { ButtonsOptions } from '../ButtonsOptions/ButtonsOptions'
import { motion } from 'framer-motion'

export const ListPokemons = ({
  handleClick,
  options,
  isCorrect,
  currentPokemon,
  isDisable,
  nextPokemonTime,
  pokemonName,
  showTime
}: PropsList) => {
  const tapAnimation = isCorrect ? { scale: 0.9 } : {};
  const pokemonAnimation = {
    scale: isCorrect ? 1.2 : 1,
    transition: {
      duration: 0.5,
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="pokemon">
        <div className='container-pokemons'>
          {options.map((option, i) => (
            <ButtonsOptions key={i} option={option} handleClick={handleClick} isDisable={isDisable} />
          ))}
        </div>
        <motion.div
          animate={pokemonAnimation}
          transition={{ duration: 0.5 }}
          className='pokemones'
        >
          <motion.img
            whileTap={tapAnimation}
            style={{ "imageRendering": "pixelated", 'filter': isCorrect ? 'brightness(1)' : 'brightness(0)' }}
            src={currentPokemon?.sprites.front_default} alt={currentPokemon?.name} />
        </motion.div>
      </motion.div>
      <div>
        {!pokemonName && <p className='name-pokemon'>Es {currentPokemon?.name}</p>}
        {showTime && <p className='name-pokemon'>Proximo pokemon en: {nextPokemonTime}</p>}
      </div>
    </>
  )
}

