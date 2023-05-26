import images from '../../assets/img/images'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

export const OptionsMenu = ({ closeModal }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <div className='main-menu'>
      <img className='img-menu' src={images.img1} alt="logo pokemon" />
      <h1 className='h1-menu'>Who Is That Pokemon?</h1>
      <Link to='/pokemon'><button className='option-menu'>Nueva partida</button></Link>
      <Link to='/personalizada'><button className='option-menu'>Personalizada</button></Link>
      <Link to='/nick'><button className='option-menu'>Opciones</button></Link>
      <button className='option-menu' onClick={closeModal}>Salir del juego</button>
    </div>
  </motion.div>
)
