import { useState } from 'react'
import { ExitGame, OptionsMenu } from '../../components'

import '../../styles/Menu.css'

const MainMenu = () => {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div>
      {showModal
        ? <OptionsMenu closeModal={closeModal} />
        : <ExitGame closeModal={closeModal} />}
    </div>
  )
}

export default MainMenu
