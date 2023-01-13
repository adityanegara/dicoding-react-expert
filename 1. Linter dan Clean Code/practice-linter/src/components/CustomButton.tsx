import React from 'react'

interface CustomButtonProps {
  text: string
  handleOnClick: () => void
}

const IncreaseButton = ({ text, handleOnClick }: CustomButtonProps): JSX.Element => {
  return (
        <button onClick={handleOnClick} className='custom-button'>{text}</button>
  )
}

export default IncreaseButton
