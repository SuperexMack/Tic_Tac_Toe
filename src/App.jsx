import { useState } from 'react'
import MainLogic from './MainLogic/Logic'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainLogic></MainLogic>
    </>
  )
}

export default App
