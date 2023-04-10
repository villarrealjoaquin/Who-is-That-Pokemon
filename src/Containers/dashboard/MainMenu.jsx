import React, { useState } from 'react'
import { ExitGame } from '../../components/ExitGame/ExitGame'
import { OptionsMenu } from '../../components/OptionsMenu/OptionsMenu'
import '../../styles/Menu.css'

export const MainMenu = () => {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      {showModal ?
        (
          <OptionsMenu closeModal={closeModal} />
        )
        :
        (
          <ExitGame closeModal={closeModal} />
        )}
    </>
  )
}
