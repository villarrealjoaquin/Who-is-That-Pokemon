import { motion } from 'framer-motion';
import { usePokemonContext } from '../../Context/PokemonProvider';

interface PropsLife {
  life: number
}

export const HealthBar = ({ life }: PropsLife) => {
  const { nick } = usePokemonContext();

  return (
    <div className="container-vida">
      <div className='life-bar'>
        <p className='p-life'>{nick}</p>
        <p className='p-life'>Nv30</p>
      </div>
      <div className='container-life-bar'>
        <p className='ps'>PS</p>
        <motion.div
          className="life-bar-inner"
          style={{ width: `${life}%`, backgroundColor: life < 30 ? "red" : "green" }}
          initial={{ width: '0%' }}
          animate={{ width: `${life}%` }} 
          transition={{ duration: 0.5 }} 
        />
      </div>
    </div>
  )
}
