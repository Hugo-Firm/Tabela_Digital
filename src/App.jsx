import { useState } from 'react'
import './App.css'
import CharacterGrid from './components/CharacterCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CharacterGrid />
    </>
  )
}

export default App
