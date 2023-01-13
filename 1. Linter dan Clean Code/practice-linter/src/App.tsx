import React, { useState } from 'react'
import './styles.css'
import Button from './components/CustomButton'

const App = (): JSX.Element => {
  const [counter, setCounter] = useState(0)

  return (
    <div className='container'>
      <Button text='-' handleOnClick={() => { setCounter((currentCounter) => (currentCounter - 1)) }}/>
      <p className='counter'>{counter}</p>
      <Button text='+' handleOnClick={() => { setCounter((currentCounter) => (currentCounter + 1)) }}/>
    </div>
  )
}

export default App
