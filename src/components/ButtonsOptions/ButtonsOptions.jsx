import React from 'react'

export const ButtonsOptions = ({ option, handleClick, isDisable }) => {
  return (
    <>
      <button  disabled={isDisable} onClick={(e) => handleClick(option, e)}>{option}</button>
    </>
  )
}
